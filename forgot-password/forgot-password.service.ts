import { Injectable } from '@angular/core';
import { WebService } from './../service/web.service'
import { AppGlobals } from './../service/app.global';

@Injectable()

export class ForgotPasswordService 
{
    constructor(public webService: WebService) { }

    forgotPassword(email) 
    {
        return this.webService.Get('ClientMasterAPI/ForgotPassword?Email='+ email +'' )
    }

}
