import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import * as moment from "moment";
import {AppService} from "../app.service";
import {takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-chart-page-one',
  templateUrl: './chart-page-one.component.html',
  styleUrls: ['./chart-page-one.component.scss']
})
export class ChartPageOneComponent implements AfterViewInit, OnDestroy {

  public data: sampleData[] = [];
  private userDate: string;

  private isAlive: boolean;

  constructor(private appService: AppService) { }

  ngAfterViewInit() {
    this.isAlive = true;
    this.appService.globalDate$$.pipe(takeWhile(() => this.isAlive)).subscribe((date: string) => {
      this.userDate = date;
      const length = this.data.length
      if (this.data.length) {
        this.data = []
        for(let i = 0; i < length; i++) {
          this.addChart();
        }
      } else {
        this.addChart();
      }
    })
  }

  addChart() {
    if (this.data.length >= 4) { return }
    this.data.push(new sampleData(this.userDate).getData());
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

}

export class sampleData {
  data: any = {
    chart: {
      type: 'column',
    },
    title: { text: 'Total Predected Revenue Vs Actual Revenue' },
    xAxis: {
      categories: [],
      crosshair: true,
    },
    yAxis: {
      min: 0,
    },
    series: [
      {
        name: 'Predected',
        type: 'bar',
        color: 'lightgreen',
        data: [] ,
      } ,
      {
        name: 'Actual',
        type: 'bar',
        color: 'gray',
        data: [],
      },
    ],
  };

  colors = ['red', 'yellow', 'gray', 'blue', 'lightgreen', 'black', 'darkviolet']

  lengthOfData = 8;
  private dateFrom = moment();
  private randomColor = false // if you want some random color on the charts - switch true =)

  constructor(dateFrom?: any, lengthOfData?: any) {
    this.lengthOfData = lengthOfData ? lengthOfData : this.lengthOfData;
    this.dateFrom = dateFrom ? moment(dateFrom) : this.dateFrom;
    this.generateRandomData();
  }

  generateRandomData() {
    this.data.series.forEach((v: any) => {
      this.fillSeriesData(v.data);
      if (this.randomColor) {
        v.color = this.colors[Math.floor(Math.random() * this.colors.length)];
      }
    })
    this.fillCategories();
  }

  getData() {
    return this.data;
  }

  fillSeriesData(source: any) {
    for (let i = 0; i < this.lengthOfData; i++) {
      source.push(Math.floor(Math.random() * 100) + 1);
    }
  }

  fillCategories() {
    for (let i = 0; i < this.lengthOfData; i++) {
      this.data.xAxis.categories.push(this.dateFrom.add(i == 0 ? 0 : 1, 'd').format('DD.MM.yyyy'));
    }
  }
}
