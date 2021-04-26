import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryDetailsComponent} from './components/country-details/country-details.component';
import {MainPageComponent} from './components/main-page.component';
import {UnavailableComponent} from './components/error/unavailable/unavailable.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: ':country', component: CountryDetailsComponent},
  { path: 'error/:errorType', component: UnavailableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
