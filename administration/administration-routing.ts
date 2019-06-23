import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[
  {path: '',redirectTo: '/dashboard',pathMatch: 'full'},
  {
    path: '',
    data:
    {
      state:'administration',
      mode:'main'
    },
    children: 
    [
      {
        path: 'account',
        loadChildren: './account/account.module#AccountModule'
      },
      {
        path: 'user',
        loadChildren: './users/users.module#UsersModule'
      },
      {
        path: 'fleet',
        loadChildren: './fleet/fleet.module#FleetModule'
      },
      {
        path: 'vehicle',
        loadChildren: './vehicle/vehicle.module#VehicleModule'
      },
      {
        path: 'geozone',
        loadChildren: './geozone/geozone.module#GeozoneModule'
      },
      {
        path: 'change-password',
        loadChildren: './change-password/change-password.module#ChangePasswordModule'
      },
      {
        path: 'scheduler-admin',
        loadChildren: './scheduler-admin/scheduler-admin.module#SchedulerAdminModule'
      },
      {
        path: 'role-access',
        loadChildren: './roleaccess/roleaccess.module#RoleAccessModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
