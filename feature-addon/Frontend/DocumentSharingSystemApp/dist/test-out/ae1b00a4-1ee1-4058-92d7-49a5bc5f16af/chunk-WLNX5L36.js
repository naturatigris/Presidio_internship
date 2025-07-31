import {
  environment,
  init_environment
} from "./chunk-CL4W7QDJ.js";
import {
  init_http
} from "./chunk-GGXJ5NN7.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-KYRJKNJ3.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-DV5BYKE4.js";
import {
  __esm
} from "./chunk-3HY6NCXN.js";

// src/app/services/documentrestore.service.ts
var DocumentRestoreService;
var init_documentrestore_service = __esm({
  "src/app/services/documentrestore.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_http();
    init_core();
    init_environment();
    DocumentRestoreService = class DocumentRestoreService2 {
      http;
      baseUrl = `${environment.serverUrl}/Documentrestore`;
      constructor(http) {
        this.http = http;
      }
      requestRestore(user, request) {
        return this.http.post(`${this.baseUrl}/request`, request, { headers: {
          Authorization: `Bearer ${user.accessToken}`
        } });
      }
      getAllRequests(user) {
        return this.http.get(`${this.baseUrl}/getall`, { headers: {
          Authorization: `Bearer ${user.accessToken}`
        } });
      }
      approveRequest(user, requestId, adminId) {
        const params = new HttpParams().set("adminId", adminId);
        return this.http.post(`${this.baseUrl}/approve/${requestId}`, null, { headers: {
          Authorization: `Bearer ${user.accessToken}`
        }, params });
      }
      rejectRequest(user, requestId, adminId) {
        const params = new HttpParams().set("adminId", adminId);
        return this.http.post(`${this.baseUrl}/reject/${requestId}`, null, { headers: {
          Authorization: `Bearer ${user.accessToken}`
        }, params });
      }
      getRequestByDocumentId(documentId, user) {
        return this.http.get(`${this.baseUrl}/bydocument/${documentId}`, { headers: {
          Authorization: `Bearer ${user.accessToken}`
        } });
      }
      getRequestByUserId(user) {
        return this.http.get(`${this.baseUrl}/byuser/${user.id}`, { headers: {
          Authorization: `Bearer ${user.accessToken}`
        } });
      }
      MarkReadUser(user, id) {
        return this.http.put(`${this.baseUrl}/UserRead/${id}`, { headers: {
          Authorization: `Bearer ${user.accessToken}`
        } });
      }
      MarkReadAdmin(user, id) {
        return this.http.put(`${this.baseUrl}/AdminRead/${id}`, { headers: {
          Authorization: `Bearer ${user.accessToken}`
        } });
      }
      getFilteredRequests(type, page = 1, pageSize = 6, user) {
        let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString());
        if (type) {
          params = params.set("type", type);
        }
        return this.http.get(`${this.baseUrl}/filtered`, {
          params,
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        });
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    DocumentRestoreService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], DocumentRestoreService);
  }
});

export {
  DocumentRestoreService,
  init_documentrestore_service
};
//# sourceMappingURL=chunk-WLNX5L36.js.map
