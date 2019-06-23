import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent} from './users.component';
import {UsersRoutingModule} from './users-routing';
import {SharedModule} from '../../shared/shared.module';
import { ManageUserComponent } from './manage-user/manage-user.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
    
  ],
  declarations: [UsersComponent, ManageUserComponent]
})
export class UsersModule { }
