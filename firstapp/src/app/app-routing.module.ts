import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { DisableComponent } from './disable/disable.component';
import { CalcComponent } from './calc/calc.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"features",component:FeaturesComponent},
  {path:"pricing",component:PricingComponent},
  {path:"disabled",component:DisableComponent},
  {path:"calc",component:CalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
