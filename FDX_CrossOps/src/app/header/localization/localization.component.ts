 import { Component, OnInit } from '@angular/core';
 import { TranslateService } from '@ngx-translate/core';
 import { LocalizationConfigs } from '../../_configs/app-config';

 @Component({
   selector: 'app-localization',
   templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.css']
 })
 export class LocalizationComponent implements OnInit{
   selectedLanguage = LocalizationConfigs.defaultLanguage;

   constructor(
    public translate: TranslateService
   ) { }

   ngOnInit(

   ) { 
     this.changeLanguage("en");
   }
  
   changeLanguage(event) {
     this.translate.use(event);
    
    switch(event) {
      case 'en': {
        this.selectedLanguage = "English";
        break;
      }
      case 'nl': {
        this.selectedLanguage = "Dutch";
        break;
      }
      default: {
        this.selectedLanguage = "English";
        break;
      }
    }
  }
}
