import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VehicleComponent} from './vehicle.component';
import {VehicleRoutingModule} from './vehicle-routing';
import {SharedModule} from '../../shared/shared.module';
import { ManageVehicleComponent } from './manage-vehicle/manage-vehicle.component';
import { VehicleService } from './vehicle.service';
import { LookupService } from '../../master/lookup/lookup.service';
import { FleetService } from '../fleet/fleet.service';

@NgModule({
  imports: [
    CommonModule,
    VehicleRoutingModule,
    SharedModule
  ],
  declarations: [VehicleComponent, ManageVehicleComponent],
  providers:[VehicleService,LookupService,FleetService]
})
export class VehicleModule { }
