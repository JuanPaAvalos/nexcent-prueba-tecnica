import { Component } from '@angular/core';

@Component({
  selector: 'app-reinvent-business',
  templateUrl: './reinvent-business.component.html',
  styleUrls: ['./reinvent-business.component.scss']
})
export class ReinventBusinessComponent {
  public businessResults = [
    {
      name: "Members",
      number: 2245341,
      image: "assets/icons/members.webp"
    },
    {
      name: "Clubs",
      number: 46328,
      image: "assets/icons/clubs.webp"
    },
    {
      name: "Event Bookings",
      number: 828867,
      image: "assets/icons/event-bookings.webp"
    },
    {
      name: "Payments",
      number: 1926436,
      image: "assets/icons/payments.webp"
    },
  ]
}
