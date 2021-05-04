import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { NavRoutingModule } from './header/navbar/navbar-routing.module';
import {DatePipe} from '@angular/common';
import { FooterModule } from './footer/footer.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbsService } from './shared/breadcrumbs/breadcrumbs.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ExecutionScenariosModule } from './execution-scenarios/execution-scenarios.module';
import {LocalizationModule} from  '../../src/app/header/localization/localization.module'
import {MatTabsModule} from '@angular/material/tabs';
import { scheduleModule } from './schedule/schedule.module'; 
import {WorkItemModule} from './work-Item/workitem.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LocalizationModule,
    ExecutionScenariosModule,
    scheduleModule,
    WorkItemModule,
    HeaderModule,
    FooterModule,
    SharedModule,
    MatPaginatorModule,
    NavRoutingModule
    
  ],
  
  providers: [BreadcrumbsService,DatePipe],
    bootstrap: [AppComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
