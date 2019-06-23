import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FleetMappingComponent} from './fleet-mapping.component';

const routes: Routes = [
  {
    path: '',
    data: 
    {
      state: 'fleet-mapping',
      mode: 'view'
    },
    component: FleetMappingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetMappingRoutingModule { }
