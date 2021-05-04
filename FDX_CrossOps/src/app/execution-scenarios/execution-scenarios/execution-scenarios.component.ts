import { Component, OnInit, ViewChild } from '@angular/core';
import { tableData, rowData } from '../../_configs/_test_data/serviceOptionService';
import { AppConstants, Breadcrumbs } from '../../_configs/app-constants';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BreadcrumbsService } from '../../shared/breadcrumbs/breadcrumbs.service';
import { AppService } from '../../app.service';
import { NewExecutionComponent } from '../new-execution/new-execution.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-execution-scenarios',
  templateUrl: './execution-scenarios.component.html',
  styleUrls: ['./execution-scenarios.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class ExecutionScenariosComponent implements OnInit {

  moduleName: string;
  isLoading: boolean;
  displayedColumns: string[] = ['id', 'scenarioid', 'wiid', 'scnname', 'startedby', 'notifyusers', 'startdt', 'enddt', 'status', 'actions'];
  dataSource: any;
  rowData: any;
  filterValue: any;
  displayPaginator: any;
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  data: any[];
  errorStatus: any;
  constructor(private breadCrumbsService: BreadcrumbsService,
    private appService: AppService, private _dialog: MatDialog) { }

  ngOnInit() {
    this.execution();
    this.moduleName = AppConstants.dashboardModule;
    this.setBreadCrumbs(this.moduleName);
  }

  // Execution method for serice call
  public execution() {
    let logName = 'rakesh.mishra';
    this.isLoading = true;
    this.appService.getAllExecution(logName).subscribe(res => {
      this.isLoading = false;
      this.data = res;
      this.dataSource = new MatTableDataSource(<any>this.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    // Error handling for the execution method
      error => {
        this.isLoading = false;
        console.log("Error", error.statusText);
        this.errorStatus = error.statusText;
      });
  }

  setBreadCrumbs(moduleName) {
    this.breadCrumbsService.setBreadCrumbs(Breadcrumbs[moduleName]);
  }
  //Filter functionality for global search
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  //Row Expand method for the services call
  rowExpand(value) {
    this.appService.fetchExecutionTestCases(value.tiid).subscribe(res => {
      console.log(res);
      this.rowData = res;
    });
  }
  // Dialog for NewExecutionComponent
  openDialog() {
    console.log('OpenDialog clicked');
    const dialog = this._dialog.open(NewExecutionComponent, {
      width: '100%',
      // Can be closed only by clicking the close button
      disableClose: true,
    });
    dialog.afterClosed().subscribe(data => (
      setTimeout(() => {
        this.execution()
      },
        8000)
    ));
  }
}
