import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public showMenu: boolean = false;

  public siteLinks = [
    { name: 'Home', route: '' },
    { name: 'Service', route: '' },
    { name: 'Feature', route: '' },
    { name: 'Testimonial', route: '' },
    { name: 'FAQ', route: '' },
  ];

  constructor() {}
}
