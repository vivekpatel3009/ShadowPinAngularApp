import { Component, OnInit } from '@angular/core';
import {MenuItems} from '../../shared/menu-items/menu-items';

@Component({
  selector: 'app-roleaccess',
  templateUrl: './roleaccess.component.html',
  styleUrls: ['./roleaccess.component.scss']
})
export class RoleAccessComponent implements OnInit {
  roleaccessList = [];
  objcurrentpage:any;
  RoleId:any;
  DDList:any;
  constructor(public menuItems: MenuItems) 
  {
    this.GetRoleAccessList((data) => 
    {
      this.roleaccessList = data;
      console.log(this.roleaccessList)
    });
  }

  GetRoleAccessList(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/roleaccess_list.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
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
