import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FleetComponent} from './fleet.component';
import {ManageFleetComponent} from './manage-fleet/manage-fleet.component';
const routes: Routes = [
  {
    path: '',
    data:{state:'fleet',mode:'view'},
    component: FleetComponent,
  },
  {path:'add',data:{state:'fleet', mode:'create'},component:ManageFleetComponent},
  {path:'edit/:id',data:{ state:'fleet', mode:'edit'},component:ManageFleetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetRoutingModule { }
