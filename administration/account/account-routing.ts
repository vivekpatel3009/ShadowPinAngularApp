import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountComponent} from './account.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';

const routes: Routes = 
[
  {
    path: '',
    data:{state:'account',mode:'view'},
    component: AccountComponent,
  },
  {path:'add',data:{state:'account',mode:'create'},component:ManageAccountComponent},
  {path:'edit/:id',data:{state:'account',mode:'edit'},component:ManageAccountComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class AccountRoutingModule { }
