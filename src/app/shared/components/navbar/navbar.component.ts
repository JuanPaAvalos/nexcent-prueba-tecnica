import { ViewportScroller, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public showMenu: boolean = true;

  public siteLinks = [
    { name: 'Home', route: '' },
    { name: 'Service', route: '#services' },
    { name: 'Feature', route: '' },
    { name: 'Testimonial', route: '' },
    { name: 'FAQ', route: '' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router
  ) {}

  public onClick(path: string): void {
    if (path.includes('#')) {
      this.router.navigate(['/']);
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          let element = document.querySelector(path) as HTMLElement;
          let topOfElement = element.offsetTop - 20;
          window.scroll({ top: topOfElement, behavior: 'smooth' });
        }, 0);
      }
    } else {
      this.router.navigate([path]);
    }
  }
}
