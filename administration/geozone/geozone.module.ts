import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeozoneComponent} from './geozone.component';
import {GeozoneRoutingModule} from './geozone-routing';
import {SharedModule} from '../../shared/shared.module';
import { ManageGeozoneComponent } from './manage-geozone/manage-geozone.component';


@NgModule({
  imports: [
    CommonModule,
    GeozoneRoutingModule,
    SharedModule
  ],
  declarations: [GeozoneComponent, ManageGeozoneComponent]
})
export class GeozoneModule { }
