import { AuthComponent } from './auth.component';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '../../../node_modules/@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
	imports: [
		CommonModule,
    	AuthRoutingModule,
    	FormsModule,
		MaterialModule,
		ReactiveFormsModule
	],
	declarations: [
		AuthComponent,
		LoginComponent,
		RegisterComponent
	]
})
export class AuthModule {}
