import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ContactUsComponent } from './contactus.component';

const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
    data: {
      title: 'Contact Us'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
