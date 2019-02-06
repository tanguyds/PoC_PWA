import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopularSeriesPage } from './popular-series';

@NgModule({
  declarations: [
    PopularSeriesPage,
  ],
  imports: [
    IonicPageModule.forChild(PopularSeriesPage),
  ],
})
export class PopularSeriesPageModule {}
