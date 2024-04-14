import { Component } from '@angular/core';

@Component({
  selector: 'app-suitable-clients',
  templateUrl: './suitable-clients.component.html',
  styleUrls: ['./suitable-clients.component.scss']
})
export class SuitableClientsComponent {

  public suitableClients = [
    {
      name: "Membership Organisations",
      text: "Our membership management software provides full automation of membership renewals and payments",
      image: "assets/images/clients/membership-organizations.webp"
    },
    {
      name: "National Associations",
      text: "Our membership management software provides full automation of membership renewals and payments",
      image: "assets/images/clients/national-organizations.webp"
    },
    {
      name: "Clubs And Groups",
      text: "Our membership management software provides full automation of membership renewals and payments",
      image: "assets/images/clients/clubs-groups.webp"

    },
  ]
}
