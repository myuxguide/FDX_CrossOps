import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationComponent } from './localization.component';
import { SharedModule} from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [LocalizationComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatMenuModule,
    MatIconModule
  ],
  exports:[
    LocalizationComponent
  ],
  providers:[TranslateService]
})
export class LocalizationModule { }
