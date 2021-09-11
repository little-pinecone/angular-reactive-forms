import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExampleDataService {

  constructor() {
  }

  public getDefaultCardNumber(): Observable<string> {
    console.info("ExampleDataService::getDefaultCardNumber");
    return of('1234567890');
  }

  public updateCardNumber(newValue: string): Observable<string> {
    console.info("ExampleDataService::updateCardNumber");
    return of(newValue)
  }
}
