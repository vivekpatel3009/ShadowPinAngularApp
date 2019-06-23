import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule} from './administration-routing';
import { AdministrationComponent} from './administration.component';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule 
  ],
  declarations: [AdministrationComponent]
})
export class AdministrationModule { }
