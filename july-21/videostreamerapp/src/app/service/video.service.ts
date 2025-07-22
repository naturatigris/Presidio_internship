import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private baseUrl = 'http://localhost:5108/api/videos'; // Adjust your backend URL

  constructor(private http: HttpClient) {}

  getAllVideos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  uploadVideo(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  streamVideo(videoId: string): string {
    return `${this.baseUrl}/${videoId}/stream`;
  }
}
