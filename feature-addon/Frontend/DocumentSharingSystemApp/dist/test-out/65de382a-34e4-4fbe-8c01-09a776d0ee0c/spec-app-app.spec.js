import {
  NotificationService,
  init_notification_service
} from "./chunk-5C2QGXIA.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-JM6AMNVR.js";
import "./chunk-QMOCZ3CH.js";
import "./chunk-KB55D65T.js";
import "./chunk-GW6V5KYJ.js";
import "./chunk-RXCRIGXT.js";
import "./chunk-5TNFNCMZ.js";
import "./chunk-4R7PBA5O.js";
import "./chunk-PXVCLZNF.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-A4GR5REI.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-73RR4HMO.js";

// angular:jit:template:src/app/app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src/app/app.html"() {
    app_default = "<router-outlet></router-outlet>";
  }
});

// angular:jit:style:src/app/app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src/app/app.css"() {
    app_default2 = "/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_notification_service();
    App = class App2 {
      notifyService;
      title = "DocumentSharingSystemApp";
      constructor(notifyService) {
        this.notifyService = notifyService;
        this.notifyService.startConnection();
      }
      static ctorParameters = () => [
        { type: NotificationService }
      ];
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app3();
    init_notification_service();
    describe("App", () => {
      let app;
      let fixture;
      let notifyService;
      beforeEach(() => __async(null, null, function* () {
        notifyService = jasmine.createSpyObj("NotificationService", ["startConnection"]);
        yield TestBed.configureTestingModule({
          imports: [App],
          providers: [
            { provide: NotificationService, useValue: notifyService }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(App);
        app = fixture.componentInstance;
      }));
      it("should create the app", () => {
        expect(app).toBeTruthy();
      });
      it("should connect to notification service", () => {
        expect(notifyService.startConnection).toHaveBeenCalled();
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app-app.spec.js.map
