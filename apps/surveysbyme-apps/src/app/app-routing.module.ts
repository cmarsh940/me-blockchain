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


import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './landing/home/home.component';
import { RightsComponent } from './landing/footer/rights/rights.component';
import { addSurveyComponent } from './Client/addSurvey/addSurvey.component';
import { ProfileComponent } from './Client/Profile/Profile.component';
import { CustomerComponent } from './Client/Customer/Customer.component';
import { SurveyCategoryComponent } from './Client/SurveyCategory/SurveyCategory.component';
import { SurveyComponent } from './Client/Survey/Survey.component';
import { DashboardComponent } from './Client/Dashboard/Dashboard.component';
import { ClientComponent } from './Client/client.component';



const routes: Routes = [
	{
		path: "",
		component: LandingComponent,
		children: [
			{
				path: "",
				pathMatch: "full",
				component: HomeComponent
			},
			{
				path: "rights",
				pathMatch: "full",
				component: RightsComponent
			}
		]
	},
	{
		path: "dashboard",
		component: ClientComponent,
		children: [
			{ path: "", pathMatch: "full", component: DashboardComponent },
			{
				path: "survey",
				pathMatch: "full",
				component: SurveyComponent
			},
			{
				path: "survey_category",
				pathMatch: "full",
				component: SurveyCategoryComponent
			},
			{
				path: "customer",
				pathMatch: "full",
				component: CustomerComponent
			},
			{
				path: "addSurvey",
				pathMatch: "full",
				component: addSurveyComponent
			},
			{
				path: "profile",
				pathMatch: "full",
				component: ProfileComponent
			}
		]
	},
	{
		path: "login",
		pathMatch: "full",
		component: LoginComponent
	},
	{
		path: "register",
		pathMatch: "full",
		component: RegisterComponent
	},
	{ path: "**", redirectTo: "" }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
