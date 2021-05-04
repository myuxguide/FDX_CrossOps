import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { tableData, rowData } from '../../_configs/_test_data/serviceOptionService';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.css'] 
})
export class SharedTableComponent implements OnInit {
  ///displayedColumns: string[] = ['profileId', 'name', 'description'];
  // @Input() displayedColumns;
  @Input('displayedColumns') displayedColumns: string;
  @Input('displaycolumndefs') displaycolumndefs;
  @Input('mattabledataSource') mattabledataSource;
  @Input('viewStepsFlag') viewStepsFlag =false;
  @Input('nxtButtonFlag') nxtButtonFlag;
  

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  disabledFlag: boolean = true;
  @Output() flagEnable = new EventEmitter<any>();
  @Output() flagEnableExecution = new EventEmitter<String>();
  @Output() dataChecked = new EventEmitter<any>();
  @Output() showDialogVal = new EventEmitter<any>();
    @Output() squToggleBtn = new EventEmitter<any>();
  
  //dataSource = new MatTableDataSource(tableData);
  filterValue: any;
  rowDeatils: any;
  selectedRowIndex = -1;
  rowDataVal = new Set();
   sqCount = new Set();
  rowEnable: boolean;
  InputEnable: boolean=true;
  checked: boolean;
  rowCheckedCount = [];
  checkFlag:boolean = false;
  btnFlag:boolean = false;
  count:number =0;
  squCountRow =[];
  orderValue:number;
  constructor() { 
    
  }

  ngOnInit(): void { 
    this.checkFlag =true;
    }
  ngOnChanges() {
    this.mattabledataSource.paginator = this.paginator;
    this.mattabledataSource.sort = this.sort;
    
  }
  showDetails(row, index) {
    this.rowCheckedCount =[];
    this.rowDeatils = row;
    //this.disabledFlag = false;
    this.count =index;
   console.log("index",index);
     row.highlighted = !row.highlighted;
 
  }
  rowData(row) {
    
    if (this.checked === true) {
      this.rowDataVal.add(row);
      this.rowCheckedCount = Array.from(this.rowDataVal);
    } else {
      this.rowDataVal.delete(row);
      this.rowCheckedCount = Array.from(this.rowDataVal);
      this.rowEnable = false;
    }
    console.log("RowDataVal", this.rowDataVal);
    this.dataChecked.emit(this.rowDataVal);
    if(row.id){
   this.checkedenableDisable();
    }
  }
  checkedenableDisable(){
  if (this.rowCheckedCount.length >= 3) {
    
    this.rowEnable = true;
  } else {
    this.rowEnable = false;

  }
 
}

  showOptions(event: MatCheckboxChange,checkedVal): void {
    this.checked = event.checked;
    this.disabledFlag = false;
   // this.btnFlag =true;
    this.rowData(this.rowDeatils);
    console.log("checked status", this.count);
    // if(this.count ==this.count){
      //this.btnFlag =true;
      this.mattabledataSource.data.filter((row: any) => {
      console.log("Row",row);
        if(this.rowDeatils ===row && this.checked ==true){
           row.inputbtn= true;
           row.InputEnable =true;
          
           
        }
        if(this.rowDeatils ===row && this.checked ==false){
          row.inputbtn= false;
          row.InputEnable =false;
            }
            
            
            //  if (this.rowCheckedCount.length <= 2) {
    
            //   this.squToggleBtn.emit("false");   
             
            // }
      // if (row.inputbtn !== false) {
      //      } else {
      //   return row;
      // }
      });
      
      let val =  this.count;
      this.squToggleBtn.emit(this.rowCheckedCount.length);
    // }
  }
  showDialog(event,value,row){
  console.log("orderValue",this.orderValue,row);
    let allValue =[];
    allValue.push(value,row,this.rowDeatils)
    console.log("rowDeatils",this.rowDeatils);
    this.showDialogVal.emit(allValue);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.mattabledataSource.filter = filterValue;
  }
  next(event) {
    if(event.target.firstChild.checked=== true ){
      this.rowEnable = false;
      
    }
    if( event.target.firstChild.checked=== true && event.target.firstChild.disabled=== true && this.rowCheckedCount.length ===0 ){
      this.rowEnable = false;
  }
}
nextViewSteps(){
 
  this.flagEnable.emit(this.rowDataVal);
}
nextExecution(){
this.flagEnableExecution.emit();
}
  
}
