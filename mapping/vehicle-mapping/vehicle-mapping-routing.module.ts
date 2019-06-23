import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VehicleMappingComponent} from './vehicle-mapping.component';

const routes: Routes = [
  {
    path: '',
    data: 
    {
      state: 'vehicle-mapping',
      mode: 'view'
    },
    component: VehicleMappingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleMappingRoutingModule { }
