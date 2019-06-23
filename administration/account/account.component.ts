import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthRights } from './../../auth/auth-rights';
import { FilterPipe } from 'ngx-filter-pipe';
import { PopupMessageService } from '../../service/popupMessageService';
import { AccountService } from './account.service';
import swal from 'sweetalert2';
import { BroadcastService } from '../../service/datatransfer.service';
import { LoggerService } from '../../service/logger.service';

@Component({  
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit 
{
  accountList = [];

  currentstate:any;
  mode=AuthRights;
  objaccount:any;

  pageNo:number=1;
  pageSize:number=10;

  strsearch:any;
  totalNumberOfRecords:number;


  constructor(public authService:AuthService,public route:ActivatedRoute,private broadcastService:BroadcastService,private router:Router,private popupMessageService:PopupMessageService,private filter: FilterPipe,private accountService:AccountService,private _LoggerService:LoggerService ) 
  {
    this.currentstate = this.route.snapshot.data;

    this.GetAccountList();
  }

    ngOnInit() 
    {        

    }    

    GetAccountList() 
  {
    // const req = new XMLHttpRequest();
    // req.open('GET', `assets/data/lookup_list.json`);
    // req.onload = () => 
    // {
    //   cb(JSON.parse(req.response));
    // };
    // req.send();
    
    this.accountService.get(this.pageSize,this.pageNo).then((response:any) =>
    {
      console.log(response);
      if(response.Status == true)
      {
        this.accountList=response.Data;
        console.log(this.accountList);
        this.totalNumberOfRecords=response.TotalNumberOfRecords;
      }
    });

    }

    deleteAccount(id)
    {
      this.objaccount = this.accountList.filter(x => x.Id == id)[0];
      this.objaccount.objLoggerModel = this._LoggerService.GetLoggerDetails();
      this.objaccount.objLoggerModel.ModuleRoute=this.router.url;

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
          this.accountService.delete(this.objaccount).then((response:any) => 
            {
                  if(response.Status == true)
                  {
                    this.popupMessageService.openSuccessSwal('Deleted',response.Message);
                    this.GetAccountList();
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
      this.GetAccountList();
    }

    pagesizechange(value)
    {
      this.pageSize=value;
      this.GetAccountList();
    }
 
}
