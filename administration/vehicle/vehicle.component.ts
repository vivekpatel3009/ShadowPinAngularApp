import { Component, OnInit } from '@angular/core';
import { AuthRights } from '../../auth/auth-rights';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { BroadcastService } from '../../service/datatransfer.service';
import { PopupMessageService } from '../../service/popupMessageService';
import { FilterPipe } from 'ngx-filter-pipe';
import { VehicleService  } from './vehicle.service';
import { LoggerService } from '../../service/logger.service';
import swal from 'sweetalert2';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  vehicleList = []; 

  currentstate:any;
  mode=AuthRights;
  objvehicle:any;

  pageNo:number=1;
  pageSize:number=10;

  strsearch:any;
  totalNumberOfRecords:number;

 
  
  constructor(public authService:AuthService,public route:ActivatedRoute ,private broadcastService:BroadcastService,private router:Router,private popupMessageService:PopupMessageService,private filter: FilterPipe,private vahecleService:VehicleService ,private _LoggerService:LoggerService ) {
    this.GetVehicleList();
    this.currentstate = this.route.snapshot.data;
  }

  GetVehicleList() {
    // const req = new XMLHttpRequest();
    // req.open('GET', `assets/data/vehicle_list.json`);

    // req.onload = () => {
    //   cb(JSON.parse(req.response));
    // };

    // req.send();
 
    this.vahecleService.get(this.pageSize,this.pageNo).then((response:any) =>
    {
      console.log(response);
      if(response.Status == true)
      {
        this.vehicleList=response.Data;
        this.totalNumberOfRecords=response.TotalNumberOfRecords;
      }
    });
  }

  deleteAccount(id)
  {
    this.objvehicle = this.vehicleList.filter(x => x.Id == id)[0];
    this.objvehicle.objLoggerModel = this._LoggerService.GetLoggerDetails();
    this.objvehicle.objLoggerModel.ModuleRoute=this.router.url;

     swal
    ({
      title: 'Are you sure?',
      text: 'You wont be able to revert',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result=>
    {
        if(result.value == true)
        {
        this.vahecleService.delete(this.objvehicle).then((response:any) => 
          {
                if(response.Status == true)
                {
                  this.popupMessageService.openSuccessSwal('Deleted',response.Message);
                  this.GetVehicleList();
                }
                else
                {
                  this.popupMessageService.openWarningSwal('Fail','Lookup not deleted !');
                }

              });
        }
    })
    
  }
    
  pagechange(value)
  {
    this.pageNo=value;
    this.GetVehicleList();
  }

  pagesizechange(value)
  {
    this.pageSize=value;
    this.GetVehicleList();
  }
  ngOnInit() 
  {

  }

}
