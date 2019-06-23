import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  DDList = [];
  
  userForm:FormGroup;
  selectedItems = [];
  AccountId:any;
  RoleId:any;
  TimeZoneId:any;

  vehiclelist = [];
  fleetlist = [];

  constructor(private formBuilder : FormBuilder) 
  { 
   
      this.GetVehicleList((vehicledata) => 
      {
        this.vehiclelist = vehicledata;
      });

    this.GetFleetList((fleetdata) => 
    {
      this.fleetlist = fleetdata;
    });

  }

  GetFleetList(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/fleet_list.json`);

    req.onload = () => 
    {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  GetVehicleList(cb) 
  {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/vehicle_list.json`);

    req.onload = () => 
    {
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
