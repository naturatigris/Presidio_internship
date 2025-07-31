import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-A4GR5REI.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-73RR4HMO.js";

// angular:jit:template:src/app/document-request-user/document-request-user.html
var document_request_user_default;
var init_document_request_user = __esm({
  "angular:jit:template:src/app/document-request-user/document-request-user.html"() {
    document_request_user_default = "<app-navbar></app-navbar>";
  }
});

// angular:jit:style:src/app/document-request-user/document-request-user.css
var document_request_user_default2;
var init_document_request_user2 = __esm({
  "angular:jit:style:src/app/document-request-user/document-request-user.css"() {
    document_request_user_default2 = "/* src/app/document-request-user/document-request-user.css */\n/*# sourceMappingURL=document-request-user.css.map */\n";
  }
});

// src/app/document-request-user/document-request-user.ts
var DocumentRequestUser;
var init_document_request_user3 = __esm({
  "src/app/document-request-user/document-request-user.ts"() {
    "use strict";
    init_tslib_es6();
    init_document_request_user();
    init_document_request_user2();
    init_core();
    DocumentRequestUser = class DocumentRequestUser2 {
    };
    DocumentRequestUser = __decorate([
      Component({
        selector: "app-document-request-user",
        imports: [],
        template: document_request_user_default,
        styles: [document_request_user_default2]
      })
    ], DocumentRequestUser);
  }
});

// src/app/document-request-user/document-request-user.spec.ts
var require_document_request_user_spec = __commonJS({
  "src/app/document-request-user/document-request-user.spec.ts"(exports) {
    init_testing();
    init_document_request_user3();
    describe("DocumentRequestUser", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DocumentRequestUser]
        }).compileComponents();
        fixture = TestBed.createComponent(DocumentRequestUser);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_document_request_user_spec();
//# sourceMappingURL=spec-app-document-request-user-document-request-user.spec.js.map
