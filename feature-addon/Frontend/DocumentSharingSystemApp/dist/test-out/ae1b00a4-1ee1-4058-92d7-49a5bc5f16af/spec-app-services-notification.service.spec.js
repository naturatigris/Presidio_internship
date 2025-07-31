import {
  HttpClientTestingModule
} from "./chunk-YGGLLQR6.js";
import {
  HubConnectionBuilder,
  NotificationService,
  init_esm as init_esm2,
  init_notification_service
} from "./chunk-2P5YFWT3.js";
import {
  UserModel,
  init_user_model
} from "./chunk-SVFGXIGK.js";
import "./chunk-VTW7XGUJ.js";
import {
  Store,
  init_ngxs_store
} from "./chunk-ZFPYVLZ3.js";
import "./chunk-KYRJKNJ3.js";
import "./chunk-53DDW4RY.js";
import {
  TestBed,
  init_esm,
  init_testing,
  of
} from "./chunk-DV5BYKE4.js";
import "./chunk-3HY6NCXN.js";

// src/app/services/notification.service.spec.ts
init_testing();
init_user_model();
init_esm();
init_notification_service();
init_ngxs_store();
init_esm2();
describe("NotificationService", () => {
  let service;
  let storeSpy;
  let mockConnection;
  let user = new UserModel("1");
  user.accessToken = "access-token";
  beforeEach(() => {
    storeSpy = jasmine.createSpyObj("Store", ["select"]);
    storeSpy.select.and.returnValue(of(user));
    spyOn(NotificationService.prototype, "sendMessage").and.callFake(() => {
    });
    mockConnection = {
      start: jasmine.createSpy().and.returnValue(Promise.resolve()),
      invoke: jasmine.createSpy().and.returnValue(Promise.resolve()),
      on: jasmine.createSpy()
    };
    spyOn(HubConnectionBuilder.prototype, "withUrl").and.returnValue(HubConnectionBuilder.prototype);
    spyOn(HubConnectionBuilder.prototype, "withAutomaticReconnect").and.returnValue(HubConnectionBuilder.prototype);
    spyOn(HubConnectionBuilder.prototype, "build").and.returnValue(mockConnection);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        NotificationService,
        { provide: Store, useValue: storeSpy }
      ]
    });
    service = TestBed.inject(NotificationService);
    service.hubConnection = mockConnection;
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should start connection", () => {
    service.startConnection();
    expect(mockConnection.start).toHaveBeenCalled();
    expect(mockConnection.on).toHaveBeenCalledTimes(3);
  });
  it("should send message", () => {
    service.sendMessage.and.callThrough();
    service.sendMessage("user", "message");
    expect(mockConnection.invoke).toHaveBeenCalledOnceWith("SendMessage", "user", "message");
  });
  it("should send team message", () => {
    service.sendTeamMessage("user", "message", 1);
    expect(mockConnection.invoke).toHaveBeenCalledOnceWith("SendTeamMessage", "user", "message", 1);
  });
});
//# sourceMappingURL=spec-app-services-notification.service.spec.js.map
