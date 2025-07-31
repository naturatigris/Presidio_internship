import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { UserModel } from '../models/user.model';

export interface InactivityAlert {
  id: string;
  userId: string;
  user:UserModel;
  alertedAt: string;
  daysInactive: number;
  isDismissed: boolean;
  isArchived: boolean;
  dismissedAt?: string;
  dismissedByUserId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alertsSubject = new BehaviorSubject<InactivityAlert[]>([]);
  public alerts$ = this.alertsSubject.asObservable();

  private baseUrl = `${environment.serverUrl}/InactivityAlert`;

  constructor(private http: HttpClient) {}

  getActiveAlerts(user:UserModel,userId: string): void {
    this.http.get<InactivityAlert[]>(`${this.baseUrl}/active/user/${userId}`,{ headers : {
                    Authorization : `Bearer ${user.accessToken}`
                }})
      .subscribe(alerts => {
        this.alertsSubject.next(alerts);
      });
  }

  dismissAlert(user:UserModel,alertId: string, dismissedBy: string): Observable<any> {
    const params = new HttpParams().set('dismissedBy', dismissedBy);

    return this.http.post(`${this.baseUrl}/dismiss/${alertId}`, {}, { headers : {
                    Authorization : `Bearer ${user.accessToken}`
                },params });
  }
}
