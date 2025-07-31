import {
  DocumentModel,
  init_document_model
} from "./chunk-RGQCBORS.js";
import {
  UserModel,
  init_user_model
} from "./chunk-SVFGXIGK.js";
import {
  __esm
} from "./chunk-3HY6NCXN.js";

// src/app/models/document.request.model.ts
var DocumentRestoreRequestModel;
var init_document_request_model = __esm({
  "src/app/models/document.request.model.ts"() {
    "use strict";
    init_document_model();
    init_user_model();
    DocumentRestoreRequestModel = class _DocumentRestoreRequestModel {
      id;
      documentId;
      document;
      originalFileName;
      requestedByUserId;
      requestedByUserName;
      requestedByUser;
      requestedAt;
      reason;
      status;
      reviewedAt;
      reviewedByUserId;
      reviewedByUserName;
      reviewedByUser;
      isAdminRead;
      IsUserRead;
      constructor(id = "", documentId = "", document = null, originalFileName = "", requestedByUserId = "", requestedByUserName = "", requestedByUser = null, requestedAt = /* @__PURE__ */ new Date(), reason = "", status = "", reviewedAt = null, reviewedByUserId = null, reviewedByUserName = null, reviewedByUser = null, isAdminRead = false, IsUserRead = false) {
        this.id = id;
        this.documentId = documentId;
        this.document = document;
        this.originalFileName = originalFileName;
        this.requestedByUserId = requestedByUserId;
        this.requestedByUserName = requestedByUserName;
        this.requestedByUser = requestedByUser;
        this.requestedAt = requestedAt;
        this.reason = reason;
        this.status = status;
        this.reviewedAt = reviewedAt;
        this.reviewedByUserId = reviewedByUserId;
        this.reviewedByUserName = reviewedByUserName;
        this.reviewedByUser = reviewedByUser;
        this.isAdminRead = isAdminRead;
        this.IsUserRead = IsUserRead;
      }
      static fromData(data) {
        return new _DocumentRestoreRequestModel(data.id, data.documentId, data.document ? DocumentModel.fromData(data.document) : null, data.OriginalFileName, data.requestedByUserId, data.requestedByUserName, data.requestedByUser ? UserModel.fromData(data.requestedByUser) : null, data.requestedAt ? new Date(data.requestedAt) : /* @__PURE__ */ new Date(), data.reason, data.status, data.reviewedAt ? new Date(data.reviewedAt) : null, data.reviewedByUserId ?? null, data.reviewedByUserName, data.reviewedByUser ? UserModel.fromData(data.reviewedByUser) : null, data.isAdminRead, data.IsUserRead);
      }
    };
  }
});

export {
  DocumentRestoreRequestModel,
  init_document_request_model
};
//# sourceMappingURL=chunk-YN7DLO6P.js.map
