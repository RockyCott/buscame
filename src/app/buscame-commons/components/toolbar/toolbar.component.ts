import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { tap } from 'rxjs';
import { ToolbarService } from './toolbar.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  rightIcon?: string = 'person-circle';
  leftIcon?: string = 'hola';
  showMenuButton?: boolean = true;
  showBackButton?: boolean = false;
  showPhoneButton?: boolean = false;
  showProfileButton?: boolean = true;
  isMobile!: boolean;
  title!: string;
  constructor(private toolbarService: ToolbarService, private platform: Platform) {}

  ngOnInit() {
    this.isMobile = this.platform.is('mobile');
    this.toolbarService.toolbarSettings$
      .pipe(
        tap(({ title, showProfileButton, showPhoneButton }) => {
          this.setSettings(title, showProfileButton, showPhoneButton);
        })
      )
      .subscribe();
  }

  setSettings(title:string, showProfileButton: boolean, showPhoneButton: boolean) {
    this.showPhoneButton = showPhoneButton;
    this.showProfileButton = showProfileButton;
    this.title = title;
  }

  backPage() {
    history.back();
  }
}
