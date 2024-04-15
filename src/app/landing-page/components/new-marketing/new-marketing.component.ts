import { Component } from '@angular/core';

@Component({
  selector: 'app-new-marketing',
  templateUrl: './new-marketing.component.html',
  styleUrls: ['./new-marketing.component.scss']
})
export class NewMarketingComponent {
  public suitableClients = [
    {
      text: "Creating Streamlined Safeguarding Processes with OneRen",
      image: "assets/images/image-18.webp"
    },
    {
      text: "What are your safeguarding responsibilities and how can you manage them?",
      image: "assets/images/image-19.webp"
    },
    {
      text: "Revamping the Membership Model with Triathlon Australia",
      image: "assets/images/image-20.webp"
    },
  ]
}
