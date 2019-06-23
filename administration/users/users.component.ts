import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AuthRights } from '../../auth/auth-rights';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList = [];
  objcurrentpage:any;

  totalNumberOfRecords:number;
   currentstate:any;
  mode=AuthRights;
  pageNo:number=1;
  pageSize:number=10;
  strsearch:any;
  constructor(public authService:AuthService,public router:ActivatedRoute) {
    this.GetUserList((data) => {
      this.userList = data;
    });
    this.currentstate = this.router.snapshot.data;
  }

  GetUserList(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/user_list.json`);
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }
  ngOnInit() {
  }

}
