import { MessagesComponent } from './global/messages/messages.component';
import { ClientModule } from './client/client.module';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorHandler } from './global/services/http-error-handler.service';
import { MessageService } from './global/services/message.service';
import { RequestCache, RequestCacheWithMap } from './global/services/cache.service';
import { httpInterceptorProviders } from './global/interceptors';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { LandingModule } from './landing/landing.module';
import { DataService } from './global/services/data.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
	declarations: [AppComponent, LoginComponent, RegisterComponent, MessagesComponent],
	imports: [
		BrowserModule,
		LandingModule,
		ClientModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MaterialModule,
		ServiceWorkerModule.register("/ngsw-worker.js", {
			enabled: environment.production
		})
	],
	providers: [
		DataService,
		HttpErrorHandler,
		MessageService,
		{ provide: RequestCache, useClass: RequestCacheWithMap },
		httpInterceptorProviders
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
