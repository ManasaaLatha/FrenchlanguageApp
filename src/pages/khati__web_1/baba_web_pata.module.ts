import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { baba_web_pata } from './baba_web_pata';

import { TransModule } from '../../app/tran.module';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    baba_web_pata,
  ],
  imports: [
    TransModule,
    IonicStorageModule.forRoot(),
    IonicPageModule.forChild(baba_web_pata),
  ]
})
export class baba_web_pataPageModule {}
