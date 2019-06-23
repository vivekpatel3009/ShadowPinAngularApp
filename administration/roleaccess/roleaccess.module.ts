import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoleAccessComponent } from './roleaccess.component';
import {RoleAccessRoutingModule } from './roleaccess-routing';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RoleAccessRoutingModule,
    SharedModule
  ],
  declarations: [RoleAccessComponent]
})
export class RoleAccessModule { }
