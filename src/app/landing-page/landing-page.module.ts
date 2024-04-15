import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { SuitableClientsComponent } from './components/suitable-clients/suitable-clients.component';
import { InformationBannerComponent } from './components/information-banner/information-banner.component';
import { ReinventBusinessComponent } from './components/reinvent-business/reinvent-business.component';
import { CountUpModule } from 'ngx-countup';
import { CustomerTestimonialComponent } from './components/customer-testimonial/customer-testimonial.component';
import { NewMarketingComponent } from './components/new-marketing/new-marketing.component';
import { GetDemoBannerComponent } from './components/get-demo-banner/get-demo-banner.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainBannerComponent,
    OurClientsComponent,
    SuitableClientsComponent,
    InformationBannerComponent,
    ReinventBusinessComponent,
    CustomerTestimonialComponent,
    NewMarketingComponent,
    GetDemoBannerComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    CarouselModule,
    CountUpModule,
  ]
})
export class LandingPageModule { }
