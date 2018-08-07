import { PersonComponent } from './person/person.component';
import { addSurveyComponent } from './add-survey/add-survey.component';
import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientNavComponent } from './client-nav/client-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './Survey/Survey.component';

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
