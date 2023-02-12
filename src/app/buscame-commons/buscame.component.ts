import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-buscame-commons',
  templateUrl: 'buscame-commons.component.html',
  styleUrls: ['buscame-commons.component.scss'],
})
export class BuscameCommonsComponent implements OnInit {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Contacto', url: '/contacto', icon: 'call' },
    { title: 'Emergencia', url: '/emergencia', icon: 'alert' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  isMobile!: boolean;
  constructor(private platform: Platform) {}

  ngOnInit() {
    this.isMobile = this.platform.is('mobile');
  }
}
