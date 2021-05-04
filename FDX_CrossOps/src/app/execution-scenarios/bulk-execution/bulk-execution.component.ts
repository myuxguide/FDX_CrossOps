import { Component, OnInit,Inject  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {  countryList } from '../../../_configs/_test_data/countryCode';
import { ColumnDefinition } from '../new-execution/ColumnDefinition';
import { consignment, scenario } from '../new-execution/DTO';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-bulk-execution',
  templateUrl: './bulk-execution.component.html',
  styleUrls: ['./bulk-execution.component.css']
})
export class BulkExecutionComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public profilecolumns;
  displayedColumns: Array<string> = profilecolumns.map(c => c.columnDef);
  scenarioBulkId='';
  myControl = new FormControl();
  myControll = new FormControl();
  panelOpenState = true;
  options: any =[];
  optionsVal = [];
  filteredOptions: Observable<string[]>;
  filteredOptionsVal: Observable<string[]>;
  displaycolumn: Array<string> = profilecolumnsInsideView.map(c => c.columnDef);
  public displaycolumndata: ColumnDefinition[];
  matrowData: any;
  rowData: any;
  checked = false;
  valueInput:any;
  public profiledata;
  public displaycolumndefs: ColumnDefinition[];
  public mattabledataSource:  MatTableDataSource<any>;
  dataChecked: any;
  allData =[];
  selectedCountry: any;
  selectedDestCountry: any='';
  selectedOrgCountry: any='';
  showBulkTableFlag: boolean;
  norecord: boolean=true;
  filteredOptionss: Observable<string[]>;
  testScriptKeyList=[];
  testScriptWithInputData: {};
  seqential: string;
  inputDataList: any;
  constructor(public dialogRef: MatDialogRef<BulkExecutionComponent>,
    private appService:AppService,
    private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) { 
   // this.profilecolumns  = ConsignmentData;
   // this.matrowData = new MatTableDataSource<any>();
   // this.matrowData.data =ConsignmentData;
    this.displaycolumndata =profilecolumnsInsideView;
    this.displaycolumndefs =profilecolumns;
   // this.profiledata  = tableDataScenario;
    this.mattabledataSource = new MatTableDataSource<any>();
    // people data assigned to mat data source
        this.mattabledataSource.data =this.profiledata;
        console.log("options",this.options);
  }
  value: string = "Hello JavaTpoint";
  consignmentKey:string;
  ngOnInit() {
    this.searchCountry();
    console.log(this.data)
    this.countryData();
   this.filterValue();
   this.fetchTestCaseKeysForProfiles(this.data);
  }
  countryData(){
  countryList.forEach(ele=>{
    this.options.push(ele.cntryCd);
    this.optionsVal.push(ele.cntryCd);
  })
  }
  filterValue(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  
   
  }
  
  // filterValues(){
  //   this.filteredOptionsVal = this.myControll.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filterVal(value))
  //   );
  // }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  fetchTestCaseKeysForProfiles(value){
    if(this.data.isSequential ==true){
      this.seqential ='Y';
    }else{
      this.seqential ='N';
    }
    this.appService.fetchTestCaseKeysForProfiles(this.seqential,value.profileId).subscribe(res=>{
      console.log(res);
      this.matrowData = new MatTableDataSource<any>();
      this.inputDataList =res['inputDataList'] ;
      this.matrowData.data =res['inputDataList'] ;
      this.testScriptKeyList =res['testScriptKeyList'];
     
      console.log(this.matrowData.data); 
      // res.forEach(element => {
      //   console.log("inputDataList",element.inputDataList);
      //   this.matrowData = new MatTableDataSource<any>();
      //  this.matrowData.data.push(element.inputDataList) ;
      // });
      
       // success path
     
    });
  }
  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'End now', {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  closeDialog() {
    this.dialogRef.close(this.allData);
    console.log("value",this.allData);
  }
  addExecution(){
    let dataCheck;
    // console.log("value",val);
    //  this.consignmentKey=val;
    
     console.log("scenarioBulkId",this.matrowData,this.scenarioBulkId);
     const myData = this.matrowData.data.map((row:consignment) => {
       if(row.value ===''){
         console.log("Enter value for"+row.key,row.value);
       }
       return {key: row.key, value: row.value}
     });
     if(this.dataChecked !==undefined){
      dataCheck=Array.from(this.dataChecked);
     }
     console.log("dataCheck",dataCheck);
     let scenarioId=[];
     if(dataCheck !==undefined){
     dataCheck.forEach(element => {
      scenarioId.push(element.scenarioId);
     });
    }
    
     const profileId = this.data.profileId;
     const orderId = this.data.orderId;
     
    if(myData[0].inputs !==""){

      var obj = {              
        testScriptKeyList: [], 
        inputDataList: [] 
    }; 
    obj.testScriptKeyList=this.testScriptKeyList; 
    obj.inputDataList=myData; 
    console.log("this.scenarioBulkId",this.scenarioBulkId);
    let bulkScenarioIds:any;
    if(this.scenarioBulkId !== undefined && this.scenarioBulkId !== ""){
      bulkScenarioIds = this.scenarioBulkId;
    } else if(scenarioId !== undefined && scenarioId !==[]){
      bulkScenarioIds = scenarioId.toString();
    }
    console.log("bulkScenarioIds",bulkScenarioIds);
    let e2eScenario:any;
    e2eScenario={
      id:this.data.profileId,
    name :this.data.name,
    description :this.data.description,
    input:this.data.input
    }

    //  this.allData.push({'dataKey':myData,'orderId':orderId,'profileId':profileId,'bulkScenario':dataCheck,'inputForBulk':this.scenarioBulkId});
     this.allData.push(
       {
         
       'e2eScenario':e2eScenario,
       'bulkScenarioIds':bulkScenarioIds,
       'order':orderId,
       'testScriptWithInputData':obj})
      console.log(this.allData);
    }else{
      console.log("Please enter value");
    }
   
      
        //  console.log("value",val);
         this._snackBar.open('All Values Added Successfully', 'End now', {
          duration: 500,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.closeDialog();
  }
  search(){
    
  }
  searchCountry(){

    console.log("selectedOrgCountry",this.selectedOrgCountry);
    console.log("selectedDestCountry",this.selectedDestCountry);
    this.appService.getAllEdiConByOriginAndDestination(this.selectedOrgCountry,this.selectedDestCountry).subscribe(res=>{
      
      if(res.length>0){
      this.mattabledataSource = new MatTableDataSource<any>();
      // people data assigned to mat data source
      this.norecord =true;
          this.mattabledataSource.data =res;
          console.log( this.mattabledataSource.data );
          this.showBulkTableFlag =true;
    //       this.selectedOrgCountry='';
    // this.selectedDestCountry='';
      }
      else {
        this.mattabledataSource.data =res;
        this.norecord =false;
      }
    
    });
  }
  changed(){
   
    if(this.checked){
      console.log("checked",this.checked);
     // this.checked=true;
     this.inputDataList.forEach(element => {
       if(element.key ==='ConsignmentKey' && element.value ==='' ){
         element.value ='bulk data';
       }
       if(element.key ==='ConsignmentKey'  && element.value !== ''){
        element.value ='bulk data';
       }
     });
     this.matrowData = new MatTableDataSource<any>();
      this.matrowData.data =  this.inputDataList ;
      } 
      else {
        this.inputDataList.forEach(element => {
          if(element.key ==='ConsignmentKey' && element.value ==='bulk data'){
            element.value ='';
          }
        });
        this.matrowData = new MatTableDataSource<any>();
         this.matrowData.data =  this.inputDataList ;
      }
  }
  flagEnable(event){
    console.log("Data",event);
    this.dataChecked =event;
  }

}
export const  profilecolumnsInsideView: ColumnDefinition[] = [
 
  { columnDef: 'key',    header: 'Data Key', cell: (element: consignment) => `${element.key}`},
  { columnDef: 'value',     header: 'Value', cell: (element: consignment) => `${element.value}`   }

];

export const  profilecolumns: ColumnDefinition[] = [
  { columnDef: 'checked',    header: 'Check',   cell: (element: scenario) => `${element.checked}`},
  { columnDef: 'scenarioId',    header: 'Scenario ID',   cell: (element: scenario) => `${element.scenarioId}`},
  { columnDef: 'senderCountry',    header: 'Sender Country',   cell: (element: scenario) => `${element.senderCountry}`},
  { columnDef: 'senderPostCode',    header: 'Sender PostCode',   cell: (element: scenario) => `${element.senderPostCode}`},
  { columnDef: 'senderAccountId',    header: 'Sender AccountID',   cell: (element: scenario) => `${element.senderAccountId}`},
  { columnDef: 'senderCity',    header: 'Sender City',   cell: (element: scenario) => `${element.senderCity}`},
  { columnDef: 'recieverAccountId',    header: 'Reciever AccountId',   cell: (element: scenario) => `${element.recieverAccountId}`},
  { columnDef: 'receiverComName',    header: 'Receiver ComName',   cell: (element: scenario) => `${element.receiverComName}`},
  { columnDef: 'receiverCountry',    header: 'Receiver Country',   cell: (element: scenario) => `${element.receiverCountry}`},
  { columnDef: 'receiverPostCode',    header: 'Receiver PostCode',   cell: (element: scenario) => `${element.receiverPostCode}`},
  { columnDef: 'itemDesc',    header: 'Item Desc',   cell: (element: scenario) => `${element.itemDesc}`},
  { columnDef: 'itemQuantity',    header: 'Item Quantity',   cell: (element: scenario) => `${element.itemQuantity}`},
  { columnDef: 'articleCondition',    header: 'Article Condition',   cell: (element: scenario) => `${element.articleCondition}`},
  { columnDef: 'isCustControlled',    header: 'IsCustControlled',   cell: (element: scenario) => `${element.isCustControlled}`},
  { columnDef: 'tariffCode',    header: 'Tariff Code',   cell: (element: scenario) => `${element.tariffCode}`},
  { columnDef: 'senderDepot',    header: 'Sender Depot',   cell: (element: scenario) => `${element.senderDepot}`},
  { columnDef: 'itemWeight',    header: 'Item Weight',   cell: (element: scenario) => `${element.itemWeight}`},
  { columnDef: 'itemLength',    header: 'Item Length',   cell: (element: scenario) => `${element.itemLength}`},
  { columnDef: 'itemWidth',    header: 'Item Width',   cell: (element: scenario) => `${element.itemWidth}`},
  { columnDef: 'itemHeight',    header: 'Item Height',   cell: (element: scenario) => `${element.itemHeight}`},
  { columnDef: 'isDangerousGoods',    header: 'IsDangerousGoods',   cell: (element: scenario) => `${element.isDangerousGoods}`},



  { columnDef: 'description',    header: 'Description',   cell: (element: scenario) => `${element.description}`},
 
];
