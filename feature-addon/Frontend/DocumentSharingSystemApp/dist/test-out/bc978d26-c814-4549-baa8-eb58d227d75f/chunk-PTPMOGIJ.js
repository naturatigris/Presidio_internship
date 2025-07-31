import {
  DocumentDetailsModel,
  DocumentService,
  init_document_details_model,
  init_document_service
} from "./chunk-NMZHGRO7.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  init_dialog
} from "./chunk-KVABBLRZ.js";
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
  FormGroup,
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

// angular:jit:template:src/app/upload-modal/upload-modal.html
var upload_modal_default;
var init_upload_modal = __esm({
  "angular:jit:template:src/app/upload-modal/upload-modal.html"() {
    upload_modal_default = `<h2 mat-dialog-title>{{data.action == 'Add' ? 'Upload File' : "Edit File"}}</h2>
<mat-dialog-content>
  <form [formGroup]="formGroup" class="content">
    <!-- <mat-form-field> -->
	@if(data.action == 'Add'){
		<label>Upload Document</label><br>
		<input type="file" (change)="onFileChange($event)" formControlName="file">
		@if(fc.file.invalid && fc.file.touched){
			<mat-error>File is required</mat-error>
		}
	}
    <!-- </mat-form-field> -->

     <mat-form-field class="input">
        <mat-label>Description</mat-label>
            <textarea matInput 
                type="text" 
                formControlName="description"
            ></textarea>
    </mat-form-field>

	<mat-form-field class="input">
        <mat-label>Team</mat-label>
            <mat-select 
                formControlName="teamId"
            >
            @for (t of data.teamOptions; track $index) {
                <mat-option [value]="t.value">{{t.view}}</mat-option>
            }
            </mat-select>
        	@if (fc.teamId.hasError('required')) {
                <mat-error>Team is required</mat-error>
            }
    </mat-form-field>
	<mat-form-field class="input">
        <mat-label>Visiblity</mat-label>
            <mat-select 
                formControlName="visibility"
            >
            @for (t of visibilityOptions; track $index) {
                <mat-option [value]="t">{{t}}</mat-option>
            }
            </mat-select>
        	@if (fc.teamId.hasError('required')) {
                <mat-error>Team is required</mat-error>
            }
    </mat-form-field>

  </form>
</mat-dialog-content>
<mat-dialog-actions>
  <button matButton (click)="onCancelClick()">Cancel</button>
  <button 
    matButton 
    (click)="onUploadClick()" 
    [disabled]="formGroup.invalid"
	>
    <!-- cdkFocusInitial -->
      {{data.action == 'Add' ? 'Upload' : "Submit"}}
  </button>
</mat-dialog-actions>
`;
  }
});

// angular:jit:style:src/app/upload-modal/upload-modal.css
var upload_modal_default2;
var init_upload_modal2 = __esm({
  "angular:jit:style:src/app/upload-modal/upload-modal.css"() {
    upload_modal_default2 = "/* src/app/upload-modal/upload-modal.css */\n.content {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\ninput {\n  margin: 20px;\n}\ninput[type=file]::file-selector-button {\n  border-radius: 16px;\n  padding: 0 16px;\n  height: 40px;\n  cursor: pointer;\n  background-color: #dbe3f8;\n  border: 1px solid rgba(0, 0, 0, 0.16);\n  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);\n  transition: background-color 200ms;\n}\ninput[type=file]::file-selector-button:hover {\n  background-color: rgb(181, 202, 247);\n}\ninput[type=file]::file-selector-button:active {\n  background-color: #3c67d2;\n}\nh2 {\n  text-align: center;\n}\n.input {\n  width: 300px;\n}\n/*# sourceMappingURL=upload-modal.css.map */\n";
  }
});

// src/app/upload-modal/upload-modal.ts
var UploadModal;
var init_upload_modal3 = __esm({
  "src/app/upload-modal/upload-modal.ts"() {
    "use strict";
    init_tslib_es6();
    init_upload_modal();
    init_upload_modal2();
    init_core();
    init_forms();
    init_button();
    init_dialog();
    init_form_field();
    init_input();
    init_document_service();
    init_snack_bar();
    init_select();
    init_document_details_model();
    UploadModal = class UploadModal2 {
      dialogRef = inject(MatDialogRef);
      data = inject(MAT_DIALOG_DATA);
      documentService = inject(DocumentService);
      visibilityOptions = ["Public", "Team", "Private"];
      uploadFile = null;
      formGroup;
      snackBar = new MatSnackBar();
      constructor() {
        if (this.data.action == "Add") {
          this.formGroup = new FormGroup({
            file: new FormControl(null, Validators.required),
            description: new FormControl(null),
            teamId: new FormControl(this.data.teamId, Validators.required),
            visibility: new FormControl("Public", Validators.required)
          });
        } else {
          this.formGroup = new FormGroup({
            description: new FormControl(this.data.editDoc.description),
            teamId: new FormControl(this.data.editDoc.teamId, Validators.required),
            visibility: new FormControl(this.data.editDoc.visibility, Validators.required)
          });
        }
      }
      onFileChange(event) {
        const input = event.target;
        if (input.files && input.files.length > 0) {
          this.uploadFile = input.files[0];
          console.log("Is file:", this.uploadFile instanceof File);
        }
      }
      onUploadClick() {
        if (this.data.action == "Add") {
          if (this.formGroup.valid && this.uploadFile != null) {
            let fileData = new DocumentDetailsModel(this.formGroup.get("description")?.value, this.formGroup.get("teamId")?.value, this.formGroup.get("visibility")?.value);
            this.data.onAccept(fileData, this.uploadFile);
            this.dialogRef.close();
          } else {
            this.formGroup.markAsTouched();
            this.snackBar.open("File is required!", void 0, { duration: 3e3 });
          }
        }
        if (this.data.action == "Edit") {
          if (this.formGroup.valid) {
            let fileData = new DocumentDetailsModel(this.formGroup.get("description")?.value, this.formGroup.get("teamId")?.value, this.formGroup.get("visibility")?.value);
            this.data.onAccept(fileData);
            this.dialogRef.close();
          } else {
            this.formGroup.markAsTouched();
            this.snackBar.open("File is required!", void 0, { duration: 3e3 });
          }
        }
      }
      onCancelClick() {
        this.dialogRef.close();
      }
      get fc() {
        return this.formGroup.controls;
      }
      static ctorParameters = () => [];
    };
    UploadModal = __decorate([
      Component({
        selector: "app-upload-modal",
        imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, FormsModule, ReactiveFormsModule],
        template: upload_modal_default,
        providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: "outline" } }],
        styles: [upload_modal_default2]
      })
    ], UploadModal);
  }
});

export {
  UploadModal,
  init_upload_modal3 as init_upload_modal
};
//# sourceMappingURL=chunk-PTPMOGIJ.js.map
