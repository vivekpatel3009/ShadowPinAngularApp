import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent} from './account.component';
import {AccountRoutingModule} from './account-routing';
import {SharedModule} from '../../shared/shared.module';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { AccountService } from './account.service';
import { LookupService } from '../../master/lookup/lookup.service';
import { TimeZoneService } from '../../master/time-zone/time-zone.service';
import { CountryService } from '../../master/country/country.service';
import { StateService } from '../../master/state/state.service';
import { CityService } from '../../master/city/city.service';
@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ],
  declarations: [AccountComponent, ManageAccountComponent],
  providers:[AccountService,LookupService,TimeZoneService,CountryService,StateService,CityService]
})
export class AccountModule { }
