import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordRoutingModule} from './forgot-password-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordService } from './forgot-password.service';

@NgModule({
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    SharedModule
  ],
  declarations: [ForgotPasswordComponent],providers:[ForgotPasswordService]
})
export class ForgotPasswordModule { }
