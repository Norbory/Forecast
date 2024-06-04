import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TOPService {

  private url = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast';

  constructor(private http: HttpClient) { }

  // Fetch the forecast data from the National Weather Service API
  getForecast(): Observable<any> {
    return this.http.get(this.url);
  }

}
