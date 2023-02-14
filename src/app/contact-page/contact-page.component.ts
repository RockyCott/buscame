import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../buscame-commons/components/toolbar/toolbar.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  slideOptsThumbs = {
    spaceBetween: 0,
    slidesPerView: 1.35,
  };
  constructor(private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.toolbarService.setToolbarSettings('Contáctanos', true, false);
  }

  scrollToCard() {
    let card = document.getElementById('slides-card');
    card?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
