import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryDetailsComponent} from "./main/country-details/country-details.component";
import {MainPageComponent} from "./main/main-page.component";


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: ':country', component: CountryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
