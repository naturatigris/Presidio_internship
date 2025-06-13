import { Component,Input} from '@angular/core';
import { WeatherData } from '../modles/weatherdata';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-weather-card',
  imports: [CommonModule],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css'
})
export class WeatherCard {
    @Input() weather: WeatherData | null = null; 


}
