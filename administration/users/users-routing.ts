import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {ManageUserComponent} from './manage-user/manage-user.component';


const routes: Routes = [
  {path: '',data:{state:'user',mode:'view'},component: UsersComponent,},
  {path:'add',data:{state:'user',mode:'create'},component:ManageUserComponent},
  {path:'edit/:id',data:{state:'user',mode:'edit'},component:ManageUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
