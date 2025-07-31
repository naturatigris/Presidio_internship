import {
  Router,
  init_router
} from "./chunk-JM6AMNVR.js";
import {
  RemoveCurrentUserAction,
  SetCurrentUserAction,
  Store,
  init_current_user_actions,
  init_ngxs_store
} from "./chunk-GW6V5KYJ.js";
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
import {
  BehaviorSubject,
  Injectable,
  __decorate,
  catchError,
  finalize,
  init_core,
  init_esm,
  init_tslib_es6,
  inject,
  map,
  of,
  switchMap
} from "./chunk-A4GR5REI.js";
import {
  __esm
} from "./chunk-73RR4HMO.js";

// src/app/services/user.service.ts
var UserService;
var init_user_service = __esm({
  "src/app/services/user.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_http();
    init_core();
    init_esm();
    init_environment();
    init_snack_bar();
    init_router();
    init_ngxs_store();
    init_current_user_actions();
    UserService = class UserService2 {
      http = inject(HttpClient);
      router = inject(Router);
      store = inject(Store);
      userSubject = new BehaviorSubject(null);
      user$ = this.userSubject.asObservable();
      snackBar = new MatSnackBar();
      accessToken = "";
      refreshToken = "";
      user = null;
      loginSubject = new BehaviorSubject({ success: false, error: null });
      login(creds) {
        return this.http.post(environment.serverUrl + "/auth/login", creds).pipe(map((res) => {
          this.accessToken = res.accessToken;
          this.refreshToken = res.refreshToken;
          localStorage.setItem("refreshToken", res.refreshToken);
          this.getCurrentUserDetails();
          this.snackBar.open("Log In Success!", void 0, { duration: 2e3 });
          this.router.navigateByUrl("/documents");
          return of({ success: true, error: "" });
        }), catchError((err) => {
          console.log(err);
          return of({ success: false, error: err.error.errors.message });
        }));
      }
      // login(creds : UserLoginModel)
      logout() {
        this.http.post(environment.serverUrl + "/auth/logout", {}, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          },
          responseType: "text"
        }).pipe(catchError((err) => {
          console.error(err);
          return of(null);
        }), finalize(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          this.store.dispatch(new RemoveCurrentUserAction());
          this.accessToken = "";
          this.refreshToken = "";
          this.user = null;
          this.userSubject.next(this.user);
          this.router.navigateByUrl("/");
        })).subscribe();
      }
      getCurrentUserDetails() {
        let rt = localStorage.getItem("refreshToken");
        if (rt == null) {
          console.log("refreshToken not found");
          this.router.navigateByUrl("/");
          return of(null);
        }
        return this.http.post(environment.serverUrl + `/auth/refresh?token=${rt}`, {}).pipe(switchMap((data) => {
          this.accessToken = data.accessToken;
          return this.http.get(`${environment.serverUrl}/auth/me`, {
            headers: {
              Authorization: `Bearer ${this.accessToken}`
            }
          });
        }), map((data) => {
          this.user = data.data;
          this.user.accessToken = this.accessToken;
          this.user.refreshToken = this.refreshToken;
          this.store.dispatch(new SetCurrentUserAction(this.user));
          this.userSubject.next(this.user);
          return this.user;
        }), catchError((err) => {
          console.error("Error during login:", err);
          this.snackBar.open("Session expired. Please login again.", void 0, { duration: 3e3 });
          return of(null);
        }));
      }
      getAllUsers() {
        return this.http.get(environment.serverUrl + "/users/all", {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        });
      }
      getUserById(id) {
        return this.http.get(environment.serverUrl + "/users/" + id, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        });
      }
      updateUserById(id, updatedUser) {
        return this.http.put(environment.serverUrl + "/users/" + id, updatedUser, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        });
      }
      changeUserRoleById(id, role) {
        return this.http.post(environment.serverUrl + `/users/revoke/${id}?role=${role}`, null, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        });
      }
      deleteUserById(id) {
        return this.http.delete(environment.serverUrl + "/users/" + id, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        });
      }
      revokeUserById(id) {
        return this.http.post(environment.serverUrl + `/users/revoke/${id}`, null, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        });
      }
      getByFilter(userSearch) {
        return this.http.post(environment.serverUrl + "/users/filter", userSearch, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        });
      }
      addUser(newUser) {
        return this.http.post(environment.serverUrl + "/users", newUser, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        });
      }
    };
    UserService = __decorate([
      Injectable()
    ], UserService);
  }
});

export {
  UserService,
  init_user_service
};
//# sourceMappingURL=chunk-PLTMWAKF.js.map
