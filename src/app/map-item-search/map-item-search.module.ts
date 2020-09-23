import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapItemSearchPageRoutingModule } from './map-item-search-routing.module';

import { MapItemSearchPage } from './map-item-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapItemSearchPageRoutingModule
  ],
  declarations: [MapItemSearchPage]
})
export class MapItemSearchPageModule {}
