import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ContactPageComponent } from './contact-page.component';
import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ContactPageComponent],
  imports: [IonicModule, CommonModule, ContactPageRoutingModule, ReactiveFormsModule]
})
export class ContactPageModule {}
