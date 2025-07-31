import {
  MatMenuModule,
  MatToolbarModule,
  Navbar,
  init_menu,
  init_navbar,
  init_toolbar
} from "./chunk-S5ZC5WJE.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-IAOX4OAG.js";
import {
  UserService,
  init_user_service
} from "./chunk-5WHMKPOL.js";
import {
  ActivatedRoute,
  Router,
  init_router
} from "./chunk-OZO2KPD5.js";
import {
  UserModel,
  init_user_model
} from "./chunk-SVFGXIGK.js";
import "./chunk-VTW7XGUJ.js";
import {
  Store,
  init_ngxs_store
} from "./chunk-ZFPYVLZ3.js";
import "./chunk-JZNWBP4I.js";
import "./chunk-CL4W7QDJ.js";
import "./chunk-3XLREPA7.js";
import "./chunk-GGXJ5NN7.js";
import "./chunk-KYRJKNJ3.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-5TPMZ7JT.js";
import "./chunk-T4FSVIK5.js";
import "./chunk-53DDW4RY.js";
import {
  TestBed,
  init_esm,
  init_testing,
  of
} from "./chunk-DV5BYKE4.js";
import {
  __async,
  __commonJS
} from "./chunk-3HY6NCXN.js";

// src/app/navbar/navbar.spec.ts
var require_navbar_spec = __commonJS({
  "src/app/navbar/navbar.spec.ts"(exports) {
    init_testing();
    init_navbar();
    init_user_service();
    init_router();
    init_ngxs_store();
    init_button();
    init_icon();
    init_menu();
    init_toolbar();
    init_esm();
    init_user_model();
    describe("Navbar", () => {
      let component;
      let fixture;
      let userService;
      let route;
      let router;
      let store;
      let user = new UserModel("1");
      beforeEach(() => __async(null, null, function* () {
        userService = jasmine.createSpyObj("UserService", ["getCurrentUserDetails", "logout"]);
        router = jasmine.createSpyObj("Router", ["navigateByUrl", "navigate"]);
        route = jasmine.createSpyObj("AcivatedRoute", ["navigate"], { snapshot: { url: "Test" } });
        store = jasmine.createSpyObj("Store", ["select"]);
        yield TestBed.configureTestingModule({
          imports: [Navbar, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule],
          providers: [
            { provide: UserService, useValue: userService },
            { provide: Store, useValue: store },
            { provide: Router, useValue: router },
            { provide: ActivatedRoute, useValue: route }
          ]
        }).compileComponents();
        store.select.and.returnValue(of(user));
        userService.getCurrentUserDetails.and.returnValue(of(user));
        fixture = TestBed.createComponent(Navbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should get current user data", () => {
        expect(component.currentUser).toBe(user);
      });
      it("should navigate", () => {
        component.navigate("");
        expect(router.navigateByUrl).toHaveBeenCalledOnceWith("");
      });
      it("should logout", () => {
        component.logout();
        expect(userService.logout).toHaveBeenCalled();
      });
      it("should display", () => {
        expect(fixture.nativeElement.textContent).toContain("Document Sharing System");
      });
    });
  }
});
export default require_navbar_spec();
//# sourceMappingURL=spec-app-navbar-navbar.spec.js.map
