import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Chart, StockChart} from "angular-highcharts";
import {AppService} from "../app.service";
// import {Highcharts} from "highcharts/modules/map";

@Component({
  selector: '[chartTemplate]',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit, AfterViewInit {

  @Input() options: any

  public chart: any;

  public types: ChartTypes[] = [
    {value: 'line', viewValue: 'Line'},
    {value: 'bar', viewValue: 'Bar'},
  ];

  public colors: ChartTypes[] = [
    {value: 'red', viewValue: 'Red'},
    {value: 'yellow', viewValue: 'Yellow'},
    {value: 'gray', viewValue: 'Gray'},
    {value: 'blue', viewValue: 'Blue'},
    {value: 'lightgreen', viewValue: 'Green'},
    {value: 'black', viewValue: 'Black'},
    {value: 'darkviolet', viewValue: 'Violet'},
  ];

  public typesControl: FormControl = new FormControl();
  public colorControlsArr: any[] = []

  constructor(private cdr: ChangeDetectorRef, private appService: AppService) {}

  ngOnInit(): void {
    if (this.options) {
      console.log(this.options);
      this.typesControl.patchValue(this.options.series[0].type);

      this.options.series.forEach((s: any, index: number) => {
        const name = `Color ${index + 1}`
        this.colorControlsArr.push({title: name, control: new FormControl(s.color)})
      })

      this.appService.globalDate$$.subscribe(v => {

      })


      this.changeChartType()
    }

  }

  ngAfterViewInit() {
    this.chart = new Chart(this.options);
  }

  changeChartType() {
    this.typesControl.valueChanges.subscribe(controlValue => {
      this.options.series.forEach((v: any) => {
        v.type = controlValue
      })
      this.chart = new Chart(this.options);
    })
  }

  colorChange(event: any, index: number) {
    this.options.series[index].color = event
    console.log(this.options);
    this.chart = new Chart(Object.assign(this.options, {}));
    this.cdr.detectChanges();
  }

}

export interface ChartTypes {
  value: string;
  viewValue: string;
}
