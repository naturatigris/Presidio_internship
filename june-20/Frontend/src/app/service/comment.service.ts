import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/commentmodel';
import { CommentCreateDto } from '../models/commentcreatedto';
import { CommentQueryParams } from '../models/commentqueryparams';
import { UpdateCommentDto } from '../models/updatecommentdto';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:5147/api/v1/comments';
    constructor(private http: HttpClient) {}
  addComment(dto: CommentCreateDto): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiUrl}`, dto);
  }


getFilteredComments(params: CommentQueryParams): Observable<{ items: Comment[], totalCount: number }> {
  let httpParams = new HttpParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      httpParams = httpParams.set(key, value as string);
    }
  });

  return this.http.get<{ items: Comment[], totalCount: number }>(
    `${this.apiUrl}/filter`,
    { params: httpParams }
  );
}
  updateComment(id: string, dto: UpdateCommentDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, dto);
  }
deletecomment(id:string){
  return this.http.delete(`${this.apiUrl}/${id}`)
}

  }

