import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {
  private _editToolbar = new Subject<any>();
  toolbarSettings$ = this._editToolbar.asObservable();

  setToolbarSettings(title: string, showProfileButton: boolean ,showPhoneButton: boolean) {
    const settings: any = {
      title: title,
      showProfileButton: showProfileButton,
      showPhoneButton: showPhoneButton
    };

    this._editToolbar.next(settings);
  }
}
