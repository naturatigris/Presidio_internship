import {
  NotificationService,
  init_notification_service
} from "./chunk-2P5YFWT3.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-OZO2KPD5.js";
import "./chunk-VTW7XGUJ.js";
import "./chunk-ZFPYVLZ3.js";
import "./chunk-3XLREPA7.js";
import "./chunk-GGXJ5NN7.js";
import "./chunk-KYRJKNJ3.js";
import "./chunk-T4FSVIK5.js";
import "./chunk-53DDW4RY.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-DV5BYKE4.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-3HY6NCXN.js";

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
