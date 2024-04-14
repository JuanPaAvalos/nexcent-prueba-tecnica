import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OurClientsComponent } from './components/our-clients/our-clients.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainBannerComponent,
    OurClientsComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    CarouselModule,
  ]
})
export class LandingPageModule { }
