import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapItemRegistPage } from './map-item-regist.page';

const routes: Routes = [
  {
    path: '',
    component: MapItemRegistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapItemRegistPageRoutingModule {}
