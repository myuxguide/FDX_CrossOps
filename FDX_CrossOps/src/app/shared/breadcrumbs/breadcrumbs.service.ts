import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppConstants } from '../../../_configs/app-constants';

@Injectable()

export class BreadcrumbsService {

  private messageSource = new BehaviorSubject(AppConstants.dashboardModule);
  currentPage = this.messageSource.asObservable();

  constructor() { }

  setBreadCrumbs(message: string) {
    this.messageSource.next(message);
  }
}
