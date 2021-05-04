import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';
import { WorkItemEditComponent } from './workitem-edit/workitem-edit.component';

@Component({
  selector: 'app-workItem',
  templateUrl: './workItem.component.html',
  styleUrls: ['./workItem.component.css']
})
export class WorkItemComponent implements OnInit {

    displayedColumns: string[] = ['id', 'almid', 'profileid', 'scnname','scriptkey','input','output','execstatus','execute','exechost',
    'batchscript', 'startedby', 'actions'];
    displayPaginator: any;
  filterValue: any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
//   @Input() sucessMsg: string ='';
  dataSource:any;
  constructor(private appService: AppService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    // this.sucessMsg="";
    this.loadWorkItem();
  }
  loadWorkItem() {
    this.appService.fetchAllWorkItems().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  editWorkItem(val){
    console.log("Edit Schedule",val);
    let enddate = val.enddate;
    let selectedDays=[];
    selectedDays =val.selectedDays;
    let timeSlot =val.timeSlotHr + ':'+val.timeSlotMinute;
    const dialog = this._dialog.open(WorkItemEditComponent, {
      width: 'auto',
      height: 'auto',
      data: { 
              input:val.input,
              output:val.output,
              pickedforexec:val.pickedforexec,
              batchScriptName:val.batchScriptName,
              hostName:val.hostName
            },
      // Can be closed only by clicking the close button
      disableClose: true,
    });

    dialog.afterClosed().subscribe(data => (

      this.closeDialog(),
      this.loadWorkItem()
    )

    );
  }
  closeDialog(){
    console.log("Close Dialog");
  }
  //Filter functionality for global search
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
