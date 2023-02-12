import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
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
