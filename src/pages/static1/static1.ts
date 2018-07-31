import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { FormBuilder} from '@angular/forms';

import { TranslateService } from 'ng2-translate';
import { Storage } from '@ionic/storage';

import { IonicPage } from 'ionic-angular';

import { Config } from '../config';


interface aboutCard{id:'',header:'',content:'',add_edit:'add'}
   

@IonicPage({
	name : 'static1'
})
@Component({  
  templateUrl: 'static1.html'
})

export class static1  {


  private selectedLanguage = "fr";  
  private aboutCardList:any=[]
  
  
  constructor(public translate: TranslateService,public storage:Storage,    public nav: NavController,    
       
    public navParams: NavParams,public form:FormBuilder) {
      
    
      this.translate.use(Config.defaultLanguage); 
      
      
              
    }
    
  }
 



      

    
    
  

    