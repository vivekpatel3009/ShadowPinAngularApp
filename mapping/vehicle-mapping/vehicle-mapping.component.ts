import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-mapping',
  templateUrl: './vehicle-mapping.component.html',
  styleUrls: ['./vehicle-mapping.component.scss']
})
export class VehicleMappingComponent implements OnInit {

  vehicleMappingList = [];
  selectClient = [];
  DDListforVehicle=[];
  DDListforFleet=[];
  dropdownList:any;
  selectedItems:any;
  objcurrentPage:any;
  VehicleId:any;
  FleetId:any;

  lat = 21.1591857;
  lng = 72.7522563;
  zoom = 8;
  public location = [
    {lat: 22.01318669389975, lng: 73.3949564953125},
    {lat: 21.67667156672597, lng: 74.3617533703125},
    {lat: 21.33425235956859, lng: 73.543271925},
    {lat: 21.982627205194287, lng: 73.4169291515625},
    {lat: 23.0211983, lng: 72.5049783}
  ];

  constructor() 
  {
    this.GetVehicleMapping((data) => 
    {
      this.vehicleMappingList = data;
      
    });
    this.selectClient = [{id:1,text:'test1',value:'testtest1'},{id:2,text:'test2',value:'testtest1'},{id:3,text:'test3',value:'testtest1'},{id:4,text:'test4',value:'testtest1'}]
  }

  GetVehicleMapping(cb) 
  {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/vehiclemapping_list.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  

    
  onItemSelect(val)
  {

  }

  onSelectAll(val)
  {

  }

  lineClick(val)
  {

  }
 
ngOnInit() {
  
  this.DDListforFleet = 
  [
    { item_id: 1, item_text: 'Fleet 1' },
    { item_id: 2, item_text: 'Fleet 2' },
    { item_id: 3, item_text: 'Fleet 3' },
    { item_id: 4, item_text: 'Fleet 4' },
    { item_id: 5, item_text: 'Fleet 5' },
    { item_id: 6, item_text: 'Fleet 6' },
    { item_id: 7, item_text: 'Fleet 7' },
    { item_id: 8, item_text: 'Fleet 8' },
    { item_id: 9, item_text: 'Fleet 9' },
    { item_id: 10, item_text: 'Fleet 10' },
  ];

  this.DDListforVehicle = 
  [
    { item_id: 1, item_text: 'Vehicle 1' },
    { item_id: 2, item_text: 'Vehicle 2' },
    { item_id: 3, item_text: 'Vehicle 3' },
    { item_id: 4, item_text: 'Vehicle 4' },
    { item_id: 5, item_text: 'Vehicle 5' },
    { item_id: 6, item_text: 'Vehicle 6' },
    { item_id: 7, item_text: 'Vehicle 7' },
    { item_id: 8, item_text: 'Vehicle 8' },
    { item_id: 9, item_text: 'Vehicle 9' },
    { item_id: 10, item_text: 'Vehicle 10' },
  ];

}

}