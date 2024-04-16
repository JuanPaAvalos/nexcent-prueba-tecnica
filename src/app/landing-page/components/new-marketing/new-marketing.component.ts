import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-marketing',
  templateUrl: './new-marketing.component.html',
  styleUrls: ['./new-marketing.component.scss']
})
export class NewMarketingComponent {
  public blogEntries = [
    {
      Title: 'Blog Entry',
      text: "Creating Streamlined Safeguarding Processes with OneRen",
      image: "assets/images/image-18.webp"
    },
    {
      Title: 'Blog Entry',
      text: "What are your safeguarding responsibilities and how can you manage them?",
      image: "assets/images/image-19.webp"
    },
    {
      Title: 'Blog Entry',
      text: "Revamping the Membership Model with Triathlon Australia",
      image: "assets/images/image-20.webp"
    },
  ]
}
