import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VehicleComponent} from './vehicle.component';
import {ManageVehicleComponent} from './manage-vehicle/manage-vehicle.component';

const routes: Routes = [
  {
    path: '',
    data:{state:'vehicle',mode:'view'},
    component: VehicleComponent,
  },
  {path:'add',data:{state:'vehicle',mode:'create'},component:ManageVehicleComponent},
  {path:'edit/:id',data:{state:'vehicle',mode:'edit'},component:ManageVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
