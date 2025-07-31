import {
  UserModel,
  init_user_model
} from "./chunk-AWQT2M7K.js";
import {
  CurrentUserState,
  init_current_user_state
} from "./chunk-LBJXXCBG.js";
import {
  SetCurrentUserAction,
  Store,
  init_current_user_actions,
  init_ngxs_store,
  provideStore
} from "./chunk-MAH2RGQ2.js";
import {
  TestBed,
  init_testing
} from "./chunk-6IGNU3MH.js";
import "./chunk-73RR4HMO.js";

// src/app/current-user/current-user.state.spec.ts
init_testing();
init_ngxs_store();
init_current_user_state();
init_current_user_actions();
init_user_model();
describe("CurrentUser store", () => {
  let store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideStore([CurrentUserState])]
    });
    store = TestBed.inject(Store);
    store.reset({});
  });
  it("should create an action and set an item", () => {
    let user = new UserModel();
    const expected = {
      user
    };
    store.dispatch(new SetCurrentUserAction(user));
    const actual = store.selectSnapshot(CurrentUserState.getUser);
    expect(actual).toEqual(user);
  });
  it("should update user data", () => {
    const user1 = new UserModel("1");
    const user2 = new UserModel("2");
    let callCount = 0;
    store.dispatch(new SetCurrentUserAction(user1));
    store.select(CurrentUserState.getUser).subscribe((data) => {
      callCount++;
      if (callCount === 1) {
        expect(data).toEqual(user1);
        store.dispatch(new SetCurrentUserAction(user2));
      } else if (callCount === 2) {
        expect(data).toEqual(user2);
      }
    });
  });
});
//# sourceMappingURL=spec-app-current-user-current-user.state.spec.js.map
