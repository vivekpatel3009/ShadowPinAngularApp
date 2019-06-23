import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RoleAccessComponent } from './roleaccess.component';

const routes: Routes = [
  {
    path: '',
    data:{state:'role-access',mode:'view'},
    component: RoleAccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleAccessRoutingModule { }
