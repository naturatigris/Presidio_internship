import {
  Action,
  RemoveCurrentUserAction,
  Selector,
  SetCurrentUserAction,
  State,
  init_current_user_actions,
  init_ngxs_store
} from "./chunk-GW6V5KYJ.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-A4GR5REI.js";
import {
  __esm
} from "./chunk-73RR4HMO.js";

// src/app/current-user/current-user.state.ts
var CurrentUserState;
var init_current_user_state = __esm({
  "src/app/current-user/current-user.state.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_ngxs_store();
    init_current_user_actions();
    CurrentUserState = class CurrentUserState2 {
      static getUser(state) {
        return state.user;
      }
      set(ctx, { payload }) {
        ctx.setState({ user: payload });
      }
      remove(ctx) {
        ctx.setState({ user: null });
      }
    };
    __decorate([
      Action(SetCurrentUserAction)
    ], CurrentUserState.prototype, "set", null);
    __decorate([
      Action(RemoveCurrentUserAction)
    ], CurrentUserState.prototype, "remove", null);
    __decorate([
      Selector()
    ], CurrentUserState, "getUser", null);
    CurrentUserState = __decorate([
      State({
        name: "currentUser",
        defaults: {
          user: null
        }
      }),
      Injectable()
    ], CurrentUserState);
  }
});

export {
  CurrentUserState,
  init_current_user_state
};
//# sourceMappingURL=chunk-KB55D65T.js.map
