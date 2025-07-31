import {
  DocumentRequestModal,
  init_document_request_modal
} from "./chunk-RA76JFRY.js";
import "./chunk-IUYNAQQX.js";
import "./chunk-5JLSSSU6.js";
import "./chunk-DHB277MQ.js";
import "./chunk-YLD4CDCH.js";
import "./chunk-AUF5RPMJ.js";
import "./chunk-3YSEX4UT.js";
import "./chunk-2KLKVMNN.js";
import "./chunk-CTANRZ7U.js";
import "./chunk-IPUJJMKT.js";
import "./chunk-XAUGNK3T.js";
import "./chunk-K6YDNL6G.js";
import "./chunk-PI2YTXAG.js";
import "./chunk-JO3QPFNY.js";
import "./chunk-PXVCLZNF.js";
import {
  TestBed,
  init_testing
} from "./chunk-6IGNU3MH.js";
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
