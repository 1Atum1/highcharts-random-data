import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public globalDate$: BehaviorSubject<any> = new BehaviorSubject<any>(moment());
  public globalDate$$ = this.globalDate$.asObservable();

  constructor() { }


}
