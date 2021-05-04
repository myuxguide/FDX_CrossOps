import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionScenariosComponent } from './execution-scenarios.component';
import { BreadcrumbsService } from '../../shared/breadcrumbs/breadcrumbs.service';
import { HttpClientModule } from '@angular/common/http'; 
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ExecutionScenariosComponent', () => {
  let component: ExecutionScenariosComponent;
  let fixture: ComponentFixture<ExecutionScenariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ ExecutionScenariosComponent ],
      providers:[BreadcrumbsService,HttpClientModule,
        { provide: MatDialog, useValue: {} },{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: '' }]
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
