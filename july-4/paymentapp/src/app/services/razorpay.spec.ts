import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Razorpay } from './razorpay';  // Adjust path as needed

describe('Razorpay Service', () => {
  let service: Razorpay;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Razorpay]
    });

    service = TestBed.inject(Razorpay);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create a payment link', () => {
    const mockPayload = {
      amount: 68500,
      currency: 'INR',
      description: 'Samsung Galaxy S8 - 128GB Silver',
      customer: {
        name: 'john',
        email: 'john@exam.com',
        contact: '9840986069'
      }
    };

    const mockResponse = {
      id: 'plink_12345',
      short_url: 'https://rzp.io/r/testlink',
      status: 'created'
    };

    service.createPaymentLink(mockPayload).subscribe((res: any) => {
      expect(res).toEqual(mockResponse);
      expect(res.short_url).toBe('https://rzp.io/r/testlink');
    });

    const req = httpMock.expectOne('http://localhost:5192/api/payment/create-payment-link');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
