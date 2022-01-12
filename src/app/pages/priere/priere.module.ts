import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrierePageRoutingModule } from './priere-routing.module';

import { PrierePage } from './priere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrierePageRoutingModule
  ],
  declarations: [PrierePage]
})
export class PrierePageModule {}
