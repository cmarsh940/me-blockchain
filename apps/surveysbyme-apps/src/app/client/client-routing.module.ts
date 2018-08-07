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
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from "./client.component";
import { CustomerComponent } from "./Customer/Customer.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './Survey/Survey.component';
import { SurveyCategoryComponent } from './survey-category/survey-category.component';
import { PersonComponent } from "./person/person.component";
import { ProfileComponent } from "./profile/profile.component";


const routes: Routes = [
	{
		path: "",
		component: ClientComponent,
		children: [
			{
				path: "dashboard",
				pathMatch: 'full',
				component: DashboardComponent
			},
			{
				path: "survey",
				pathMatch: 'full',
				component: SurveyComponent
			},
			{
				path: "survey_category",
				pathMatch: 'full',
				component: SurveyCategoryComponent
			},
			{
				path: "customer",
				pathMatch: 'full',
				component: CustomerComponent
			},
			{
				path: "person",
				pathMatch: 'full',
				component: PersonComponent
			},
			{
				path: "profile",
				pathMatch: 'full',
				component: ProfileComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
