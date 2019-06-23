import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { AccountService } from '../account.service';
import { LoggerService } from '../../../service/logger.service';
import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';
import { PopupMessageService } from '../../../service/popupMessageService';
import { LookupService } from '../../../master/lookup/lookup.service';
import { TimeZoneService } from '../../../master/time-zone/time-zone.service';
import { CountryService } from '../../../master/country/country.service';
import { StateService } from '../../../master/state/state.service';
import { CityService } from '../../../master/city/city.service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss'],
})
export class ManageAccountComponent implements OnInit {
 
  accountForm:FormGroup;
  submited = false;
  objaccount:any;
  userlist=[];

  rowsClient = [];
  page:any;
  DDList =[];
  operationType: any ; 

  //for dorpdown list items

  lstLookupItems:any=[];
  lstTimezoneItems:any=[];
  lstHOCountryItems:any=[];
  lstBillingCountryItems:any=[];
  lstHOProvinceItems:any=[];
  lstBillingProvinceItems:any=[];
  lstHOCityItems:any=[];
  lstBillingCityItems:any=[];
  lstHOZipItems:any=[];
  lstBillingZipItems:any=[];

  //

  PageTitle:string;
  IsHOProvinceDisable:boolean=true;
  IsHOCityDisable:boolean=true;
  IsHOZipDisable:boolean=true;

  IsBillingProvinceDisable:boolean=true;
  IsBillingCityDisable:boolean=true;
  IsBillingZipDisable:boolean=true;

  pageNo=1;
  pageSize:number=10;

  accountId:number;
  totalNumberOfRecords:number;
  strsearch:string;

constructor(private formBuilder : FormBuilder, protected router:Router,private activatedRoute:ActivatedRoute,private _AccountService:AccountService,private _LoggerService:LoggerService,private popupMessageService:PopupMessageService,private _LookupService: LookupService,private _TimeZoneService:TimeZoneService,private _CountryService:CountryService,private _StateService:StateService,private _CityService:CityService) 
{

  this.operationType = this.activatedRoute.data;

  if(this.operationType.value.mode == 'create')
  {
    this.PageTitle='Create Account';
  }
  else
  {
    this.PageTitle='Edit Account';
  }
  

  // model object
  this.objaccount= 
  {
    Id:0,
    AccountDescription: "",
    AccountName: "",
    AdminFirstName: "",
    AdminLastName: "",
    AdminFullName: "",
    AdminEmail: "",
    AdminPhone: "",
    NotificationEmail: "",
    TimezoneId: "",
    // SpeedUnitId:"" ,
    DistanceUnitId:"" ,
    // VolumeUnitId:"" ,
    // EconomyUnitId:"" ,
    // PressureUnitId:"" ,
    TemperatureUnitId: "",
    LatLongFormatUnitId: "",
    // DeviceTitle:"",
    // DeviceGroupTitle:"",
    BillingAddress: "",
    BillingCityId: "",
    BillingZipId: "",
    BillingProvinceId: "",
    BillingCountryId: "",
    BillingPhone: "",
    HOAddress: "",
    HOCityId: "",
    HOZipId: "",
    HOProvinceId: "",
    HOCountryId: "",
    HOPhone: "",
    BillingAddSameAsHOAdd: false,
  }

  //form object

  this.accountForm = this.formBuilder.group
  ({
    Id: [this.objaccount.Id],
    AccountName:[this.objaccount.AccountName,[Validators.required]],
    AccountDescription:[this.objaccount.AccountDescription,[Validators.required]],
    AdminFirstName:[this.objaccount.AdminFirstName,[Validators.required]],
    AdminLastName:[this.objaccount.AdminLastName,[Validators.required]],
    AdminFullName:[this.objaccount.AdminFullName],
    AdminEmail:[this.objaccount.AdminEmail,[Validators.required,Validators.email]],
    AdminPhone:[this.objaccount.AdminPhone,[Validators.required]],
    NotificationEmail:[this.objaccount.NotificationEmail,[Validators.required,Validators.email]],
    TimezoneId:[this.objaccount.TimezoneId,[Validators.required]],
    // SpeedUnitId:[this.objaccount.SpeedUnitId],
    DistanceUnitId:[this.objaccount.DistanceUnitId],
    // VolumeUnitId:[this.objaccount.VolumeUnitId],
    // EconomyUnitId:[this.objaccount.EconomyUnitId],
    // PressureUnitId:[this.objaccount.PressureUnitId],
    TemperatureUnitId:[this.objaccount.TemperatureUnitId],
    LatLongFormatUnitId:[this.objaccount.LatLongFormatUnitId],
    // DeviceTitle:[this.objaccount.DeviceTitle],
    // DeviceGroupTitle:[this.objaccount.DeviceGroupTitle],
    BillingAddress:[this.objaccount.BillingAddress,[Validators.required]],
    BillingCityId:[this.objaccount.BillingCityId,[Validators.required]],
    BillingZipId:[this.objaccount.BillingZipId,[Validators.required]],
    BillingProvinceId:[this.objaccount.BillingProvinceId,[Validators.required]],
    BillingCountryId:[this.objaccount.BillingCountryId,[Validators.required]],
    BillingPhone:[this.objaccount.BillingPhone,[Validators.required]],
    HOAddress:[this.objaccount.HOAddress,[Validators.required]],
    HOCityId:[this.objaccount.HOCityId,[Validators.required]],
    HOZipId:[this.objaccount.HOZipCode,[Validators.required]],
    HOProvinceId:[this.objaccount.HOProvinceId,[Validators.required]],
    HOCountryId:[this.objaccount.HOCountryId,[Validators.required]],
    HOPhone:[this.objaccount.HOPhone,[Validators.required]],
    BillingAddSameAsHOAdd:[this.objaccount.BillingAddSameAsHOAdd]
  });

  this.GetUserList(data=> 
  {
    this.userlist=data;
  });
debugger;
  this.activatedRoute.params.subscribe(params => this.accountId=params.id);

  this.editAccount(this.accountId);

  this.bindDropdown();
  
}


  GetUserList(cb) 
  {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/user_list.json`);
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/account_list.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }


  ngOnInit() 
  {

    this.DDList = 
    [
      { item_id: 1, item_text: 'option 1' },
      { item_id: 2, item_text: 'option 2' },
      { item_id: 3, item_text: 'option 3' },
      { item_id: 4, item_text: 'option 4' },
      { item_id: 5, item_text: 'option 5' },
      { item_id: 6, item_text: 'option 6' },
      { item_id: 7, item_text: 'option 7' },
      { item_id: 8, item_text: 'option 8' },
      { item_id: 9, item_text: 'option 9' },
      { item_id: 10, item_text: 'option 10' },
    ];
  
  }

  getLookupItemforDropDown()
  {
    this._LookupService.get(0,0).then((response:any)=>
    {
      if(response.Status==true)    
      {
        this.lstLookupItems=response.Data;
      }
    })
  }

  getTimezoneforDropDown()
  {
    this._TimeZoneService.get(0,0).then((response:any)=>
    {
      if(response.Status==true)    
      {
        this.lstTimezoneItems=response.Data;
      }
    })
  }

  getCountryforDropDown()
  {
    this._CountryService.get(0,0).then((response:any)=>
    {
      if(response.Status==true)    
      {
        this.lstHOCountryItems=response.Data;
        this.lstBillingCountryItems=response.Data;
      }
    })
  }

  getZipforDropDown()
  {
    this._CountryService.get(0,0).then((response:any)=>
    {
      if(response.Status==true)    
      {
        this.lstHOCountryItems=response.Data;
        this.lstBillingCountryItems=response.Data;
      }
    })
  }


  getStatebyCountry(id,mode)
  {
    this._StateService.get(0,0,id).then((response:any)=>
    {
      if(response.Status==true)    
      {
        this.lstHOProvinceItems=response.Data;
        this.lstBillingProvinceItems=response.Data;

        if(mode == 'HO')
        {
          this.IsHOProvinceDisable = false;
          this.lstHOCityItems=[];
        }
        else
        {
          this.IsBillingProvinceDisable = false;
          this.lstBillingCityItems=[];
        }
        
      }
    })
  }

  getCityforDropDown(id,mode)
  {
    this._CityService.get(0,0,id).then((response:any)=>
    {
      if(response.Status==true)    
      {
        
        this.lstHOCityItems=response.Data;
        this.lstBillingCityItems=response.Data;

        if(mode == 'HO')
        {
          this.IsHOCityDisable = false;
        }
        else
        {
          this.IsBillingCityDisable = false;
        }
      }
    })
  }

  GetZipCode(id,mode)
  {
    this._CityService.getzipcode(0,0,id).then((response:any)=>
    {
      if(response.Status==true)    
      {
        this.lstHOZipItems=response.Data;
        this.lstBillingZipItems=response.Data;

        if(mode == 'HO')
        {
          this.IsHOZipDisable = false;
        }
        else
        {
          this.IsBillingZipDisable = false;
        }
      }
    })
  }


  bindDropdown()
  {
      this.getLookupItemforDropDown();
      this.getTimezoneforDropDown();
      this.getCountryforDropDown();
  }

  editAccount(id)
  {
    this._AccountService.getbyid(this.pageSize,this.pageNo,id).then((response:any) => 
    {
      debugger;
      if(response.Status == true)
      {
        this.objaccount= response.Data;
        this.totalNumberOfRecords=response.TotalNumberOfRecords;

        this.IsHOProvinceDisable=false;
        this.IsHOCityDisable=false;
        this.IsHOZipDisable=false;

        this.IsBillingProvinceDisable=false;
        this.IsBillingCityDisable=false;
        this.IsBillingZipDisable=false;

        this.getStatebyCountry(this.objaccount.HOCountryId,'HO');
        this.getCityforDropDown(this.objaccount.HOProvinceId,'HO');
        this.GetZipCode(this.objaccount.HOZipId,'HO');

      }
    });

  }

  onSubmitClick() 
  {
    this.submited = true;

    if (this.accountForm.valid) 
    {
      this.objaccount = this.accountForm.value;
      console.log(this.objaccount);
      
      this.objaccount.objLoggerModel = this._LoggerService.GetLoggerDetails();
      this.objaccount.objLoggerModel.ModuleRoute=this.router.url;
      
      if (this.objaccount.Id == 0) 
      {
        this._AccountService.create(this.objaccount).then((response:any) => 
        {
          if(response.Status == true)
          {
            this.popupMessageService.openSuccessSwal('Created',response.Message);
            this.router.navigate(['/administration/account']);

          }else
          {
            this.popupMessageService.openWarningSwal('Fail','Account not created !');
          }
        console.log(response);
        });

      }
      else 
      {
       
        this._AccountService.update(this.objaccount).then((response:any) => 
        {
          if(response.Status == true)
          {
            this.popupMessageService.openSuccessSwal('Updated',response.Message);
            this.router.navigate(['/administration/account']);
          }else
          {
            this.popupMessageService.openWarningSwal('Fail','Account not updated !');
          }
        });

      }

    }
  }

  checkBillingAddress(value)
  {
    if(value==true)
    {
        this.objaccount.BillingAddress = this.objaccount.HOAddress;
        this.objaccount.BillingCountryId = this.objaccount.HOCountryId;
        this.objaccount.BillingProvinceId = this.objaccount.HOProvinceId;
        this.objaccount.BillingCityId = this.objaccount.HOCityId;
        this.objaccount.BillingZipId = this.objaccount.HOZipId;
        this.objaccount.BillingPhone = this.objaccount.HOPhone;
    }
    else
    {
      
      this.objaccount.BillingAddress = '';
      this.objaccount.BillingCountryId = '';
      this.objaccount.BillingProvinceId = '';
      this.objaccount.BillingCityId = '';
      this.objaccount.BillingZipId = '';
      this.objaccount.BillingPhone = '';
    }
  }

  pagechange(value)
  {
    this.pageNo=value;
    this.editAccount(this.accountId)
  }

  pagesizechange(value)
  {
    this.pageSize=value;
    this.editAccount(this.accountId)
  }

}
