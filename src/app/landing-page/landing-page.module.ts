import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { SuitableClientsComponent } from './components/suitable-clients/suitable-clients.component';
import { InformationBannerComponent } from './components/information-banner/information-banner.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainBannerComponent,
    OurClientsComponent,
    SuitableClientsComponent,
    InformationBannerComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    CarouselModule,
  ]
})
export class LandingPageModule { }
