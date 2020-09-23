import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapItemRegistPageRoutingModule } from './map-item-regist-routing.module';

import { MapItemRegistPage } from './map-item-regist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapItemRegistPageRoutingModule
  ],
  declarations: [MapItemRegistPage]
})
export class MapItemRegistPageModule {}
