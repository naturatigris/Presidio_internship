import {
  environment,
  init_environment
} from "./chunk-IPUJJMKT.js";
import {
  HttpClient,
  init_http
} from "./chunk-IHAN2XKS.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6,
  inject
} from "./chunk-A4GR5REI.js";
import {
  __esm
} from "./chunk-73RR4HMO.js";

// src/app/services/document.service.ts
var DocumentService;
var init_document_service = __esm({
  "src/app/services/document.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_http();
    init_core();
    init_environment();
    DocumentService = class DocumentService2 {
      http = inject(HttpClient);
      user = null;
      getAll(user) {
        if (user != null) {
          return this.http.get(environment.serverUrl + "/documents", {
            headers: {
              Authorization: `Bearer ${user.accessToken}`
            }
          });
        }
        return null;
      }
      getByFilter(user, documentSearch) {
        return this.http.post(environment.serverUrl + "/documents/filter", documentSearch, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        });
      }
      deleteDocument(user, id) {
        return this.http.delete(environment.serverUrl + "/documents/" + id, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        });
      }
      downloadDocument(user, id) {
        return this.http.get(environment.serverUrl + "/documents/download/" + id, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          },
          responseType: "blob"
        });
      }
      uploadDocument(user, fileData, document) {
        console.log("Document:", document);
        console.log("Is file:", document instanceof File);
        let formData = new FormData();
        formData.append("description", fileData.description ?? "");
        formData.append("teamId", fileData.teamId.toString());
        formData.append("visibility", fileData.visibility ?? "Public");
        formData.append("formFile", document);
        return this.http.post(environment.serverUrl + "/documents/upload", formData, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        });
      }
      getDocumentById(user, id) {
        return this.http.get(environment.serverUrl + "/documents/" + id, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        });
      }
      updateDocumentDetails(user, id, fileDate) {
        return this.http.put(environment.serverUrl + "/documents/" + id, fileDate, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        });
      }
    };
    DocumentService = __decorate([
      Injectable()
    ], DocumentService);
  }
});

// src/app/models/document.details.model.ts
var DocumentDetailsModel;
var init_document_details_model = __esm({
  "src/app/models/document.details.model.ts"() {
    "use strict";
    DocumentDetailsModel = class {
      description;
      teamId;
      visibility;
      isAccessRequested;
      constructor(description = null, teamId = 0, visibility = "Public", isAccessRequested = false) {
        this.description = description;
        this.teamId = teamId;
        this.visibility = visibility;
        this.isAccessRequested = isAccessRequested;
      }
    };
  }
});

export {
  DocumentService,
  init_document_service,
  DocumentDetailsModel,
  init_document_details_model
};
//# sourceMappingURL=chunk-NMZHGRO7.js.map
