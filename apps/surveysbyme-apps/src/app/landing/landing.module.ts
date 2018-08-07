import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FooterComponent } from './footer/footer.component';
import { RightsComponent } from './footer/rights/rights.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { LandingNavComponent } from './landing-nav/landing-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    LandingComponent, 
    FooterComponent, 
    RightsComponent, HomeComponent, LandingNavComponent]
})
export class LandingModule { }
