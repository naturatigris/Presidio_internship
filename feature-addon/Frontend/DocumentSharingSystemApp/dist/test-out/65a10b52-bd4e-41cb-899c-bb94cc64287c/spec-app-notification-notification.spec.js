import {
  AlertService,
  init_inactive_alert
} from "./chunk-3OC2FI3A.js";
import {
  NotificationService,
  init_notification_service
} from "./chunk-5C2QGXIA.js";
import {
  MatCardModule,
  init_card
} from "./chunk-WD65H7EC.js";
import {
  Navbar,
  init_navbar
} from "./chunk-QUXAT75J.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-EVJKVU6D.js";
import {
  UserService,
  init_user_service
} from "./chunk-AFO2OYNN.js";
import "./chunk-JM6AMNVR.js";
import "./chunk-QMOCZ3CH.js";
import "./chunk-E5A666WI.js";
import "./chunk-IPUJJMKT.js";
import "./chunk-RXCRIGXT.js";
import "./chunk-5TNFNCMZ.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-5C27C2Q6.js";
import "./chunk-4R7PBA5O.js";
import "./chunk-PXVCLZNF.js";
import {
  UserModel,
  init_user_model
} from "./chunk-AWQT2M7K.js";
import "./chunk-KB55D65T.js";
import "./chunk-GW6V5KYJ.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of
} from "./chunk-A4GR5REI.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-73RR4HMO.js";

// angular:jit:template:src/app/notification/notification.html
var notification_default;
var init_notification = __esm({
  "angular:jit:template:src/app/notification/notification.html"() {
    notification_default = '<app-navbar></app-navbar>\n<div class="main">\n    <div class="header">\n        <h1>Notifications</h1>\n    </div>\n    <div>\n     @for (alert of alerts; track $index) {\n    <mat-card class="mat-elevation-z3 alert-red">\n      <mat-card-title>{{ alert.user.name }}</mat-card-title>\n      <mat-card-content>\n        <p>Alert:Your account has been inactive for {{alert.daysInactive}}days. Your documents will be archived soon if no action is taken.</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-icon-button color="warn" (click)="dismissAlert(alert?.id!)">\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-card-actions>\n    </mat-card>}\n    </div>\n    <div id="main">\n        @for (notification of notifications; track $index) {\n            <div class="message">\n                <h3>{{notification.user}}</h3>\n                <p>{{notification.message}}</p>\n                <div>\n                <mat-card-actions>\n                <button mat-icon-button color="warn" (click)="dismissNotification($index)">\n                <mat-icon>close</mat-icon>\n                </button>\n                </mat-card-actions>\n                </div>\n\n            </div>\n\n        }\n    </div>\n</div>\n';
  }
});

// angular:jit:style:src/app/notification/notification.css
var notification_default2;
var init_notification2 = __esm({
  "angular:jit:style:src/app/notification/notification.css"() {
    notification_default2 = "/* src/app/notification/notification.css */\n* {\n  margin: 0;\n  padding: 0;\n}\nh1 {\n  text-align: center;\n  padding: 40px;\n}\n#main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.message {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n  border-radius: 4px;\n  width: 500px;\n  padding: 10px;\n  padding-left: 30px;\n  gap: 10px;\n  margin-top: 20px;\n  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.4);\n}\n.header {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.alert-card {\n  margin: 10px 0;\n}\n.alert-red {\n  background-color: #d9adb4;\n}\nmat-card {\n  width: 70%;\n  margin: auto;\n}\nmat-card-title {\n  font-weight: bold;\n  align-self: center;\n}\nmat-card-actions {\n  display: flex;\n  justify-content: flex-end;\n}\n@media (max-width : 768px) {\n  .message {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=notification.css.map */\n";
  }
});

// src/app/notification/notification.ts
var Notification;
var init_notification3 = __esm({
  "src/app/notification/notification.ts"() {
    "use strict";
    init_tslib_es6();
    init_notification();
    init_notification2();
    init_core();
    init_navbar();
    init_notification_service();
    init_user_service();
    init_card();
    init_button();
    init_icon();
    init_inactive_alert();
    Notification = class Notification2 {
      userService;
      notifyService;
      alertservice;
      currentUser = null;
      notifications = [];
      alerts = [];
      constructor(userService, notifyService, alertservice) {
        this.userService = userService;
        this.notifyService = notifyService;
        this.alertservice = alertservice;
      }
      ngOnInit() {
        this.userService.user$.subscribe({
          next: (data) => {
            this.currentUser = data;
            if (this.currentUser) {
              this.alertservice.getActiveAlerts(this.currentUser, this.currentUser.id);
            }
          }
        });
        this.notifyService.notification$.subscribe({
          next: (data) => {
            this.notifications = data;
          }
        });
        this.alertservice.alerts$.subscribe({
          next: (data) => {
            this.alerts = Array.isArray(data?.$values) ? data.$values : [];
            console.log("alerts", this.alerts);
          }
        });
      }
      dismissAlert(alertId) {
        if (!this.currentUser)
          return;
        this.alertservice.dismissAlert(this.currentUser, alertId, this.currentUser.id).subscribe({
          next: () => {
            this.alerts = this.alerts.filter((alert) => alert.id !== alertId);
            this.alertservice.getActiveAlerts(this.currentUser, this.currentUser.id);
          }
        });
      }
      dismissNotification(index) {
        this.notifications.splice(index, 1);
      }
      static ctorParameters = () => [
        { type: UserService },
        { type: NotificationService },
        { type: AlertService }
      ];
    };
    Notification = __decorate([
      Component({
        selector: "app-notification",
        imports: [Navbar, MatCardModule, MatButtonModule, MatIconModule],
        template: notification_default,
        styles: [notification_default2]
      })
    ], Notification);
  }
});

// src/app/notification/notification.spec.ts
var require_notification_spec = __commonJS({
  "src/app/notification/notification.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_notification3();
    init_core();
    init_user_service();
    init_notification_service();
    init_esm();
    init_user_model();
    init_card();
    init_button();
    init_icon();
    init_inactive_alert();
    var FakeNavbar = class FakeNavbar {
    };
    FakeNavbar = __decorate([
      Component({
        selector: "app-navbar",
        standalone: true,
        template: ""
      })
    ], FakeNavbar);
    describe("Notification", () => {
      let component;
      let fixture;
      let userServiceSpy;
      let notifyServiceSpy;
      let alertServiceSpy;
      beforeEach(() => __async(null, null, function* () {
        notifyServiceSpy = jasmine.createSpyObj("NotificationService", ["startConnection"], { notification$: of([{ user: "Test", message: "Test" }]) });
        userServiceSpy = jasmine.createSpyObj("UserService", ["getAll"], { user$: of(new UserModel("1")) });
        alertServiceSpy = jasmine.createSpyObj("AlertService", ["getActiveAlerts"], { alerts$: of([]) });
        yield TestBed.configureTestingModule({
          imports: [Notification, MatCardModule, MatButtonModule, MatIconModule],
          providers: [
            { provide: UserService, useValue: userServiceSpy },
            { provide: NotificationService, useValue: notifyServiceSpy },
            { provide: AlertService, useValue: alertServiceSpy }
          ]
        }).compileComponents();
        TestBed.overrideComponent(Notification, {
          set: {
            imports: [
              FakeNavbar,
              MatCardModule,
              MatButtonModule,
              MatIconModule
            ]
          }
        });
        fixture = TestBed.createComponent(Notification);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_notification_spec();
//# sourceMappingURL=spec-app-notification-notification.spec.js.map
