import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TransModule } from '../../app/tran.module';
import { IonicStorageModule } from '@ionic/storage';
import { about } from './about';

@NgModule({
  declarations: [
    about,
  ],
  imports: [
    TransModule,
 
    IonicStorageModule.forRoot({
      name: '__customdb',
      driverOrder: ['localstorage','indexeddb', 'sqlite', 'websql']
    }),
    IonicPageModule.forChild(about),
  ]
  
})
export class AddressPageModule {}
