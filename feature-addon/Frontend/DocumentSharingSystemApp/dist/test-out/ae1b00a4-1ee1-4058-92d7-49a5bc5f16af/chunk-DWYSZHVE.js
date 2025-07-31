import {
  DocumentRestoreService,
  init_documentrestore_service
} from "./chunk-WLNX5L36.js";
import {
  FormsModule,
  ReactiveFormsModule,
  init_forms
} from "./chunk-HIPVT64V.js";
import {
  UserService,
  init_user_service
} from "./chunk-5WHMKPOL.js";
import {
  CurrentUserState,
  init_current_user_state
} from "./chunk-VTW7XGUJ.js";
import {
  Store,
  init_ngxs_store
} from "./chunk-ZFPYVLZ3.js";
import {
  CommonModule,
  init_common
} from "./chunk-T4FSVIK5.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-DV5BYKE4.js";
import {
  __esm
} from "./chunk-3HY6NCXN.js";

// angular:jit:template:src/app/requestdetail/requestdetail.html
var requestdetail_default;
var init_requestdetail = __esm({
  "angular:jit:template:src/app/requestdetail/requestdetail.html"() {
    requestdetail_default = `<div class="overlay">
  <div class="request-detail-modal">
    <button class="close-btn" (click)="onClose()">\u2715</button>

    <h2>Restore Request Details</h2>

    <ng-container *ngIf="request; else loading">
      <p><strong>Requested By:</strong> {{ request.requestedByUserName }}</p>
      <p><strong>Reason:</strong> {{ request.reason }}</p>
      <p><strong>Status:</strong> {{ request.status }}</p>
      <p><strong>Requested At:</strong> {{ request.requestedAt | date:'medium' }}</p>
      <p *ngIf="request.reviewedAt"><strong>Reviewed At:</strong> {{ request.reviewedAt | date:'medium' }}</p>
      <p *ngIf="request.reviewedByUserName"><strong>Reviewed By:</strong> {{ request.reviewedByUserName }}</p>
    </ng-container>

    <ng-template #loading>
      <p>Loading request details...</p>
    </ng-template>
  </div>
</div>
`;
  }
});

// angular:jit:style:src/app/requestdetail/requestdetail.css
var requestdetail_default2;
var init_requestdetail2 = __esm({
  "angular:jit:style:src/app/requestdetail/requestdetail.css"() {
    requestdetail_default2 = "/* src/app/requestdetail/requestdetail.css */\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.request-detail-modal {\n  background: white;\n  padding: 20px;\n  width: 400px;\n  border-radius: 10px;\n  position: relative;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.close-btn {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  background: transparent;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=requestdetail.css.map */\n";
  }
});

// src/app/requestdetail/requestdetail.ts
var Requestdetail;
var init_requestdetail3 = __esm({
  "src/app/requestdetail/requestdetail.ts"() {
    "use strict";
    init_tslib_es6();
    init_requestdetail();
    init_requestdetail2();
    init_core();
    init_documentrestore_service();
    init_user_service();
    init_ngxs_store();
    init_current_user_state();
    init_common();
    init_forms();
    Requestdetail = class Requestdetail2 {
      documentRestoreService;
      userService;
      store;
      documentId = "";
      close = new EventEmitter();
      currentUser = null;
      request = null;
      constructor(documentRestoreService, userService, store) {
        this.documentRestoreService = documentRestoreService;
        this.userService = userService;
        this.store = store;
      }
      ngOnInit() {
        this.store.select(CurrentUserState.getUser).subscribe((user) => {
          this.currentUser = user;
          if (!this.currentUser) {
            this.userService.getCurrentUserDetails().subscribe({
              next: (data) => {
                this.currentUser = data;
                if (!this.currentUser) {
                  console.log("User not logged in.");
                  return;
                }
                this.loadRequest();
              }
            });
          } else {
            this.loadRequest();
          }
        });
      }
      loadRequest() {
        if (!this.documentId || !this.currentUser)
          return;
        this.documentRestoreService.getRequestByDocumentId(this.documentId, this.currentUser).subscribe({
          next: (data) => {
            console.log("documentstatus", data);
            this.request = data;
          },
          error: (err) => {
            console.error("Failed to fetch document restore request:", err);
          }
        });
      }
      onClose() {
        this.close.emit();
      }
      static ctorParameters = () => [
        { type: DocumentRestoreService },
        { type: UserService },
        { type: Store }
      ];
      static propDecorators = {
        documentId: [{ type: Input }],
        close: [{ type: Output }]
      };
    };
    Requestdetail = __decorate([
      Component({
        selector: "app-requestdetail",
        imports: [CommonModule, FormsModule, ReactiveFormsModule],
        template: requestdetail_default,
        styles: [requestdetail_default2]
      })
    ], Requestdetail);
  }
});

export {
  Requestdetail,
  init_requestdetail3 as init_requestdetail
};
//# sourceMappingURL=chunk-DWYSZHVE.js.map
