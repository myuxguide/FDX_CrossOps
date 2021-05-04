import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import { MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { AppService } from '../../app.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  selectedDays:any;
  tomorrow = new Date();
  date:Date;
  timeVal:any;
  saveExecution={
    scheduleProfileDto:this.data.scheduleProfileDto,
    emails:[]
  };
  errorFlag:boolean;
  scheduleFlag:boolean;
  errorStatus: string;
  mailAddFlag: boolean;
  listArr=[];
  inputTxt: any;
  mailRemoveFlag: boolean;
  inputName:any;
  emailValues: any;
  checked:boolean;
  input: any;
  e2eScenarioForScheduleProfileExecutionList: any[];
  constructor(public datepipe: DatePipe,private appService: AppService,@Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<SchedulerComponent>,) { }

  ngOnInit(): void {
    console.log('Date',this.date= new Date(this.data.enddate ));
    console.log("selectedDays",this.selectedDays =this.data.selectedDays);
    console.log("timeSlot",this.timeVal=this.data.timeSlot);
    console.log("inputName",this.inputName = this.data.input);
    this.checked = this.data.enabled;
    if(this.data.notifyusers !==null){
    this.listArr.push(this.data.notifyusers);
    }
    console.log("Email",this.data.notifyusers);
    this.scheduleFlagCheck();
        this.scheduleFlag = this.data.scheduleFlag;
      this.saveExecution =  this.data.saveExecutionObj;
  }
  scheduleFlagCheck(){
    if(this.data.scheduleFlag ===true && this.data.scheduleFlag !== undefined){
      this.scheduleFlag =true;
    } else {
      this.scheduleFlag =false;
    }
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
  closeDialog() {
    this.dialogRef.close();
   
  }
  schedule(){
    let latest_date:any  =this.datepipe. transform(this.date, 'yyyy-MM-dd');
   // let date = Date.parse(latest_date);
    let selectedHours:string =this.timeVal.substring(0,2);
    let selectedMinute:string =this.timeVal.slice(-2);
    console.log("myFlagForButtonToggle",this.selectedDays,latest_date,this.timeVal);
   let scheduleValue ={
     'selectedDays':this.selectedDays,
     'selectedHour':selectedHours,
     'selectedMinute':selectedMinute,
     'scheduleEndDate':latest_date,
   }
    this.saveExecution.scheduleProfileDto =scheduleValue;
    if(this.scheduleFlag === true){
      
      this.e2eScenarioForScheduleProfileExecutionList =[];
      this.saveExecution.emails = this.emailValues;
      this.input =this.data.input;
      let flagVal;
      if(this.checked ==true){
        flagVal ='yes';
      }else{
        flagVal ='no';
      }
      let obj={
        e2eScenarioForProfileExecutionList:this.e2eScenarioForScheduleProfileExecutionList,
        emails:this.emailValues,
        scheduleProfileDto:this.saveExecution.scheduleProfileDto,
        scheduleId:this.data.scheduleId,
        inputKey: this.inputName,
        scheduleEnable: flagVal,
      }
      this.appService.updateMultiProfileScheduleExecution(obj).subscribe(res =>{
      
        let scheduleSuccess =res;
      

           
    this._snackBar.open('Scheduled Execution Updated Successfully', 'End now', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    this.dialogRef.close();
  
  },error => {
 //   this.errorFlag =true;
 //   this.errorStatus = "*service Error";
  this._snackBar.open('Scheduled Execution Updated Successfully', 'End now', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    this.dialogRef.close();
  });
      
    }
    
    else{
    console.log('saveExecution',this.saveExecution);
     this.appService.saveMultiProfileScheduleExecution(this.saveExecution).subscribe(res =>{
      let scheduleSuccess =res;
   console.log('response',scheduleSuccess);
     
    this._snackBar.open('Scheduled Execution Successfully', 'End now', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    this.dialogRef.close();
  
  },error => {
 //   this.errorFlag =true;
 //   this.errorStatus = "*service Error";
  this._snackBar.open('Scheduled Execution Successfully', 'End now', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    this.dialogRef.close();
  });
}
  }

  

}
