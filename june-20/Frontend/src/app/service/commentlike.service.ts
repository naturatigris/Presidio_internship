import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentLike } from '../models/commentlikemodal';
@Injectable({
  providedIn: 'root'
})
export class CommentLikeService {
  private baseUrl = 'http://localhost:5147/api/v1/commentlike'; // Adjust if using a different API version

  constructor(private http: HttpClient) {}

  likeComment(commentId: string, userEmail: string): Observable<string> {
    const params = new HttpParams()
      .set('commentId', commentId)
      .set('userEmail', userEmail);

    return this.http.post(this.baseUrl + '/like', null, { params, responseType: 'text' });
  }

  unlikeComment(commentId: string, userEmail: string): Observable<string> {
    const params = new HttpParams()
      .set('commentId', commentId)
      .set('userEmail', userEmail);

    return this.http.post(this.baseUrl + '/unlike', null, { params, responseType: 'text' });
  }

  getLikeCount(commentId: string): Observable<number> {
    const params = new HttpParams().set('commentId', commentId);
    return this.http.get<number>(this.baseUrl + '/count', { params });
  }

  getLikesByComment(commentId: string): Observable<CommentLike[]> {
    const params = new HttpParams().set('commentId', commentId);
    return this.http.get<CommentLike[]>(this.baseUrl + '/by-comment', { params });
  }

  getLikesByUser(userEmail: string): Observable<CommentLike[]> {
    const params = new HttpParams().set('userEmail', userEmail);
    return this.http.get<CommentLike[]>(this.baseUrl + '/by-user', { params });
  }
}
