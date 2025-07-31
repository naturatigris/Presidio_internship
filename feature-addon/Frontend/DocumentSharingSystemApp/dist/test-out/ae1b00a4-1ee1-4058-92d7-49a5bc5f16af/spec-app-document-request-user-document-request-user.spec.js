import {
  MatCardModule,
  init_card
} from "./chunk-ZXP43ABN.js";
import {
  DocumentRestoreService,
  init_documentrestore_service
} from "./chunk-WLNX5L36.js";
import {
  Navbar,
  init_navbar
} from "./chunk-S5ZC5WJE.js";
import "./chunk-IAOX4OAG.js";
import {
  UserService,
  init_user_service
} from "./chunk-5WHMKPOL.js";
import {
  ActivatedRoute,
  init_router
} from "./chunk-OZO2KPD5.js";
import {
  UserModel,
  init_user_model
} from "./chunk-SVFGXIGK.js";
import {
  CurrentUserState,
  init_current_user_state
} from "./chunk-VTW7XGUJ.js";
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
import {
  CommonModule,
  init_common
} from "./chunk-T4FSVIK5.js";
import "./chunk-53DDW4RY.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of
} from "./chunk-DV5BYKE4.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-3HY6NCXN.js";

// angular:jit:template:src/app/document-request-user/document-request-user.html
var document_request_user_default;
var init_document_request_user = __esm({
  "angular:jit:template:src/app/document-request-user/document-request-user.html"() {
    document_request_user_default = `<app-navbar></app-navbar>
<div class="main">
  <div class="header spacer">
    <h1 style="margin:0;">Restore Requests</h1>
  </div>

<div class="restore-container">
  <mat-card *ngFor="let request of requests" class="restore-card">
    <mat-card-header>
      <mat-card-title>{{ request?.originalFileName || 'N/A' }}</mat-card-title>
      <mat-card-subtitle>{{ request.requestedAt | date:'medium' }}</mat-card-subtitle>
    </mat-card-header>

    <mat-card-content>
      

      <div class="card-section">
        <strong>Reason:</strong> {{ request.reason }}
      </div>

      <div class="card-section">
        <strong>Status:</strong>
        <span [ngClass]="getStatusClass(request.status)">
          {{ request.status }}
        </span>
      </div>

      <div class="card-section" *ngIf="request.reviewedAt">
        <strong>Reviewed At:</strong> {{ request.reviewedAt | date:'medium' }}
      </div>

      <div class="card-section" *ngIf="request.reviewedByUserName">
        <strong>Reviewed By:</strong> {{ request.reviewedByUserName }}
      </div>
    </mat-card-content>

  
  </mat-card>
</div>
`;
  }
});

// angular:jit:style:src/app/document-request-user/document-request-user.css
var document_request_user_default2;
var init_document_request_user2 = __esm({
  "angular:jit:style:src/app/document-request-user/document-request-user.css"() {
    document_request_user_default2 = "/* src/app/document-request-user/document-request-user.css */\n.restore-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n}\n.restore-card {\n  padding: 10px;\n}\n.card-section {\n  margin-bottom: 10px;\n}\n.status-approved {\n  color: green;\n  font-weight: 600;\n}\n.status-rejected {\n  color: red;\n  font-weight: 600;\n}\n.status-pending {\n  color: orange;\n  font-weight: 600;\n}\n/*# sourceMappingURL=document-request-user.css.map */\n";
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
    init_common();
    init_navbar();
    init_user_service();
    init_ngxs_store();
    init_current_user_state();
    init_documentrestore_service();
    init_card();
    DocumentRequestUser = class DocumentRequestUser2 {
      userService;
      store;
      documentRestoreService;
      currentUser = null;
      requests = [];
      constructor(userService, store, documentRestoreService) {
        this.userService = userService;
        this.store = store;
        this.documentRestoreService = documentRestoreService;
      }
      ngOnInit() {
        this.store.select(CurrentUserState.getUser).subscribe((user) => {
          this.currentUser = user;
          if (!this.currentUser) {
            this.userService.getCurrentUserDetails().subscribe({
              next: (data) => {
                this.currentUser = data;
                if (this.currentUser) {
                  this.loadrequest();
                }
              }
            });
          } else {
            this.loadrequest();
          }
        });
      }
      loadrequest() {
        this.documentRestoreService.getRequestByUserId(this.currentUser).subscribe({
          next: (data) => {
            this.requests = data?.$values ?? [];
            console.log(this.requests);
          },
          error(err) {
            console.log("error fetching the requests", err);
          }
        });
      }
      getStatusClass(status) {
        switch (status.toLowerCase()) {
          case "approved":
            return "status-approved";
          case "rejected":
            return "status-rejected";
          case "pending":
            return "status-pending";
          default:
            return "";
        }
      }
      static ctorParameters = () => [
        { type: UserService },
        { type: Store },
        { type: DocumentRestoreService }
      ];
    };
    DocumentRequestUser = __decorate([
      Component({
        selector: "app-document-request-user",
        imports: [Navbar, CommonModule, MatCardModule],
        template: document_request_user_default,
        styles: [document_request_user_default2]
      })
    ], DocumentRequestUser);
  }
});

// src/app/document-request-user/document-request-user.spec.ts
var require_document_request_user_spec = __commonJS({
  "src/app/document-request-user/document-request-user.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_document_request_user3();
    init_documentrestore_service();
    init_user_service();
    init_ngxs_store();
    init_esm();
    init_user_model();
    init_common();
    init_card();
    init_navbar();
    init_router();
    init_core();
    var FakeNavbar = class FakeNavbar {
    };
    FakeNavbar = __decorate([
      Component({
        selector: "app-navbar",
        standalone: true,
        template: ""
      })
    ], FakeNavbar);
    describe("DocumentRequestUser", () => {
      let component;
      let fixture;
      let mockRestoreService;
      let mockUserService;
      let mockStore;
      const mockUser = new UserModel("1");
      const req = {
        id: "1",
        documentId: "",
        document: null,
        originalFileName: "",
        requestedByUserId: "",
        requestedByUserName: "",
        requestedByUser: null,
        requestedAt: /* @__PURE__ */ new Date(),
        reason: "",
        status: "",
        reviewedAt: null,
        reviewedByUserId: null,
        reviewedByUserName: null,
        reviewedByUser: null,
        isAdminRead: false,
        IsUserRead: false
      };
      const mockActivatedRoute = {
        snapshot: {
          paramMap: {
            get: (key) => null
          }
        }
      };
      beforeEach(() => __async(null, null, function* () {
        mockRestoreService = jasmine.createSpyObj("DocumentRestoreService", ["getRequestByUserId"]);
        mockUserService = jasmine.createSpyObj("UserService", ["getCurrentUserDetails"]);
        mockStore = jasmine.createSpyObj("Store", ["select"]);
        mockStore.select.and.returnValue(of(mockUser));
        mockUserService.getCurrentUserDetails.and.returnValue(of(mockUser));
        mockRestoreService.getRequestByUserId.and.returnValue(of(req));
        yield TestBed.configureTestingModule({
          imports: [DocumentRequestUser, CommonModule, MatCardModule, Navbar],
          providers: [
            { provide: DocumentRestoreService, useValue: mockRestoreService },
            { provide: UserService, useValue: mockUserService },
            { provide: Store, useValue: mockStore },
            { provide: ActivatedRoute, useValue: mockActivatedRoute }
          ]
        }).compileComponents();
        TestBed.overrideComponent(DocumentRequestUser, {
          set: {
            imports: [
              FakeNavbar,
              CommonModule,
              MatCardModule
            ]
          }
        });
        fixture = TestBed.createComponent(DocumentRequestUser);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should load requests on init if current user is available from store", () => {
        expect(mockStore.select).toHaveBeenCalled();
        expect(mockRestoreService.getRequestByUserId).toHaveBeenCalledWith(mockUser);
      });
    });
  }
});
export default require_document_request_user_spec();
//# sourceMappingURL=spec-app-document-request-user-document-request-user.spec.js.map
