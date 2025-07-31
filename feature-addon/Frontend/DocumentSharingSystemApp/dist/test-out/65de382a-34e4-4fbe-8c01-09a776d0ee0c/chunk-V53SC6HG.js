import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  init_dialog
} from "./chunk-KVABBLRZ.js";
import {
  DocumentRestoreService,
  init_documentrestore_service
} from "./chunk-A6KC4RB4.js";
import {
  init_select
} from "./chunk-BCBNV7ZJ.js";
import {
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-VSIJDCVC.js";
import {
  MatSelectModule
} from "./chunk-DJPEUKAV.js";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule
} from "./chunk-JWFYNUTU.js";
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-F4S5UMDT.js";
import {
  MatSnackBar,
  init_snack_bar
} from "./chunk-E5A666WI.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-5C27C2Q6.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6,
  inject
} from "./chunk-A4GR5REI.js";
import {
  __esm
} from "./chunk-73RR4HMO.js";

// angular:jit:template:src/app/document-request-modal/document-request-modal.html
var document_request_modal_default;
var init_document_request_modal = __esm({
  "angular:jit:template:src/app/document-request-modal/document-request-modal.html"() {
    document_request_modal_default = `<h2 mat-dialog-title>Reason For your Request</h2>
<mat-dialog-content>
  <div class="content">

    
     <mat-form-field class="input">
        <mat-label>Reason</mat-label>
            <input matInput 
                type="text" 
                [formControl]="formControl"
            >
    </mat-form-field>
</div>
</mat-dialog-content>
<mat-dialog-actions>
  <button matButton (click)="onCancelClick()">Cancel</button>
  <button 
    matButton 
    (click)="onUploadClick()" 
    [disabled]="formControl.invalid"
	>
    <!-- cdkFocusInitial -->
      {{data.action == 'Add' ? 'Add' : "Submit"}}
  </button>
</mat-dialog-actions>
`;
  }
});

// angular:jit:style:src/app/document-request-modal/document-request-modal.css
var document_request_modal_default2;
var init_document_request_modal2 = __esm({
  "angular:jit:style:src/app/document-request-modal/document-request-modal.css"() {
    document_request_modal_default2 = "/* src/app/document-request-modal/document-request-modal.css */\n/*# sourceMappingURL=document-request-modal.css.map */\n";
  }
});

// src/app/document-request-modal/document-request-modal.ts
var DocumentRequestModal;
var init_document_request_modal3 = __esm({
  "src/app/document-request-modal/document-request-modal.ts"() {
    "use strict";
    init_tslib_es6();
    init_document_request_modal();
    init_document_request_modal2();
    init_core();
    init_forms();
    init_button();
    init_dialog();
    init_form_field();
    init_input();
    init_snack_bar();
    init_select();
    init_documentrestore_service();
    DocumentRequestModal = class DocumentRequestModal2 {
      dialogRef = inject(MatDialogRef);
      data = inject(MAT_DIALOG_DATA);
      teamService = inject(DocumentRestoreService);
      formControl;
      snackBar = new MatSnackBar();
      constructor() {
        if (this.data.action == "Add") {
          this.formControl = new FormControl(null, Validators.required);
        } else {
          this.formControl = new FormControl(this.data.teamName, Validators.required);
        }
      }
      onUploadClick() {
        if (this.data.action == "Add") {
          if (this.formControl.valid) {
            this.data.onAccept(this.formControl.value);
            this.dialogRef.close();
          }
        }
      }
      onCancelClick() {
        this.dialogRef.close();
      }
      static ctorParameters = () => [];
    };
    DocumentRequestModal = __decorate([
      Component({
        selector: "app-document-request-modal",
        imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, FormsModule, ReactiveFormsModule],
        template: document_request_modal_default,
        providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: "outline" } }],
        styles: [document_request_modal_default2]
      })
    ], DocumentRequestModal);
  }
});

export {
  DocumentRequestModal,
  init_document_request_modal3 as init_document_request_modal
};
//# sourceMappingURL=chunk-V53SC6HG.js.map
