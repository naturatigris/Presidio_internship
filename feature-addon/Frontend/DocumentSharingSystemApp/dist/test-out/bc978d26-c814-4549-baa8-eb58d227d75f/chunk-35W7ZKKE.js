import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  init_dialog
} from "./chunk-KVABBLRZ.js";
import {
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-VSIJDCVC.js";
import {
  MatFormFieldModule
} from "./chunk-JWFYNUTU.js";
import {
  FormsModule,
  init_forms
} from "./chunk-F4S5UMDT.js";
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

// angular:jit:template:src/app/dialog/dialog.html
var dialog_default;
var init_dialog2 = __esm({
  "angular:jit:template:src/app/dialog/dialog.html"() {
    dialog_default = '<h2 mat-dialog-title>Are you sure?</h2>\n<mat-dialog-content>\n  <p>{{data.message}}</p>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button matButton (click)="onNoClick()">No</button>\n  <button matButton (click)="onYesClick()" cdkFocusInitial>Yes</button>\n</mat-dialog-actions>';
  }
});

// angular:jit:style:src/app/dialog/dialog.css
var dialog_default2;
var init_dialog3 = __esm({
  "angular:jit:style:src/app/dialog/dialog.css"() {
    dialog_default2 = "/* src/app/dialog/dialog.css */\n/*# sourceMappingURL=dialog.css.map */\n";
  }
});

// src/app/dialog/dialog.ts
var Dialog;
var init_dialog4 = __esm({
  "src/app/dialog/dialog.ts"() {
    "use strict";
    init_tslib_es6();
    init_dialog2();
    init_dialog3();
    init_core();
    init_forms();
    init_button();
    init_dialog();
    init_form_field();
    init_input();
    Dialog = class Dialog2 {
      dialogRef = inject(MatDialogRef);
      data = inject(MAT_DIALOG_DATA);
      onNoClick() {
        this.dialogRef.close();
      }
      onYesClick() {
        this.data.onAccept();
        this.dialogRef.close();
      }
    };
    Dialog = __decorate([
      Component({
        selector: "app-dialog",
        imports: [
          MatFormFieldModule,
          MatInputModule,
          FormsModule,
          MatButtonModule,
          MatDialogTitle,
          MatDialogContent,
          MatDialogActions
        ],
        template: dialog_default,
        styles: [dialog_default2]
      })
    ], Dialog);
  }
});

export {
  Dialog,
  init_dialog4 as init_dialog
};
//# sourceMappingURL=chunk-35W7ZKKE.js.map
