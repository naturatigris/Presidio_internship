import {
  UserService,
  init_user_service
} from "./chunk-5WHMKPOL.js";
import {
  Router,
  init_router
} from "./chunk-OZO2KPD5.js";
import {
  CurrentUserState,
  init_current_user_state
} from "./chunk-VTW7XGUJ.js";
import {
  Store,
  init_ngxs_store
} from "./chunk-ZFPYVLZ3.js";
import {
  MatSnackBar,
  init_snack_bar
} from "./chunk-JZNWBP4I.js";
import "./chunk-CL4W7QDJ.js";
import "./chunk-3XLREPA7.js";
import "./chunk-GGXJ5NN7.js";
import "./chunk-KYRJKNJ3.js";
import "./chunk-5TPMZ7JT.js";
import "./chunk-T4FSVIK5.js";
import "./chunk-53DDW4RY.js";
import {
  TestBed,
  init_core,
  init_testing,
  inject
} from "./chunk-DV5BYKE4.js";
import "./chunk-3HY6NCXN.js";

// src/app/guards/specified-user-guard.spec.ts
init_testing();

// src/app/guards/specified-user-guard.ts
init_core();
init_router();
init_ngxs_store();
init_current_user_state();
init_user_service();
init_snack_bar();
var specifiedUserGuard = (route, state) => {
  let store = inject(Store);
  let router = inject(Router);
  let id = route.paramMap.get("id");
  let userService = inject(UserService);
  let snackBar = new MatSnackBar();
  let currentUser = store.selectSignal(CurrentUserState.getUser);
  if (currentUser() == null) {
    let rt = localStorage.getItem("refreshToken");
    if (rt) {
      userService.getCurrentUserDetails();
      if (currentUser == null) {
        router.navigateByUrl("/");
        return false;
      }
    } else {
      snackBar.open("Not Authorized to  visit!", void 0, { duration: 2e3 });
      router.navigateByUrl("/");
      return false;
    }
  }
  if (currentUser()?.role == "Admin" || currentUser()?.id == id) {
    return true;
  }
  snackBar.open("Not Authorized to  visit!", void 0, { duration: 2e3 });
  router.navigateByUrl("/users");
  return false;
};

// src/app/guards/specified-user-guard.spec.ts
describe("specifiedUserGuard", () => {
  const executeGuard = (...guardParameters) => TestBed.runInInjectionContext(() => specifiedUserGuard(...guardParameters));
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-guards-specified-user-guard.spec.js.map
