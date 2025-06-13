import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { WeatherService } from '../Services/weather-service.cs';
import { WeatherData } from '../modles/weatherdata';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.html',
  styleUrls: ['./city-search.css'],
  imports:[FormsModule,CommonModule]
})
export class CitySearchComponent implements OnInit{
  city = 'London';
    history: string[] = [];

  @Output() weatherFetched = new EventEmitter<WeatherData>();

  constructor(private weatherService: WeatherService) {}

getWeather() {
  const queryCity = this.city.trim();


  this.weatherService.getWeather(queryCity).subscribe({
    next: (data) => {
      this.updateHistory(queryCity);

      this.weatherFetched.emit(data);
    },
    error: (err) => {
      alert("City not found. Please enter a valid city name.");
      console.error('Error fetching weather:', err);
    }
  });
}
updateHistory(city: string): void {
  if (typeof window !== 'undefined') {
    this.history = this.history.filter(item => item.toLowerCase() !== city.toLowerCase()); // remove duplicate
    this.history.unshift(city); // add to beginning
    this.history = this.history.slice(0, 5); // keep only last 5 entries
    localStorage.setItem('citySearchHistory', JSON.stringify(this.history));
  }
}

  loadHistory(): void {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('citySearchHistory');
    if (saved) {
      this.history = JSON.parse(saved);
    }
  }
  }
  useHistory(city: string): void {
    this.city = city;
    this.getWeather();
  }

ngOnInit(): void {
      this.loadHistory();

  this.getWeather(); // trigger default fetch on component load
}

}
