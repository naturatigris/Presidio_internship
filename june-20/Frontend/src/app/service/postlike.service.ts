import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostLike } from '../models/postlikemodel';
@Injectable({
  providedIn: 'root'
})
export class PostLikeService {
  private baseUrl = 'http://localhost:5147/api/v1/postlike'; 

  constructor(private http: HttpClient) {}

  likePost(postId: string, userEmail: string): Observable<string> {
    const params = new HttpParams()
      .set('postId', postId)
      .set('userEmail', userEmail);

    return this.http.post(this.baseUrl + '/like', null, { params, responseType: 'text' });
  }

  unlikePost(postId: string, userEmail: string): Observable<string> {
    const params = new HttpParams()
      .set('postId', postId)
      .set('userEmail', userEmail);

    return this.http.post(this.baseUrl + '/unlike', null, { params, responseType: 'text' });
  }

  getLikeCount(postId: string): Observable<number> {
    const params = new HttpParams().set('postId', postId);
    return this.http.get<number>(this.baseUrl + '/count', { params });
  }

  getLikesByPost(postId: string): Observable<PostLike[]> {
    const params = new HttpParams().set('postId', postId);
    return this.http.get<PostLike[]>(this.baseUrl + '/by-post', { params });
  }

  getLikesByUser(userEmail: string): Observable<PostLike[]> {
    const params = new HttpParams().set('userEmail', userEmail);
    return this.http.get<PostLike[]>(this.baseUrl + '/by-user', { params });
  }
}
