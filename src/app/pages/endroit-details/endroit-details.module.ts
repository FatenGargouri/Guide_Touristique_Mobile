import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndroitDetailsPageRoutingModule } from './endroit-details-routing.module';

import { EndroitDetailsPage } from './endroit-details.page';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndroitDetailsPageRoutingModule,
    AgmCoreModule
  ],
  declarations: [EndroitDetailsPage]
})
export class EndroitDetailsPageModule {}
