import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {FormBuilder,FormGroup,Validators, FormArray,FormControl, ValidatorFn} from '@angular/forms'
import { FleetService } from '../fleet.service';
import { LoggerService } from '../../../service/logger.service';
import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';
import { PopupMessageService } from '../../../service/popupMessageService';
import { LookupService } from '../../../master/lookup/lookup.service';
@Component({
  selector: 'app-manage-fleet',
  templateUrl: './manage-fleet.component.html',
  styleUrls: ['./manage-fleet.component.scss']
})
export class ManageFleetComponent implements OnInit {

  fleetForm:FormGroup;
 // fleetinterface:Ifleet
  //chkform:FormGroup;
  submited = false;
  objfleet:any;
  vehicleList=[];
  associatedvehicleList=[];
  currentVehicleMembershipList=[];
  page:any;
  operationType: any ; 

  PageTitle:string;
  pageNo=1;
  pageSize:number=10;
  fleetId:number;
  ResponceFleetId:number;
  totalNumberOfRecords:number;
  totalNumberOfRecordsAssociated:number;
  strsearch:string; 
  strsearchAssociated:string;
  lstSelectedVehicles: number[]=[];
  lstCurrentSelectedVehicles: number[]=[];
  constructor(private formBuilder : FormBuilder, protected router:Router,private activatedRoute:ActivatedRoute,private _FleetService:FleetService,private _LoggerService:LoggerService,private popupMessageService:PopupMessageService,private _LookupService: LookupService) 
  { 
    this.operationType = this.activatedRoute.data;
    if(this.operationType.value.mode == 'create')
    {
      this.PageTitle='Create Fleet';
    }
    else
    {
      this.PageTitle='Edit Fleet';
    }
    //this.GetcurrentVehicleMembershipList();

  this.objfleet= 
  {
    Id:0,
    FleetName: "",
    FleetDescription: "",
    GeoZoneId:0
  }
 //form object
 this.fleetForm = this.formBuilder.group
 ({
   Id: [this.objfleet.Id],
   FleetName:[this.objfleet.FleetName,[Validators.required]],
   FleetDescription:[this.objfleet.FleetDescription,[Validators.required]]
  });
  this.activatedRoute.params.subscribe(params => this.fleetId=params.id);
  debugger;
  if(this.fleetId!= undefined)
  {
    this.editFleet(this.fleetId);
  }
}
GetvehicleList(isassign) 
{
  debugger;
  this._FleetService.GetAvailableVehicleList(this.pageSize,this.pageNo,this.objfleet.Id,isassign).then((response:any) =>
  {
    if(response.Status == true)
    {
      if(isassign==false)
      {
          this.vehicleList=response.Data;
      }
      else
      {
        this.associatedvehicleList=response.Data;
      }

     // this.vehicleList=response.Data;
      console.log(this.vehicleList);
      this.totalNumberOfRecords=response.TotalNumberOfRecords;
    }
  });
 }
  // GetcurrentVehicleMembershipList(){
  //   this._FleetService.get(this.pageSize,this.pageNo).then((response:any) =>
  //   {
  //     if(response.Status == true)
  //     {
  //       this.currentVehicleMembershipList = response.Data;
  //       this.totalNumberOfRecords=response.TotalNumberOfRecords;
  //     }
  //   });
  // }
fleetist: any = [];
//  currentVehicleMembershipList: any = [];
onSubmitClick() 
  {
    debugger
    this.submited = true;
    if (this.fleetForm.valid) 
    {
      debugger;
      this.objfleet = this.fleetForm.value;      
      this.objfleet.objLoggerModel = this._LoggerService.GetLoggerDetails();
      this.objfleet.objLoggerModel.ModuleRoute=this.router.url;
      this.objfleet.GeoZoneId=0;
      if (this.objfleet.Id == 0) 
      {
        this._FleetService.create(this.objfleet).then((response:any) => 
        {
          if(response.Status == true)
          {
            this.objfleet.Id=response.Data.Id;
            this.popupMessageService.openSuccessSwal('Created',response.Message);
            this.GetvehicleList(false);
            // this.router.navigate(['/administration/fleet']);

          }else
          {
            this.popupMessageService.openWarningSwal('Fail','Vehicle not created !');
          }
        });

      }
      else 
      {       
        this._FleetService.update(this.objfleet).then((response:any) => 
        {
          if(response.Status == true)
          {
            this.popupMessageService.openSuccessSwal('Updated',response.Message);
            this.router.navigate(['/administration/fleet']);
          }else
          {
            this.popupMessageService.openWarningSwal('Fail','Vehicle not updated !');
          }
        });
      }

    }
  } 
  fnAssociatedvehicle()
  {  
    let objFleetdetail:any={};
    objFleetdetail.Id= this.objfleet.Id;
    objFleetdetail.VehicleIds =  this.lstSelectedVehicles;
    objFleetdetail.objLoggerModel =  this._LoggerService.GetLoggerDetails();
    objFleetdetail.objLoggerModel.ModuleRoute=this.router.url

    if (this.SelectedVehicles.length > 0) 
    {
      console.log(objFleetdetail);
      this._FleetService.SelectedVehicleIds(objFleetdetail).then((response:any) => 
      {
        if(response.Status == true)
        { 
          debugger;
          this.popupMessageService.openSuccessSwal('Created',response.Message);
          this.GetvehicleList(false);
          this.GetvehicleList(true);
          // this.router.navigate(['/administration/fleet/add']);
        }else
        {
          this.popupMessageService.openWarningSwal('Fail','Vehicle not created !');
        }
      });
    }
  }
  fnCurrentAssociatedvehicle()
  {debugger;
    let objCurrentFleetdetail:any={};
    objCurrentFleetdetail.Id= this.objfleet.Id;
    objCurrentFleetdetail.vehicleids =  this.lstCurrentSelectedVehicles;
    objCurrentFleetdetail.objLoggerModel =  this._LoggerService.GetLoggerDetails();
    objCurrentFleetdetail.objLoggerModel.ModuleRoute=this.router.url
console.log(objCurrentFleetdetail);
    if (this.SelectedVehicles.length > 0) 
    {
      this._FleetService.SelectedVehicleIds(objCurrentFleetdetail).then((response:any) => 
      {
        console.log(response);
        
        if(response.Status == true)
        { 
          //GetAvailableVehicleList();
          this.GetvehicleList(false);
          this.GetvehicleList(true);
          this.popupMessageService.openSuccessSwal('Created',response.Message);
          // this.router.navigate(['/administration/fleet/add']);
        }else
        {
          this.popupMessageService.openWarningSwal('Fail','Vehicle not created !');
        }
      });
    }
  }
editFleet(id)
{
  debugger;
  this._FleetService.getbyid(this.pageSize,this.pageNo,id).then((response:any) => 
  {
    if(response.Status == true)
    {     
      this.objfleet= response.Data;
      this.GetvehicleList(false);
      this.GetvehicleList(true);
      this.totalNumberOfRecords=response.TotalNumberOfRecords;
    }
  });
}

SelectedVehicles(event) {
  if (event.target.checked) {
              this.lstSelectedVehicles.push(event.target.value);
   } else {       
              this.lstSelectedVehicles.splice(this.lstSelectedVehicles.indexOf(event.target.value), 1); 
  }
}
CurrentSelectedVehicles(event) {
  debugger; 
  if (event.target.checked) {
              this.lstCurrentSelectedVehicles.push(event.target.value);
   } else {       
              this.lstCurrentSelectedVehicles.splice(this.lstCurrentSelectedVehicles.indexOf(event.target.value), 1); 
  }
}
pagechange(value)
{
  this.pageNo=value;
  this.editFleet(this.fleetId)
}

pagesizechange(value)
{
  this.pageSize=value;
  this.editFleet(this.fleetId)
}
  ngOnInit() {   
  }

}
