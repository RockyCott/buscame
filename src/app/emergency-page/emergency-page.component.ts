import { Component } from '@angular/core';
@Component({
  selector: 'app-emergency-page',
  templateUrl: 'emergency-page.component.html',
  styleUrls: ['emergency-page.component.scss'],
})
export class EmergencyPageComponent {
  slideOptsTop = {
    spaceBetween: 0,
    slidesPerView: 1.15,
  };
  /*
    slider with more narrow cards, 2 fully visible slides
  */
  slideOptsThumbs = {
    spaceBetween: 0,
    slidesPerView: 1.35,
  };
  constructor() {}
}
