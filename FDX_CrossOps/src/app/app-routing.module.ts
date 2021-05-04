import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExecutionScenariosComponent} from './execution-scenarios/execution-scenarios/execution-scenarios.component';
import { NavRoutingModule } from './header/navbar/navbar-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ExecutionScenariosComponent },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), NavRoutingModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
