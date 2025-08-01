import {
  MatPseudoCheckbox,
  SelectionModel,
  init_collections,
  init_pseudo_checkbox_DDmgx3P4
} from "./chunk-HMSNM5K4.js";
import {
  NG_VALUE_ACCESSOR,
  init_forms
} from "./chunk-F4S5UMDT.js";
import {
  DOWN_ARROW,
  Directionality,
  ENTER,
  FocusMonitor,
  LEFT_ARROW,
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  init_a11y,
  init_animation_DfMFjxHu,
  init_bidi,
  init_common_module_cKSwHniA,
  init_index_BFRo2fUq,
  init_keycodes,
  init_private,
  init_ripple_BYgV4oZC,
  init_structural_styles_CObeNzjn
} from "./chunk-5C27C2Q6.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  HostAttributeToken,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  core_exports,
  forwardRef,
  init_core,
  inject,
  signal,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-A4GR5REI.js";
import {
  __esm
} from "./chunk-73RR4HMO.js";

// node_modules/@angular/material/fesm2022/button-toggle.mjs
function MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY() {
  return {
    hideSingleSelectionIndicator: false,
    hideMultipleSelectionIndicator: false,
    disabledInteractive: false
  };
}
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule;
var init_button_toggle = __esm({
  "node_modules/@angular/material/fesm2022/button-toggle.mjs"() {
    "use strict";
    init_a11y();
    init_bidi();
    init_collections();
    init_keycodes();
    init_private();
    init_core();
    init_core();
    init_forms();
    init_ripple_BYgV4oZC();
    init_pseudo_checkbox_DDmgx3P4();
    init_animation_DfMFjxHu();
    init_structural_styles_CObeNzjn();
    init_common_module_cKSwHniA();
    init_index_BFRo2fUq();
    MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", {
      providedIn: "root",
      factory: MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY
    });
    MAT_BUTTON_TOGGLE_GROUP = new InjectionToken("MatButtonToggleGroup");
    MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatButtonToggleGroup),
      multi: true
    };
    MatButtonToggleChange = class {
      source;
      value;
      constructor(source, value) {
        this.source = source;
        this.value = value;
      }
    };
    MatButtonToggleGroup = class _MatButtonToggleGroup {
      _changeDetector = inject(ChangeDetectorRef);
      _dir = inject(Directionality, { optional: true });
      _multiple = false;
      _disabled = false;
      _disabledInteractive = false;
      _selectionModel;
      /**
       * Reference to the raw value that the consumer tried to assign. The real
       * value will exclude any values from this one that don't correspond to a
       * toggle. Useful for the cases where the value is assigned before the toggles
       * have been initialized or at the same that they're being swapped out.
       */
      _rawValue;
      /**
       * The method to be called in order to update ngModel.
       * Now `ngModel` binding is not supported in multiple selection mode.
       */
      _controlValueAccessorChangeFn = () => {
      };
      /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
      _onTouched = () => {
      };
      /** Child button toggle buttons. */
      _buttonToggles;
      /** The appearance for all the buttons in the group. */
      appearance;
      /** `name` attribute for the underlying `input` element. */
      get name() {
        return this._name;
      }
      set name(value) {
        this._name = value;
        this._markButtonsForCheck();
      }
      _name = inject(_IdGenerator).getId("mat-button-toggle-group-");
      /** Whether the toggle group is vertical. */
      vertical;
      /** Value of the toggle group. */
      get value() {
        const selected = this._selectionModel ? this._selectionModel.selected : [];
        if (this.multiple) {
          return selected.map((toggle) => toggle.value);
        }
        return selected[0] ? selected[0].value : void 0;
      }
      set value(newValue) {
        this._setSelectionByValue(newValue);
        this.valueChange.emit(this.value);
      }
      /**
       * Event that emits whenever the value of the group changes.
       * Used to facilitate two-way data binding.
       * @docs-private
       */
      valueChange = new EventEmitter();
      /** Selected button toggles in the group. */
      get selected() {
        const selected = this._selectionModel ? this._selectionModel.selected : [];
        return this.multiple ? selected : selected[0] || null;
      }
      /** Whether multiple button toggles can be selected. */
      get multiple() {
        return this._multiple;
      }
      set multiple(value) {
        this._multiple = value;
        this._markButtonsForCheck();
      }
      /** Whether multiple button toggle group is disabled. */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        this._disabled = value;
        this._markButtonsForCheck();
      }
      /** Whether buttons in the group should be interactive while they're disabled. */
      get disabledInteractive() {
        return this._disabledInteractive;
      }
      set disabledInteractive(value) {
        this._disabledInteractive = value;
        this._markButtonsForCheck();
      }
      /** The layout direction of the toggle button group. */
      get dir() {
        return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
      }
      /** Event emitted when the group's value changes. */
      change = new EventEmitter();
      /** Whether checkmark indicator for single-selection button toggle groups is hidden. */
      get hideSingleSelectionIndicator() {
        return this._hideSingleSelectionIndicator;
      }
      set hideSingleSelectionIndicator(value) {
        this._hideSingleSelectionIndicator = value;
        this._markButtonsForCheck();
      }
      _hideSingleSelectionIndicator;
      /** Whether checkmark indicator for multiple-selection button toggle groups is hidden. */
      get hideMultipleSelectionIndicator() {
        return this._hideMultipleSelectionIndicator;
      }
      set hideMultipleSelectionIndicator(value) {
        this._hideMultipleSelectionIndicator = value;
        this._markButtonsForCheck();
      }
      _hideMultipleSelectionIndicator;
      constructor() {
        const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, { optional: true });
        this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
        this.hideSingleSelectionIndicator = defaultOptions?.hideSingleSelectionIndicator ?? false;
        this.hideMultipleSelectionIndicator = defaultOptions?.hideMultipleSelectionIndicator ?? false;
      }
      ngOnInit() {
        this._selectionModel = new SelectionModel(this.multiple, void 0, false);
      }
      ngAfterContentInit() {
        this._selectionModel.select(...this._buttonToggles.filter((toggle) => toggle.checked));
        if (!this.multiple) {
          this._initializeTabIndex();
        }
      }
      /**
       * Sets the model value. Implemented as part of ControlValueAccessor.
       * @param value Value to be set to the model.
       */
      writeValue(value) {
        this.value = value;
        this._changeDetector.markForCheck();
      }
      // Implemented as part of ControlValueAccessor.
      registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
      }
      // Implemented as part of ControlValueAccessor.
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      // Implemented as part of ControlValueAccessor.
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
      }
      /** Handle keydown event calling to single-select button toggle. */
      _keydown(event) {
        if (this.multiple || this.disabled) {
          return;
        }
        const target = event.target;
        const buttonId = target.id;
        const index = this._buttonToggles.toArray().findIndex((toggle) => {
          return toggle.buttonId === buttonId;
        });
        let nextButton = null;
        switch (event.keyCode) {
          case SPACE:
          case ENTER:
            nextButton = this._buttonToggles.get(index) || null;
            break;
          case UP_ARROW:
            nextButton = this._getNextButton(index, -1);
            break;
          case LEFT_ARROW:
            nextButton = this._getNextButton(index, this.dir === "ltr" ? -1 : 1);
            break;
          case DOWN_ARROW:
            nextButton = this._getNextButton(index, 1);
            break;
          case RIGHT_ARROW:
            nextButton = this._getNextButton(index, this.dir === "ltr" ? 1 : -1);
            break;
          default:
            return;
        }
        if (nextButton) {
          event.preventDefault();
          nextButton._onButtonClick();
          nextButton.focus();
        }
      }
      /** Dispatch change event with current selection and group value. */
      _emitChangeEvent(toggle) {
        const event = new MatButtonToggleChange(toggle, this.value);
        this._rawValue = event.value;
        this._controlValueAccessorChangeFn(event.value);
        this.change.emit(event);
      }
      /**
       * Syncs a button toggle's selected state with the model value.
       * @param toggle Toggle to be synced.
       * @param select Whether the toggle should be selected.
       * @param isUserInput Whether the change was a result of a user interaction.
       * @param deferEvents Whether to defer emitting the change events.
       */
      _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
        if (!this.multiple && this.selected && !toggle.checked) {
          this.selected.checked = false;
        }
        if (this._selectionModel) {
          if (select) {
            this._selectionModel.select(toggle);
          } else {
            this._selectionModel.deselect(toggle);
          }
        } else {
          deferEvents = true;
        }
        if (deferEvents) {
          Promise.resolve().then(() => this._updateModelValue(toggle, isUserInput));
        } else {
          this._updateModelValue(toggle, isUserInput);
        }
      }
      /** Checks whether a button toggle is selected. */
      _isSelected(toggle) {
        return this._selectionModel && this._selectionModel.isSelected(toggle);
      }
      /** Determines whether a button toggle should be checked on init. */
      _isPrechecked(toggle) {
        if (typeof this._rawValue === "undefined") {
          return false;
        }
        if (this.multiple && Array.isArray(this._rawValue)) {
          return this._rawValue.some((value) => toggle.value != null && value === toggle.value);
        }
        return toggle.value === this._rawValue;
      }
      /** Initializes the tabindex attribute using the radio pattern. */
      _initializeTabIndex() {
        this._buttonToggles.forEach((toggle) => {
          toggle.tabIndex = -1;
        });
        if (this.selected) {
          this.selected.tabIndex = 0;
        } else {
          for (let i = 0; i < this._buttonToggles.length; i++) {
            const toggle = this._buttonToggles.get(i);
            if (!toggle.disabled) {
              toggle.tabIndex = 0;
              break;
            }
          }
        }
      }
      /** Obtain the subsequent toggle to which the focus shifts. */
      _getNextButton(startIndex, offset) {
        const items = this._buttonToggles;
        for (let i = 1; i <= items.length; i++) {
          const index = (startIndex + offset * i + items.length) % items.length;
          const item = items.get(index);
          if (item && !item.disabled) {
            return item;
          }
        }
        return null;
      }
      /** Updates the selection state of the toggles in the group based on a value. */
      _setSelectionByValue(value) {
        this._rawValue = value;
        if (!this._buttonToggles) {
          return;
        }
        const toggles = this._buttonToggles.toArray();
        if (this.multiple && value) {
          if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw Error("Value must be an array in multiple-selection mode.");
          }
          this._clearSelection();
          value.forEach((currentValue) => this._selectValue(currentValue, toggles));
        } else {
          this._clearSelection();
          this._selectValue(value, toggles);
        }
        if (!this.multiple && toggles.every((toggle) => toggle.tabIndex === -1)) {
          for (const toggle of toggles) {
            if (!toggle.disabled) {
              toggle.tabIndex = 0;
              break;
            }
          }
        }
      }
      /** Clears the selected toggles. */
      _clearSelection() {
        this._selectionModel.clear();
        this._buttonToggles.forEach((toggle) => {
          toggle.checked = false;
          if (!this.multiple) {
            toggle.tabIndex = -1;
          }
        });
      }
      /** Selects a value if there's a toggle that corresponds to it. */
      _selectValue(value, toggles) {
        for (const toggle of toggles) {
          if (toggle.value === value) {
            toggle.checked = true;
            this._selectionModel.select(toggle);
            if (!this.multiple) {
              toggle.tabIndex = 0;
            }
            break;
          }
        }
      }
      /** Syncs up the group's value with the model and emits the change event. */
      _updateModelValue(toggle, isUserInput) {
        if (isUserInput) {
          this._emitChangeEvent(toggle);
        }
        this.valueChange.emit(this.value);
      }
      /** Marks all of the child button toggles to be checked. */
      _markButtonsForCheck() {
        this._buttonToggles?.forEach((toggle) => toggle._markForCheck());
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatButtonToggleGroup, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatButtonToggleGroup, isStandalone: true, selector: "mat-button-toggle-group", inputs: { appearance: "appearance", name: "name", vertical: ["vertical", "vertical", booleanAttribute], value: "value", multiple: ["multiple", "multiple", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute], hideSingleSelectionIndicator: ["hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute], hideMultipleSelectionIndicator: ["hideMultipleSelectionIndicator", "hideMultipleSelectionIndicator", booleanAttribute] }, outputs: { valueChange: "valueChange", change: "change" }, host: { listeners: { "keydown": "_keydown($event)" }, properties: { "attr.role": "multiple ? 'group' : 'radiogroup'", "attr.aria-disabled": "disabled", "class.mat-button-toggle-vertical": "vertical", "class.mat-button-toggle-group-appearance-standard": 'appearance === "standard"' }, classAttribute: "mat-button-toggle-group" }, providers: [
        MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR,
        { provide: MAT_BUTTON_TOGGLE_GROUP, useExisting: _MatButtonToggleGroup }
      ], queries: [{ propertyName: "_buttonToggles", predicate: forwardRef(() => MatButtonToggle), descendants: true }], exportAs: ["matButtonToggleGroup"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatButtonToggleGroup, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-button-toggle-group",
        providers: [
          MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR,
          { provide: MAT_BUTTON_TOGGLE_GROUP, useExisting: MatButtonToggleGroup }
        ],
        host: {
          "class": "mat-button-toggle-group",
          "(keydown)": "_keydown($event)",
          "[attr.role]": "multiple ? 'group' : 'radiogroup'",
          "[attr.aria-disabled]": "disabled",
          "[class.mat-button-toggle-vertical]": "vertical",
          "[class.mat-button-toggle-group-appearance-standard]": 'appearance === "standard"'
        },
        exportAs: "matButtonToggleGroup"
      }]
    }], ctorParameters: () => [], propDecorators: { _buttonToggles: [{
      type: ContentChildren,
      args: [forwardRef(() => MatButtonToggle), {
        // Note that this would technically pick up toggles
        // from nested groups, but that's not a case that we support.
        descendants: true
      }]
    }], appearance: [{
      type: Input
    }], name: [{
      type: Input
    }], vertical: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], value: [{
      type: Input
    }], valueChange: [{
      type: Output
    }], multiple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabledInteractive: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], change: [{
      type: Output
    }], hideSingleSelectionIndicator: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], hideMultipleSelectionIndicator: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MatButtonToggle = class _MatButtonToggle {
      _changeDetectorRef = inject(ChangeDetectorRef);
      _elementRef = inject(ElementRef);
      _focusMonitor = inject(FocusMonitor);
      _idGenerator = inject(_IdGenerator);
      _animationDisabled = _animationsDisabled();
      _checked = false;
      /**
       * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
       * take precedence so this may be omitted.
       */
      ariaLabel;
      /**
       * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
       */
      ariaLabelledby = null;
      /** Underlying native `button` element. */
      _buttonElement;
      /** The parent button toggle group (exclusive selection). Optional. */
      buttonToggleGroup;
      /** Unique ID for the underlying `button` element. */
      get buttonId() {
        return `${this.id}-button`;
      }
      /** The unique ID for this button toggle. */
      id;
      /** HTML's 'name' attribute used to group radios for unique selection. */
      name;
      /** MatButtonToggleGroup reads this to assign its own value. */
      value;
      /** Tabindex of the toggle. */
      get tabIndex() {
        return this._tabIndex();
      }
      set tabIndex(value) {
        this._tabIndex.set(value);
      }
      _tabIndex;
      /** Whether ripples are disabled on the button toggle. */
      disableRipple;
      /** The appearance style of the button. */
      get appearance() {
        return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
      }
      set appearance(value) {
        this._appearance = value;
      }
      _appearance;
      /** Whether the button is checked. */
      get checked() {
        return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
      }
      set checked(value) {
        if (value !== this._checked) {
          this._checked = value;
          if (this.buttonToggleGroup) {
            this.buttonToggleGroup._syncButtonToggle(this, this._checked);
          }
          this._changeDetectorRef.markForCheck();
        }
      }
      /** Whether the button is disabled. */
      get disabled() {
        return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
      }
      set disabled(value) {
        this._disabled = value;
      }
      _disabled = false;
      /** Whether the button should remain interactive when it is disabled. */
      get disabledInteractive() {
        return this._disabledInteractive || this.buttonToggleGroup !== null && this.buttonToggleGroup.disabledInteractive;
      }
      set disabledInteractive(value) {
        this._disabledInteractive = value;
      }
      _disabledInteractive;
      /** Event emitted when the group value changes. */
      change = new EventEmitter();
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const toggleGroup = inject(MAT_BUTTON_TOGGLE_GROUP, { optional: true });
        const defaultTabIndex = inject(new HostAttributeToken("tabindex"), { optional: true }) || "";
        const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, { optional: true });
        this._tabIndex = signal(parseInt(defaultTabIndex) || 0);
        this.buttonToggleGroup = toggleGroup;
        this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
        this.disabledInteractive = defaultOptions?.disabledInteractive ?? false;
      }
      ngOnInit() {
        const group = this.buttonToggleGroup;
        this.id = this.id || this._idGenerator.getId("mat-button-toggle-");
        if (group) {
          if (group._isPrechecked(this)) {
            this.checked = true;
          } else if (group._isSelected(this) !== this._checked) {
            group._syncButtonToggle(this, this._checked);
          }
        }
      }
      ngAfterViewInit() {
        if (!this._animationDisabled) {
          this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled");
        }
        this._focusMonitor.monitor(this._elementRef, true);
      }
      ngOnDestroy() {
        const group = this.buttonToggleGroup;
        this._focusMonitor.stopMonitoring(this._elementRef);
        if (group && group._isSelected(this)) {
          group._syncButtonToggle(this, false, false, true);
        }
      }
      /** Focuses the button. */
      focus(options) {
        this._buttonElement.nativeElement.focus(options);
      }
      /** Checks the button toggle due to an interaction with the underlying native button. */
      _onButtonClick() {
        if (this.disabled) {
          return;
        }
        const newChecked = this.isSingleSelector() ? true : !this._checked;
        if (newChecked !== this._checked) {
          this._checked = newChecked;
          if (this.buttonToggleGroup) {
            this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
            this.buttonToggleGroup._onTouched();
          }
        }
        if (this.isSingleSelector()) {
          const focusable = this.buttonToggleGroup._buttonToggles.find((toggle) => {
            return toggle.tabIndex === 0;
          });
          if (focusable) {
            focusable.tabIndex = -1;
          }
          this.tabIndex = 0;
        }
        this.change.emit(new MatButtonToggleChange(this, this.value));
      }
      /**
       * Marks the button toggle as needing checking for change detection.
       * This method is exposed because the parent button toggle group will directly
       * update bound properties of the radio button.
       */
      _markForCheck() {
        this._changeDetectorRef.markForCheck();
      }
      /** Gets the name that should be assigned to the inner DOM node. */
      _getButtonName() {
        if (this.isSingleSelector()) {
          return this.buttonToggleGroup.name;
        }
        return this.name || null;
      }
      /** Whether the toggle is in single selection mode. */
      isSingleSelector() {
        return this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatButtonToggle, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatButtonToggle, isStandalone: true, selector: "mat-button-toggle", inputs: { ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], id: "id", name: "name", value: "value", tabIndex: "tabIndex", disableRipple: ["disableRipple", "disableRipple", booleanAttribute], appearance: "appearance", checked: ["checked", "checked", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute] }, outputs: { change: "change" }, host: { attributes: { "role": "presentation" }, listeners: { "focus": "focus()" }, properties: { "class.mat-button-toggle-standalone": "!buttonToggleGroup", "class.mat-button-toggle-checked": "checked", "class.mat-button-toggle-disabled": "disabled", "class.mat-button-toggle-disabled-interactive": "disabledInteractive", "class.mat-button-toggle-appearance-standard": 'appearance === "standard"', "attr.aria-label": "null", "attr.aria-labelledby": "null", "attr.id": "id", "attr.name": "null" }, classAttribute: "mat-button-toggle" }, viewQueries: [{ propertyName: "_buttonElement", first: true, predicate: ["button"], descendants: true }], exportAs: ["matButtonToggle"], ngImport: core_exports, template: `<button #button class="mat-button-toggle-button mat-focus-indicator"
        type="button"
        [id]="buttonId"
        [attr.role]="isSingleSelector() ? 'radio' : 'button'"
        [attr.tabindex]="disabled && !disabledInteractive ? -1 : tabIndex"
        [attr.aria-pressed]="!isSingleSelector() ? checked : null"
        [attr.aria-checked]="isSingleSelector() ? checked : null"
        [disabled]="(disabled && !disabledInteractive) || null"
        [attr.name]="_getButtonName()"
        [attr.aria-label]="ariaLabel"
        [attr.aria-labelledby]="ariaLabelledby"
        [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
        (click)="_onButtonClick()">
  @if (buttonToggleGroup && (
    !buttonToggleGroup.multiple && !buttonToggleGroup.hideSingleSelectionIndicator ||
    buttonToggleGroup.multiple && !buttonToggleGroup.hideMultipleSelectionIndicator)
  ) {
    <div class="mat-button-toggle-checkbox-wrapper">
      <mat-pseudo-checkbox
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"/>
    </div>
  }

  <span class="mat-button-toggle-label-content">
    <ng-content></ng-content>
  </span>
</button>

<span class="mat-button-toggle-focus-overlay"></span>
<span class="mat-button-toggle-ripple" matRipple
     [matRippleTrigger]="button"
     [matRippleDisabled]="this.disableRipple || this.disabled">
</span>
`, styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);border-radius:var(--mat-button-toggle-legacy-shape);transform:translateZ(0)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-button-toggle-legacy-text-color);font-family:var(--mat-button-toggle-legacy-label-text-font);font-size:var(--mat-button-toggle-legacy-label-text-size);line-height:var(--mat-button-toggle-legacy-label-text-line-height);font-weight:var(--mat-button-toggle-legacy-label-text-weight);letter-spacing:var(--mat-button-toggle-legacy-label-text-tracking);--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-legacy-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-button-toggle-legacy-selected-state-text-color);background-color:var(--mat-button-toggle-legacy-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-button-toggle-legacy-disabled-state-text-color);background-color:var(--mat-button-toggle-legacy-disabled-state-background-color);--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-button-toggle-legacy-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-button-toggle-background-color, transparent);font-family:var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-button-toggle-legacy-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-button-toggle-legacy-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"], dependencies: [{ kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "component", type: MatPseudoCheckbox, selector: "mat-pseudo-checkbox", inputs: ["state", "disabled", "appearance"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatButtonToggle, decorators: [{
      type: Component,
      args: [{ selector: "mat-button-toggle", encapsulation: ViewEncapsulation.None, exportAs: "matButtonToggle", changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "[class.mat-button-toggle-standalone]": "!buttonToggleGroup",
        "[class.mat-button-toggle-checked]": "checked",
        "[class.mat-button-toggle-disabled]": "disabled",
        "[class.mat-button-toggle-disabled-interactive]": "disabledInteractive",
        "[class.mat-button-toggle-appearance-standard]": 'appearance === "standard"',
        "class": "mat-button-toggle",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.id]": "id",
        "[attr.name]": "null",
        "(focus)": "focus()",
        "role": "presentation"
      }, imports: [MatRipple, MatPseudoCheckbox], template: `<button #button class="mat-button-toggle-button mat-focus-indicator"
        type="button"
        [id]="buttonId"
        [attr.role]="isSingleSelector() ? 'radio' : 'button'"
        [attr.tabindex]="disabled && !disabledInteractive ? -1 : tabIndex"
        [attr.aria-pressed]="!isSingleSelector() ? checked : null"
        [attr.aria-checked]="isSingleSelector() ? checked : null"
        [disabled]="(disabled && !disabledInteractive) || null"
        [attr.name]="_getButtonName()"
        [attr.aria-label]="ariaLabel"
        [attr.aria-labelledby]="ariaLabelledby"
        [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
        (click)="_onButtonClick()">
  @if (buttonToggleGroup && (
    !buttonToggleGroup.multiple && !buttonToggleGroup.hideSingleSelectionIndicator ||
    buttonToggleGroup.multiple && !buttonToggleGroup.hideMultipleSelectionIndicator)
  ) {
    <div class="mat-button-toggle-checkbox-wrapper">
      <mat-pseudo-checkbox
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"/>
    </div>
  }

  <span class="mat-button-toggle-label-content">
    <ng-content></ng-content>
  </span>
</button>

<span class="mat-button-toggle-focus-overlay"></span>
<span class="mat-button-toggle-ripple" matRipple
     [matRippleTrigger]="button"
     [matRippleDisabled]="this.disableRipple || this.disabled">
</span>
`, styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);border-radius:var(--mat-button-toggle-legacy-shape);transform:translateZ(0)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-button-toggle-legacy-text-color);font-family:var(--mat-button-toggle-legacy-label-text-font);font-size:var(--mat-button-toggle-legacy-label-text-size);line-height:var(--mat-button-toggle-legacy-label-text-line-height);font-weight:var(--mat-button-toggle-legacy-label-text-weight);letter-spacing:var(--mat-button-toggle-legacy-label-text-tracking);--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-legacy-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-button-toggle-legacy-selected-state-text-color);background-color:var(--mat-button-toggle-legacy-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-button-toggle-legacy-disabled-state-text-color);background-color:var(--mat-button-toggle-legacy-disabled-state-background-color);--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-button-toggle-legacy-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-button-toggle-background-color, transparent);font-family:var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-button-toggle-legacy-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-button-toggle-legacy-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"] }]
    }], ctorParameters: () => [], propDecorators: { ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], _buttonElement: [{
      type: ViewChild,
      args: ["button"]
    }], id: [{
      type: Input
    }], name: [{
      type: Input
    }], value: [{
      type: Input
    }], tabIndex: [{
      type: Input
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], appearance: [{
      type: Input
    }], checked: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabledInteractive: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], change: [{
      type: Output
    }] } });
    MatButtonToggleModule = class _MatButtonToggleModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatButtonToggleModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatButtonToggleModule, imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle], exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatButtonToggleModule, imports: [MatCommonModule, MatRippleModule, MatButtonToggle, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatButtonToggleModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
        exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
      }]
    }] });
  }
});

export {
  MatButtonToggleModule,
  init_button_toggle
};
//# sourceMappingURL=chunk-SGIZ7I3C.js.map
