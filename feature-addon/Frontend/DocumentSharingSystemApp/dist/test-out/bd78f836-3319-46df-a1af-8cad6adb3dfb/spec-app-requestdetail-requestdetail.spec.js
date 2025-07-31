import {
  DocumentRestoreRequestModel,
  init_document_request_model
} from "./chunk-JANHMIFN.js";
import {
  Requestdetail,
  init_requestdetail
} from "./chunk-MDKH6ONL.js";
import "./chunk-J3BRLMTD.js";
import {
  DocumentRestoreService,
  init_documentrestore_service
} from "./chunk-5JLSSSU6.js";
import "./chunk-2KLKVMNN.js";
import {
  UserService,
  init_user_service
} from "./chunk-7EC2UC22.js";
import "./chunk-3E5A46ZA.js";
import "./chunk-AVCIMTP5.js";
import {
  UserModel,
  init_user_model
} from "./chunk-AWQT2M7K.js";
import "./chunk-LBJXXCBG.js";
import {
  Store,
  init_ngxs_store
} from "./chunk-MAH2RGQ2.js";
import "./chunk-CTANRZ7U.js";
import "./chunk-IPUJJMKT.js";
import "./chunk-XAUGNK3T.js";
import "./chunk-K6YDNL6G.js";
import "./chunk-PI2YTXAG.js";
import "./chunk-JO3QPFNY.js";
import "./chunk-PXVCLZNF.js";
import {
  TestBed,
  init_esm,
  init_testing,
  of
} from "./chunk-6IGNU3MH.js";
import {
  __async,
  __commonJS
} from "./chunk-73RR4HMO.js";

// src/app/requestdetail/requestdetail.spec.ts
var require_requestdetail_spec = __commonJS({
  "src/app/requestdetail/requestdetail.spec.ts"(exports) {
    init_testing();
    init_requestdetail();
    init_esm();
    init_documentrestore_service();
    init_user_service();
    init_ngxs_store();
    init_user_model();
    init_document_request_model();
    describe("Requestdetail", () => {
      let component;
      let fixture;
      let mockDocumentRestoreService;
      let mockUserService;
      let mockStore;
      beforeEach(() => __async(null, null, function* () {
        mockDocumentRestoreService = jasmine.createSpyObj("DocumentRestoreService", ["getRequestByDocumentId"]);
        mockUserService = jasmine.createSpyObj("UserService", ["getCurrentUserDetails"]);
        mockStore = jasmine.createSpyObj("Store", ["select"]);
        mockStore.select.and.returnValue(of(new UserModel("1")));
        mockUserService.getCurrentUserDetails.and.returnValue(of(new UserModel("1")));
        mockDocumentRestoreService.getRequestByDocumentId.and.returnValue(of(new DocumentRestoreRequestModel()));
        yield TestBed.configureTestingModule({
          imports: [Requestdetail],
          providers: [
            { provide: DocumentRestoreService, useValue: mockDocumentRestoreService },
            { provide: UserService, useValue: mockUserService },
            { provide: Store, useValue: mockStore }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Requestdetail);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_requestdetail_spec();
//# sourceMappingURL=spec-app-requestdetail-requestdetail.spec.js.map
