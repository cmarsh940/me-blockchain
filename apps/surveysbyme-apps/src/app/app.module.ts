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
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { MessagesComponent } from './global/messages/messages.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './landing/footer/footer.component';
import { RightsComponent } from './landing/footer/rights/rights.component';
import { HomeComponent } from './landing/home/home.component';
import { LandingNavComponent } from './landing/landing-nav/landing-nav.component';
import { ProfileComponent } from './Client/Profile/Profile.component';
import { PersonComponent } from './Client/Person/Person.component';
import { SurveyComponent } from './Client/Survey/Survey.component';
import { SurveyCategoryComponent } from './Client/SurveyCategory/SurveyCategory.component';
import { DashboardComponent } from './Client/Dashboard/Dashboard.component';
import { ClientNavComponent } from './Client/ClientNav/ClientNav.component';
import { ClientComponent } from './Client/client.component';
import { CustomerComponent } from './Client/Customer/Customer.component';
import { addSurveyComponent } from './Client/addSurvey/addSurvey.component';



import { HttpErrorHandler } from './global/services/http-error-handler.service';
import { RequestCache, RequestCacheWithMap } from './global/services/cache.service';
import { httpInterceptorProviders } from './global/interceptors';

import { DataService } from './data.service';
import { MessageService } from './global/services/message.service';
import { addSurveyService } from './Client/addSurvey/addSurvey.service';
import { PersonService } from './Client/Person/Person.service';
import { SurveyCategoryService } from './Client/SurveyCategory/SurveyCategory.service';
import { SurveyService } from './Client/Survey/Survey.service';
import { CustomerService } from './Client/Customer/Customer.service';






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
		CustomerComponent,
    ClientComponent,
    ClientNavComponent,
    DashboardComponent,
		SurveyCategoryComponent,
		SurveyComponent,
    PersonComponent,
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
		CustomerService,
		SurveyService,
		SurveyCategoryService,
		PersonService,
		addSurveyService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
