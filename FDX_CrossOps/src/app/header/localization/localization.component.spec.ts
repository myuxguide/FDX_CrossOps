import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationComponent } from './localization.component';
import { TranslateService,TranslateStore, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '../header.module';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule} from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
describe('LocalizationComponent', () => {
  let component: LocalizationComponent;
  let fixture: ComponentFixture<LocalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        MatMenuModule,
        SharedModule,
        MatIconModule,
        TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory, 
          deps: [HttpClient]
        }
      })],
      declarations: [ LocalizationComponent ],
      providers:[TranslateService,TranslateStore,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
