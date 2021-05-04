import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BreadcrumbsService } from './shared/breadcrumbs/breadcrumbs.service';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule,  } from '@angular/common/http'; 
import { HttpLoaderFactory } from './header/navbar/navbar.module';
import { SharedModule } from './shared/shared.module';
import { NavRoutingModule } from './header/navbar/navbar-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalizationModule } from './header/localization/localization.module';
import { ExecutionScenariosModule } from './execution-scenarios/execution-scenarios.module';
import { FooterModule } from './footer/footer.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HeaderModule } from './header/header.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LocalizationModule,
    ExecutionScenariosModule,
    HeaderModule,
    FooterModule,
    SharedModule,
    MatPaginatorModule,
    NavRoutingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClientModule]
          }
        }),
      ],
      declarations: [
        AppComponent
      ],
      providers: [BreadcrumbsService,TranslateService,HttpClientModule],

    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'CrossOps'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('CrossOps');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('CrossOps app is running!');
  // });
});
