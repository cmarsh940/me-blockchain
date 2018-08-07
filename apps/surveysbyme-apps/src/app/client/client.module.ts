import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientNavComponent } from './client-nav/client-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { SurveyComponent } from './survey/survey.component';

import { CustomerComponent } from './customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SurveyCategoryComponent } from './SurveyCategory/SurveyCategory.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ClientComponent,
    ClientNavComponent,
    DashboardComponent,
    SurveyComponent,
    SurveyCategoryComponent,
    CustomerComponent,
    ProfileComponent
  ]
})
export class ClientModule { }
