import {
  UserService,
  init_user_service
} from "./chunk-PLTMWAKF.js";
import {
  Router,
  init_router
} from "./chunk-JM6AMNVR.js";
import "./chunk-QMOCZ3CH.js";
import {
  CurrentUserState,
  init_current_user_state
} from "./chunk-KB55D65T.js";
import {
  Store,
  init_ngxs_store
} from "./chunk-GW6V5KYJ.js";
import {
  MatSnackBar,
  init_snack_bar
} from "./chunk-E5A666WI.js";
import "./chunk-IPUJJMKT.js";
import "./chunk-RXCRIGXT.js";
import "./chunk-5TNFNCMZ.js";
import "./chunk-5C27C2Q6.js";
import "./chunk-4R7PBA5O.js";
import "./chunk-PXVCLZNF.js";
import {
  TestBed,
  init_core,
  init_testing,
  inject
} from "./chunk-A4GR5REI.js";
import "./chunk-73RR4HMO.js";

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
