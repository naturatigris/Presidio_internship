import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, map ,tap} from 'rxjs';
import { WeatherData } from '../modles/weatherdata';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private http = inject(HttpClient);

  getWeather(city: string): Observable<WeatherData> {
    const url = `https://api.weatherapi.com/v1/current.json?key=fc2f00488441413087992302251306&q=${city}&days=1&aqi=no&alerts=no`;

    return this.http.get<any>(url).pipe(
      map(data => ({
        city: data.location.name,
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        icon: 'https:' + data.current.condition.icon,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph
      }
    )),
          tap(result => console.log('Mapped weather data:', result)),


      catchError(error => {
        console.error('Weather fetch error:', error);
        return throwError(() => new Error('Failed to load weather data'));
      })
    );
  }
}
