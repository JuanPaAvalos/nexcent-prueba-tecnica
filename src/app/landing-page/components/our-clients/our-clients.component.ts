import { Component } from '@angular/core';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent {
  public clients = [
    {
      "name": "Client One",
      "image": "assets/images/clients/logo-1.webp"
    },
    {
      "name": "Client Two",
      "image": "assets/images/clients/logo-2.webp"
    },
    {
      "name": "Client Three",
      "image": "assets/images/clients/logo-3.webp"
    },
    {
      "name": "Client Four",
      "image": "assets/images/clients/logo-4.webp"
    },
    {
      "name": "Client Five",
      "image": "assets/images/clients/logo-5.webp"
    },
    {
      "name": "Client Six",
      "image": "assets/images/clients/logo-6.webp"
    },
    {
      "name": "Client Seven",
      "image": "assets/images/clients/logo-7.webp"
    }
  ]

}
