import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { tableData1, tableDataView, tableDataInsideView } from '../../_configs/_test_data/serviceOptionService';
import { profile, viewsteps } from './DTO'
import { MatTableDataSource } from '@angular/material/table';
import { ColumnDefinition } from './ColumnDefinition';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BulkExecutionComponent } from '../bulk-execution/bulk-execution.component';
import { AppService } from '../../app.service';
import { SchedulerComponent } from '../../shared/scheduler/scheduler.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-new-execution',
  templateUrl: './new-execution.component.html',
  styleUrls: ['./new-execution.component.css']
})
export class NewExecutionComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  viewStepsFlag: boolean;
  // @Input() disabledFlag:boolean;
  enableExecutionFlag: boolean;
  enableViewFlag: boolean;
  profileID: string;
  profileName: any;
  rawColorFlag: boolean;
  public mattabledataSource: MatTableDataSource<any>;
  public mattabledataSourceView: MatTableDataSource<any>;
  public matrowData: MatTableDataSource<any>;
  checked = false;
  checkedSeq = false;
  sequentailTogle: boolean = false;

  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: Array<string> = profilecolumns.map(c => c.columnDef);
  public displaycolumndefs: ColumnDefinition[];
  public displaycolumndefsView: ColumnDefinition[];
  public displaycolumndata: ColumnDefinition[];
  public rowData;

  paginatorFlag: boolean;
  public profiledata;
  public profileViewdata;
  isLoadingResults;
  step = 0;
  valstore;
  value1;
  value2;
  value3;
  count = 0;
  listArr = [];
  inputTxt = '';
  mailAddFlag: boolean;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  discriptionFlag: boolean = true;
  errorStatus: any;
  mailRemoveFlag: boolean;
  emailValues: string ='';
  saveExecutionObj = {
    sequential: this.checkedSeq,
    emails: this.emailValues,
    e2eScenarioForProfileExecutionList: []
  };

  e2eScenarioForProfileExecutionList = [];
  errorE2EScenarioMsg: string;
  e2eFlag: boolean;
  saveExecutionScheduleObj: { 
    sequential: boolean; 
    emails: string; 
    e2eScenarioForScheduleProfileExecutionList: any[]; };

  constructor(public dialogRef: MatDialogRef<NewExecutionComponent>, private _snackBar: MatSnackBar
    , private _dialog: MatDialog, private appService: AppService) {
    this.displaycolumndefs = profilecolumns;



  }

  ngOnInit(): void {
    this.getAllEligibleProfiles();
  }

  addToList() {
    this.mailAddFlag = false;
    if (this.inputTxt != '') {
      this.listArr.push(this.inputTxt);
      this.mailAddFlag = true;
      this.mailRemoveFlag = false;
      this.emailValues = this.listArr.toString();
    }
  }
  removeItem(index: number) {
    this.listArr.splice(index, 1);
    this.mailAddFlag = false;
    this.mailRemoveFlag = true;
    this.emailValues = this.listArr.toString();
  }
  scheduleExec() {
    this.saveExecutionScheduleObj = {
      sequential: this.checkedSeq,
      emails: this.emailValues,
      e2eScenarioForScheduleProfileExecutionList: this.e2eScenarioForProfileExecutionList
    };
    if (this.saveExecutionObj.e2eScenarioForProfileExecutionList.length !== 0) {
      const dialog = this._dialog.open(SchedulerComponent, {
        width: 'auto',
        height: 'auto',
        data: { saveExecutionObj: this.saveExecutionScheduleObj },
        // Can be closed only by clicking the close button
        disableClose: true,
      });

      dialog.afterClosed().subscribe(data => (

        this.closeDialog()
      )

      );
    } else {
      this.e2eFlag = true;
      this.errorE2EScenarioMsg = '*please Enter data for atleast one Profile';
    }
  }
  public getAllEligibleProfiles() {

    this.appService.getAllEligibleProfiles().subscribe(res => {
      console.log(res);
      this.profiledata = res;
      this.mattabledataSource = new MatTableDataSource<any>();
      // people data assigned to mat data source
      this.mattabledataSource.data = this.profiledata;
      // success path

    },
      error => {
        console.log("Error", error.statusText);
        this.errorStatus = error.statusText;
      }
    );

  }

  closeDialog() {
    this.dialogRef.close();
    //console.log("disabledFlag",this.disabledFlag);
    this.viewStepsFlag = null;
    this.count = 0;
  }
  flagEnable(data) {
    console.log("Data", data);
    this.enableViewFlag = true;
    this.profileID = data.profileId;
    console.log(this.profileID);

    this.profileName = data.name;
    this.viewStepsFlag = true;
    this.step++;
    this.rawColorFlag = true;
    this.discriptionFlag = false;
  }
  flagEnableExecution(data) {
    console.log("Data", data);
    this.enableExecutionFlag = true;
    this.isLoadingResults = true;

  }

  squToggleBtn(val) {

    if (val > 1) {
      this.sequentailTogle = true;
    } else {
      this.sequentailTogle = false;
    }

  }
  setStep(index: number) {
    this.step = index;
  }

  startExec() {
    //   this.step++;
    if (this.saveExecutionObj.e2eScenarioForProfileExecutionList.length !== 0) {

      this.saveExecutionObj = {
        sequential: this.checkedSeq,
        emails: this.emailValues,
        e2eScenarioForProfileExecutionList: this.e2eScenarioForProfileExecutionList
      };
      this.appService.saveProfileExecution(this.saveExecutionObj).subscribe(res => {
        console.log("SaveExecutionResponse", res);
      })

      this._snackBar.open('All Values Added Successfully', 'End now', {
        duration: 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      this.closeDialog();
    } else {
      this.e2eFlag = true;
      this.errorE2EScenarioMsg = '*please Enter data for atleast one Profile';
    }
  }

  // prevStep() {
  //   this.step--;
  //   this.discriptionFlag = true;
  // }
  showDialog(event, val) {

    console.log("clicked", val);
    event.stopPropagation();
    console.log('OpenDialog clicked');
    const dialog = this._dialog.open(BulkExecutionComponent, {
      width: '100%',
      data: { profileId: val, },

      height: 'auto',
      // Can be closed only by clicking the close button
      disableClose: true,
    });
    dialog.afterClosed().subscribe(data => (

      this.valueStore(data)
    )

    );
    console.log(this.valstore);
  }
  changed() {
    if (!this.checked) {
      console.log("checked", this.checked);
      console.log("checkedSeq", this.checkedSeq);


    }
  }
  showDialogVal(value) {
    let orderVal = value[1];
    let orderId: number = +orderVal;

    console.log('OpenDialog clicked', orderId);
    const dialog = this._dialog.open(BulkExecutionComponent, {
      width: '100%',
      data: {
        profileId: value[0],
        orderId: orderId,
        name: value[2].name,
        description: value[2].description,
        input: value[2].input,
        isSequential: this.checkedSeq
      },
      height: 'auto',
      // Can be closed only by clicking the close button
      disableClose: true,
    });
    dialog.afterClosed().subscribe(data => (

      this.valueStore(data)
    )

    );
    console.log(this.valstore);
  }
  valueStore(val) {
    // if (val.count == 0) {
    //   this.value1 = val;
    //   this.value1.push(this.profileID);
    //   this.count++;
    //   console.log(this.value2);
    // } else if (this.count === 1) {
    //   this.value2 = val;
    //   this.count++;
    // } else if (this.count === 2) {
    //   this.value3 = val;
    //   this.count++;
    // }

    //if (val.order == 1 ||val.order == undefined) {
    if (this.e2eScenarioForProfileExecutionList.length === 0) {
      if (val != '') {
        this.saveExecutionObj.e2eScenarioForProfileExecutionList = val;
        this.e2eScenarioForProfileExecutionList = this.saveExecutionObj.e2eScenarioForProfileExecutionList;
      }

    } else if (this.e2eScenarioForProfileExecutionList.length == 1) {
      this.validationProfile(val, 0);

    } else if (this.e2eScenarioForProfileExecutionList.length == 2) {
      this.validationProfile(val, 1);
    }
  }
  validationProfile(val, cnt) {
    this.e2eScenarioForProfileExecutionList.forEach(element => {
      if (this.e2eScenarioForProfileExecutionList[cnt].e2eScenario.id !== val[0].e2eScenario.id) {
        this.saveExecutionObj.e2eScenarioForProfileExecutionList = val;
        this.e2eScenarioForProfileExecutionList.push(...this.saveExecutionObj.e2eScenarioForProfileExecutionList);
        // this.count =1;
      } else if (val != '') {
        this.saveExecutionObj.e2eScenarioForProfileExecutionList = val;
        this.e2eScenarioForProfileExecutionList[cnt] = val[0];
        //   this.count++;
      }
    });
  }
}
export const profilecolumns: ColumnDefinition[] = [
  { columnDef: 'order', header: 'Order', cell: (element: profile) => `${element.order}` },
  { columnDef: 'checked', header: 'Check', cell: (element: profile) => `${element.checked}` },
  { columnDef: 'profileId', header: 'Profile ID', cell: (element: profile) => `${element.id}` },
  { columnDef: 'name', header: 'Name', cell: (element: profile) => `${element.name}` },
  { columnDef: 'description', header: 'Description', cell: (element: profile) => `${element.description}` },
  { columnDef: 'btn', header: '', cell: (element: profile) => `${element.input}` }

];


