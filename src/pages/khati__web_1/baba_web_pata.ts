import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicModule, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateService } from 'ng2-translate';

import {NavController, NavParams} from 'ionic-angular';



import { IonicPage} from 'ionic-angular';
import { Config } from '../config';
@IonicPage({
	name : 'baba_web_pata'
})
@Component({
	templateUrl: 'baba_web_pata.html'
})

export class baba_web_pata {
	languages = [{
		code: 'en',
		name: 'English'
	}, {
		code: 'fr',
		name: 'French'
	}];;
	
	selectedLanguage = "fr";

	

	private translate: TranslateService;

	constructor(public nav: NavController,translate: TranslateService,private storage: Storage) {
		this.translate = translate;

				
					this.translate.use(this.selectedLanguage);

				
	}

	applyLanguage() {

	
		this.translate.use(this.selectedLanguage);			

		Config.defaultLanguage = this.selectedLanguage
		

	}

	goback() {
		this.nav.setRoot("about");
	}

	


	
}
