import { Routes } from '@angular/router';
import { VideoUploadComponent } from './video-upload-component/video-upload-component';
import { VideoListComponent } from './video-list-component/video-list-component';

export const routes: Routes = [
  { path: 'upload', component: VideoUploadComponent },
  { path: '', component: VideoListComponent },

];
