import { Component,ViewChild } from '@angular/core';
import { Platform ,AlertController,MenuController,Nav,LoadingController} from 'ionic-angular';


import { TranslateService } from 'ng2-translate';

import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'

})
export class MyApp {

  rootPage:string;
  @ViewChild(Nav) nav: Nav;
  private selectedLanguage = "fr";  
  constructor(private menu: MenuController,public platform: Platform,public translate: TranslateService,private storage: Storage,public alertCtrl: AlertController,public loadingController:LoadingController
    ) {
    platform.ready().then(() => {

    

    });
    this.rootPage = 'static1';
   
    this.translate.use(this.selectedLanguage);
   
  }

  private openLanguageSelectionPage(){
    this.nav.setRoot("baba_web_pata");
    this.menu.close();
  }


  private openStatic1Page(){
    this.nav.setRoot("static1");
    this.menu.close();
  }

  private openHomePae(){
    this.nav.setRoot("baba_web_pata");
    this.menu.close();
  }

  

  
}



