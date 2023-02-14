import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
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

  form!: UntypedFormGroup;

  constructor(
    private toolbarService: ToolbarService,
    private alertController: AlertController,
    private builder: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.form = this.builder.group({
      numPhone: ['', Validators.required],
    });
    this.toolbarService.setToolbarSettings('Contáctanos', true, false);
  }

  async presentAlert() {
    const alertContent = {
      header: '',
      subHeader: '',
      message: '',
    };
    if (this.form.value.numPhone != '' && this.form.value.numPhone != null) {
      alertContent.header = 'De acuerdo';
      alertContent.subHeader = this.form.value.numPhone;
      alertContent.message = 'Te llamaremos!';
    } else {
      alertContent.header = 'Error';
      alertContent.subHeader = 'Número de teléfono';
      alertContent.message = 'Por favor, ingrese un número de teléfono';
    }
    const alert = await this.alertController.create(alertContent);
    await alert.present();
  }

  openPhoneNumber() {
    window.open('tel:3204377068', '_self');
  }
}
