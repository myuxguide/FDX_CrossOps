import { NgModule ,CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { SharedModule } from './../shared/shared.module';
import {MaterialModule} from './../shared/material/material.module';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CdkDataDetailRowDirective} from '../shared/_customs/cdkData.directive';

import { BrowserModule } from '@angular/platform-browser';
import { ScheduleProfileComponent } from './scheduledProfiles/scheduleProfile.component';

@NgModule({
  declarations: [ScheduleComponent,
    CdkDataDetailRowDirective,
    ScheduleProfileComponent],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    MaterialModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [
    ScheduleComponent,
    ScheduleProfileComponent,
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class scheduleModule { }
