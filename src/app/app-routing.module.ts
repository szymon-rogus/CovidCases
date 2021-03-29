import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryDetailsComponent} from "./main/country-details/country-details.component";
import {MainPageComponent} from "./main/main-page.component";
import {UnavailableComponent} from "./main/error/unavailable/unavailable.component";


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: ':country', component: CountryDetailsComponent},
  { path: 'error/:errorType', component: UnavailableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
