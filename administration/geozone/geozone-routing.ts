import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeozoneComponent} from './geozone.component';
import {ManageGeozoneComponent} from './manage-geozone/manage-geozone.component';

const routes: Routes = [
  {path: '', data:{state:'geozone',mode:'view'},component: GeozoneComponent},
  {path:'add',data:{state:'geozone',mode:'create'},component:ManageGeozoneComponent},
  {path:'edit/:id/:Geozone',data:{state:'geozone',mode:'edit'},component:ManageGeozoneComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeozoneRoutingModule { }
