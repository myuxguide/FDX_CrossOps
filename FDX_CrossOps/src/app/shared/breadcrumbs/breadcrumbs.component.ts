import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from './breadcrumbs.service';
// import { PolicyGridComponent } from '../_dialogs/policy-grid/policy-grid.component';
// import { PolicyGridService } from '../_dialogs/policy-grid/policy-grid.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
 
  moduleName: string;
  time = new Date();
  timer;

  constructor(
    
    private breadCrumbService: BreadcrumbsService,
    // private policyGridService: PolicyGridService
  ) { }

  ngOnInit() {
    this.breadCrumbService.currentPage.subscribe(moduleName => {
      this.moduleName = moduleName;
    });

    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

   refreshPolicyGrid() {
  //   this.policyGridService.refreshPolicyGrid().subscribe((policyGridData: any) => {
  //     let displayedPolicies: any;
  //     if (policyGridData) {
  //       displayedPolicies = [];
  //       policyGridData.forEach(policy => {
  //         if (policy.encodedGridStatus == "APPROVED") {
  //           displayedPolicies.push(policy);
  //         }
  //       });
  //     }
  //     else {
  //       displayedPolicies = policyGridData;
  //     }

  //     this.dialog.open(PolicyGridComponent, {
  //       data: displayedPolicies
  //     });
  //   });
   }
}
