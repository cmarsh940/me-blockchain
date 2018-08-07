import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FooterComponent } from './footer/footer.component';
import { RightsComponent } from './footer/rights/rights.component';
import { HomeComponent } from './home/home.component';
import { LandingNavComponent } from './landing-nav/landing-nav.component';


@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
  ],
  declarations: [
    LandingComponent, 
    FooterComponent, 
    RightsComponent, HomeComponent, LandingNavComponent]
})
export class LandingModule { }
