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


import { CustomerComponent } from './client/Customer/Customer.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { SurveyComponent } from './client/Survey/Survey.component';
import { SurveyCategoryComponent } from './client/survey-category/survey-category.component';
import { ProfileComponent } from './client/profile/profile.component';
import { HomeComponent } from './landing/home/home.component';
import { RightsComponent } from './landing/footer/rights/rights.component';



const routes: Routes = [
	{
		path: "",
		component: LandingComponent,
		children: [
			{ path: "", pathMatch: "full", component: DashboardComponent },
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
