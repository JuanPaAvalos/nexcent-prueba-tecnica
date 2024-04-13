import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainBannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
