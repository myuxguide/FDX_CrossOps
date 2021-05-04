import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import { MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { AppService } from '../../app.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-workitem-edit',
  templateUrl: './workitem-edit.component.html',
  styleUrls: ['./workitem-edit.component.css']
})
export class WorkItemEditComponent implements OnInit {
    errorFlag:boolean;
    checked:boolean;
    inputName:string;
    outputName:string;
    foods= [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
      ];
    pickedforexec: boolean;
    hostName: any;
    batchScriptName: any;
    
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<WorkItemEditComponent>){}
    ngOnInit(){
        console.log("inputName",this.inputName = this.data.input);
        console.log("inputName",this.outputName = this.data.output);
        console.log("inputName",this.pickedforexec = this.data.pickedforexec);
        if(this.data.pickforexec === 0){
            this.pickedforexec = true;
        }else{
            this.pickedforexec =false;
        }
        console.log("inputName",this.hostName = this.data.hostName);
        console.log("inputName",this.batchScriptName = this.data.batchScriptName);
        
    }
    closeDialog() {
        this.dialogRef.close();
       
      }
    updateWorkItem(){

    }
}