import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Dashboard } from './dashboard/dashboard';
import { CitySearchComponent } from './city-search/city-search';
import { WeatherCard } from './weather-card/weather-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,Dashboard,CitySearchComponent,WeatherCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'weather_report';
}
