import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrierePage } from './priere.page';

const routes: Routes = [
  {
    path: '',
    component: PrierePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrierePageRoutingModule {}
