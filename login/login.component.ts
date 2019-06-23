import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { json } from 'd3';
import { LoginService } from './login.service';
import { CommonService } from '../service/CommonService';
import { MenuItems } from '../shared/menu-items/menu-items';
import { PopupMessageService } from '../service/popupMessageService';
import { ILoggerModel } from '../model/logger.model';
import { AppGlobals } from '../service/app.global';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
    public Login: login;
    public loginResponse:any;
    public loginForm: FormGroup;
    submitted:any;
    appGlobals:AppGlobals;
    constructor(private loginFormBuilder: FormBuilder, public router: Router,private _LoginService:LoginService,private _CommonService:CommonService,private menuItems:MenuItems,public popupMessageService:PopupMessageService) 
    { 
        
        this.Login = new login();

        this.loginForm = this.loginFormBuilder.group
        ({
          Email: [this.Login.Email, [Validators.required,Validators.email]],
          Password: [this.Login.Password, [Validators.required]]
        })
    }

    ngOnInit() 
    {
        
    }

    onLoggedin() 
    {
        this.submitted=true;

        if(this.loginForm.valid)
        {
            this._LoginService.loginUser(this.Login).then((response:any)=>
            {
                if(response.Status == true)
                {
                    debugger;
                    this.loginResponse=response;
    
                    if(this.loginResponse.Data.length != 0)
                    {
                        this.loginResponse=response;
                        sessionStorage.setItem('isLoggedin','true');
                        localStorage.setItem('loginUser', JSON.stringify(this.loginResponse.Data));
                        this.router.navigate(['/dashboard']);
                    }
                    else
                    {
                        this.popupMessageService.openErrorSwal('Fail',response.Message)
                    }
                }
            },
            error=>
            {
                console.log(error);
            });
        }
        }
}

export class login 
{
Email: string;
Password: string;
}