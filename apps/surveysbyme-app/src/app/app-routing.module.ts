import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
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
	{
		path: "dashboard",
		loadChildren: "./client/client.module#ClientModule"
	},
	{
		path: "",
		loadChildren: "./landing/landing.module#LandingModule"
	},
	{ path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
