import { Injectable } from '@angular/core';
import { WebService } from '../../service/web.service'
import { AppGlobals } from '../../service/app.global';

@Injectable()
export class AccountService 
{
    constructor(public webService: WebService) { }

    get(pagesize,pagenumber) 
    {
        return this.webService.Get('AccountInfoAPI/GetList?PageSize='+ pagesize +'&PageNumber='+ pagenumber +'');
    }

    getbyid(pagesize,pagenumber,accountid) 
    {
        return this.webService.Get('AccountInfoAPI/GetById?PageSize='+ pagesize +'&PageNumber='+ pagenumber +'&Id='+accountid+'');
    }

    create(data) 
    {
        return this.webService.Post(data,'AccountInfoAPI/Post' );
    }

    update(data) 
    {
        return this.webService.Put(data,'AccountInfoAPI/Put');
    }

    delete(data) 
    {
        return this.webService.Delete(data,'AccountInfoAPI/Delete');
    }

}
