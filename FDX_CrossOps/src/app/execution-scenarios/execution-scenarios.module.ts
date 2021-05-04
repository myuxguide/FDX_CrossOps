import { NgModule ,CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecutionScenariosComponent } from './execution-scenarios/execution-scenarios.component';
import { NewExecutionComponent } from './new-execution/new-execution.component';
import {MaterialModule} from './../shared/material/material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { CdkDetailRowDirective} from '../shared/_customs/cdk.directive';
import { SharedModule } from './../shared/shared.module';
import { BulkExecutionComponent } from './bulk-execution/bulk-execution.component';
import { BreadcrumbsService } from '../shared/breadcrumbs/breadcrumbs.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ExecutionScenariosComponent, 
    CdkDetailRowDirective, 
    NewExecutionComponent,
    BulkExecutionComponent],
  imports: [ 
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    SharedModule,
    MatIconModule 
  ],
  exports: [
    ExecutionScenariosComponent
  ],
  providers:[BreadcrumbsService,HttpClientModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ExecutionScenariosModule { }
 