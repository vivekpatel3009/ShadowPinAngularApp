import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AuthRights } from '../../auth/auth-rights';

@Component({
  selector: 'app-geozone',
  templateUrl: './geozone.component.html',
  styleUrls: ['./geozone.component.scss']
})
export class GeozoneComponent implements OnInit {

  geozoneList = [];
  objcurrentpage:any;
  currentstate:any;
  mode=AuthRights;

 constructor(public authService:AuthService,public router:ActivatedRoute) 
 {
    this.GetGeozoneList((data) => 
    {
      this.geozoneList = data;
    });
    this.currentstate = this.router.snapshot.data;

  }

  GetGeozoneList(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/Geozone_list.json`);

    req.onload = () => 
    {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  ngOnInit()
  {
  }

}
