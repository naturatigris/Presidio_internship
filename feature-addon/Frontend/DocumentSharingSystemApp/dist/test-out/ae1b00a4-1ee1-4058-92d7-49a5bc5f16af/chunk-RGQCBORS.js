import {
  __esm
} from "./chunk-3HY6NCXN.js";

// src/app/models/document.model.ts
var DocumentModel;
var init_document_model = __esm({
  "src/app/models/document.model.ts"() {
    "use strict";
    DocumentModel = class _DocumentModel {
      id;
      storedFileName;
      originalFileName;
      description;
      visibility;
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
      isAcessRequested;
      constructor(id = "", storedFileName = "", originalFileName = "", description = "", visibility = "", teamId = 0, teamName = "", isDeleted = false, createdByUserId = "", createdByUserName = "", createdByUserEmail = "", createdAt = /* @__PURE__ */ new Date(), lastUpdatedByUserId = "", lastUpdatedByUserName = "", lastUpdatedByUserEmail = "", lastUpdatedAt = /* @__PURE__ */ new Date(), isAcessRequested = false) {
        this.id = id;
        this.storedFileName = storedFileName;
        this.originalFileName = originalFileName;
        this.description = description;
        this.visibility = visibility;
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
        this.isAcessRequested = isAcessRequested;
      }
      static fromData(data) {
        return new _DocumentModel(data.id, data.storedFileName, data.originalFileName, data.description, data.visibility, data.teamId, data.teamName, data.isDeleted, data.createdByUserId, data.createdByUserName, data.createdByUserEmail, new Date(data.createdAt), data.lastUpdatedByUserId, data.lastUpdatedByUserName, data.lastUpdatedByUserEmail, new Date(data.lastUpdatedAt), data.isAcessRequested);
      }
    };
  }
});

export {
  DocumentModel,
  init_document_model
};
//# sourceMappingURL=chunk-RGQCBORS.js.map
