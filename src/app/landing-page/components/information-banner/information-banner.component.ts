import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information-banner',
  templateUrl: './information-banner.component.html',
  styleUrls: ['./information-banner.component.scss']
})
export class InformationBannerComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() image: string = '';
}
