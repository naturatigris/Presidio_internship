import {
  DocumentRequestModal,
  init_document_request_modal
} from "./chunk-ETFM7R27.js";
import "./chunk-A2UYTQ2M.js";
import "./chunk-A6KC4RB4.js";
import "./chunk-HMSNM5K4.js";
import "./chunk-KVABBLRZ.js";
import "./chunk-WN64QJPD.js";
import "./chunk-ML2ODG5X.js";
import "./chunk-F4S5UMDT.js";
import "./chunk-E5A666WI.js";
import "./chunk-IPUJJMKT.js";
import "./chunk-RXCRIGXT.js";
import "./chunk-5TNFNCMZ.js";
import "./chunk-5C27C2Q6.js";
import "./chunk-4R7PBA5O.js";
import "./chunk-PXVCLZNF.js";
import {
  TestBed,
  init_testing
} from "./chunk-A4GR5REI.js";
import {
  __async,
  __commonJS
} from "./chunk-73RR4HMO.js";

// src/app/document-request-modal/document-request-modal.spec.ts
var require_document_request_modal_spec = __commonJS({
  "src/app/document-request-modal/document-request-modal.spec.ts"(exports) {
    init_testing();
    init_document_request_modal();
    describe("DocumentRequestModal", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DocumentRequestModal]
        }).compileComponents();
        fixture = TestBed.createComponent(DocumentRequestModal);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_document_request_modal_spec();
//# sourceMappingURL=spec-app-document-request-modal-document-request-modal.spec.js.map
