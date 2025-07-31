import {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-ZWZOL3Z4.js";
import "./chunk-Y5CR2BFW.js";
import "./chunk-UCW36KR2.js";
import "./chunk-Q7LXTXY4.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-RCUBULEN.js";
import "./chunk-SRXLO6QP.js";
import "./chunk-KDWEUQDB.js";
import "./chunk-I6WIVXJU.js";
import "./chunk-CCOORFNK.js";
import "./chunk-H7EURIND.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-DMG2ZQUH.js";
import "./chunk-EIEP5T42.js";
import "./chunk-BUBVKL7A.js";
import "./chunk-DQ7OVFPD.js";
import "./chunk-QCETVJKM.js";
import "./chunk-BJJRVA7E.js";
import "./chunk-AU4E5OR3.js";
import "./chunk-A3DHZUH3.js";
import "./chunk-DKSC7TEA.js";
import "./chunk-AWFAIUOR.js";
import "./chunk-Z3CGKJSL.js";
import "./chunk-EOFW2REK.js";
import "./chunk-UHUZB6B2.js";
import "./chunk-T2BHR63J.js";
import "./chunk-NFQHF4JW.js";
import "./chunk-EYSTFHKH.js";
import "./chunk-XJX25SLA.js";
import "./chunk-5WZ7CC4M.js";
import "./chunk-MPVPKMUE.js";
import "./chunk-MDWNBTJR.js";
import "./chunk-6KNO4II2.js";
import "./chunk-J25FJFZE.js";

// node_modules/@angular/material/fesm2022/select.mjs
var matSelectAnimations = {
  // Represents
  // trigger('transformPanel', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(1, 0.8)',
  //     }),
  //   ),
  //   transition(
  //     'void => showing',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1, 1)',
  //       }),
  //     ),
  //   ),
  //   transition('* => void', animate('100ms linear', style({opacity: 0}))),
  // ])
  /** This animation transforms the select's overlay panel on and off the page. */
  transformPanel: {
    type: 7,
    name: "transformPanel",
    definitions: [
      {
        type: 0,
        name: "void",
        styles: {
          type: 6,
          styles: { opacity: 0, transform: "scale(1, 0.8)" },
          offset: null
        }
      },
      {
        type: 1,
        expr: "void => showing",
        animation: {
          type: 4,
          styles: {
            type: 6,
            styles: { opacity: 1, transform: "scale(1, 1)" },
            offset: null
          },
          timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
        },
        options: null
      },
      {
        type: 1,
        expr: "* => void",
        animation: {
          type: 4,
          styles: { type: 6, styles: { opacity: 0 }, offset: null },
          timings: "100ms linear"
        },
        options: null
      }
    ],
    options: {}
  }
};
export {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatOptgroup,
  MatOption,
  MatPrefix,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger,
  MatSuffix,
  matSelectAnimations
};
//# sourceMappingURL=@angular_material_select.js.map
