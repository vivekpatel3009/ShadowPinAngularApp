import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManageFleetComponent} from './manage-fleet.component';
const routes: Routes = [
  {path: '',component: ManageFleetComponent,data: {title: 'Manage Fleet'}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAccountRoutingModule { }
