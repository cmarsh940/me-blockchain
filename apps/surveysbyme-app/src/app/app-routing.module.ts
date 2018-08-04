import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: "",
		loadChildren: "./landing/landing.module#LandingModule"
	},
	{
		path: "check",
		loadChildren: "./auth/auth.module#AuthModule"
	},
	{
		path: "dashboard",
		loadChildren: "./client/client.module#ClientModule"
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
