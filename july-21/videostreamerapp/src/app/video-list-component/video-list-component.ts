import { Component } from '@angular/core';
import { VideoService } from '../service/video.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-video-list-component',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './video-list-component.html',
  styleUrl: './video-list-component.css'
})
export class VideoListComponent {
  videos: any[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.videoService.getAllVideos().subscribe((data) => {
      this.videos = data;
    });
  }

  getStreamUrl(videoId: string): string {
    return this.videoService.streamVideo(videoId);
  }

}
