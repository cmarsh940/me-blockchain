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

import { addSurveyComponent } from './add-survey/add-survey.component';
import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientNavComponent } from './client-nav/client-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './survey/survey.component';
import { PersonComponent } from "./person/person.component";
import { CustomerComponent } from './Customer/Customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SurveyCategoryComponent } from './survey-category/survey-category.component';


@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ClientComponent,
    ClientNavComponent,
    DashboardComponent,
    SurveyComponent,
    SurveyCategoryComponent,
    addSurveyComponent,
    CustomerComponent,
    PersonComponent,
    ProfileComponent
  ]
})
export class ClientModule { }
