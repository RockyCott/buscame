import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ToolbarService } from '../buscame-commons/components/toolbar/toolbar.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  constructor(private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.toolbarService.setToolbarSettings('Búscame', true, false);
  }
}
