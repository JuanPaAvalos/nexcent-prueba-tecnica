import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-testimonial',
  templateUrl: './customer-testimonial.component.html',
  styleUrls: ['./customer-testimonial.component.scss']
})
export class CustomerTestimonialComponent {
  public featuredTestimonial = {
    text: 'Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.',
    author: 'Tim Smith',
    company: 'British Dragon Boat Racing Association',
    image: 'assets/images/customer-testimonial.webp'
  }

  public ourCustomers = [
    {
      name: "Client One",
      image: "assets/images/clients/logo-1.webp"
    },
    {
      name: "Client Two",
      image: "assets/images/clients/logo-2.webp"
    },
    {
      name: "Client Three",
      image: "assets/images/clients/logo-3.webp"
    },
    {
      name: "Client Four",
      image: "assets/images/clients/logo-4.webp"
    },
    {
      name: "Client Five",
      image: "assets/images/clients/logo-5.webp"
    },
    {
      name: "Client Six",
      image: "assets/images/clients/logo-6.webp"
    },
  ]
}
