import { Component } from '@angular/core';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  faPlay = faPlay;
  faInfoCircle = faInfoCircle;
}
