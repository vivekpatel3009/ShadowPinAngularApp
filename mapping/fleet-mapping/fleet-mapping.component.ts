import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleet-mapping',
  templateUrl: './fleet-mapping.component.html',
  styleUrls: ['./fleet-mapping.component.scss']
})
export class FleetMappingComponent implements OnInit {

  fleetMappingReportList = [];
  selectClient = [];
  DDListforFleet = [];
  dropdownList: any;
  selectedItems: any;
  objcurrentPage: any;
  FleetId: any;
  TimezoneId: any;

  lat = 21.1591857;
  lng = 72.7522563;
  zoom = 8;
  public location = [
    { lat: 22.01318669389975, lng: 73.3949564953125 },
    { lat: 21.67667156672597, lng: 74.3617533703125 },
    { lat: 21.33425235956859, lng: 73.543271925 },
    { lat: 21.982627205194287, lng: 73.4169291515625 },
    { lat: 23.0211983, lng: 72.5049783 }
  ];

  constructor() {
    this.GetFleetMappingReportList((data) => {
      this.fleetMappingReportList = data;
      console.log(this.fleetMappingReportList);
      console.log(data);
    });
    this.selectClient = [{ id: 1, text: 'test1', value: 'testtest1' }, { id: 2, text: 'test2', value: 'testtest1' }, { id: 3, text: 'test3', value: 'testtest1' }, { id: 4, text: 'test4', value: 'testtest1' }]
  }

  GetFleetMappingReportList(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/fleetMappingreport_list.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }




  onItemSelect(val) {

  }

  onSelectAll(val) {

  }

  lineClick(val) {

  }

  ngOnInit() {
    this.DDListforFleet =
      [
        { fleetId: 1, item_text: 'Fleet 1' },
        { fleetId: 2, item_text: 'Fleet 2' },
        { fleetId: 3, item_text: 'Fleet 3' },
        { fleetId: 4, item_text: 'Fleet 4' },
        { fleetId: 5, item_text: 'Fleet 5' },
        { fleetId: 6, item_text: 'Fleet 6' },
        { fleetId: 7, item_text: 'Fleet 7' },
        { fleetId: 8, item_text: 'Fleet 8' },
        { fleetId: 9, item_text: 'Fleet 9' },
        { fleetId: 10, item_text: 'Fleet 10' },
      ];
  }

}
