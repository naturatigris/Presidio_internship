import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/userprofilemodel';
import { getUserEmail } from '../misc/jwtdecode';
import { BehaviorSubject } from 'rxjs';
import { CreatePost } from '../models/postcreatmodel';
import { PostQueryParams } from '../models/postquerymodel';
import { Post } from '../models/postmodel';
import { PaginatedResponse } from '../models/paginatepostresutl';
import { PostUpdate } from '../models/postupdatedto';
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
getFilteredPosts(params: PostQueryParams): Observable<PaginatedResponse<Post>> {
    let httpParams = new HttpParams();

    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => httpParams = httpParams.append(key, v));
      } else if (value !== undefined && value !== null) {
        httpParams = httpParams.set(key, value);
      }
    });

    return this.http.get<PaginatedResponse<Post>>(`${this.apiUrl}/filter`, { params: httpParams });
  
}
GetPostById(id:string):Observable<any>{
  return this.http.get(`${this.apiUrl}/${id}`)

}
updatePost(id: string, post: PostUpdate): Observable<any> {
  const formData = new FormData();

  if (post.title) formData.append('title', post.title);
  if (post.slug) formData.append('slug', post.slug);
  if (post.content) formData.append('content', post.content);
  if (post.status) formData.append('status', post.status);

  post.images.forEach(file => formData.append('images', file));

  return this.http.put(`${this.apiUrl}/${id}`, formData);
}

DeletePost(id:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);

}
}
