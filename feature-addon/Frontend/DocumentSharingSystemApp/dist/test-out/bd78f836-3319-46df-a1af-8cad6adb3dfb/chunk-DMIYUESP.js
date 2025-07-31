import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  init_dialog
} from "./chunk-32RPRJWG.js";
import {
  TeamService,
  init_team_service
} from "./chunk-QVVDGZCT.js";
import {
  init_select
} from "./chunk-5KLEJYDH.js";
import {
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-RFILXURN.js";
import {
  MatSelectModule
} from "./chunk-K5QJ7HNK.js";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule
} from "./chunk-UPVDHZ5U.js";
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-P2EAFKDD.js";
import {
  MatSnackBar,
  init_snack_bar
} from "./chunk-TN7S7RMN.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-JXT776HN.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6,
  inject
} from "./chunk-K454COBC.js";
import {
  __esm
} from "./chunk-73RR4HMO.js";

// angular:jit:template:src/app/teams-modal/teams-modal.html
var teams_modal_default;
var init_teams_modal = __esm({
  "angular:jit:template:src/app/teams-modal/teams-modal.html"() {
    teams_modal_default = `<h2 mat-dialog-title>{{data.action == 'Add' ? 'Add Team' : "Edit Team Name"}}</h2>
<mat-dialog-content>
  <div class="content">

    
     <mat-form-field class="input">
        <mat-label>Name</mat-label>
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

// angular:jit:style:src/app/teams-modal/teams-modal.css
var teams_modal_default2;
var init_teams_modal2 = __esm({
  "angular:jit:style:src/app/teams-modal/teams-modal.css"() {
    teams_modal_default2 = "/* src/app/teams-modal/teams-modal.css */\n.content {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\ninput {\n  margin: 20px;\n}\ninput[type=file]::file-selector-button {\n  border-radius: 16px;\n  padding: 0 16px;\n  height: 40px;\n  cursor: pointer;\n  background-color: #dbe3f8;\n  border: 1px solid rgba(0, 0, 0, 0.16);\n  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);\n  transition: background-color 200ms;\n}\ninput[type=file]::file-selector-button:hover {\n  background-color: rgb(181, 202, 247);\n}\ninput[type=file]::file-selector-button:active {\n  background-color: #3c67d2;\n}\nh2 {\n  text-align: center;\n}\n.input {\n  width: 300px;\n}\n/*# sourceMappingURL=teams-modal.css.map */\n";
  }
});

// src/app/teams-modal/teams-modal.ts
var TeamsModal;
var init_teams_modal3 = __esm({
  "src/app/teams-modal/teams-modal.ts"() {
    "use strict";
    init_tslib_es6();
    init_teams_modal();
    init_teams_modal2();
    init_core();
    init_forms();
    init_button();
    init_dialog();
    init_form_field();
    init_input();
    init_snack_bar();
    init_select();
    init_team_service();
    TeamsModal = class TeamsModal2 {
      dialogRef = inject(MatDialogRef);
      data = inject(MAT_DIALOG_DATA);
      teamService = inject(TeamService);
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
        if (this.data.action == "Edit") {
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
    TeamsModal = __decorate([
      Component({
        selector: "app-teams-modal",
        imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, FormsModule, ReactiveFormsModule],
        template: teams_modal_default,
        providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: "outline" } }],
        styles: [teams_modal_default2]
      })
    ], TeamsModal);
  }
});

export {
  TeamsModal,
  init_teams_modal3 as init_teams_modal
};
//# sourceMappingURL=chunk-DMIYUESP.js.map
