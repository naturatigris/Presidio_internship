import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';
import { DocumentRequestModal } from '../document-request-modal/document-request-modal';
import { DocumentRestoreRequestModel } from '../models/document.request.model';

export interface RestoreRequestDto {
  documentId: string;
  userId: string;
  reason: string;
}
export interface rquestdocumentsresponse{
   data: DocumentRestoreRequestModel[];
  totalRecords: number;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentRestoreService {

  private baseUrl = `${environment.serverUrl}/Documentrestore`;

  constructor(private http: HttpClient) {}

  requestRestore(user:UserModel,request: RestoreRequestDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/request`, request,{ headers : {
                    Authorization : `Bearer ${user.accessToken}`
                }});
  }

  getAllRequests(user:UserModel): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getall`,{ headers : {
                    Authorization : `Bearer ${user.accessToken}`
                }});
  }

  approveRequest(user:UserModel,requestId: string, adminId: string): Observable<any> {
    const params = new HttpParams().set('adminId', adminId);
    return this.http.post(`${this.baseUrl}/approve/${requestId}`, null, { headers : {
                    Authorization : `Bearer ${user.accessToken}`
                } ,params });
  }

  rejectRequest(user:UserModel,requestId: string, adminId: string): Observable<any> {
    const params = new HttpParams().set('adminId', adminId);
    return this.http.post(`${this.baseUrl}/reject/${requestId}`, null, { headers : {
                    Authorization : `Bearer ${user.accessToken}`
                },params });
  }
  getRequestByDocumentId(documentId: string,user:UserModel): Observable<DocumentRestoreRequestModel> {
    return this.http.get<DocumentRestoreRequestModel>(`${this.baseUrl}/bydocument/${documentId}`,{ headers : {
                    Authorization : `Bearer ${user.accessToken}`
                }}); }
    getRequestByUserId(user:UserModel): Observable<DocumentRestoreRequestModel> {
    return this.http.get<DocumentRestoreRequestModel>(`${this.baseUrl}/byuser/${user.id}`,{ headers : {
                    Authorization : `Bearer ${user.accessToken}`
                }}); }
    MarkReadUser(user:UserModel,id:string): Observable<any> {
    return this.http.put(`${this.baseUrl}/UserRead/${id}`,{ headers : {
                    Authorization : `Bearer ${user.accessToken}`
                }}); }
    MarkReadAdmin(user:UserModel,id:string): Observable<any> {
    return this.http.put(`${this.baseUrl}/AdminRead/${id}`,{ headers : {
                    Authorization : `Bearer ${user.accessToken}`
                }}); }

  

getFilteredRequests(type: string, page: number = 1, pageSize: number = 6, user: UserModel): Observable<rquestdocumentsresponse> {
  let params = new HttpParams()
    .set('page', page.toString())
    .set('pageSize', pageSize.toString());

  if (type) {
    params = params.set('type', type);
  }

  return this.http.get<rquestdocumentsresponse>(
    `${this.baseUrl}/filtered`,
    {
      params,
      headers: {
        Authorization: `Bearer ${user.accessToken}`
      }
    }
  );
}
}
