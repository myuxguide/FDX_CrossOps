import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SchedulerComponent } from 'src/app/shared/scheduler/scheduler.component';
import { AppService } from '../../app.service';
 
@Component({
  selector: 'app-schedule-profile',
  templateUrl: './scheduleProfile.component.html',
  styleUrls: ['./scheduleProfile.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class ScheduleProfileComponent implements OnInit {

  displayedColumns: string[] = ['scheduledid', 'scenarioid', 'scnname', 'scheduledby','witriggerorg','notifyusers',
  'firstinput','timeslot','frequency','enddate','lastrun','enabled','actions'];
  displayPaginator: any;
  filterValue: any;
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  selectedOptions: string[] =['Monday','Tuesday'];
  dataSource:any;
  weekArr: any=[];
  checked:boolean =true;
  rowData =[];
  successMsg: string='';
  successMsgFlag :boolean;
  constructor(private appService: AppService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadScheduledProfile();
  }
  loadScheduledProfile() {
    this.successMsgFlag= false;

    this.appService.loadScheduledProfile().subscribe(res => {
      let values =res;
      let arrayVal =[];
      let arrayConvert=[];
      values.forEach(data =>{
        //arrayConvert.push(data.schedulefreq);
        
       this.weekArr.push(data.schedulefreq);

      })
     //this.selectedOptions =['Monday','Tuesday','Friday'];
    
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  rowExpand(value) {
    console.log("value",value.id);
     this.appService.fetchAllScheduleRunsForScheduleId(value.id).subscribe(res => {
     console.log(res);
      this.rowData = res;
     });
  }
  editSchedule(val){
    console.log("Edit Schedule",val);
    let enddate = val.enddate;
    let selectedDays=[];
    selectedDays =val.selectedDays;
    let timeSlot =val.timeSlotHr + ':'+val.timeSlotMinute;
    const dialog = this._dialog.open(SchedulerComponent, {
      width: 'auto',
      height: 'auto',
      data: { saveExecutionObj: {} ,
              enddate:enddate,
              selectedDays:selectedDays,
              timeSlot:timeSlot,
              input:val.firstinput,
              notifyusers:val.notifyusers,
              scheduleFlag:true,
              enabled:val.enabled,
              scheduleId:val.id
            },
      // Can be closed only by clicking the close button
      disableClose: true,
    });

    dialog.afterClosed().subscribe(data => (

      this.closeDialog(),
      this.loadScheduledProfile()
    )

    );
  }
  startNowSchedule(scheduleId){
    console.log("ScheduleID",scheduleId);
    this.appService.forceStartSchedule(scheduleId.id).subscribe(res => {
      console.log(res);
       this.rowData = res;
      },error=>{
        this.successMsg = "Schedule started successfully with schedule Id -"  + `${scheduleId.id}`; 
        console.log("successMsg",this.successMsg);
        this.successMsgFlag =true;
      }
      );
  }
  deleteSchedule(scheduleId){
    console.log("Schedule",scheduleId);
   
    this.appService.deleteSchedule(scheduleId.id).subscribe(res => {
      console.log(res);
      // this.rowData = res;
      this.loadScheduledProfile();
      },err=>{
        this.loadScheduledProfile();

      });
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
