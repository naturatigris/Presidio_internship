import {
  UploadModal,
  init_upload_modal
} from "./chunk-77JRJCR6.js";
import {
  DocumentService,
  init_document_service
} from "./chunk-M3O7VYU3.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  init_dialog
} from "./chunk-V6O7JONI.js";
import {
  init_select
} from "./chunk-VWMU7LHX.js";
import {
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-R7EYKF54.js";
import {
  MatSelectModule
} from "./chunk-GFVBMAHZ.js";
import {
  MatFormFieldModule
} from "./chunk-4QPBZULR.js";
import {
  FormsModule,
  ReactiveFormsModule,
  init_forms
} from "./chunk-HIPVT64V.js";
import "./chunk-JZNWBP4I.js";
import "./chunk-CL4W7QDJ.js";
import "./chunk-GGXJ5NN7.js";
import "./chunk-KYRJKNJ3.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-5TPMZ7JT.js";
import "./chunk-T4FSVIK5.js";
import "./chunk-53DDW4RY.js";
import {
  TestBed,
  init_testing
} from "./chunk-DV5BYKE4.js";
import {
  __async,
  __commonJS
} from "./chunk-3HY6NCXN.js";

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
