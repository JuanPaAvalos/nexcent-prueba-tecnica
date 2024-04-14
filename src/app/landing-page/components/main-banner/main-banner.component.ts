import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { bannerSLide } from '../../interfaces/slide.interface';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
})
export class MainBannerComponent {
  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    margin: 20,
    center: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  public bannerSlides:bannerSLide[] = [
    {
      title_1: 'Lessons and insights',
      title_2: 'from 8 years',
      text_1:
        'Where to grow your business as a photographer: site or social media?',
      image: 'assets/images/main-banner-image.webp',
      image_alt: 'banner image',
    },
    {
      title_1: 'Slide Two',
      title_2: 'from 8 years',
      text_1:
        'Where to grow your business as a photographer: site or social media?',
      image: 'assets/images/main-banner-image.webp',
      image_alt: 'banner image',
    },
    {
      title_1: 'Slide Three',
      title_2: 'from 8 years',
      text_1:
        'Where to grow your business as a photographer: site or social media?',
      image: 'assets/images/main-banner-image.webp',
      image_alt: 'banner image',
    },
  ];
}


