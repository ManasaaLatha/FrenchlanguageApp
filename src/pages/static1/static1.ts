import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TranslateService } from 'ng2-translate';


import { IonicPage } from 'ionic-angular';


import {DomSanitizer} from '@angular/platform-browser';


@IonicPage({
	name : 'static1'
})
@Component({  
  templateUrl: 'static1.html'
})

export class static1  {
  
 
  private pagename:any
  constructor(public translate: TranslateService,    public nav: NavController,           
    public sanitizer:DomSanitizer) {

    var userlan=window.navigator.language

    if(userlan && userlan.indexOf("-")!=-1){        
          var _fiel_arr = userlan.split("-");        
          userlan=_fiel_arr[0]          
    }
      var srcName  = "assets/static/"+"static-"+userlan+".html"

      this.pagename = this.sanitizer.bypassSecurityTrustResourceUrl(srcName);   


              
    }
    
  }
 



      

    
    
  

    