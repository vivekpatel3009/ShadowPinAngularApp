import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerAdminComponent} from './scheduler-admin.component';
import {SchedulerAdminRoutingModule} from './scheduler-admin-routing';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SchedulerAdminRoutingModule,
    SharedModule
  ],
  declarations: [SchedulerAdminComponent]
})
export class SchedulerAdminModule { }
