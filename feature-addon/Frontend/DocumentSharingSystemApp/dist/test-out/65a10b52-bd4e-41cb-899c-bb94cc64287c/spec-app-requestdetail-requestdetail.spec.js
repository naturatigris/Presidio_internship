import {
  Requestdetail,
  init_requestdetail
} from "./chunk-WY67G7M2.js";
import "./chunk-A6KC4RB4.js";
import "./chunk-F4S5UMDT.js";
import "./chunk-AFO2OYNN.js";
import "./chunk-JM6AMNVR.js";
import "./chunk-QMOCZ3CH.js";
import "./chunk-E5A666WI.js";
import "./chunk-IPUJJMKT.js";
import "./chunk-RXCRIGXT.js";
import "./chunk-5TNFNCMZ.js";
import "./chunk-5C27C2Q6.js";
import "./chunk-4R7PBA5O.js";
import "./chunk-PXVCLZNF.js";
import "./chunk-KB55D65T.js";
import "./chunk-GW6V5KYJ.js";
import {
  TestBed,
  init_testing
} from "./chunk-A4GR5REI.js";
import {
  __async,
  __commonJS
} from "./chunk-73RR4HMO.js";

// src/app/requestdetail/requestdetail.spec.ts
var require_requestdetail_spec = __commonJS({
  "src/app/requestdetail/requestdetail.spec.ts"(exports) {
    init_testing();
    init_requestdetail();
    describe("Requestdetail", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Requestdetail]
        }).compileComponents();
        fixture = TestBed.createComponent(Requestdetail);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_requestdetail_spec();
//# sourceMappingURL=spec-app-requestdetail-requestdetail.spec.js.map
