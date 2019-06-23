import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetComponent} from './fleet.component';
import {FleetRoutingModule} from './fleet-routing';
import {SharedModule} from '../../shared/shared.module';
import { ManageFleetComponent } from './manage-fleet/manage-fleet.component';
import { FleetService } from './fleet.service';
import { LookupService } from '../../master/lookup/lookup.service';


@NgModule({
  imports: [
    CommonModule,
    FleetRoutingModule,
    SharedModule
  ],
  declarations: [FleetComponent, ManageFleetComponent],
  providers:[FleetService,LookupService]
})
export class FleetModule { }
