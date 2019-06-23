import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetMappingComponent} from './fleet-mapping.component';
import {FleetMappingRoutingModule} from './fleet-mapping-routing';
import {SharedModule} from '../../shared/shared.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
@NgModule({
  imports: [
    CommonModule,
    FleetMappingRoutingModule,
    SharedModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  declarations: [FleetMappingComponent]
})
export class FleetMappingModule { }
