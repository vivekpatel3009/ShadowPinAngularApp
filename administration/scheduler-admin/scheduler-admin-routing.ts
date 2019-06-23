import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SchedulerAdminComponent} from './scheduler-admin.component';

const routes: Routes = [
  {
    path: '',
    data:{state:'scheduler-admin',mode:'view'},
    component: SchedulerAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulerAdminRoutingModule { }
