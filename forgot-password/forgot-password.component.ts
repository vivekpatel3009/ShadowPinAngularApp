import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordService } from './forgot-password.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit 
{
  public forgotpasswordform: FormGroup;
  Email:string='';
  public jsonresponse:any;
  submitted:any;
  constructor(private loginFormBuilder: FormBuilder,private _ForgotPasswordService:ForgotPasswordService ) 
  { 
    this.forgotpasswordform = this.loginFormBuilder.group
    ({
      Email: [this.Email, [Validators.required, Validators.email]],
    })
  }

  onSubmit()
  {
    this.submitted=true;

    if(this.forgotpasswordform.valid)
    {
        this._ForgotPasswordService.forgotPassword(this.Email).then(response=>
        {
          debugger;
          
            this.jsonresponse=response;

            if(this.jsonresponse.Status == true)
            {
                alert(this.jsonresponse.Message);
            }
                
        },
        error=>
        {
            console.log(error);
        });
    
    }
  }
    

  ngOnInit() 
  {
      
  }


}
