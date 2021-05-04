import { NgModule ,CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
 import { WorkItemComponent } from './workitem.component';
import { SharedModule } from '../shared/shared.module';
import {MaterialModule} from '../shared/material/material.module';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { WorkItemEditComponent} from './workitem-edit/workitem-edit.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
       WorkItemComponent,
       WorkItemEditComponent
    
    ],
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
     WorkItemComponent,
    
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class WorkItemModule { }
