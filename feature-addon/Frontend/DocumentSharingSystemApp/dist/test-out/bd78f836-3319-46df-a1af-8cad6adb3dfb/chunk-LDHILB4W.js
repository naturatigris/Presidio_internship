import {
  UniqueSelectionDispatcher,
  init_collections,
  init_unique_selection_dispatcher_Cewa_Eg3
} from "./chunk-K5QJ7HNK.js";
import {
  CdkPortalOutlet,
  ENTER,
  FocusKeyManager,
  FocusMonitor,
  MatCommonModule,
  PortalModule,
  SPACE,
  TemplatePortal,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  hasModifierKey,
  init_a11y,
  init_animation_DfMFjxHu,
  init_common_module_cKSwHniA,
  init_id_generator_LuoRZSid,
  init_keycodes,
  init_portal,
  init_private,
  init_structural_styles_CObeNzjn
} from "./chunk-JXT776HN.js";
import {
  NgTemplateOutlet,
  init_common
} from "./chunk-PZPFZE4A.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  HostAttributeToken,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  booleanAttribute,
  core_exports,
  filter,
  init_core,
  init_esm,
  init_operators,
  inject,
  merge,
  numberAttribute,
  signal,
  startWith,
  take,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-K454COBC.js";
import {
  __esm
} from "./chunk-73RR4HMO.js";

// node_modules/@angular/material/fesm2022/progress-spinner.mjs
function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
  return { diameter: BASE_SIZE };
}
var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, BASE_SIZE, BASE_STROKE_WIDTH, MatProgressSpinner, MatSpinner, MatProgressSpinnerModule;
var init_progress_spinner = __esm({
  "node_modules/@angular/material/fesm2022/progress-spinner.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_animation_DfMFjxHu();
    init_common_module_cKSwHniA();
    MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken("mat-progress-spinner-default-options", {
      providedIn: "root",
      factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
    });
    BASE_SIZE = 100;
    BASE_STROKE_WIDTH = 10;
    MatProgressSpinner = class _MatProgressSpinner {
      _elementRef = inject(ElementRef);
      /** Whether the _mat-animation-noopable class should be applied, disabling animations.  */
      _noopAnimations;
      // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
      /**
       * Theme color of the progress spinner. This API is supported in M2 themes only, it
       * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/progress-spinner/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      get color() {
        return this._color || this._defaultColor;
      }
      set color(value) {
        this._color = value;
      }
      _color;
      _defaultColor = "primary";
      /** The element of the determinate spinner. */
      _determinateCircle;
      constructor() {
        const defaults = inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS);
        this._noopAnimations = _animationsDisabled() && !!defaults && !defaults._forceAnimations;
        this.mode = this._elementRef.nativeElement.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate";
        if (defaults) {
          if (defaults.color) {
            this.color = this._defaultColor = defaults.color;
          }
          if (defaults.diameter) {
            this.diameter = defaults.diameter;
          }
          if (defaults.strokeWidth) {
            this.strokeWidth = defaults.strokeWidth;
          }
        }
      }
      /**
       * Mode of the progress bar.
       *
       * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
       * 'determinate'.
       * Mirrored to mode attribute.
       */
      mode;
      /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
      get value() {
        return this.mode === "determinate" ? this._value : 0;
      }
      set value(v) {
        this._value = Math.max(0, Math.min(100, v || 0));
      }
      _value = 0;
      /** The diameter of the progress spinner (will set width and height of svg). */
      get diameter() {
        return this._diameter;
      }
      set diameter(size) {
        this._diameter = size || 0;
      }
      _diameter = BASE_SIZE;
      /** Stroke width of the progress spinner. */
      get strokeWidth() {
        return this._strokeWidth ?? this.diameter / 10;
      }
      set strokeWidth(value) {
        this._strokeWidth = value || 0;
      }
      _strokeWidth;
      /** The radius of the spinner, adjusted for stroke width. */
      _circleRadius() {
        return (this.diameter - BASE_STROKE_WIDTH) / 2;
      }
      /** The view box of the spinner's svg element. */
      _viewBox() {
        const viewBox = this._circleRadius() * 2 + this.strokeWidth;
        return `0 0 ${viewBox} ${viewBox}`;
      }
      /** The stroke circumference of the svg circle. */
      _strokeCircumference() {
        return 2 * Math.PI * this._circleRadius();
      }
      /** The dash offset of the svg circle. */
      _strokeDashOffset() {
        if (this.mode === "determinate") {
          return this._strokeCircumference() * (100 - this._value) / 100;
        }
        return null;
      }
      /** Stroke width of the circle in percent. */
      _circleStrokeWidth() {
        return this.strokeWidth / this.diameter * 100;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatProgressSpinner, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatProgressSpinner, isStandalone: true, selector: "mat-progress-spinner, mat-spinner", inputs: { color: "color", mode: "mode", value: ["value", "value", numberAttribute], diameter: ["diameter", "diameter", numberAttribute], strokeWidth: ["strokeWidth", "strokeWidth", numberAttribute] }, host: { attributes: { "role": "progressbar", "tabindex": "-1" }, properties: { "class": '"mat-" + color', "class._mat-animation-noopable": "_noopAnimations", "class.mdc-circular-progress--indeterminate": 'mode === "indeterminate"', "style.width.px": "diameter", "style.height.px": "diameter", "style.--mat-progress-spinner-size": 'diameter + "px"', "style.--mat-progress-spinner-active-indicator-width": 'diameter + "px"', "attr.aria-valuemin": "0", "attr.aria-valuemax": "100", "attr.aria-valuenow": 'mode === "determinate" ? value : null', "attr.mode": "mode" }, classAttribute: "mat-mdc-progress-spinner mdc-circular-progress" }, viewQueries: [{ propertyName: "_determinateCircle", first: true, predicate: ["determinateSpinner"], descendants: true }], exportAs: ["matProgressSpinner"], ngImport: core_exports, template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n', styles: [".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mat-progress-spinner-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}\n"], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatProgressSpinner, decorators: [{
      type: Component,
      args: [{ selector: "mat-progress-spinner, mat-spinner", exportAs: "matProgressSpinner", host: {
        "role": "progressbar",
        "class": "mat-mdc-progress-spinner mdc-circular-progress",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": `_noopAnimations`,
        "[class.mdc-circular-progress--indeterminate]": 'mode === "indeterminate"',
        "[style.width.px]": "diameter",
        "[style.height.px]": "diameter",
        "[style.--mat-progress-spinner-size]": 'diameter + "px"',
        "[style.--mat-progress-spinner-active-indicator-width]": 'diameter + "px"',
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-valuenow]": 'mode === "determinate" ? value : null',
        "[attr.mode]": "mode"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NgTemplateOutlet], template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n', styles: [".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mat-progress-spinner-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}\n"] }]
    }], ctorParameters: () => [], propDecorators: { color: [{
      type: Input
    }], _determinateCircle: [{
      type: ViewChild,
      args: ["determinateSpinner"]
    }], mode: [{
      type: Input
    }], value: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], diameter: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], strokeWidth: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }] } });
    MatSpinner = MatProgressSpinner;
    MatProgressSpinnerModule = class _MatProgressSpinnerModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatProgressSpinnerModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatProgressSpinnerModule, imports: [MatProgressSpinner, MatSpinner], exports: [MatProgressSpinner, MatSpinner, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatProgressSpinnerModule, imports: [MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatProgressSpinnerModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatProgressSpinner, MatSpinner],
        exports: [MatProgressSpinner, MatSpinner, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/accordion.mjs
var CDK_ACCORDION, CdkAccordion, CdkAccordionItem, CdkAccordionModule;
var init_accordion = __esm({
  "node_modules/@angular/cdk/fesm2022/accordion.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_id_generator_LuoRZSid();
    init_unique_selection_dispatcher_Cewa_Eg3();
    CDK_ACCORDION = new InjectionToken("CdkAccordion");
    CdkAccordion = class _CdkAccordion {
      /** Emits when the state of the accordion changes */
      _stateChanges = new Subject();
      /** Stream that emits true/false when openAll/closeAll is triggered. */
      _openCloseAllActions = new Subject();
      /** A readonly id value to use for unique selection coordination. */
      id = inject(_IdGenerator).getId("cdk-accordion-");
      /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
      multi = false;
      /** Opens all enabled accordion items in an accordion where multi is enabled. */
      openAll() {
        if (this.multi) {
          this._openCloseAllActions.next(true);
        }
      }
      /** Closes all enabled accordion items. */
      closeAll() {
        this._openCloseAllActions.next(false);
      }
      ngOnChanges(changes) {
        this._stateChanges.next(changes);
      }
      ngOnDestroy() {
        this._stateChanges.complete();
        this._openCloseAllActions.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAccordion, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkAccordion, isStandalone: true, selector: "cdk-accordion, [cdkAccordion]", inputs: { multi: ["multi", "multi", booleanAttribute] }, providers: [{ provide: CDK_ACCORDION, useExisting: _CdkAccordion }], exportAs: ["cdkAccordion"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkAccordion, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-accordion, [cdkAccordion]",
        exportAs: "cdkAccordion",
        providers: [{ provide: CDK_ACCORDION, useExisting: CdkAccordion }]
      }]
    }], propDecorators: { multi: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    CdkAccordionItem = class _CdkAccordionItem {
      accordion = inject(CDK_ACCORDION, { optional: true, skipSelf: true });
      _changeDetectorRef = inject(ChangeDetectorRef);
      _expansionDispatcher = inject(UniqueSelectionDispatcher);
      /** Subscription to openAll/closeAll events. */
      _openCloseAllSubscription = Subscription.EMPTY;
      /** Event emitted every time the AccordionItem is closed. */
      closed = new EventEmitter();
      /** Event emitted every time the AccordionItem is opened. */
      opened = new EventEmitter();
      /** Event emitted when the AccordionItem is destroyed. */
      destroyed = new EventEmitter();
      /**
       * Emits whenever the expanded state of the accordion changes.
       * Primarily used to facilitate two-way binding.
       * @docs-private
       */
      expandedChange = new EventEmitter();
      /** The unique AccordionItem id. */
      id = inject(_IdGenerator).getId("cdk-accordion-child-");
      /** Whether the AccordionItem is expanded. */
      get expanded() {
        return this._expanded;
      }
      set expanded(expanded) {
        if (this._expanded !== expanded) {
          this._expanded = expanded;
          this.expandedChange.emit(expanded);
          if (expanded) {
            this.opened.emit();
            const accordionId = this.accordion ? this.accordion.id : this.id;
            this._expansionDispatcher.notify(this.id, accordionId);
          } else {
            this.closed.emit();
          }
          this._changeDetectorRef.markForCheck();
        }
      }
      _expanded = false;
      /** Whether the AccordionItem is disabled. */
      get disabled() {
        return this._disabled();
      }
      set disabled(value) {
        this._disabled.set(value);
      }
      _disabled = signal(false);
      /** Unregister function for _expansionDispatcher. */
      _removeUniqueSelectionListener = () => {
      };
      constructor() {
      }
      ngOnInit() {
        this._removeUniqueSelectionListener = this._expansionDispatcher.listen((id, accordionId) => {
          if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
            this.expanded = false;
          }
        });
        if (this.accordion) {
          this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
      }
      /** Emits an event for the accordion item being destroyed. */
      ngOnDestroy() {
        this.opened.complete();
        this.closed.complete();
        this.destroyed.emit();
        this.destroyed.complete();
        this._removeUniqueSelectionListener();
        this._openCloseAllSubscription.unsubscribe();
      }
      /** Toggles the expanded state of the accordion item. */
      toggle() {
        if (!this.disabled) {
          this.expanded = !this.expanded;
        }
      }
      /** Sets the expanded state of the accordion item to false. */
      close() {
        if (!this.disabled) {
          this.expanded = false;
        }
      }
      /** Sets the expanded state of the accordion item to true. */
      open() {
        if (!this.disabled) {
          this.expanded = true;
        }
      }
      _subscribeToOpenCloseAllActions() {
        return this.accordion._openCloseAllActions.subscribe((expanded) => {
          if (!this.disabled) {
            this.expanded = expanded;
          }
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAccordionItem, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkAccordionItem, isStandalone: true, selector: "cdk-accordion-item, [cdkAccordionItem]", inputs: { expanded: ["expanded", "expanded", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { closed: "closed", opened: "opened", destroyed: "destroyed", expandedChange: "expandedChange" }, providers: [
        // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        { provide: CDK_ACCORDION, useValue: void 0 }
      ], exportAs: ["cdkAccordionItem"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkAccordionItem, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-accordion-item, [cdkAccordionItem]",
        exportAs: "cdkAccordionItem",
        providers: [
          // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
          // registering to the same accordion.
          { provide: CDK_ACCORDION, useValue: void 0 }
        ]
      }]
    }], ctorParameters: () => [], propDecorators: { closed: [{
      type: Output
    }], opened: [{
      type: Output
    }], destroyed: [{
      type: Output
    }], expandedChange: [{
      type: Output
    }], expanded: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    CdkAccordionModule = class _CdkAccordionModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAccordionModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAccordionModule, imports: [CdkAccordion, CdkAccordionItem], exports: [CdkAccordion, CdkAccordionItem] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAccordionModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkAccordionModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkAccordion, CdkAccordionItem],
        exports: [CdkAccordion, CdkAccordionItem]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/expansion.mjs
var MAT_ACCORDION, MAT_EXPANSION_PANEL, MatExpansionPanelContent, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelDescription, MatExpansionPanelTitle, MatAccordion, MatExpansionModule;
var init_expansion = __esm({
  "node_modules/@angular/material/fesm2022/expansion.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_accordion();
    init_portal();
    init_a11y();
    init_operators();
    init_keycodes();
    init_esm();
    init_collections();
    init_animation_DfMFjxHu();
    init_private();
    init_structural_styles_CObeNzjn();
    init_common_module_cKSwHniA();
    MAT_ACCORDION = new InjectionToken("MAT_ACCORDION");
    MAT_EXPANSION_PANEL = new InjectionToken("MAT_EXPANSION_PANEL");
    MatExpansionPanelContent = class _MatExpansionPanelContent {
      _template = inject(TemplateRef);
      _expansionPanel = inject(MAT_EXPANSION_PANEL, { optional: true });
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionPanelContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatExpansionPanelContent, isStandalone: true, selector: "ng-template[matExpansionPanelContent]", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionPanelContent, decorators: [{
      type: Directive,
      args: [{
        selector: "ng-template[matExpansionPanelContent]"
      }]
    }], ctorParameters: () => [] });
    MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");
    MatExpansionPanel = class _MatExpansionPanel extends CdkAccordionItem {
      _viewContainerRef = inject(ViewContainerRef);
      _animationsDisabled = _animationsDisabled();
      _document = inject(DOCUMENT);
      _ngZone = inject(NgZone);
      _elementRef = inject(ElementRef);
      _renderer = inject(Renderer2);
      _cleanupTransitionEnd;
      /** Whether the toggle indicator should be hidden. */
      get hideToggle() {
        return this._hideToggle || this.accordion && this.accordion.hideToggle;
      }
      set hideToggle(value) {
        this._hideToggle = value;
      }
      _hideToggle = false;
      /** The position of the expansion indicator. */
      get togglePosition() {
        return this._togglePosition || this.accordion && this.accordion.togglePosition;
      }
      set togglePosition(value) {
        this._togglePosition = value;
      }
      _togglePosition;
      /** An event emitted after the body's expansion animation happens. */
      afterExpand = new EventEmitter();
      /** An event emitted after the body's collapse animation happens. */
      afterCollapse = new EventEmitter();
      /** Stream that emits for changes in `@Input` properties. */
      _inputChanges = new Subject();
      /** Optionally defined accordion the expansion panel belongs to. */
      accordion = inject(MAT_ACCORDION, { optional: true, skipSelf: true });
      /** Content that will be rendered lazily. */
      _lazyContent;
      /** Element containing the panel's user-provided content. */
      _body;
      /** Element wrapping the panel body. */
      _bodyWrapper;
      /** Portal holding the user's content. */
      _portal;
      /** ID for the associated header element. Used for a11y labelling. */
      _headerId = inject(_IdGenerator).getId("mat-expansion-panel-header-");
      constructor() {
        super();
        const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, { optional: true });
        this._expansionDispatcher = inject(UniqueSelectionDispatcher);
        if (defaultOptions) {
          this.hideToggle = defaultOptions.hideToggle;
        }
      }
      /** Determines whether the expansion panel should have spacing between it and its siblings. */
      _hasSpacing() {
        if (this.accordion) {
          return this.expanded && this.accordion.displayMode === "default";
        }
        return false;
      }
      /** Gets the expanded state string. */
      _getExpandedState() {
        return this.expanded ? "expanded" : "collapsed";
      }
      /** Toggles the expanded state of the expansion panel. */
      toggle() {
        this.expanded = !this.expanded;
      }
      /** Sets the expanded state of the expansion panel to false. */
      close() {
        this.expanded = false;
      }
      /** Sets the expanded state of the expansion panel to true. */
      open() {
        this.expanded = true;
      }
      ngAfterContentInit() {
        if (this._lazyContent && this._lazyContent._expansionPanel === this) {
          this.opened.pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1)).subscribe(() => {
            this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
          });
        }
        this._setupAnimationEvents();
      }
      ngOnChanges(changes) {
        this._inputChanges.next(changes);
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        this._cleanupTransitionEnd?.();
        this._inputChanges.complete();
      }
      /** Checks whether the expansion panel's content contains the currently-focused element. */
      _containsFocus() {
        if (this._body) {
          const focusedElement = this._document.activeElement;
          const bodyElement = this._body.nativeElement;
          return focusedElement === bodyElement || bodyElement.contains(focusedElement);
        }
        return false;
      }
      _transitionEndListener = ({ target, propertyName }) => {
        if (target === this._bodyWrapper?.nativeElement && propertyName === "grid-template-rows") {
          this._ngZone.run(() => {
            if (this.expanded) {
              this.afterExpand.emit();
            } else {
              this.afterCollapse.emit();
            }
          });
        }
      };
      _setupAnimationEvents() {
        this._ngZone.runOutsideAngular(() => {
          if (this._animationsDisabled) {
            this.opened.subscribe(() => this._ngZone.run(() => this.afterExpand.emit()));
            this.closed.subscribe(() => this._ngZone.run(() => this.afterCollapse.emit()));
          } else {
            setTimeout(() => {
              const element = this._elementRef.nativeElement;
              this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this._transitionEndListener);
              element.classList.add("mat-expansion-panel-animations-enabled");
            }, 200);
          }
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionPanel, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatExpansionPanel, isStandalone: true, selector: "mat-expansion-panel", inputs: { hideToggle: ["hideToggle", "hideToggle", booleanAttribute], togglePosition: "togglePosition" }, outputs: { afterExpand: "afterExpand", afterCollapse: "afterCollapse" }, host: { properties: { "class.mat-expanded": "expanded", "class.mat-expansion-panel-spacing": "_hasSpacing()" }, classAttribute: "mat-expansion-panel" }, providers: [
        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        { provide: MAT_ACCORDION, useValue: void 0 },
        { provide: MAT_EXPANSION_PANEL, useExisting: _MatExpansionPanel }
      ], queries: [{ propertyName: "_lazyContent", first: true, predicate: MatExpansionPanelContent, descendants: true }], viewQueries: [{ propertyName: "_body", first: true, predicate: ["body"], descendants: true }, { propertyName: "_bodyWrapper", first: true, predicate: ["bodyWrapper"], descendants: true }], exportAs: ["matExpansionPanel"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports, template: `<ng-content select="mat-expansion-panel-header"></ng-content>
<div class="mat-expansion-panel-content-wrapper" [attr.inert]="expanded ? null : ''" #bodyWrapper>
  <div class="mat-expansion-panel-content"
       role="region"
       [attr.aria-labelledby]="_headerId"
       [id]="id"
       #body>
    <div class="mat-expansion-panel-body">
      <ng-content></ng-content>
      <ng-template [cdkPortalOutlet]="_portal"></ng-template>
    </div>
    <ng-content select="mat-action-row"></ng-content>
  </div>
</div>
`, styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"], dependencies: [{ kind: "directive", type: CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionPanel, decorators: [{
      type: Component,
      args: [{ selector: "mat-expansion-panel", exportAs: "matExpansionPanel", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        { provide: MAT_ACCORDION, useValue: void 0 },
        { provide: MAT_EXPANSION_PANEL, useExisting: MatExpansionPanel }
      ], host: {
        "class": "mat-expansion-panel",
        "[class.mat-expanded]": "expanded",
        "[class.mat-expansion-panel-spacing]": "_hasSpacing()"
      }, imports: [CdkPortalOutlet], template: `<ng-content select="mat-expansion-panel-header"></ng-content>
<div class="mat-expansion-panel-content-wrapper" [attr.inert]="expanded ? null : ''" #bodyWrapper>
  <div class="mat-expansion-panel-content"
       role="region"
       [attr.aria-labelledby]="_headerId"
       [id]="id"
       #body>
    <div class="mat-expansion-panel-body">
      <ng-content></ng-content>
      <ng-template [cdkPortalOutlet]="_portal"></ng-template>
    </div>
    <ng-content select="mat-action-row"></ng-content>
  </div>
</div>
`, styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"] }]
    }], ctorParameters: () => [], propDecorators: { hideToggle: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], togglePosition: [{
      type: Input
    }], afterExpand: [{
      type: Output
    }], afterCollapse: [{
      type: Output
    }], _lazyContent: [{
      type: ContentChild,
      args: [MatExpansionPanelContent]
    }], _body: [{
      type: ViewChild,
      args: ["body"]
    }], _bodyWrapper: [{
      type: ViewChild,
      args: ["bodyWrapper"]
    }] } });
    MatExpansionPanelActionRow = class _MatExpansionPanelActionRow {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionPanelActionRow, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatExpansionPanelActionRow, isStandalone: true, selector: "mat-action-row", host: { classAttribute: "mat-action-row" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionPanelActionRow, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-action-row",
        host: {
          class: "mat-action-row"
        }
      }]
    }] });
    MatExpansionPanelHeader = class _MatExpansionPanelHeader {
      panel = inject(MatExpansionPanel, { host: true });
      _element = inject(ElementRef);
      _focusMonitor = inject(FocusMonitor);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _parentChangeSubscription = Subscription.EMPTY;
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const panel = this.panel;
        const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, { optional: true });
        const tabIndex = inject(new HostAttributeToken("tabindex"), { optional: true });
        const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(filter((changes) => !!(changes["hideToggle"] || changes["togglePosition"]))) : EMPTY;
        this.tabIndex = parseInt(tabIndex || "") || 0;
        this._parentChangeSubscription = merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter((changes) => {
          return !!(changes["hideToggle"] || changes["disabled"] || changes["togglePosition"]);
        }))).subscribe(() => this._changeDetectorRef.markForCheck());
        panel.closed.pipe(filter(() => panel._containsFocus())).subscribe(() => this._focusMonitor.focusVia(this._element, "program"));
        if (defaultOptions) {
          this.expandedHeight = defaultOptions.expandedHeight;
          this.collapsedHeight = defaultOptions.collapsedHeight;
        }
      }
      /** Height of the header while the panel is expanded. */
      expandedHeight;
      /** Height of the header while the panel is collapsed. */
      collapsedHeight;
      /** Tab index of the header. */
      tabIndex = 0;
      /**
       * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
       * @docs-private
       */
      get disabled() {
        return this.panel.disabled;
      }
      /** Toggles the expanded state of the panel. */
      _toggle() {
        if (!this.disabled) {
          this.panel.toggle();
        }
      }
      /** Gets whether the panel is expanded. */
      _isExpanded() {
        return this.panel.expanded;
      }
      /** Gets the expanded state string of the panel. */
      _getExpandedState() {
        return this.panel._getExpandedState();
      }
      /** Gets the panel id. */
      _getPanelId() {
        return this.panel.id;
      }
      /** Gets the toggle position for the header. */
      _getTogglePosition() {
        return this.panel.togglePosition;
      }
      /** Gets whether the expand indicator should be shown. */
      _showToggle() {
        return !this.panel.hideToggle && !this.panel.disabled;
      }
      /**
       * Gets the current height of the header. Null if no custom height has been
       * specified, and if the default height from the stylesheet should be used.
       */
      _getHeaderHeight() {
        const isExpanded = this._isExpanded();
        if (isExpanded && this.expandedHeight) {
          return this.expandedHeight;
        } else if (!isExpanded && this.collapsedHeight) {
          return this.collapsedHeight;
        }
        return null;
      }
      /** Handle keydown event calling to toggle() if appropriate. */
      _keydown(event) {
        switch (event.keyCode) {
          // Toggle for space and enter keys.
          case SPACE:
          case ENTER:
            if (!hasModifierKey(event)) {
              event.preventDefault();
              this._toggle();
            }
            break;
          default:
            if (this.panel.accordion) {
              this.panel.accordion._handleHeaderKeydown(event);
            }
            return;
        }
      }
      /**
       * Focuses the panel header. Implemented as a part of `FocusableOption`.
       * @param origin Origin of the action that triggered the focus.
       * @docs-private
       */
      focus(origin, options) {
        if (origin) {
          this._focusMonitor.focusVia(this._element, origin, options);
        } else {
          this._element.nativeElement.focus(options);
        }
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._element).subscribe((origin) => {
          if (origin && this.panel.accordion) {
            this.panel.accordion._handleHeaderFocus(this);
          }
        });
      }
      ngOnDestroy() {
        this._parentChangeSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionPanelHeader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatExpansionPanelHeader, isStandalone: true, selector: "mat-expansion-panel-header", inputs: { expandedHeight: "expandedHeight", collapsedHeight: "collapsedHeight", tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)] }, host: { attributes: { "role": "button" }, listeners: { "click": "_toggle()", "keydown": "_keydown($event)" }, properties: { "attr.id": "panel._headerId", "attr.tabindex": "disabled ? -1 : tabIndex", "attr.aria-controls": "_getPanelId()", "attr.aria-expanded": "_isExpanded()", "attr.aria-disabled": "panel.disabled", "class.mat-expanded": "_isExpanded()", "class.mat-expansion-toggle-indicator-after": "_getTogglePosition() === 'after'", "class.mat-expansion-toggle-indicator-before": "_getTogglePosition() === 'before'", "style.height": "_getHeaderHeight()" }, classAttribute: "mat-expansion-panel-header mat-focus-indicator" }, ngImport: core_exports, template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n', styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionPanelHeader, decorators: [{
      type: Component,
      args: [{ selector: "mat-expansion-panel-header", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "class": "mat-expansion-panel-header mat-focus-indicator",
        "role": "button",
        "[attr.id]": "panel._headerId",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": "_getPanelId()",
        "[attr.aria-expanded]": "_isExpanded()",
        "[attr.aria-disabled]": "panel.disabled",
        "[class.mat-expanded]": "_isExpanded()",
        "[class.mat-expansion-toggle-indicator-after]": `_getTogglePosition() === 'after'`,
        "[class.mat-expansion-toggle-indicator-before]": `_getTogglePosition() === 'before'`,
        "[style.height]": "_getHeaderHeight()",
        "(click)": "_toggle()",
        "(keydown)": "_keydown($event)"
      }, template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n', styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n'] }]
    }], ctorParameters: () => [], propDecorators: { expandedHeight: [{
      type: Input
    }], collapsedHeight: [{
      type: Input
    }], tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }] } });
    MatExpansionPanelDescription = class _MatExpansionPanelDescription {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionPanelDescription, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatExpansionPanelDescription, isStandalone: true, selector: "mat-panel-description", host: { classAttribute: "mat-expansion-panel-header-description" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionPanelDescription, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-panel-description",
        host: {
          class: "mat-expansion-panel-header-description"
        }
      }]
    }] });
    MatExpansionPanelTitle = class _MatExpansionPanelTitle {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionPanelTitle, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatExpansionPanelTitle, isStandalone: true, selector: "mat-panel-title", host: { classAttribute: "mat-expansion-panel-header-title" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionPanelTitle, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-panel-title",
        host: {
          class: "mat-expansion-panel-header-title"
        }
      }]
    }] });
    MatAccordion = class _MatAccordion extends CdkAccordion {
      _keyManager;
      /** Headers belonging to this accordion. */
      _ownHeaders = new QueryList();
      /** All headers inside the accordion. Includes headers inside nested accordions. */
      _headers;
      /** Whether the expansion indicator should be hidden. */
      hideToggle = false;
      /**
       * Display mode used for all expansion panels in the accordion. Currently two display
       * modes exist:
       *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
       *     panel at a different elevation from the rest of the accordion.
       *  flat - no spacing is placed around expanded panels, showing all panels at the same
       *     elevation.
       */
      displayMode = "default";
      /** The position of the expansion indicator. */
      togglePosition = "after";
      ngAfterContentInit() {
        this._headers.changes.pipe(startWith(this._headers)).subscribe((headers) => {
          this._ownHeaders.reset(headers.filter((header) => header.panel.accordion === this));
          this._ownHeaders.notifyOnChanges();
        });
        this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
      }
      /** Handles keyboard events coming in from the panel headers. */
      _handleHeaderKeydown(event) {
        this._keyManager.onKeydown(event);
      }
      _handleHeaderFocus(header) {
        this._keyManager.updateActiveItem(header);
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        this._keyManager?.destroy();
        this._ownHeaders.destroy();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatAccordion, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatAccordion, isStandalone: true, selector: "mat-accordion", inputs: { hideToggle: ["hideToggle", "hideToggle", booleanAttribute], displayMode: "displayMode", togglePosition: "togglePosition" }, host: { properties: { "class.mat-accordion-multi": "this.multi" }, classAttribute: "mat-accordion" }, providers: [
        {
          provide: MAT_ACCORDION,
          useExisting: _MatAccordion
        }
      ], queries: [{ propertyName: "_headers", predicate: MatExpansionPanelHeader, descendants: true }], exportAs: ["matAccordion"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatAccordion, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-accordion",
        exportAs: "matAccordion",
        providers: [
          {
            provide: MAT_ACCORDION,
            useExisting: MatAccordion
          }
        ],
        host: {
          class: "mat-accordion",
          // Class binding which is only used by the test harness as there is no other
          // way for the harness to detect if multiple panel support is enabled.
          "[class.mat-accordion-multi]": "this.multi"
        }
      }]
    }], propDecorators: { _headers: [{
      type: ContentChildren,
      args: [MatExpansionPanelHeader, { descendants: true }]
    }], hideToggle: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], displayMode: [{
      type: Input
    }], togglePosition: [{
      type: Input
    }] } });
    MatExpansionModule = class _MatExpansionModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionModule, imports: [
        MatCommonModule,
        CdkAccordionModule,
        PortalModule,
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelActionRow,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelContent
      ], exports: [
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelActionRow,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelContent
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionModule, imports: [
        MatCommonModule,
        CdkAccordionModule,
        PortalModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          MatCommonModule,
          CdkAccordionModule,
          PortalModule,
          MatAccordion,
          MatExpansionPanel,
          MatExpansionPanelActionRow,
          MatExpansionPanelHeader,
          MatExpansionPanelTitle,
          MatExpansionPanelDescription,
          MatExpansionPanelContent
        ],
        exports: [
          MatAccordion,
          MatExpansionPanel,
          MatExpansionPanelActionRow,
          MatExpansionPanelHeader,
          MatExpansionPanelTitle,
          MatExpansionPanelDescription,
          MatExpansionPanelContent
        ]
      }]
    }] });
  }
});

export {
  MatProgressSpinnerModule,
  init_progress_spinner,
  MatExpansionModule,
  init_expansion
};
//# sourceMappingURL=chunk-LDHILB4W.js.map
