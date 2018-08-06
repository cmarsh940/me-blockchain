#!/usr/bin/env node

/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cfenv = require("cfenv");
const express = require("express");
const fs = require("fs");
const http = require("http");
const path = require("path");
const proxy = require("http-proxy-middleware");
const proxyConfig = require("./proxy.conf.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const winston = require("winston");
var WebSocket = require("ws");

const app = express();
const appEnv = cfenv.getAppEnv();
const server = http.createServer(app);


var logger = new (winston.Logger)({
  level: 'debug',
  transports: [
    new (winston.transports.Console)({ colorize: true, stderrLevels: ['error'] }),
  ]
});

const dist = path.join(__dirname, "dist");
if (!fs.existsSync(dist)) {
  console.error('no dist directory - try running "npm run build" first');
  process.exit(1);
}
const static = express.static(dist);

app.use(static);
app.use(cookieParser());
app.options("*", cors());
app.use(cors());

proxyConfig.forEach(element => {
  const context = element.context;
  delete element.context;
  const proxyMiddleware = proxy(context, element);
  app.use(function(req, res, next) {
    logger.debug("------------------------------------------ incoming request ------------------------------------------");
    const bypass = typeof element.bypass === "function";
    const bypassUrl = bypass && element.bypass(req, res, element) || false;
    if (bypassUrl) {
      req.url = bypassUrl;
      return static(req, res, next);
    } else {
      return proxyMiddleware(req, res, next);
    }
  });
});

var wss = new WebSocket.Server({ server: server });
wss.on("connection", function(ws) {
	var location = url.parse(ws.upgradeReq.url, true);
	console.log("client connected", location.pathname);
	var remoteURL = restServerConfig.webSocketURL + location.pathname;
	console.log("creating remote connection", remoteURL);
	var remote = new WebSocket(remoteURL);
	ws.on("close", function(code, reason) {
		console.log("client closed", location.pathname, code, reason);
		remote.close();
	});
	ws.on("message", function(data) {
		console.log("message from client", data);
		remote.send(data);
	});
	remote.on("open", function() {
		console.log("remote open", location.pathname);
	});
	remote.on("close", function(code, reason) {
		console.log("remote closed", location.pathname, code, reason);
		ws.close();
	});
	remote.on("message", function(data) {
		console.log("message from remote", data);
		ws.send(data);
	});

	remote.on("error", function(data) {
		console.log("AN ERROR OCCURED: ", data);
		ws.close();
	});
});

// start server on the specified port
server.listen(appEnv.port, function () {
  'use strict';
  // print a message when the server starts listening
  console.log('server starting on ' + appEnv.url);
});