import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleMappingComponent} from './vehicle-mapping.component';
import {VehicleMappingRoutingModule} from './vehicle-mapping-routing.module';
import {SharedModule} from '../../shared/shared.module';

 
@NgModule({
  imports: [
    CommonModule,
    VehicleMappingRoutingModule,
    SharedModule
  ],
  declarations: [VehicleMappingComponent]
})
export class VehicleMappingModule { }
