import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: '/dashboard',pathMatch: 'full'},
  {
    path: '',
    data: 
    {
      state: 'mapping',
      mode: 'main'
    },
    children: 
    [
      {
        path: 'vehicle-mapping',
        loadChildren: './vehicle-mapping/vehicle-mapping.module#VehicleMappingModule'
      } ,
      {
        path: 'fleet-mapping',
        loadChildren: './fleet-mapping/fleet-mapping.module#FleetMappingModule'
      }, 
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MappingRoutingModule { }
