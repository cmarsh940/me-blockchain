import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client.component';
import { SurveyComponent } from './Survey/Survey.component';
import { CustomerComponent } from './Customer/Customer.component';
import { ProfileComponent } from './profile/profile.component';
import { SurveyCategoryComponent } from './survey-category/survey-category.component';


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
