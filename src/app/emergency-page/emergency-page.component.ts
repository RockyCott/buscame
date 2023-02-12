import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../buscame-commons/components/toolbar/toolbar.service';
@Component({
  selector: 'app-emergency-page',
  templateUrl: 'emergency-page.component.html',
  styleUrls: ['emergency-page.component.scss'],
})
export class EmergencyPageComponent implements OnInit {
  /*
    slider with more narrow cards, 2 fully visible slides
  */
  slideOptsThumbs = {
    spaceBetween: 0,
    slidesPerView: 1.35,
  };
  constructor(private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.toolbarService.setToolbarSettings('Ayuda inmediata', false, true);
  }

  scrollToCard() {
    let card = document.getElementById('slides-card');
    card?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
