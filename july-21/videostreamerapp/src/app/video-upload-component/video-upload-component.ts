import { Component } from '@angular/core';
import { VideoService } from '../service/video.service';
import { HttpEventType } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-video-upload-component',
  imports: [CommonModule,FormsModule,MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule],
  templateUrl: './video-upload-component.html',
  styleUrl: './video-upload-component.css'
})
export class VideoUploadComponent {
  file: File | null = null;
  uploading = false;

  title = '';
  description = '';
  uploadProgress: number = 0;


  constructor(private videoService: VideoService) {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    if (!this.file || !this.title) return;
      this.uploading = true;


    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('title', this.title);
    formData.append('description', this.description);

    this.videoService.uploadVideo(formData)
      .pipe(finalize(() => (this.uploading = false)))  // ensure spinner stops
      .subscribe({
        next: (event) => {
          if (event.type === HttpEventType.UploadProgress && event.total) {
            this.uploadProgress = Math.round((event.loaded / event.total) * 100);
          } else if (event.type === HttpEventType.Response) {
            alert('Upload successful!');
            this.resetForm();
          }
        },
        error: (err) => {
          console.error('Upload failed', err);
          alert('Upload failed. Please try again.');
        }
      });
  }
resetForm() {
    this.file = null;
    this.title = '';
    this.description = '';
    this.uploadProgress = 0;
    // Optionally reset file input manually if needed
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  }
}
