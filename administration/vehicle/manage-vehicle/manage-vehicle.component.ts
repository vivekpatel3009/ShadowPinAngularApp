import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { VehicleService } from '../vehicle.service';
import { LoggerService } from '../../../service/logger.service';
import { LookupService } from '../../../master/lookup/lookup.service';
import { PopupMessageService } from '../../../service/popupMessageService';
import { FleetService } from '../../fleet/fleet.service';
@Component({
  selector: 'app-manage-vehicle',
  templateUrl: './manage-vehicle.component.html',
  styleUrls: ['./manage-vehicle.component.scss']
})
export class ManageVehicleComponent implements OnInit {
 
  public DDList: any
  vehicleForm: FormGroup;
  selectedItems = [];
  FleetId: any;
  EquipmentStatusId: any;
  EquipmentTypeId: any;
  operationType: any;
  PageTitle: string;
  objVehicle: any;

  vehicleID: number;
  pageNo=1;
  pageSize:number;
  totalNumberOfRecords:number;
  submited = false;
  
  //constructor(){};
  constructor(private formBuilder: FormBuilder, protected router: Router, private activatedRoute: ActivatedRoute, private _VehicleService: VehicleService, private _LoggerService: LoggerService, private popupMessageService: PopupMessageService, private _LookupService: LookupService, private _fleetSerive: FleetService)
   {
    this.operationType = this.activatedRoute.data;

    if (this.operationType.value.mode == 'create') {
      this.PageTitle = 'Create Account';
    }
    else {
      this.PageTitle = 'Edit Account';
    }

    this.objVehicle = {
      Id: 0,
      UniqueId: "vivek",
     // FirstName: "",
      FleetId: "",
      VehicleDescription: "",
      DeviceTypeId: "",
      SIMPhoneNumber: "",
      IMEIOrESN: "",
      SerialNumber: "",
      EquipmentTypeId:1,
      EquipmentStatusId:"",
      FleetPushpinID:"",
      PP: "",
      IP: "",
      TU: "",
      SM: "",
     // Status:false,
      CreationDate:"10/10/2018",
      GeoZoneId:1,
      ServerId:11,

    }
    this.vehicleForm = this.formBuilder.group
      ({
        Id: [this.objVehicle.Id],
       // FirstName: [this.objVehicle.FirstName, [Validators.required]],
        UniqueId: [this.objVehicle.UniqueId, [Validators.required]],
        EquipmentTypeId: [this.objVehicle.EquipmentTypeId, [Validators.required]],
        EquipmentStatusId: [this.objVehicle.EquipmentStatusId, [Validators.required]],
        FleetId: [this.objVehicle.FleetId, [Validators.required]],
        VehicleDescription: [this.objVehicle.VehicleDescription, [Validators.required]],
        DeviceTypeId: [this.objVehicle.DeviceTypeId, [Validators.required]],
        SIMPhoneNumber: [this.objVehicle.SIMPhoneNumber, [Validators.required]],
        IMEIOrESN: [this.objVehicle.IMEIOrESN, [Validators.required]],
        SerialNumber: [this.objVehicle.SerialNumber, [Validators.required]],
        PP: [this.objVehicle.pp, [Validators.required]],
        IP: [this.objVehicle.IP, [Validators.required]],
        TU: [this.objVehicle.TU, [Validators.required]],
        SM: [this.objVehicle.SM, [Validators.required]],
       // Status: [this.objVehicle.Status],
        CreationDate:[this.objVehicle.CreationDate,[Validators.required]],
        GeoZoneId:[this.objVehicle.GeoZoneId,[Validators.required]],
        FleetPushpinID:[this.objVehicle.FleetPushpinID,[Validators.required]],
        ServerId:[this.objVehicle.ServerId,[Validators.required]],     
        
      });
   
      this.activatedRoute.params.subscribe(params => this.vehicleID=params.id);
      if(this.vehicleID!= undefined)
      {
        this.editAccount(this.vehicleID);
      }
      this.bindDropdown();
  }

  //dropdownlist
  lstFleets: any = [];
  lstEquipmentType: any = [];
  lstEquipmentStatus: any = [];
  lstFleetPushpin:any=[];
  onSelectAll(event) {

  }

  onItemSelect(event) {

  }

  bindDropdown() {
    this.GetFleetDropDown();
    this.GetEquipmentStatusDropDown();
    this.GetEquipmentTypeDropDown();
    this.GetFleetPushpinDropDown();
  }

  GetFleetDropDown() {
    this._fleetSerive.get(0, 0).then((response: any) => {
      if (response.Status == true) {
        this.lstFleets = response.Data;

      }
    })
  }
  GetEquipmentTypeDropDown() {
    this._LookupService.get(0, 0).then((response: any) => {
      if (response.Status == true) {
        this.lstEquipmentType = response.Data;
      }
    })
  }
  GetEquipmentStatusDropDown() {
    this._LookupService.get(0, 0).then((response: any) => {
      if (response.Status == true) {
        this.lstEquipmentStatus = response.Data;
      }
    })
  }
  GetFleetPushpinDropDown() {
    this._LookupService.get(0, 0).then((response: any) => {
      if (response.Status == true) {
        this.lstFleetPushpin = response.Data;
      }
    })
  }
  editAccount(id)
  {
    this._VehicleService.getbyid(this.pageSize,this.pageNo,id).then((response:any) => 
    {
      if(response.Status == true)
      {
       
        this.objVehicle= response.Data;
        this.totalNumberOfRecords=response.TotalNumberOfRecords;

        // this.GetFleetDropDown(this.objaccount.HOCountryId,'HO');
        // this.GetEquipmentTypeDropDown(this.objaccount.HOProvinceId,'HO');
        // this.GetEquipmentStatusDropDown(this.objaccount.HOZipId,'HO');
      }
    });

  }
  onSubmitClick() 
  {
    debugger;
    this.submited = true;
    if (this.vehicleForm.valid) 
    {
      this.objVehicle = this.vehicleForm.value;
      console.log(this.objVehicle);
      
      this.objVehicle.objLoggerModel = this._LoggerService.GetLoggerDetails();
      this.objVehicle.objLoggerModel.ModuleRoute=this.router.url;
      if (this.objVehicle.Id == 0) 
      {
        this._VehicleService.create(this.objVehicle).then((response:any) => 
        {
          if(response.Status == true)
          {
            this.popupMessageService.openSuccessSwal('Created',response.Message);
            this.router.navigate(['/administration/vehicle']);

          }else
          {
            this.popupMessageService.openWarningSwal('Fail','Vehicle not created !');
          }
        console.log(response);
        });

      }
      else 
      {       
        this._VehicleService.update(this.objVehicle).then((response:any) => 
        {
          if(response.Status == true)
          {
            this.popupMessageService.openSuccessSwal('Updated',response.Message);
            this.router.navigate(['/administration/vehicle']);
          }else
          {
            this.popupMessageService.openWarningSwal('Fail','Vehicle not updated !');
          }
        });
      }

    }
  }

  ngOnInit() {
    this.DDList = [
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

}
