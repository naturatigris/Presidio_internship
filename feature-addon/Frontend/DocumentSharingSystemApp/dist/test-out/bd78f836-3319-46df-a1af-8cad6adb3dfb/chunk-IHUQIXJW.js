import {
  environment,
  init_environment
} from "./chunk-IPUJJMKT.js";
import {
  init_http
} from "./chunk-WB4SYOJP.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-7AQLJYMK.js";
import {
  BehaviorSubject,
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6
} from "./chunk-K454COBC.js";
import {
  __esm
} from "./chunk-73RR4HMO.js";

// src/app/services/inactive.alert.ts
var AlertService;
var init_inactive_alert = __esm({
  "src/app/services/inactive.alert.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    init_http();
    init_environment();
    AlertService = class AlertService2 {
      http;
      alertsSubject = new BehaviorSubject([]);
      alerts$ = this.alertsSubject.asObservable();
      baseUrl = `${environment.serverUrl}/InactivityAlert`;
      constructor(http) {
        this.http = http;
      }
      getActiveAlerts(user, userId) {
        this.http.get(`${this.baseUrl}/active/user/${userId}`, { headers: {
          Authorization: `Bearer ${user.accessToken}`
        } }).subscribe((alerts) => {
          this.alertsSubject.next(alerts);
        });
      }
      dismissAlert(user, alertId, dismissedBy) {
        const params = new HttpParams().set("dismissedBy", dismissedBy);
        return this.http.post(`${this.baseUrl}/dismiss/${alertId}`, {}, { headers: {
          Authorization: `Bearer ${user.accessToken}`
        }, params });
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    AlertService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], AlertService);
  }
});

export {
  AlertService,
  init_inactive_alert
};
//# sourceMappingURL=chunk-IHUQIXJW.js.map
