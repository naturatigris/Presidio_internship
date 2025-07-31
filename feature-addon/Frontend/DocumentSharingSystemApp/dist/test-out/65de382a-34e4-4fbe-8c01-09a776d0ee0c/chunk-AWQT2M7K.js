import {
  __esm
} from "./chunk-73RR4HMO.js";

// src/app/models/user.model.ts
var UserModel;
var init_user_model = __esm({
  "src/app/models/user.model.ts"() {
    "use strict";
    UserModel = class {
      id;
      name;
      role;
      email;
      teamId;
      teamName;
      isDeleted;
      createdByUserId;
      createdByUserName;
      createdByUserEmail;
      createdAt;
      lastUpdatedByUserId;
      lastUpdatedByUserName;
      lastUpdatedByUserEmail;
      lastUpdatedAt;
      accessToken;
      refreshToken;
      lastloginAt;
      static fromData(requestedByUser) {
        throw new Error("Method not implemented.");
      }
      constructor(id = "", name = "", role = "", email = "", teamId = 0, teamName = "", isDeleted = false, createdByUserId = "", createdByUserName = "", createdByUserEmail = "", createdAt = /* @__PURE__ */ new Date(), lastUpdatedByUserId = "", lastUpdatedByUserName = "", lastUpdatedByUserEmail = "", lastUpdatedAt = /* @__PURE__ */ new Date(), accessToken = "", refreshToken = "", lastloginAt = "") {
        this.id = id;
        this.name = name;
        this.role = role;
        this.email = email;
        this.teamId = teamId;
        this.teamName = teamName;
        this.isDeleted = isDeleted;
        this.createdByUserId = createdByUserId;
        this.createdByUserName = createdByUserName;
        this.createdByUserEmail = createdByUserEmail;
        this.createdAt = createdAt;
        this.lastUpdatedByUserId = lastUpdatedByUserId;
        this.lastUpdatedByUserName = lastUpdatedByUserName;
        this.lastUpdatedByUserEmail = lastUpdatedByUserEmail;
        this.lastUpdatedAt = lastUpdatedAt;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.lastloginAt = lastloginAt;
      }
    };
  }
});

export {
  UserModel,
  init_user_model
};
//# sourceMappingURL=chunk-AWQT2M7K.js.map
