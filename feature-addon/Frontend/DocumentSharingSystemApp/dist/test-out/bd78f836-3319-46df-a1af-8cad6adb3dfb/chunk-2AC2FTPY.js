import {
  __esm
} from "./chunk-73RR4HMO.js";

// src/app/models/document.search.model.ts
var DocumentSearchModel;
var init_document_search_model = __esm({
  "src/app/models/document.search.model.ts"() {
    "use strict";
    DocumentSearchModel = class {
      searchByOriginalFileName;
      searchByCreatedUserEmail;
      searchByCreatedTime;
      SortBy;
      SortOrder;
      pageNo;
      pageSize;
      view;
      constructor(searchByOriginalFileName = null, searchByCreatedUserEmail = null, searchByCreatedTime = null, SortBy = null, SortOrder = null, pageNo = null, pageSize = null, view = "All") {
        this.searchByOriginalFileName = searchByOriginalFileName;
        this.searchByCreatedUserEmail = searchByCreatedUserEmail;
        this.searchByCreatedTime = searchByCreatedTime;
        this.SortBy = SortBy;
        this.SortOrder = SortOrder;
        this.pageNo = pageNo;
        this.pageSize = pageSize;
        this.view = view;
      }
    };
  }
});

export {
  DocumentSearchModel,
  init_document_search_model
};
//# sourceMappingURL=chunk-2AC2FTPY.js.map
