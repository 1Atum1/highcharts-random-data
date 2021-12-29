import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChartPageOneComponent} from "./chart-page-one/chart-page-one.component";
import {ChartPageTwoComponent} from "./chart-page-two/chart-page-two.component";

const routes: Routes = [
  { path: '',   redirectTo: 'page-one', pathMatch: 'full' },
  { path: 'page-one', component: ChartPageOneComponent},
  { path: 'page-two', component: ChartPageTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
