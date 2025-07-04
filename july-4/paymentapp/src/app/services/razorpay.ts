import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Razorpay {
  // Call your .NET API, not Razorpay directly
  private apiUrl = 'http://localhost:5192/api/payment/create-payment-link';  // or whatever port your .NET backend runs on

  constructor(private http: HttpClient) {}

  createPaymentLink(data: any) {
    return this.http.post(this.apiUrl, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
