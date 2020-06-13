import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryDetailsComponent} from "./server/country-details/country-details.component";
import {ServerComponent} from "./server/server.component";


const routes: Routes = [
  { path: '', component: ServerComponent},
  { path: ':country', component: CountryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
