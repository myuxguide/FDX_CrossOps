import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

// import { ProductMetaData } from './_models/productMetadata.model';
// import { PackagingTypeService } from './_services/packaging-type/packaging-type.service';
// import { RateScaleTypeService } from './_services/rate-scale-type/rate-scale-type.service';
// import { ServiceOptionService } from './_services/service-option/service-option.service';
// import { GlobalDataService } from './shared/_services/global-data/global-data.service';
// import { DisplayInformationService } from './shared/_services/display-information/display-information.service';
// import { ZoneDetailService } from './zone/zone-detail/zone-detail.service';
// import { ChargeCodeService } from './_services/charge-code/charge-code.service';
// import { SurchargeTypeService } from './_services/surcharge-type/surcharge-type.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // title = 'CrossOps';
  constructor(
    private translate: TranslateService,
    private router: Router,
    // private packagingTypeService: PackagingTypeService,
    // private rateScaleTypeService: RateScaleTypeService,
    // private globalDataService: GlobalDataService,
    // private displayInformationService: DisplayInformationService,
    // private zoneDetailService: ZoneDetailService,
    // private chargeCodeService: ChargeCodeService,
    // private serviceOptionService: ServiceOptionService,
    // private surchargeTypeService:SurchargeTypeService
  ) { 
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        // this.displayInformationService.setSearchResults([]);
        // this.zoneDetailService.setZoneDetails([]);
        // this.displayInformationService.setHiddenComponentFlag(false);
        // this.displayInformationService.setRateTableFlag(false);
        // this.displayInformationService.setRateDetails([]);
      }
    });
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe((event:LangChangeEvent) => {
      this.translate.use(event.lang);
    });
    
  }

  
}