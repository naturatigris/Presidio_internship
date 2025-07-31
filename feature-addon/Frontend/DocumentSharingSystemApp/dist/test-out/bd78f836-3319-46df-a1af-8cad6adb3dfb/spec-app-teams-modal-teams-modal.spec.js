import {
  TeamsModal,
  init_teams_modal
} from "./chunk-KHZFPVRK.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  init_dialog
} from "./chunk-IUYNAQQX.js";
import {
  TeamService,
  init_team_service
} from "./chunk-SIOOFHTA.js";
import {
  init_select
} from "./chunk-DHB277MQ.js";
import {
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-YLD4CDCH.js";
import {
  MatSelectModule
} from "./chunk-AUF5RPMJ.js";
import {
  MatFormFieldModule
} from "./chunk-3YSEX4UT.js";
import {
  FormsModule,
  ReactiveFormsModule,
  init_forms
} from "./chunk-2KLKVMNN.js";
import "./chunk-CTANRZ7U.js";
import "./chunk-IPUJJMKT.js";
import "./chunk-XAUGNK3T.js";
import "./chunk-K6YDNL6G.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-PI2YTXAG.js";
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
