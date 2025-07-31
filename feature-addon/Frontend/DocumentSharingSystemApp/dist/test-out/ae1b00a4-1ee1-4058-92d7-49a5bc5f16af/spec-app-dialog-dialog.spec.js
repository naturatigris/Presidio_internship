import {
  Dialog,
  init_dialog as init_dialog2
} from "./chunk-LCGAUKFS.js";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  init_dialog
} from "./chunk-V6O7JONI.js";
import {
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-R7EYKF54.js";
import {
  MatFormFieldModule
} from "./chunk-4QPBZULR.js";
import {
  FormsModule,
  init_forms
} from "./chunk-HIPVT64V.js";
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

// src/app/dialog/dialog.spec.ts
var require_dialog_spec = __commonJS({
  "src/app/dialog/dialog.spec.ts"(exports) {
    init_testing();
    init_dialog2();
    init_forms();
    init_button();
    init_dialog();
    init_form_field();
    init_input();
    describe("DeleteDocumentDialog", () => {
      let component;
      let fixture;
      let dialogRefSpy;
      let matDialogDataStub;
      beforeEach(() => __async(null, null, function* () {
        dialogRefSpy = jasmine.createSpyObj("MatDialogRef", ["close"]);
        matDialogDataStub = {
          message: "Want to delete",
          onAccept: jasmine.createSpy("onAccept")
        };
        yield TestBed.configureTestingModule({
          imports: [
            Dialog,
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatButtonModule,
            MatDialogTitle,
            MatDialogContent,
            MatDialogActions
          ],
          providers: [
            { provide: MatDialogRef, useValue: dialogRefSpy },
            { provide: MAT_DIALOG_DATA, useValue: matDialogDataStub }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Dialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should call onAccept when Yes is clicked", () => {
        component.onYesClick();
        expect(matDialogDataStub.onAccept).toHaveBeenCalled();
        expect(dialogRefSpy.close).toHaveBeenCalled();
      });
    });
  }
});
export default require_dialog_spec();
//# sourceMappingURL=spec-app-dialog-dialog.spec.js.map
