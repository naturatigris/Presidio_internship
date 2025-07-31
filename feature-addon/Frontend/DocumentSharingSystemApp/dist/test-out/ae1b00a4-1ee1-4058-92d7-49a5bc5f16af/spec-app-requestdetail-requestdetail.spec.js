import {
  DocumentRestoreRequestModel,
  init_document_request_model
} from "./chunk-YN7DLO6P.js";
import {
  Requestdetail,
  init_requestdetail
} from "./chunk-DWYSZHVE.js";
import "./chunk-RGQCBORS.js";
import {
  DocumentRestoreService,
  init_documentrestore_service
} from "./chunk-WLNX5L36.js";
import "./chunk-HIPVT64V.js";
import {
  UserService,
  init_user_service
} from "./chunk-5WHMKPOL.js";
import "./chunk-OZO2KPD5.js";
import {
  UserModel,
  init_user_model
} from "./chunk-SVFGXIGK.js";
import "./chunk-VTW7XGUJ.js";
import {
  Store,
  init_ngxs_store
} from "./chunk-ZFPYVLZ3.js";
import "./chunk-JZNWBP4I.js";
import "./chunk-CL4W7QDJ.js";
import "./chunk-3XLREPA7.js";
import "./chunk-GGXJ5NN7.js";
import "./chunk-KYRJKNJ3.js";
import "./chunk-5TPMZ7JT.js";
import "./chunk-T4FSVIK5.js";
import "./chunk-53DDW4RY.js";
import {
  TestBed,
  init_esm,
  init_testing,
  of
} from "./chunk-DV5BYKE4.js";
import {
  __async,
  __commonJS
} from "./chunk-3HY6NCXN.js";

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
