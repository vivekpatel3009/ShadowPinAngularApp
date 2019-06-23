import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthRights } from '../../auth/auth-rights';
import { FilterPipe } from 'ngx-filter-pipe';
import { PopupMessageService } from '../../service/popupMessageService';
import { FleetService } from './fleet.service';
import swal from 'sweetalert2';
import { BroadcastService } from '../../service/datatransfer.service';
import { LoggerService } from '../../service/logger.service';
@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit 
{
  fleetList = [];

  currentstate:any;
  mode=AuthRights;
  objfleet:any;

  pageNo:number=1;
  pageSize:number=10;

  strsearch:any;
  totalNumberOfRecords:number;
    
  constructor(public authService:AuthService,public route:ActivatedRoute,private broadcastService:BroadcastService,private router:Router,private popupMessageService:PopupMessageService,private filter: FilterPipe,private fleetService:FleetService,private _LoggerService:LoggerService ) 
  {
    this.currentstate = this.route.snapshot.data;
    this.GetFleetList();
  }
  GetFleetList(){
    this.fleetService.get(this.pageSize,this.pageNo).then((response:any) =>
    {
      console.log(response);
      if(response.Status == true)
      {
        this.fleetList=response.Data;
        console.log(this.fleetList);        
        this.totalNumberOfRecords=response.TotalNumberOfRecords;
      }
    });
    } 
    deleteAccount(id)
    {
      this.objfleet = this.fleetList.filter(x => x.Id == id)[0];
      this.objfleet.objLoggerModel = this._LoggerService.GetLoggerDetails();
      this.objfleet.objLoggerModel.ModuleRoute=this.router.url;

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
          this.fleetService.delete(this.objfleet).then((response:any) => 
            {
                  if(response.Status == true)
                  {
                    this.popupMessageService.openSuccessSwal('Deleted',response.Message);
                    this.GetFleetList();
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
      this.GetFleetList();
    }

    pagesizechange(value)
    {
      this.pageSize=value;
      this.GetFleetList();
    }
  ngOnInit() {
  }

}
