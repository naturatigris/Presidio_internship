import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Chart, ArcElement, PieController, Tooltip, Legend, CategoryScale, LinearScale, BarElement, BarController } from 'chart.js';
Chart.register(ArcElement, PieController, Tooltip, Legend, CategoryScale, LinearScale, BarElement, BarController);


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
