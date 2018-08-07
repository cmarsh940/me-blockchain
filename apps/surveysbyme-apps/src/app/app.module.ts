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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";
import { MessagesComponent } from "./global/messages/messages.component";

import { HttpErrorHandler } from './global/services/http-error-handler.service';
import { RequestCache, RequestCacheWithMap } from './global/services/cache.service';
import { httpInterceptorProviders } from './global/interceptors';

import { DataService } from "./data.service";
import { MessageService } from "./global/services/message.service";
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './landing/footer/footer.component';
import { RightsComponent } from './landing/footer/rights/rights.component';
import { HomeComponent } from './landing/home/home.component';
import { LandingNavComponent } from './landing/landing-nav/landing-nav.component';
import { addSurveyComponent } from './client/add-survey/add-survey.component';
import { ClientComponent } from './client/client.component';
import { ClientNavComponent } from './client/client-nav/client-nav.component';
import { CustomerComponent } from './client/Customer/Customer.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { SurveyComponent } from './client/Survey/Survey.component';
import { SurveyCategoryComponent } from './client/survey-category/survey-category.component';
import { ProfileComponent } from './client/profile/profile.component';


  @NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MessagesComponent,
    LandingComponent,
    FooterComponent,
    RightsComponent,
    HomeComponent,
    LandingNavComponent,
    addSurveyComponent,
    ClientComponent,
    ClientNavComponent,
    CustomerComponent,
    DashboardComponent,
    SurveyComponent,
    SurveyCategoryComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
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
export class AppModule { }
