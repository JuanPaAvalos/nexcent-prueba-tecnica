import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    HomeComponent,
    MainBannerComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    CarouselModule,
  ]
})
export class LandingPageModule { }
