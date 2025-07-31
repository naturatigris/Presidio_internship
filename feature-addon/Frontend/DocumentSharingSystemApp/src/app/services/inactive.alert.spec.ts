import { TestBed } from '@angular/core/testing';
import { AlertService } from './inactive.alert';
import { InactivityAlert } from './inactive.alert';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';

describe('AlertService', () => {
  let service: AlertService;
  let httpMock: HttpTestingController;

      let user = new UserModel("1");
    user.accessToken = "access-token";


  const mockAlert: InactivityAlert = {
    id: 'alert1',
    userId: 'user1',
    user: user,
    alertedAt: new Date().toISOString(),
    daysInactive: 5,
    isDismissed: false,
    isArchived: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlertService]
    });

    service = TestBed.inject(AlertService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch active alerts and update the BehaviorSubject', () => {
    service.getActiveAlerts(user,'1');

    const req = httpMock.expectOne(`${environment.serverUrl}/InactivityAlert/active/user/1`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${user.accessToken}`);

    req.flush([mockAlert]);

    service.alerts$.subscribe(alerts => {
      expect(alerts.length).toBe(1);
      expect(alerts[0].id).toBe('alert1');
    });
  });

  it('should call dismiss alert API', () => {
    service.dismissAlert(user, mockAlert.id, 'dismissUser1').subscribe(response => {
      expect(response).toEqual({ success: true });
    });

    const req = httpMock.expectOne(
      `${environment.serverUrl}/InactivityAlert/dismiss/${mockAlert.id}?dismissedBy=dismissUser1`
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${user.accessToken}`);

    req.flush({ success: true });
  });
});
