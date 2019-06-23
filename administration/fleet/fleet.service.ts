import { Injectable } from '@angular/core';
import { WebService } from '../../service/web.service'
import { AppGlobals } from '../../service/app.global';

@Injectable()
export class FleetService 
{
    constructor(public webService: WebService) { }

    get(pagesize,pagenumber) 
    {
        return this.webService.Get('FleetMasterAPI/GetList?PageSize='+ pagesize +'&PageNumber='+ pagenumber +'');
    }
    getbyid(pagesize,pagenumber,fleetid) 
    {
        return this.webService.Get('FleetMasterAPI/GetById?Id='+fleetid+'');
    }

    create(data) 
    {
        return this.webService.Post(data,'FleetMasterAPI/Post' );
    }

    update(data) 
    {
        return this.webService.Put(data,'FleetMasterAPI/Put');
    }

    delete(data) 
    {
        return this.webService.Delete(data,'FleetMasterAPI/Delete');
    }

    SelectedVehicleIds(data) 
    {
        return this.webService.Post(data,'FleetMasterAPI/AssociatedVehiclesWithFleet');
    }
    
    GetAvailableVehicleList(pagesize,pagenumber,fleetid,isinsidefleet) 
    {
        return this.webService.Get('FleetMasterAPI/AssociatedVehicleListWithFleet?PageSize='+ pagesize +'&PageNumber='+ pagenumber +'&FleetId=' + fleetid + '&IsInsideFleet=' + isinsidefleet + '');
    }

}
