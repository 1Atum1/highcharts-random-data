import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, SubscriptionLike} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, tap} from "rxjs/operators";
import {AppService} from "../app.service";


@Component({
  selector: 'app-chart-config',
  templateUrl: './chart-config.component.html',
  styleUrls: ['./chart-config.component.scss']
})
export class ChartConfigComponent implements OnInit, OnDestroy {

  public date: any;
  public datemask: any[] = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];

  private changes: Subject<any> = new Subject<any>();
  subscription: SubscriptionLike

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.subscription = this.changes.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(v => !v.includes('_')),
      tap((v: any) => {
       this.appService.globalDate$.next(v)
      })
    ).subscribe()
  }

  dateChange(event: any) {
    this.changes.next(event.target.value)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
