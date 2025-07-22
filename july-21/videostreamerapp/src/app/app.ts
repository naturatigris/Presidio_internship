import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoListComponent } from './video-list-component/video-list-component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,VideoListComponent,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'videostreamerapp';
}
