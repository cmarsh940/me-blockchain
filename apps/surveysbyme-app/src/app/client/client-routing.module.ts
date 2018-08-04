import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyCategoryComponent } from './survey-category/survey-category.component';
import { CustomerComponent } from './customer/customer.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{
		path: "dashboard",
		component: ClientComponent,
		children: [
			{
				path: "",
				component: DashboardComponent
			},
			{ 
				path: 'Survey', 
				component: SurveyComponent
		 	},
			{ 
				path: 'SurveyCategory', 
				component: SurveyCategoryComponent
		 	},
			{ 
				path: 'Customer', 
				component: CustomerComponent
		 	},
			{ 
				path: 'Person', 
				component: ProfileComponent
		 	},
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
