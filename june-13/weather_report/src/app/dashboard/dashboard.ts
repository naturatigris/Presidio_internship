import { Component } from '@angular/core';
import { WeatherData } from '../modles/weatherdata';
import { WeatherCard } from '../weather-card/weather-card';
import { CitySearchComponent } from '../city-search/city-search';
@Component({
  selector: 'app-dashboard',
    standalone: true,

  imports:[WeatherCard,CitySearchComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  selectedWeatherData: WeatherData | null = null;

  onWeatherReceived(data: WeatherData) {
    this.selectedWeatherData = data;
  }
}
