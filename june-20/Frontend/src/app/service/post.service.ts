import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/userprofilemodel';
import { getUserEmail } from '../misc/jwtdecode';
import { BehaviorSubject } from 'rxjs';
import { CreatePost } from '../models/postcreatmodel';
import { PostQueryParams } from '../models/postquerymodel';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:5147/api/v1/posts';
  
  email:string='';
    private userSubject = new BehaviorSubject<UserProfile | null>(null);
  public user$ = this.userSubject.asObservable();


  constructor(private http: HttpClient) {
    const email=getUserEmail();
    if (email){
        this.email=email;
    }
  }

WritePost(post: CreatePost): Observable<any> {
  const formData = new FormData();

  formData.append('userEmail', post.userEmail);
  formData.append('title', post.title);
  formData.append('slug', post.slug);
  formData.append('content', post.content);
  formData.append('status', post.status || 'Published');

  post.categoryNames.forEach(name => formData.append('categoryNames', name));

  post.images.forEach(file => formData.append('images', file));

  return this.http.post(this.apiUrl, formData);
}
  getFilteredPosts(params: PostQueryParams): Observable<any[]> {
    let httpParams = new HttpParams();

    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => httpParams = httpParams.append(key, v));
      } else if (value !== undefined && value !== null) {
        httpParams = httpParams.set(key, value);
      }
    });

    return this.http.get<any[]>(`${this.apiUrl}/filter`, { params: httpParams });
  
}
DeletePosrt(id:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`);

}
}
