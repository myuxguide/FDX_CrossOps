import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExecutionComponent } from './new-execution.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule  } from '@angular/common/http'; 

describe('NewExecutionComponent', () => {
  let component: NewExecutionComponent;
  let fixture: ComponentFixture<NewExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ NewExecutionComponent ],
      providers:[HttpClientModule,{ provide: MatDialog, useValue: {} },{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: '' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
