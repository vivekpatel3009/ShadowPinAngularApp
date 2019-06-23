import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappingRoutingModule } from './mapping-routing';
import { MappingComponent } from './mapping.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MappingRoutingModule,
    SharedModule
  ],
  declarations: [MappingComponent]
})
export class MappingModule { }
