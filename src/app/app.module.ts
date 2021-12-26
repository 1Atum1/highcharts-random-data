import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartPageOneComponent } from './chart-page-one/chart-page-one.component';
import { ChartPageTwoComponent } from './chart-page-two/chart-page-two.component';
import {UIRouter, UIRouterModule} from "@uirouter/angular";
import { HeaderComponent } from './header/header.component';
import { ChartConfigComponent } from './chart-config/chart-config.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChartModule} from "angular-highcharts";
import { ChartComponent } from './chart/chart.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {TextMaskModule} from "angular2-text-mask";

const chartOneState = { name: "chart-one", url: "/chartOne", component: ChartPageOneComponent };
const chartTwoState = { name: "chart-two", url: "/chartTwo", component: ChartPageTwoComponent };

function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  router.urlService.rules.initial({ state: chartOneState });
}

@NgModule({
  declarations: [
    AppComponent,
    ChartPageOneComponent,
    ChartPageTwoComponent,
    HeaderComponent,
    ChartConfigComponent,
    ChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UIRouterModule.forRoot({states: [chartOneState, chartTwoState], useHash: true, config: uiRouterConfigFn}),
    FormsModule,
    ChartModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
