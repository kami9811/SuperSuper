import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapItemSearchPage } from './map-item-search.page';

const routes: Routes = [
  {
    path: '',
    component: MapItemSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapItemSearchPageRoutingModule {}
