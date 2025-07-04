import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Razorpay } from '../services/razorpay';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment {
  formErrors: string[] = [];

  method = 'card';
  nameOnCard = '';
  email = '';
  phone = '';
  amount = 68500; // amount in paise, ₹685.00
  description = 'Samsung Galaxy S8 - 128GB Silver';
  cardNumber=123456
  months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years = Array.from({ length: 10 }, (_, i) => `${new Date().getFullYear() + i}`);
  month = '';
  year = '';
  cvv = '';

  constructor(private paymentservice: Razorpay) {}

pay() {
  this.formErrors = [];

  if (!this.nameOnCard.trim()) this.formErrors.push("Name on card is required.");
  if (!this.email.trim() || !this.email.includes('@')) this.formErrors.push("Valid email is required.");
  if (!this.phone.trim() || this.phone.length !== 10) this.formErrors.push("Valid 10-digit phone number is required.");
  if (!this.cardNumber || this.cardNumber.toString().length < 12) this.formErrors.push("Card number must be at least 12 digits.");
  if (!this.month) this.formErrors.push("Expiry month is required.");
  if (!this.year) this.formErrors.push("Expiry year is required.");
  if (!this.cvv || this.cvv.length < 3) this.formErrors.push("CVV must be at least 3 digits.");

  if (this.formErrors.length > 0) {
    return; // Stop if there are errors
  }

  const payload = {
    amount: this.amount,
    currency: 'INR',
    description: this.description,
    customer: {
      name: this.nameOnCard,
      contact: this.phone,
      email: this.email
    },
    notify: {
      sms: true,
      email: true
    },
    callback_url: 'http://localhost:4200/payment-success',
    callback_method: 'get'
  };

  this.paymentservice.createPaymentLink(payload).subscribe({
    next: (res) => {
      console.log('✅ Razorpay Response:', res);
      const shortUrl = (res as any).short_url;
      if (shortUrl) {
        window.location.href = shortUrl;
      }
    },
    error: (err) => {
      console.error('❌ Razorpay Error:', err);
    }
  });
}
}
