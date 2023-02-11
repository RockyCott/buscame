import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EmergencyPageComponent } from './emergency-page.component';
import { EmergencyPageRoutingModule } from './emergency-page-routing.module';
@NgModule({
  declarations: [EmergencyPageComponent],
  imports: [IonicModule, CommonModule, EmergencyPageRoutingModule]
})
export class EmergencyPageModule {}
