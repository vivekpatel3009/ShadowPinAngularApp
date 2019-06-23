import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-manage-geozone',
  templateUrl: './manage-geozone.component.html',
  styleUrls: ['./manage-geozone.component.scss']
})
export class ManageGeozoneComponent implements OnInit {
  latitude: any = 21.1591857;
  longitude: any = 72.7522563;
  latA = 21.7613308;
  lngA = 71.6753074;
  zoom = 8;
  redius: any = 50000;
  SelectedZoneColor = 'blue';
  zoneTypeId:any;
   
  geoZoneType= [];
  ZoneColors = [];

  public location = [
    {lat: 22.01318669389975, lng: 73.3949564953125},
    {lat: 21.67667156672597, lng: 74.3617533703125},
    {lat: 21.33425235956859, lng: 73.543271925},
    {lat: 21.982627205194287, lng: 73.4169291515625}
  ];

  constructor() {

  }

  onChoseLocation(event){
   this.location.push(event.coords)
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  lineDrag($event: MouseEvent){
      debugger;
  }

  lineClick($event: MouseEvent){
    debugger;
}

    onPathChanged($event){
    console.log('$event', $event.then((e)=>{
      
      e.map((item, index) => {
        console.log(item.lat(), item.lng());
      })

    }));
  }
   
//******************* Cicle GeoZone ************************** */


    RediusValueChange(event) {
        this.redius =parseInt(event);
    }

    LatitudeValueChange(event) {
        this.latitude = parseFloat(event);
    }
    LongitudeValueChange(event) {
        this.longitude =parseFloat(event);
    }

    onRadiusChange(event){
      this.redius =parseInt(event);
    }
    onDragEnd($event: MouseEvent){
      this.latitude = $event.coords.lat;
      this.longitude = $event.coords.lng;
    }


//*******************End Cicle GeoZone ************************** */

changeGeoZoneType(event){
console.log(event)
}
changeGeoZoneColors(event){
  console.log(event)
  }


  ngOnInit() {
    this.geoZoneType = [{id:1,name:'Circle'},{id:2,name:'Polygon'}];
    this.ZoneColors = [{ id: 1, name: 'blue' }, { id: 2, name: 'red'}, { id: 3, name: 'yellow'}, { id: 4, name: 'azure'}, { id: 5, name: 'Purple'}, { id: 6, name: 'Silver'}, { id: 7, name: 'Salmon'}, { id: 8, name: 'Scarlet'}, { id: 9, name: 'Teal'}, { id: 10, name: 'Turquoise'}, { id: 11, name: 'Violet'}, { id: 12, name: 'Viridian'}];

    this.zoneTypeId = 1;
  }

}
  