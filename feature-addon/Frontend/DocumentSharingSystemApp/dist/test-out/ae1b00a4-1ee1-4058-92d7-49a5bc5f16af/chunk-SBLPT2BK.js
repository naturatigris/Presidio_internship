import {
  __esm
} from "./chunk-3HY6NCXN.js";

// src/app/models/team.model.ts
var TeamModel;
var init_team_model = __esm({
  "src/app/models/team.model.ts"() {
    "use strict";
    TeamModel = class {
      id;
      name;
      isDeleted;
      createdByUserId;
      createdByUserName;
      createdByUserEmail;
      createdAt;
      lastUpdatedByUserId;
      lastUpdatedByUserName;
      lastUpdatedByUserEmail;
      lastUpdatedAt;
      constructor(id = 0, name = "", isDeleted = false, createdByUserId = "", createdByUserName = "", createdByUserEmail = "", createdAt = /* @__PURE__ */ new Date(), lastUpdatedByUserId = "", lastUpdatedByUserName = "", lastUpdatedByUserEmail = "", lastUpdatedAt = /* @__PURE__ */ new Date()) {
        this.id = id;
        this.name = name;
        this.isDeleted = isDeleted;
        this.createdByUserId = createdByUserId;
        this.createdByUserName = createdByUserName;
        this.createdByUserEmail = createdByUserEmail;
        this.createdAt = createdAt;
        this.lastUpdatedByUserId = lastUpdatedByUserId;
        this.lastUpdatedByUserName = lastUpdatedByUserName;
        this.lastUpdatedByUserEmail = lastUpdatedByUserEmail;
        this.lastUpdatedAt = lastUpdatedAt;
      }
    };
  }
});

export {
  TeamModel,
  init_team_model
};
//# sourceMappingURL=chunk-SBLPT2BK.js.map
