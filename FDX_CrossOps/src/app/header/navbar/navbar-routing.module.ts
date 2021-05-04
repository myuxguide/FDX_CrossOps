import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExecutionScenariosComponent } from './../../execution-scenarios/execution-scenarios/execution-scenarios.component';
import { ScheduleComponent } from '../../schedule/schedule.component';
import { WorkItemComponent } from 'src/app/work-Item/workitem.component';

const navbarRoutes: Routes = [
  { path: 'home', component: ExecutionScenariosComponent },
  { path: 'schedule', component: ScheduleComponent },
 { path: 'workItem',  component: WorkItemComponent },
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(navbarRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NavRoutingModule { }
