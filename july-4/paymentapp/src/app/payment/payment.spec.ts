import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Payment } from './payment';
import { Razorpay } from '../services/razorpay';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('Payment Component', () => {
  let component: Payment;
  let fixture: ComponentFixture<Payment>;
  let mockRazorpay: jasmine.SpyObj<Razorpay>;

  beforeEach(() => {
    mockRazorpay = jasmine.createSpyObj('Razorpay', ['createPaymentLink']);

    TestBed.configureTestingModule({
      imports: [Payment, FormsModule, CommonModule],
      providers: [
        { provide: Razorpay, useValue: mockRazorpay }
      ]
    });

    fixture = TestBed.createComponent(Payment);
    component = fixture.componentInstance;
  });

  it('should create payment link and redirect on success', () => {
spyOn(window, 'open').and.callFake((url?: string | URL | undefined, target?: string, features?: string): Window | null => {
  return null;
});

    const mockResponse = {
      short_url: 'https://rzp.io/r/testshorturl'
    };

    mockRazorpay.createPaymentLink.and.returnValue(of(mockResponse));

    component.nameOnCard = 'John Doe';
    component.email = 'john@exam.com';
    component.phone = '9840986069';

    component.pay();

    expect(mockRazorpay.createPaymentLink).toHaveBeenCalled();
    expect(mockRazorpay.createPaymentLink).toHaveBeenCalledWith(jasmine.objectContaining({
      amount: 68500,
      customer: jasmine.objectContaining({ name: 'John Doe' })
    }));
  });

  it('should log error when Razorpay call fails', () => {
    const error = { message: 'Bad Request' };
    spyOn(console, 'error');

    mockRazorpay.createPaymentLink.and.returnValue(throwError(() => error));

    component.nameOnCard = 'Jane Doe';
    component.email = 'jane@example.com';
    component.phone = '1234567890';

    component.pay();

    expect(console.error).toHaveBeenCalledWith('❌ Razorpay Error:', error);
  });
});
