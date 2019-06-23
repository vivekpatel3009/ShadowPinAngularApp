import { Injectable } from '@angular/core';
import { WebService } from '../../service/web.service'
import { AppGlobals } from '../../service/app.global';

@Injectable()
export class VehicleService 
{
    constructor(public webService: WebService) { }

    get(pagesize,pagenumber) 
    {
        return this.webService.Get('VehicleMasterAPI/GetList?PageSize='+ pagesize +'&PageNumber='+ pagenumber +'');
    }

    getbyid(pagesize,pagenumber,vahicleId) 
    {
        return this.webService.Get('VehicleMasterAPI/GetById?Id='+vahicleId);
    }

    create(data) 
    {
        return this.webService.Post(data,'VehicleMasterAPI/Post' );
    }

    update(data) 
    {
        return this.webService.Put(data,'VehicleMasterAPI/Put');
    }

    delete(data) 
    {
        return this.webService.Delete(data,'VehicleMasterAPI/Delete');
    }

}
