import {
  UserSearchModel,
  init_user_search_model
} from "./chunk-JU2CDFIF.js";
import {
  UserLoginModel,
  init_user_login_model
} from "./chunk-XQ4VI3R2.js";
import {
  UserAddModel,
  UserUpdateModel,
  init_user_add_model,
  init_user_update_model
} from "./chunk-DI5ZICXR.js";
import {
  UserService,
  init_user_service
} from "./chunk-AFO2OYNN.js";
import {
  Router,
  init_router
} from "./chunk-JM6AMNVR.js";
import "./chunk-QMOCZ3CH.js";
import {
  MatSnackBar,
  init_snack_bar
} from "./chunk-E5A666WI.js";
import {
  environment,
  init_environment
} from "./chunk-IPUJJMKT.js";
import {
  init_http
} from "./chunk-RXCRIGXT.js";
import {
  HttpClient
} from "./chunk-5TNFNCMZ.js";
import "./chunk-5C27C2Q6.js";
import "./chunk-4R7PBA5O.js";
import "./chunk-PXVCLZNF.js";
import {
  UserModel,
  init_user_model
} from "./chunk-AWQT2M7K.js";
import {
  RemoveCurrentUserAction,
  Store,
  init_current_user_actions,
  init_ngxs_store
} from "./chunk-GW6V5KYJ.js";
import {
  Observable,
  TestBed,
  init_esm,
  init_testing,
  of
} from "./chunk-A4GR5REI.js";
import {
  __async,
  __commonJS
} from "./chunk-73RR4HMO.js";

// src/app/services/user.service.spec.ts
var require_user_service_spec = __commonJS({
  "src/app/services/user.service.spec.ts"(exports) {
    init_testing();
    init_http();
    init_user_service();
    init_snack_bar();
    init_router();
    init_ngxs_store();
    init_user_login_model();
    init_esm();
    init_current_user_actions();
    init_user_model();
    init_environment();
    init_user_update_model();
    init_user_search_model();
    init_user_add_model();
    describe("UserService", () => {
      let service;
      let httpSpy;
      let routerSpy;
      let snackBarSpy;
      let storeSpy;
      let creds = new UserLoginModel();
      creds.email = "test@example.com";
      creds.password = "password";
      const mockResponse = {
        accessToken: "access-token",
        refreshToken: "refresh-token"
      };
      const mockUser = new UserModel("1", "Test");
      mockUser.accessToken = "access-token";
      beforeEach(() => {
        const http = jasmine.createSpyObj("HttpClient", ["post", "get", "put", "delete"]);
        const router = jasmine.createSpyObj("Router", ["navigateByUrl"]);
        const snackBar = jasmine.createSpyObj("MatSnackBar", ["open"]);
        const store = jasmine.createSpyObj("Store", ["dispatch"]);
        TestBed.configureTestingModule({
          imports: [],
          providers: [
            UserService,
            { provide: HttpClient, useValue: http },
            { provide: Router, useValue: router },
            { provide: MatSnackBar, useValue: snackBar },
            { provide: Store, useValue: store }
          ]
        });
        service = TestBed.inject(UserService);
        httpSpy = TestBed.inject(HttpClient);
        routerSpy = TestBed.inject(Router);
        snackBarSpy = TestBed.inject(MatSnackBar);
        storeSpy = TestBed.inject(Store);
      });
      it("should be created", () => {
        expect(service).toBeTruthy();
      });
      it("should login successfully", () => {
        httpSpy.post.and.returnValue(of(mockResponse));
        spyOn(service, "getCurrentUserDetails").and.returnValue(of(null));
        service.login(creds).subscribe((result) => {
          expect(result).toEqual(jasmine.any(Observable));
          expect(service.accessToken).toBe("access-token");
          expect(service.refreshToken).toBe("refresh-token");
          expect(localStorage.getItem("refreshToken")).toBe("refresh-token");
          expect(routerSpy.navigateByUrl).toHaveBeenCalledWith("/documents");
        });
      });
      it("should logout successfully", () => __async(null, null, function* () {
        httpSpy.post.and.returnValue(of(mockResponse));
        yield service.logout();
        expect(service.accessToken).toBe("");
        expect(service.refreshToken).toBe("");
        expect(localStorage.getItem("refreshToken")).toBeNull();
        expect(service.user).toBeNull();
        expect(storeSpy.dispatch).toHaveBeenCalledWith(new RemoveCurrentUserAction());
        expect(routerSpy.navigateByUrl).toHaveBeenCalledWith("/");
      }));
      it("should get current user details successfully", () => {
        localStorage.clear();
        localStorage.setItem("refreshToken", "refresh-token");
        const mockRefreshResponse = { accessToken: "new-access-token" };
        const mockMeResponse = { data: mockUser };
        storeSpy.dispatch.and.returnValue(of());
        httpSpy.post.and.returnValue(of(mockRefreshResponse));
        httpSpy.get.and.returnValue(of(mockMeResponse));
        service.getCurrentUserDetails().subscribe((result) => {
          expect(result).toEqual(jasmine.any(UserModel));
          expect(service.accessToken).toBe("new-access-token");
          expect(storeSpy.dispatch).toHaveBeenCalled();
        });
      });
      it("should get All Users", () => {
        service.accessToken = "access-token";
        httpSpy.get.and.returnValue(of({ $values: [mockUser] }));
        service.getAllUsers().subscribe((res) => {
          expect(res).toEqual({ $values: [mockUser] });
          expect(httpSpy.get).toHaveBeenCalledOnceWith(environment.serverUrl + "/users/all", {
            headers: {
              Authorization: `Bearer ${service.accessToken}`
            }
          });
        });
      });
      it("should get User By Id", () => {
        service.accessToken = "access-token";
        httpSpy.get.and.returnValue(of({ data: mockUser }));
        service.getUserById("1").subscribe((res) => {
          expect(res).toEqual({ data: mockUser });
          expect(httpSpy.get).toHaveBeenCalledOnceWith(environment.serverUrl + "/users/1", {
            headers: {
              Authorization: `Bearer ${service.accessToken}`
            }
          });
        });
      });
      it("should update User By Id", () => {
        service.accessToken = "access-token";
        httpSpy.put.and.returnValue(of({ data: mockUser }));
        let userUpdate = new UserUpdateModel();
        service.updateUserById("1", userUpdate).subscribe((res) => {
          expect(res).toEqual({ data: mockUser });
          expect(httpSpy.put).toHaveBeenCalledOnceWith(environment.serverUrl + "/users/1", userUpdate, {
            headers: {
              Authorization: `Bearer ${service.accessToken}`
            }
          });
        });
      });
      it("should change User role By Id", () => {
        service.accessToken = "access-token";
        httpSpy.post.and.returnValue(of({ data: mockUser }));
        service.changeUserRoleById("1", "Admin").subscribe((res) => {
          expect(res).toEqual({ data: mockUser });
          expect(httpSpy.post).toHaveBeenCalledOnceWith(environment.serverUrl + "/users/revoke/1?role=Admin", null, {
            headers: {
              Authorization: `Bearer ${service.accessToken}`
            }
          });
        });
      });
      it("should delete User By Id", () => {
        service.accessToken = "access-token";
        httpSpy.delete.and.returnValue(of({ data: mockUser }));
        service.deleteUserById("1").subscribe((res) => {
          expect(res).toEqual({ data: mockUser });
          expect(httpSpy.delete).toHaveBeenCalledOnceWith(environment.serverUrl + "/users/1", {
            headers: {
              Authorization: `Bearer ${service.accessToken}`
            }
          });
        });
      });
      it("should revoke User By Id", () => {
        service.accessToken = "access-token";
        httpSpy.post.and.returnValue(of({ data: mockUser }));
        service.revokeUserById("1").subscribe((res) => {
          expect(res).toEqual({ data: mockUser });
          expect(httpSpy.post).toHaveBeenCalledOnceWith(environment.serverUrl + "/users/revoke/1", null, {
            headers: {
              Authorization: `Bearer ${service.accessToken}`
            }
          });
        });
      });
      it("should get User By Filter", () => {
        service.accessToken = "access-token";
        httpSpy.post.and.returnValue(of({ data: mockUser }));
        let userSearch = new UserSearchModel(null, null, null, null);
        service.getByFilter(userSearch).subscribe((res) => {
          expect(res).toEqual({ data: mockUser });
          expect(httpSpy.post).toHaveBeenCalledOnceWith(environment.serverUrl + "/users/filter", userSearch, {
            headers: {
              Authorization: `Bearer ${service.accessToken}`
            }
          });
        });
      });
      it("should add User", () => {
        service.accessToken = "access-token";
        httpSpy.post.and.returnValue(of({ data: mockUser }));
        let userAdd = new UserAddModel("", "", "", 1, "");
        service.addUser(userAdd).subscribe((res) => {
          expect(res).toEqual({ data: mockUser });
          expect(httpSpy.post).toHaveBeenCalledOnceWith(environment.serverUrl + "/users", userAdd, {
            headers: {
              Authorization: `Bearer ${service.accessToken}`
            }
          });
        });
      });
    });
  }
});
export default require_user_service_spec();
//# sourceMappingURL=spec-app-services-user.service.spec.js.map
