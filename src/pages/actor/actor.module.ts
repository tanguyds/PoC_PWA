import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActorPage } from './actor';

@NgModule({
  declarations: [
    ActorPage,
  ],
  imports: [
    IonicPageModule.forChild(ActorPage),
  ],
})
export class ActorPageModule {}
