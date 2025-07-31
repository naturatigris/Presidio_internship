import {
  UploadModal,
  init_upload_modal
} from "./chunk-4T7PQHVP.js";
import {
  DocumentService,
  init_document_service
} from "./chunk-NUY5KQW2.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  init_dialog
} from "./chunk-IUYNAQQX.js";
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
