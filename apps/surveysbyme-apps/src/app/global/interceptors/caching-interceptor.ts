import { Injectable } from "@angular/core";
import {
	HttpEvent,
	HttpHeaders,
	HttpRequest,
	HttpResponse,
	HttpInterceptor,
	HttpHandler
} from "@angular/common/http";

import { Observable } from "rxjs";
import { startWith, tap } from "rxjs/operators";

import { RequestCache } from "../services/cache.service";
import { of } from "rxjs/observable/of";

/**
 * If request is cachable and
 * response is in cache return the cached response as observable.
 *
 * If not in cache or not cachable,
 * pass request through to next()
 */

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
	constructor(private cache: RequestCache) {}

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		// continue if not cachable.
		if (!isCachable(req)) {
			return next.handle(req);
		}

		const cachedResponse = this.cache.get(req);
		// cache-then-refresh
		if (req.headers.get("x-refresh")) {
			const results$ = sendRequest(req, next, this.cache);
			return cachedResponse
				? results$.pipe(startWith(cachedResponse))
				: results$;
		}
		// cache-or-fetch
		return cachedResponse
			? of(cachedResponse)
			: sendRequest(req, next, this.cache);
	}
}

/** Is this request cachable? */
function isCachable(req: HttpRequest<any>) {
	// Only GET requests are cachable
	return req.method === "GET";
}

/**
 * Get server response observable by sending request to `next()`.
 * Will add the response to the cache on the way out.
 */
function sendRequest(
	req: HttpRequest<any>,
	next: HttpHandler,
	cache: RequestCache
): Observable<HttpEvent<any>> {
	// No headers allowed request
	const noHeaderReq = req.clone({ headers: new HttpHeaders() });

	return next.handle(noHeaderReq).pipe(
		tap(event => {
			// There may be other events besides the response.
			if (event instanceof HttpResponse) {
				cache.put(req, event); // Update the cache.
			}
		})
	);
}
