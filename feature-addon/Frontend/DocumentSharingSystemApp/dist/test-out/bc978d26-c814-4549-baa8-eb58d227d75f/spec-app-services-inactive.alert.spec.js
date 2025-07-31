import {
  HttpClientTestingModule,
  HttpTestingController
} from "./chunk-FD3V2WVI.js";
import {
  AlertService,
  init_inactive_alert
} from "./chunk-3OC2FI3A.js";
import {
  UserModel,
  init_user_model
} from "./chunk-AWQT2M7K.js";
import {
  environment,
  init_environment
} from "./chunk-IPUJJMKT.js";
import "./chunk-RXCRIGXT.js";
import "./chunk-5TNFNCMZ.js";
import "./chunk-PXVCLZNF.js";
import {
  TestBed,
  init_testing
} from "./chunk-A4GR5REI.js";
import "./chunk-73RR4HMO.js";

// src/app/services/inactive.alert.spec.ts
init_testing();
init_inactive_alert();
init_environment();
init_user_model();
describe("AlertService", () => {
  let service;
  let httpMock;
  let user = new UserModel("1");
  user.accessToken = "access-token";
  const mockAlert = {
    id: "alert1",
    userId: "user1",
    user,
    alertedAt: (/* @__PURE__ */ new Date()).toISOString(),
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
  it("should fetch active alerts and update the BehaviorSubject", () => {
    service.getActiveAlerts(user, "1");
    const req = httpMock.expectOne(`${environment.serverUrl}/InactivityAlert/active/user/1`);
    expect(req.request.method).toBe("GET");
    expect(req.request.headers.get("Authorization")).toBe(`Bearer ${user.accessToken}`);
    req.flush([mockAlert]);
    service.alerts$.subscribe((alerts) => {
      expect(alerts.length).toBe(1);
      expect(alerts[0].id).toBe("alert1");
    });
  });
  it("should call dismiss alert API", () => {
    service.dismissAlert(user, mockAlert.id, "dismissUser1").subscribe((response) => {
      expect(response).toEqual({ success: true });
    });
    const req = httpMock.expectOne(`${environment.serverUrl}/InactivityAlert/dismiss/${mockAlert.id}?dismissedBy=dismissUser1`);
    expect(req.request.method).toBe("POST");
    expect(req.request.headers.get("Authorization")).toBe(`Bearer ${user.accessToken}`);
    req.flush({ success: true });
  });
});
//# sourceMappingURL=spec-app-services-inactive.alert.spec.js.map
