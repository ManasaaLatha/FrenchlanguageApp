import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';


import { TranslateService } from 'ng2-translate';
import { IonicStorageModule } from '@ionic/storage';
import {  TranslateStaticLoader } from 'ng2-translate/src/translate.service';
import { Http } from '@angular/http';
import { TranslateModule,TranslateLoader } from 'ng2-translate/ng2-translate';

export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, 'assets/i18n', '.json');


}
@NgModule({
  declarations: [
    MyApp

    
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory:  createTranslateLoader,//(http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
			deps: [Http]
    }),
    IonicStorageModule.forRoot({
      name: '__customdb',
      driverOrder: ['localstorage','indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [    
    TranslateService,
    
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
