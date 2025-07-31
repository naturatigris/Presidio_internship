import {
  UserModel,
  init_user_model
} from "./chunk-AWQT2M7K.js";
import {
  MatMenuModule,
  MatToolbarModule,
  Navbar,
  init_menu,
  init_navbar,
  init_toolbar
} from "./chunk-CMDF3MQH.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-EVJKVU6D.js";
import {
  UserService,
  init_user_service
} from "./chunk-PLTMWAKF.js";
import {
  ActivatedRoute,
  Router,
  init_router
} from "./chunk-JM6AMNVR.js";
import "./chunk-QMOCZ3CH.js";
import "./chunk-KB55D65T.js";
import {
  Store,
  init_ngxs_store
} from "./chunk-GW6V5KYJ.js";
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
  TestBed,
  init_esm,
  init_testing,
  of
} from "./chunk-A4GR5REI.js";
import {
  __async,
  __commonJS
} from "./chunk-73RR4HMO.js";

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
