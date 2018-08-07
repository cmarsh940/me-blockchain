import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { RightsComponent } from './footer/rights/rights.component';

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
			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
