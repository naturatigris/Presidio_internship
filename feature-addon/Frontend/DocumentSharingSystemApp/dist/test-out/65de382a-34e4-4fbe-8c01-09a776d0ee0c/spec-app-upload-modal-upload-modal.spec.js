import {
  UploadModal,
  init_upload_modal
} from "./chunk-6P7GW3XT.js";
import {
  DocumentService,
  init_document_service
} from "./chunk-LNMNIMQX.js";
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

// src/app/upload-modal/upload-modal.spec.ts
var require_upload_modal_spec = __commonJS({
  "src/app/upload-modal/upload-modal.spec.ts"(exports) {
    init_testing();
    init_upload_modal();
    init_forms();
    init_button();
    init_dialog();
    init_form_field();
    init_input();
    init_select();
    init_document_service();
    describe("UploadModal", () => {
      let component;
      let fixture;
      let dialogRefSpy;
      let documentServiceSpy;
      let matDialogDataStub;
      beforeEach(() => __async(null, null, function* () {
        dialogRefSpy = jasmine.createSpyObj("MatDialogRef", ["close"]);
        documentServiceSpy = jasmine.createSpyObj("DocumentService", ["getAll"]);
        matDialogDataStub = {
          action: "Add",
          teamId: 1,
          onAccept: jasmine.createSpy("onAccept")
        };
        yield TestBed.configureTestingModule({
          imports: [
            UploadModal,
            MatDialogModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatSelectModule,
            FormsModule,
            ReactiveFormsModule
          ],
          providers: [
            { provide: MatDialogRef, useValue: dialogRefSpy },
            { provide: MAT_DIALOG_DATA, useValue: matDialogDataStub },
            { provide: DocumentService, useValue: documentServiceSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(UploadModal);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should call onAccept when form is valid", () => {
        const fakeFile = new File(["test"], "test.txt", { type: "text/plain" });
        component.uploadFile = fakeFile;
        spyOnProperty(component.formGroup, "valid").and.returnValue(true);
        component.onUploadClick();
        expect(matDialogDataStub.onAccept).toHaveBeenCalled();
        expect(dialogRefSpy.close).toHaveBeenCalled();
      });
    });
  }
});
export default require_upload_modal_spec();
//# sourceMappingURL=spec-app-upload-modal-upload-modal.spec.js.map
