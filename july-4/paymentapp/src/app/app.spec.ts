import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Payment } from './payment/payment';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Import this


describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App,Payment,HttpClientTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
