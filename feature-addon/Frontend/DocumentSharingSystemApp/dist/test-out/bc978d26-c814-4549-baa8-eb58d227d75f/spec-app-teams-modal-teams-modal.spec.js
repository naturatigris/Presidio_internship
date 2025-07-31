import {
  TeamsModal,
  init_teams_modal
} from "./chunk-2PIITJ7C.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  init_dialog
} from "./chunk-KVABBLRZ.js";
import {
  TeamService,
  init_team_service
} from "./chunk-FUOHULPN.js";
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
  MatFormFieldModule
} from "./chunk-JWFYNUTU.js";
import {
  FormsModule,
  ReactiveFormsModule,
  init_forms
} from "./chunk-F4S5UMDT.js";
import "./chunk-E5A666WI.js";
import "./chunk-IPUJJMKT.js";
import "./chunk-RXCRIGXT.js";
import "./chunk-5TNFNCMZ.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-5C27C2Q6.js";
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

// src/app/teams-modal/teams-modal.spec.ts
var require_teams_modal_spec = __commonJS({
  "src/app/teams-modal/teams-modal.spec.ts"(exports) {
    init_testing();
    init_teams_modal();
    init_forms();
    init_button();
    init_dialog();
    init_form_field();
    init_input();
    init_select();
    init_team_service();
    describe("TeamsModal", () => {
      let component;
      let fixture;
      let dialogRefSpy;
      let teamServiceSpy;
      let matDialogDataStub;
      beforeEach(() => __async(null, null, function* () {
        dialogRefSpy = jasmine.createSpyObj("MatDialogRef", ["close"]);
        teamServiceSpy = jasmine.createSpyObj("TeamService", ["getAll"]);
        matDialogDataStub = {
          action: "Add",
          onAccept: jasmine.createSpy("onAccept")
        };
        yield TestBed.configureTestingModule({
          imports: [TeamsModal, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, FormsModule, ReactiveFormsModule],
          providers: [
            { provide: MatDialogRef, useValue: dialogRefSpy },
            { provide: MAT_DIALOG_DATA, useValue: matDialogDataStub },
            { provide: TeamService, useValue: teamServiceSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(TeamsModal);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should call onAccept when form is valid", () => {
        spyOnProperty(component.formControl, "valid").and.returnValue(true);
        component.onUploadClick();
        expect(matDialogDataStub.onAccept).toHaveBeenCalled();
        expect(dialogRefSpy.close).toHaveBeenCalled();
      });
    });
  }
});
export default require_teams_modal_spec();
//# sourceMappingURL=spec-app-teams-modal-teams-modal.spec.js.map
