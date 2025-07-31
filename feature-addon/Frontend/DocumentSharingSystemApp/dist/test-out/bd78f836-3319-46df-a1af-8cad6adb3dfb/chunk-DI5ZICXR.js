import {
  __esm
} from "./chunk-73RR4HMO.js";

// src/app/models/user.update.model.ts
var UserUpdateModel;
var init_user_update_model = __esm({
  "src/app/models/user.update.model.ts"() {
    "use strict";
    UserUpdateModel = class {
      name;
      email;
      teamId;
      password;
      constructor(name = "", email = "", teamId = 0, password = null) {
        this.name = name;
        this.email = email;
        this.teamId = teamId;
        this.password = password;
      }
    };
  }
});

// src/app/models/user.add.model.ts
var UserAddModel;
var init_user_add_model = __esm({
  "src/app/models/user.add.model.ts"() {
    "use strict";
    UserAddModel = class {
      name;
      role;
      email;
      teamId;
      password;
      constructor(name = "", role = "User", email = "", teamId = 0, password = "") {
        this.name = name;
        this.role = role;
        this.email = email;
        this.teamId = teamId;
        this.password = password;
      }
    };
  }
});

export {
  UserUpdateModel,
  init_user_update_model,
  UserAddModel,
  init_user_add_model
};
//# sourceMappingURL=chunk-DI5ZICXR.js.map
