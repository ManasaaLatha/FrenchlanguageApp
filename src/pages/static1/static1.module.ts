import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TransModule } from '../../app/tran.module';
import { IonicStorageModule } from '@ionic/storage';
import { static1 } from './static1';

@NgModule({
  declarations: [
    static1,
  ],
  imports: [
    TransModule,
 
    IonicStorageModule.forRoot({
      name: '__customdb',
      driverOrder: ['localstorage','indexeddb', 'sqlite', 'websql']
    }),
    IonicPageModule.forChild(static1),
  ]
  
})
export class StaticPage1Module {}
