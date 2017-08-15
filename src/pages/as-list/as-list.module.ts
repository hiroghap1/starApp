import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AsListPage } from './as-list';

@NgModule({
  declarations: [
    AsListPage,
  ],
  imports: [
    IonicPageModule.forChild(AsListPage),
  ],
})
export class AsListPageModule {}
