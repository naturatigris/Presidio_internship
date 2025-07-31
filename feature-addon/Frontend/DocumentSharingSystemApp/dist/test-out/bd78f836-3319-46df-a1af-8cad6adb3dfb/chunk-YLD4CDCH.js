import {
  ErrorStateMatcher,
  MAT_FORM_FIELD,
  MatFormFieldControl,
  MatFormFieldModule,
  _ErrorStateTracker,
  init_error_options_DCNQlTOA,
  init_error_state_Dtb1IHM,
  init_form_field_C9DZXojn,
  init_module_DzZHEh7B
} from "./chunk-3YSEX4UT.js";
import {
  FormGroupDirective,
  NgControl,
  NgForm,
  Validators,
  init_forms
} from "./chunk-2KLKVMNN.js";
import {
  MatCommonModule,
  Platform,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  coerceBooleanProperty,
  coerceElement,
  coerceNumberProperty,
  getSupportedInputTypes,
  init_a11y,
  init_coercion,
  init_common_module_cKSwHniA,
  init_element_x4z00URv,
  init_platform,
  init_platform_DNDzkVcI,
  init_style_loader_B2sGQXxD
} from "./chunk-PI2YTXAG.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  RendererFactory2,
  Subject,
  ViewEncapsulation,
  auditTime,
  booleanAttribute,
  core_exports,
  effect,
  init_core,
  init_esm,
  init_operators,
  inject,
  isSignal,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-6IGNU3MH.js";
import {
  __esm
} from "./chunk-73RR4HMO.js";

// node_modules/@angular/material/fesm2022/form-field.mjs
var init_form_field = __esm({
  "node_modules/@angular/material/fesm2022/form-field.mjs"() {
    "use strict";
    init_form_field_C9DZXojn();
    init_module_DzZHEh7B();
  }
});

// node_modules/@angular/cdk/fesm2022/text-field.mjs
var _CdkTextFieldStyleLoader, listenerOptions, AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule;
var init_text_field = __esm({
  "node_modules/@angular/cdk/fesm2022/text-field.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_platform_DNDzkVcI();
    init_style_loader_B2sGQXxD();
    init_element_x4z00URv();
    init_operators();
    _CdkTextFieldStyleLoader = class __CdkTextFieldStyleLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __CdkTextFieldStyleLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: __CdkTextFieldStyleLoader, isStandalone: true, selector: "ng-component", host: { attributes: { "cdk-text-field-style-loader": "" } }, ngImport: core_exports, template: "", isInline: true, styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTextFieldStyleLoader, decorators: [{
      type: Component,
      args: [{ template: "", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: { "cdk-text-field-style-loader": "" }, styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"] }]
    }] });
    listenerOptions = { passive: true };
    AutofillMonitor = class _AutofillMonitor {
      _platform = inject(Platform);
      _ngZone = inject(NgZone);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _styleLoader = inject(_CdkPrivateStyleLoader);
      _monitoredElements = /* @__PURE__ */ new Map();
      constructor() {
      }
      monitor(elementOrRef) {
        if (!this._platform.isBrowser) {
          return EMPTY;
        }
        this._styleLoader.load(_CdkTextFieldStyleLoader);
        const element = coerceElement(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
          return info.subject;
        }
        const subject = new Subject();
        const cssClass = "cdk-text-field-autofilled";
        const listener = (event) => {
          if (event.animationName === "cdk-text-field-autofill-start" && !element.classList.contains(cssClass)) {
            element.classList.add(cssClass);
            this._ngZone.run(() => subject.next({ target: event.target, isAutofilled: true }));
          } else if (event.animationName === "cdk-text-field-autofill-end" && element.classList.contains(cssClass)) {
            element.classList.remove(cssClass);
            this._ngZone.run(() => subject.next({ target: event.target, isAutofilled: false }));
          }
        };
        const unlisten = this._ngZone.runOutsideAngular(() => {
          element.classList.add("cdk-text-field-autofill-monitored");
          return this._renderer.listen(element, "animationstart", listener, listenerOptions);
        });
        this._monitoredElements.set(element, { subject, unlisten });
        return subject;
      }
      stopMonitoring(elementOrRef) {
        const element = coerceElement(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
          info.unlisten();
          info.subject.complete();
          element.classList.remove("cdk-text-field-autofill-monitored");
          element.classList.remove("cdk-text-field-autofilled");
          this._monitoredElements.delete(element);
        }
      }
      ngOnDestroy() {
        this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _AutofillMonitor, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _AutofillMonitor, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: AutofillMonitor, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkAutofill = class _CdkAutofill {
      _elementRef = inject(ElementRef);
      _autofillMonitor = inject(AutofillMonitor);
      /** Emits when the autofill state of the element changes. */
      cdkAutofill = new EventEmitter();
      constructor() {
      }
      ngOnInit() {
        this._autofillMonitor.monitor(this._elementRef).subscribe((event) => this.cdkAutofill.emit(event));
      }
      ngOnDestroy() {
        this._autofillMonitor.stopMonitoring(this._elementRef);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAutofill, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkAutofill, isStandalone: true, selector: "[cdkAutofill]", outputs: { cdkAutofill: "cdkAutofill" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkAutofill, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkAutofill]"
      }]
    }], ctorParameters: () => [], propDecorators: { cdkAutofill: [{
      type: Output
    }] } });
    CdkTextareaAutosize = class _CdkTextareaAutosize {
      _elementRef = inject(ElementRef);
      _platform = inject(Platform);
      _ngZone = inject(NgZone);
      _renderer = inject(Renderer2);
      _resizeEvents = new Subject();
      /** Keep track of the previous textarea value to avoid resizing when the value hasn't changed. */
      _previousValue;
      _initialHeight;
      _destroyed = new Subject();
      _listenerCleanups;
      _minRows;
      _maxRows;
      _enabled = true;
      /**
       * Value of minRows as of last resize. If the minRows has decreased, the
       * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
       * does not have the same problem because it does not affect the textarea's scrollHeight.
       */
      _previousMinRows = -1;
      _textareaElement;
      /** Minimum amount of rows in the textarea. */
      get minRows() {
        return this._minRows;
      }
      set minRows(value) {
        this._minRows = coerceNumberProperty(value);
        this._setMinHeight();
      }
      /** Maximum amount of rows in the textarea. */
      get maxRows() {
        return this._maxRows;
      }
      set maxRows(value) {
        this._maxRows = coerceNumberProperty(value);
        this._setMaxHeight();
      }
      /** Whether autosizing is enabled or not */
      get enabled() {
        return this._enabled;
      }
      set enabled(value) {
        if (this._enabled !== value) {
          (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
        }
      }
      get placeholder() {
        return this._textareaElement.placeholder;
      }
      set placeholder(value) {
        this._cachedPlaceholderHeight = void 0;
        if (value) {
          this._textareaElement.setAttribute("placeholder", value);
        } else {
          this._textareaElement.removeAttribute("placeholder");
        }
        this._cacheTextareaPlaceholderHeight();
      }
      /** Cached height of a textarea with a single row. */
      _cachedLineHeight;
      /** Cached height of a textarea with only the placeholder. */
      _cachedPlaceholderHeight;
      /** Cached scroll top of a textarea */
      _cachedScrollTop;
      /** Used to reference correct document/window */
      _document = inject(DOCUMENT, { optional: true });
      _hasFocus;
      _isViewInited = false;
      constructor() {
        const styleLoader = inject(_CdkPrivateStyleLoader);
        styleLoader.load(_CdkTextFieldStyleLoader);
        this._textareaElement = this._elementRef.nativeElement;
      }
      /** Sets the minimum height of the textarea as determined by minRows. */
      _setMinHeight() {
        const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
        if (minHeight) {
          this._textareaElement.style.minHeight = minHeight;
        }
      }
      /** Sets the maximum height of the textarea as determined by maxRows. */
      _setMaxHeight() {
        const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
        if (maxHeight) {
          this._textareaElement.style.maxHeight = maxHeight;
        }
      }
      ngAfterViewInit() {
        if (this._platform.isBrowser) {
          this._initialHeight = this._textareaElement.style.height;
          this.resizeToFitContent();
          this._ngZone.runOutsideAngular(() => {
            this._listenerCleanups = [
              this._renderer.listen("window", "resize", () => this._resizeEvents.next()),
              this._renderer.listen(this._textareaElement, "focus", this._handleFocusEvent),
              this._renderer.listen(this._textareaElement, "blur", this._handleFocusEvent)
            ];
            this._resizeEvents.pipe(auditTime(16)).subscribe(() => {
              this._cachedLineHeight = this._cachedPlaceholderHeight = void 0;
              this.resizeToFitContent(true);
            });
          });
          this._isViewInited = true;
          this.resizeToFitContent(true);
        }
      }
      ngOnDestroy() {
        this._listenerCleanups?.forEach((cleanup) => cleanup());
        this._resizeEvents.complete();
        this._destroyed.next();
        this._destroyed.complete();
      }
      /**
       * Cache the height of a single-row textarea if it has not already been cached.
       *
       * We need to know how large a single "row" of a textarea is in order to apply minRows and
       * maxRows. For the initial version, we will assume that the height of a single line in the
       * textarea does not ever change.
       */
      _cacheTextareaLineHeight() {
        if (this._cachedLineHeight) {
          return;
        }
        const textareaClone = this._textareaElement.cloneNode(false);
        const cloneStyles = textareaClone.style;
        textareaClone.rows = 1;
        cloneStyles.position = "absolute";
        cloneStyles.visibility = "hidden";
        cloneStyles.border = "none";
        cloneStyles.padding = "0";
        cloneStyles.height = "";
        cloneStyles.minHeight = "";
        cloneStyles.maxHeight = "";
        cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = "auto";
        cloneStyles.overflow = "hidden";
        this._textareaElement.parentNode.appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.clientHeight;
        textareaClone.remove();
        this._setMinHeight();
        this._setMaxHeight();
      }
      _measureScrollHeight() {
        const element = this._textareaElement;
        const previousMargin = element.style.marginBottom || "";
        const isFirefox = this._platform.FIREFOX;
        const needsMarginFiller = isFirefox && this._hasFocus;
        const measuringClass = isFirefox ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring";
        if (needsMarginFiller) {
          element.style.marginBottom = `${element.clientHeight}px`;
        }
        element.classList.add(measuringClass);
        const scrollHeight = element.scrollHeight - 4;
        element.classList.remove(measuringClass);
        if (needsMarginFiller) {
          element.style.marginBottom = previousMargin;
        }
        return scrollHeight;
      }
      _cacheTextareaPlaceholderHeight() {
        if (!this._isViewInited || this._cachedPlaceholderHeight != void 0) {
          return;
        }
        if (!this.placeholder) {
          this._cachedPlaceholderHeight = 0;
          return;
        }
        const value = this._textareaElement.value;
        this._textareaElement.value = this._textareaElement.placeholder;
        this._cachedPlaceholderHeight = this._measureScrollHeight();
        this._textareaElement.value = value;
      }
      /** Handles `focus` and `blur` events. */
      _handleFocusEvent = (event) => {
        this._hasFocus = event.type === "focus";
      };
      ngDoCheck() {
        if (this._platform.isBrowser) {
          this.resizeToFitContent();
        }
      }
      /**
       * Resize the textarea to fit its content.
       * @param force Whether to force a height recalculation. By default the height will be
       *    recalculated only if the value changed since the last call.
       */
      resizeToFitContent(force = false) {
        if (!this._enabled) {
          return;
        }
        this._cacheTextareaLineHeight();
        this._cacheTextareaPlaceholderHeight();
        this._cachedScrollTop = this._textareaElement.scrollTop;
        if (!this._cachedLineHeight) {
          return;
        }
        const textarea = this._elementRef.nativeElement;
        const value = textarea.value;
        if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
          return;
        }
        const scrollHeight = this._measureScrollHeight();
        const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
        textarea.style.height = `${height}px`;
        this._ngZone.runOutsideAngular(() => {
          if (typeof requestAnimationFrame !== "undefined") {
            requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
          } else {
            setTimeout(() => this._scrollToCaretPosition(textarea));
          }
        });
        this._previousValue = value;
        this._previousMinRows = this._minRows;
      }
      /**
       * Resets the textarea to its original size
       */
      reset() {
        if (this._initialHeight !== void 0) {
          this._textareaElement.style.height = this._initialHeight;
        }
      }
      _noopInputHandler() {
      }
      /**
       * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
       * prevent it from scrolling to the caret position. We need to re-set the selection
       * in order for it to scroll to the proper position.
       */
      _scrollToCaretPosition(textarea) {
        const { selectionStart, selectionEnd } = textarea;
        if (!this._destroyed.isStopped && this._hasFocus) {
          textarea.setSelectionRange(selectionStart, selectionEnd);
          textarea.scrollTop = this._cachedScrollTop;
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTextareaAutosize, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkTextareaAutosize, isStandalone: true, selector: "textarea[cdkTextareaAutosize]", inputs: { minRows: ["cdkAutosizeMinRows", "minRows"], maxRows: ["cdkAutosizeMaxRows", "maxRows"], enabled: ["cdkTextareaAutosize", "enabled", booleanAttribute], placeholder: "placeholder" }, host: { attributes: { "rows": "1" }, listeners: { "input": "_noopInputHandler()" }, classAttribute: "cdk-textarea-autosize" }, exportAs: ["cdkTextareaAutosize"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkTextareaAutosize, decorators: [{
      type: Directive,
      args: [{
        selector: "textarea[cdkTextareaAutosize]",
        exportAs: "cdkTextareaAutosize",
        host: {
          "class": "cdk-textarea-autosize",
          // Textarea elements that have the directive applied should have a single row by default.
          // Browsers normally show two rows by default and therefore this limits the minRows binding.
          "rows": "1",
          "(input)": "_noopInputHandler()"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { minRows: [{
      type: Input,
      args: ["cdkAutosizeMinRows"]
    }], maxRows: [{
      type: Input,
      args: ["cdkAutosizeMaxRows"]
    }], enabled: [{
      type: Input,
      args: [{ alias: "cdkTextareaAutosize", transform: booleanAttribute }]
    }], placeholder: [{
      type: Input
    }] } });
    TextFieldModule = class _TextFieldModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _TextFieldModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _TextFieldModule, imports: [CdkAutofill, CdkTextareaAutosize], exports: [CdkAutofill, CdkTextareaAutosize] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _TextFieldModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: TextFieldModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkAutofill, CdkTextareaAutosize],
        exports: [CdkAutofill, CdkTextareaAutosize]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/input-value-accessor-D1GvPuqO.mjs
var MAT_INPUT_VALUE_ACCESSOR;
var init_input_value_accessor_D1GvPuqO = __esm({
  "node_modules/@angular/material/fesm2022/input-value-accessor-D1GvPuqO.mjs"() {
    "use strict";
    init_core();
    MAT_INPUT_VALUE_ACCESSOR = new InjectionToken("MAT_INPUT_VALUE_ACCESSOR");
  }
});

// node_modules/@angular/material/fesm2022/input.mjs
function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
var MAT_INPUT_INVALID_TYPES, MAT_INPUT_CONFIG, MatInput, MatInputModule;
var init_input = __esm({
  "node_modules/@angular/material/fesm2022/input.mjs"() {
    "use strict";
    init_coercion();
    init_platform();
    init_text_field();
    init_core();
    init_core();
    init_a11y();
    init_forms();
    init_esm();
    init_input_value_accessor_D1GvPuqO();
    init_form_field_C9DZXojn();
    init_error_options_DCNQlTOA();
    init_error_state_Dtb1IHM();
    init_module_DzZHEh7B();
    init_common_module_cKSwHniA();
    MAT_INPUT_INVALID_TYPES = [
      "button",
      "checkbox",
      "file",
      "hidden",
      "image",
      "radio",
      "range",
      "reset",
      "submit"
    ];
    MAT_INPUT_CONFIG = new InjectionToken("MAT_INPUT_CONFIG");
    MatInput = class _MatInput {
      _elementRef = inject(ElementRef);
      _platform = inject(Platform);
      ngControl = inject(NgControl, { optional: true, self: true });
      _autofillMonitor = inject(AutofillMonitor);
      _ngZone = inject(NgZone);
      _formField = inject(MAT_FORM_FIELD, { optional: true });
      _renderer = inject(Renderer2);
      _uid = inject(_IdGenerator).getId("mat-input-");
      _previousNativeValue;
      _inputValueAccessor;
      _signalBasedValueAccessor;
      _previousPlaceholder;
      _errorStateTracker;
      _config = inject(MAT_INPUT_CONFIG, { optional: true });
      _cleanupIosKeyup;
      _cleanupWebkitWheel;
      /** Whether the component is being rendered on the server. */
      _isServer;
      /** Whether the component is a native html select. */
      _isNativeSelect;
      /** Whether the component is a textarea. */
      _isTextarea;
      /** Whether the input is inside of a form field. */
      _isInFormField;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      focused = false;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      stateChanges = new Subject();
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      controlType = "mat-input";
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      autofilled = false;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        if (this.focused) {
          this.focused = false;
          this.stateChanges.next();
        }
      }
      _disabled = false;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get id() {
        return this._id;
      }
      set id(value) {
        this._id = value || this._uid;
      }
      _id;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      placeholder;
      /**
       * Name of the input.
       * @docs-private
       */
      name;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get required() {
        return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
      }
      set required(value) {
        this._required = coerceBooleanProperty(value);
      }
      _required;
      /** Input type of the element. */
      get type() {
        return this._type;
      }
      set type(value) {
        const prevType = this._type;
        this._type = value || "text";
        this._validateType();
        if (!this._isTextarea && getSupportedInputTypes().has(this._type)) {
          this._elementRef.nativeElement.type = this._type;
        }
        if (this._type !== prevType) {
          this._ensureWheelDefaultBehavior();
        }
      }
      _type = "text";
      /** An object used to control when error messages are shown. */
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(value) {
        this._errorStateTracker.matcher = value;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      userAriaDescribedBy;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get value() {
        return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value;
      }
      set value(value) {
        if (value !== this.value) {
          if (this._signalBasedValueAccessor) {
            this._signalBasedValueAccessor.value.set(value);
          } else {
            this._inputValueAccessor.value = value;
          }
          this.stateChanges.next();
        }
      }
      /** Whether the element is readonly. */
      get readonly() {
        return this._readonly;
      }
      set readonly(value) {
        this._readonly = coerceBooleanProperty(value);
      }
      _readonly = false;
      /** Whether the input should remain interactive when it is disabled. */
      disabledInteractive;
      /** Whether the input is in an error state. */
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(value) {
        this._errorStateTracker.errorState = value;
      }
      _neverEmptyInputTypes = [
        "date",
        "datetime",
        "datetime-local",
        "month",
        "time",
        "week"
      ].filter((t) => getSupportedInputTypes().has(t));
      constructor() {
        const parentForm = inject(NgForm, { optional: true });
        const parentFormGroup = inject(FormGroupDirective, { optional: true });
        const defaultErrorStateMatcher = inject(ErrorStateMatcher);
        const accessor = inject(MAT_INPUT_VALUE_ACCESSOR, { optional: true, self: true });
        const element = this._elementRef.nativeElement;
        const nodeName = element.nodeName.toLowerCase();
        if (accessor) {
          if (isSignal(accessor.value)) {
            this._signalBasedValueAccessor = accessor;
          } else {
            this._inputValueAccessor = accessor;
          }
        } else {
          this._inputValueAccessor = element;
        }
        this._previousNativeValue = this.value;
        this.id = this.id;
        if (this._platform.IOS) {
          this._ngZone.runOutsideAngular(() => {
            this._cleanupIosKeyup = this._renderer.listen(element, "keyup", this._iOSKeyupListener);
          });
        }
        this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
        this._isServer = !this._platform.isBrowser;
        this._isNativeSelect = nodeName === "select";
        this._isTextarea = nodeName === "textarea";
        this._isInFormField = !!this._formField;
        this.disabledInteractive = this._config?.disabledInteractive || false;
        if (this._isNativeSelect) {
          this.controlType = element.multiple ? "mat-native-select-multiple" : "mat-native-select";
        }
        if (this._signalBasedValueAccessor) {
          effect(() => {
            this._signalBasedValueAccessor.value();
            this.stateChanges.next();
          });
        }
      }
      ngAfterViewInit() {
        if (this._platform.isBrowser) {
          this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((event) => {
            this.autofilled = event.isAutofilled;
            this.stateChanges.next();
          });
        }
      }
      ngOnChanges() {
        this.stateChanges.next();
      }
      ngOnDestroy() {
        this.stateChanges.complete();
        if (this._platform.isBrowser) {
          this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
        }
        this._cleanupIosKeyup?.();
        this._cleanupWebkitWheel?.();
      }
      ngDoCheck() {
        if (this.ngControl) {
          this.updateErrorState();
          if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
            this.disabled = this.ngControl.disabled;
            this.stateChanges.next();
          }
        }
        this._dirtyCheckNativeValue();
        this._dirtyCheckPlaceholder();
      }
      /** Focuses the input. */
      focus(options) {
        this._elementRef.nativeElement.focus(options);
      }
      /** Refreshes the error state of the input. */
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      /** Callback for the cases where the focused state of the input changes. */
      _focusChanged(isFocused) {
        if (isFocused === this.focused) {
          return;
        }
        if (!this._isNativeSelect && isFocused && this.disabled && this.disabledInteractive) {
          const element = this._elementRef.nativeElement;
          if (element.type === "number") {
            element.type = "text";
            element.setSelectionRange(0, 0);
            element.type = "number";
          } else {
            element.setSelectionRange(0, 0);
          }
        }
        this.focused = isFocused;
        this.stateChanges.next();
      }
      _onInput() {
      }
      /** Does some manual dirty checking on the native input `value` property. */
      _dirtyCheckNativeValue() {
        const newValue = this._elementRef.nativeElement.value;
        if (this._previousNativeValue !== newValue) {
          this._previousNativeValue = newValue;
          this.stateChanges.next();
        }
      }
      /** Does some manual dirty checking on the native input `placeholder` attribute. */
      _dirtyCheckPlaceholder() {
        const placeholder = this._getPlaceholder();
        if (placeholder !== this._previousPlaceholder) {
          const element = this._elementRef.nativeElement;
          this._previousPlaceholder = placeholder;
          placeholder ? element.setAttribute("placeholder", placeholder) : element.removeAttribute("placeholder");
        }
      }
      /** Gets the current placeholder of the form field. */
      _getPlaceholder() {
        return this.placeholder || null;
      }
      /** Make sure the input is a supported type. */
      _validateType() {
        if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatInputUnsupportedTypeError(this._type);
        }
      }
      /** Checks whether the input type is one of the types that are never empty. */
      _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
      }
      /** Checks whether the input is invalid based on the native validation. */
      _isBadInput() {
        let validity = this._elementRef.nativeElement.validity;
        return validity && validity.badInput;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get empty() {
        return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get shouldLabelFloat() {
        if (this._isNativeSelect) {
          const selectElement = this._elementRef.nativeElement;
          const firstOption = selectElement.options[0];
          return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
        } else {
          return this.focused && !this.disabled || !this.empty;
        }
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get describedByIds() {
        const element = this._elementRef.nativeElement;
        const existingDescribedBy = element.getAttribute("aria-describedby");
        return existingDescribedBy?.split(" ") || [];
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      setDescribedByIds(ids) {
        const element = this._elementRef.nativeElement;
        if (ids.length) {
          element.setAttribute("aria-describedby", ids.join(" "));
        } else {
          element.removeAttribute("aria-describedby");
        }
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      onContainerClick() {
        if (!this.focused) {
          this.focus();
        }
      }
      /** Whether the form control is a native select that is displayed inline. */
      _isInlineSelect() {
        const element = this._elementRef.nativeElement;
        return this._isNativeSelect && (element.multiple || element.size > 1);
      }
      _iOSKeyupListener = (event) => {
        const el = event.target;
        if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
          el.setSelectionRange(1, 1);
          el.setSelectionRange(0, 0);
        }
      };
      _webkitBlinkWheelListener = () => {
      };
      /**
       * In blink and webkit browsers a focused number input does not increment or decrement its value
       * on mouse wheel interaction unless a wheel event listener is attached to it or one of its
       * ancestors or a passive wheel listener is attached somewhere in the DOM. For example: Hitting
       * a tooltip once enables the mouse wheel input for all number inputs as long as it exists. In
       * order to get reliable and intuitive behavior we apply a wheel event on our own thus making
       * sure increment and decrement by mouse wheel works every time.
       * @docs-private
       */
      _ensureWheelDefaultBehavior() {
        this._cleanupWebkitWheel?.();
        if (this._type === "number" && (this._platform.BLINK || this._platform.WEBKIT)) {
          this._cleanupWebkitWheel = this._renderer.listen(this._elementRef.nativeElement, "wheel", this._webkitBlinkWheelListener);
        }
      }
      /** Gets the value to set on the `readonly` attribute. */
      _getReadonlyAttribute() {
        if (this._isNativeSelect) {
          return null;
        }
        if (this.readonly || this.disabled && this.disabledInteractive) {
          return "true";
        }
        return null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatInput, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatInput, isStandalone: true, selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]", inputs: { disabled: "disabled", id: "id", placeholder: "placeholder", name: "name", required: "required", type: "type", errorStateMatcher: "errorStateMatcher", userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], value: "value", readonly: "readonly", disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute] }, host: { listeners: { "focus": "_focusChanged(true)", "blur": "_focusChanged(false)", "input": "_onInput()" }, properties: { "class.mat-input-server": "_isServer", "class.mat-mdc-form-field-textarea-control": "_isInFormField && _isTextarea", "class.mat-mdc-form-field-input-control": "_isInFormField", "class.mat-mdc-input-disabled-interactive": "disabledInteractive", "class.mdc-text-field__input": "_isInFormField", "class.mat-mdc-native-select-inline": "_isInlineSelect()", "id": "id", "disabled": "disabled && !disabledInteractive", "required": "required", "attr.name": "name || null", "attr.readonly": "_getReadonlyAttribute()", "attr.aria-disabled": 'disabled && disabledInteractive ? "true" : null', "attr.aria-invalid": "(empty && required) ? null : errorState", "attr.aria-required": "required", "attr.id": "id" }, classAttribute: "mat-mdc-input-element" }, providers: [{ provide: MatFormFieldControl, useExisting: _MatInput }], exportAs: ["matInput"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatInput, decorators: [{
      type: Directive,
      args: [{
        selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
        exportAs: "matInput",
        host: {
          "class": "mat-mdc-input-element",
          // The BaseMatInput parent class adds `mat-input-element`, `mat-form-field-control` and
          // `mat-form-field-autofill-control` to the CSS class list, but this should not be added for
          // this MDC equivalent input.
          "[class.mat-input-server]": "_isServer",
          "[class.mat-mdc-form-field-textarea-control]": "_isInFormField && _isTextarea",
          "[class.mat-mdc-form-field-input-control]": "_isInFormField",
          "[class.mat-mdc-input-disabled-interactive]": "disabledInteractive",
          "[class.mdc-text-field__input]": "_isInFormField",
          "[class.mat-mdc-native-select-inline]": "_isInlineSelect()",
          // Native input properties that are overwritten by Angular inputs need to be synced with
          // the native input element. Otherwise property bindings for those don't work.
          "[id]": "id",
          "[disabled]": "disabled && !disabledInteractive",
          "[required]": "required",
          "[attr.name]": "name || null",
          "[attr.readonly]": "_getReadonlyAttribute()",
          "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
          // Only mark the input as invalid for assistive technology if it has a value since the
          // state usually overlaps with `aria-required` when the input is empty and can be redundant.
          "[attr.aria-invalid]": "(empty && required) ? null : errorState",
          "[attr.aria-required]": "required",
          // Native input properties that are overwritten by Angular inputs need to be synced with
          // the native input element. Otherwise property bindings for those don't work.
          "[attr.id]": "id",
          "(focus)": "_focusChanged(true)",
          "(blur)": "_focusChanged(false)",
          "(input)": "_onInput()"
        },
        providers: [{ provide: MatFormFieldControl, useExisting: MatInput }]
      }]
    }], ctorParameters: () => [], propDecorators: { disabled: [{
      type: Input
    }], id: [{
      type: Input
    }], placeholder: [{
      type: Input
    }], name: [{
      type: Input
    }], required: [{
      type: Input
    }], type: [{
      type: Input
    }], errorStateMatcher: [{
      type: Input
    }], userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }], value: [{
      type: Input
    }], readonly: [{
      type: Input
    }], disabledInteractive: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MatInputModule = class _MatInputModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatInputModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatInputModule, imports: [MatCommonModule, MatFormFieldModule, MatInput], exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatInputModule, imports: [MatCommonModule, MatFormFieldModule, MatFormFieldModule, TextFieldModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatInputModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatFormFieldModule, MatInput],
        exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule]
      }]
    }] });
  }
});

export {
  init_form_field,
  MAT_INPUT_VALUE_ACCESSOR,
  init_input_value_accessor_D1GvPuqO,
  MatInputModule,
  init_input
};
//# sourceMappingURL=chunk-YLD4CDCH.js.map
