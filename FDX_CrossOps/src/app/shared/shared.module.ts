import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
// import {   
  import {MatCardModule} from '@angular/material/card';
  
// } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
// import { MatNativeDateModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

 import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import {MatCheckboxModule} from '@angular/material/checkbox';

import {MaterialModule} from '../shared/material/material.module';
import { SharedTableComponent } from './shared-table/shared-table.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SharedTableComponent,
    SchedulerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatPaginatorModule,
    MatTabsModule,
    MatDatepickerModule,
    MatCardModule,
    NgxMaterialTimepickerModule,
   // MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatAutocompleteModule,
    RouterModule,
    MatCheckboxModule,
    MaterialModule,
  ],
  exports: [
    BreadcrumbsComponent,
    SharedTableComponent
    ],
  entryComponents: [
    // PolicyGridComponent,
    // SnackbarComponent
  ]
})
export class SharedModule { }
