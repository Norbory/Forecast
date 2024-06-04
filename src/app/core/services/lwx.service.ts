import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LWXService {

  private url = 'https://api.weather.gov/gridpoints/LWX/31,80/forecast';

  constructor(private http: HttpClient) { }

  // Fetch the forecast data from the National Weather Service API
  getForecast(): Observable<any> {
    return this.http.get(this.url);
  }
}
