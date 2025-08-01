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
} from "./chunk-ML2ODG5X.js";
import {
  FormGroupDirective,
  NgControl,
  NgForm,
  Validators,
  init_forms
} from "./chunk-F4S5UMDT.js";
import {
  A,
  ActiveDescendantKeyManager,
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  CdkScrollableModule,
  DOWN_ARROW,
  Directionality,
  ENTER,
  ESCAPE,
  LEFT_ARROW,
  LiveAnnouncer,
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  OverlayModule,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  ViewportRuler,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _ViewRepeaterOperation,
  _VisuallyHiddenLoader,
  _animationsDisabled,
  addAriaReferencedId,
  createRepositionScrollStrategy,
  hasModifierKey,
  init_a11y,
  init_animation_DfMFjxHu,
  init_bidi,
  init_common_module_cKSwHniA,
  init_data_source_D34wiQZj,
  init_index_BFRo2fUq,
  init_keycodes,
  init_overlay,
  init_private,
  init_recycle_view_repeater_strategy_SfuyU210,
  init_ripple_BYgV4oZC,
  init_scrolling,
  init_structural_styles_CObeNzjn,
  removeAriaReferencedId
} from "./chunk-5C27C2Q6.js";
import {
  NgClass,
  init_common
} from "./chunk-4R7PBA5O.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  HostAttributeToken,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Output,
  Renderer2,
  Subject,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  core_exports,
  defer,
  filter,
  init_core,
  init_esm,
  init_operators,
  inject,
  isSignal,
  map,
  merge,
  numberAttribute,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-A4GR5REI.js";
import {
  __esm
} from "./chunk-73RR4HMO.js";

// node_modules/@angular/cdk/fesm2022/unique-selection-dispatcher-Cewa_Eg3.mjs
var UniqueSelectionDispatcher;
var init_unique_selection_dispatcher_Cewa_Eg3 = __esm({
  "node_modules/@angular/cdk/fesm2022/unique-selection-dispatcher-Cewa_Eg3.mjs"() {
    "use strict";
    init_core();
    init_core();
    UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
      _listeners = [];
      /**
       * Notify other items that selection for the given name has been set.
       * @param id ID of the item.
       * @param name Name of the item.
       */
      notify(id, name) {
        for (let listener of this._listeners) {
          listener(id, name);
        }
      }
      /**
       * Listen for future changes to item selection.
       * @return Function used to deregister listener
       */
      listen(listener) {
        this._listeners.push(listener);
        return () => {
          this._listeners = this._listeners.filter((registered) => {
            return listener !== registered;
          });
        };
      }
      ngOnDestroy() {
        this._listeners = [];
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _UniqueSelectionDispatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _UniqueSelectionDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: UniqueSelectionDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/dispose-view-repeater-strategy-Cvpav0PR.mjs
var _DisposeViewRepeaterStrategy;
var init_dispose_view_repeater_strategy_Cvpav0PR = __esm({
  "node_modules/@angular/cdk/fesm2022/dispose-view-repeater-strategy-Cvpav0PR.mjs"() {
    "use strict";
    init_recycle_view_repeater_strategy_SfuyU210();
    _DisposeViewRepeaterStrategy = class {
      applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
        changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
          let view;
          let operation;
          if (record.previousIndex == null) {
            const insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
            view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
            operation = _ViewRepeaterOperation.INSERTED;
          } else if (currentIndex == null) {
            viewContainerRef.remove(adjustedPreviousIndex);
            operation = _ViewRepeaterOperation.REMOVED;
          } else {
            view = viewContainerRef.get(adjustedPreviousIndex);
            viewContainerRef.move(view, currentIndex);
            operation = _ViewRepeaterOperation.MOVED;
          }
          if (itemViewChanged) {
            itemViewChanged({
              context: view?.context,
              operation,
              record
            });
          }
        });
      }
      detach() {
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/selection-model-BCgC8uEN.mjs
function getMultipleValuesInSingleSelectionError() {
  return Error("Cannot pass multiple values into SelectionModel with single-value mode.");
}
var SelectionModel;
var init_selection_model_BCgC8uEN = __esm({
  "node_modules/@angular/cdk/fesm2022/selection-model-BCgC8uEN.mjs"() {
    "use strict";
    init_esm();
    SelectionModel = class {
      _multiple;
      _emitChanges;
      compareWith;
      /** Currently-selected values. */
      _selection = /* @__PURE__ */ new Set();
      /** Keeps track of the deselected options that haven't been emitted by the change event. */
      _deselectedToEmit = [];
      /** Keeps track of the selected options that haven't been emitted by the change event. */
      _selectedToEmit = [];
      /** Cache for the array value of the selected items. */
      _selected;
      /** Selected values. */
      get selected() {
        if (!this._selected) {
          this._selected = Array.from(this._selection.values());
        }
        return this._selected;
      }
      /** Event emitted when the value has changed. */
      changed = new Subject();
      constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        this.compareWith = compareWith;
        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach((value) => this._markSelected(value));
          } else {
            this._markSelected(initiallySelectedValues[0]);
          }
          this._selectedToEmit.length = 0;
        }
      }
      /**
       * Selects a value or an array of values.
       * @param values The values to select
       * @return Whether the selection changed as a result of this call
       */
      select(...values) {
        this._verifyValueAssignment(values);
        values.forEach((value) => this._markSelected(value));
        const changed = this._hasQueuedChanges();
        this._emitChangeEvent();
        return changed;
      }
      /**
       * Deselects a value or an array of values.
       * @param values The values to deselect
       * @return Whether the selection changed as a result of this call
       */
      deselect(...values) {
        this._verifyValueAssignment(values);
        values.forEach((value) => this._unmarkSelected(value));
        const changed = this._hasQueuedChanges();
        this._emitChangeEvent();
        return changed;
      }
      /**
       * Sets the selected values
       * @param values The new selected values
       * @return Whether the selection changed as a result of this call
       */
      setSelection(...values) {
        this._verifyValueAssignment(values);
        const oldValues = this.selected;
        const newSelectedSet = new Set(values.map((value) => this._getConcreteValue(value)));
        values.forEach((value) => this._markSelected(value));
        oldValues.filter((value) => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach((value) => this._unmarkSelected(value));
        const changed = this._hasQueuedChanges();
        this._emitChangeEvent();
        return changed;
      }
      /**
       * Toggles a value between selected and deselected.
       * @param value The value to toggle
       * @return Whether the selection changed as a result of this call
       */
      toggle(value) {
        return this.isSelected(value) ? this.deselect(value) : this.select(value);
      }
      /**
       * Clears all of the selected values.
       * @param flushEvent Whether to flush the changes in an event.
       *   If false, the changes to the selection will be flushed along with the next event.
       * @return Whether the selection changed as a result of this call
       */
      clear(flushEvent = true) {
        this._unmarkAll();
        const changed = this._hasQueuedChanges();
        if (flushEvent) {
          this._emitChangeEvent();
        }
        return changed;
      }
      /**
       * Determines whether a value is selected.
       */
      isSelected(value) {
        return this._selection.has(this._getConcreteValue(value));
      }
      /**
       * Determines whether the model does not have a value.
       */
      isEmpty() {
        return this._selection.size === 0;
      }
      /**
       * Determines whether the model has a value.
       */
      hasValue() {
        return !this.isEmpty();
      }
      /**
       * Sorts the selected values based on a predicate function.
       */
      sort(predicate) {
        if (this._multiple && this.selected) {
          this._selected.sort(predicate);
        }
      }
      /**
       * Gets whether multiple values can be selected.
       */
      isMultipleSelection() {
        return this._multiple;
      }
      /** Emits a change event and clears the records of selected and deselected values. */
      _emitChangeEvent() {
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
          this.changed.next({
            source: this,
            added: this._selectedToEmit,
            removed: this._deselectedToEmit
          });
          this._deselectedToEmit = [];
          this._selectedToEmit = [];
        }
      }
      /** Selects a value. */
      _markSelected(value) {
        value = this._getConcreteValue(value);
        if (!this.isSelected(value)) {
          if (!this._multiple) {
            this._unmarkAll();
          }
          if (!this.isSelected(value)) {
            this._selection.add(value);
          }
          if (this._emitChanges) {
            this._selectedToEmit.push(value);
          }
        }
      }
      /** Deselects a value. */
      _unmarkSelected(value) {
        value = this._getConcreteValue(value);
        if (this.isSelected(value)) {
          this._selection.delete(value);
          if (this._emitChanges) {
            this._deselectedToEmit.push(value);
          }
        }
      }
      /** Clears out the selected values. */
      _unmarkAll() {
        if (!this.isEmpty()) {
          this._selection.forEach((value) => this._unmarkSelected(value));
        }
      }
      /**
       * Verifies the value assignment and throws an error if the specified value array is
       * including multiple values while the selection model is not supporting multiple values.
       */
      _verifyValueAssignment(values) {
        if (values.length > 1 && !this._multiple && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMultipleValuesInSingleSelectionError();
        }
      }
      /** Whether there are queued up change to be emitted. */
      _hasQueuedChanges() {
        return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
      }
      /** Returns a value that is comparable to inputValue by applying compareWith function, returns the same inputValue otherwise. */
      _getConcreteValue(inputValue, selection) {
        if (!this.compareWith) {
          return inputValue;
        } else {
          selection = selection ?? this._selection;
          for (let selectedValue of selection) {
            if (this.compareWith(inputValue, selectedValue)) {
              return selectedValue;
            }
          }
          return inputValue;
        }
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/collections.mjs
var init_collections = __esm({
  "node_modules/@angular/cdk/fesm2022/collections.mjs"() {
    "use strict";
    init_unique_selection_dispatcher_Cewa_Eg3();
    init_recycle_view_repeater_strategy_SfuyU210();
    init_data_source_D34wiQZj();
    init_dispose_view_repeater_strategy_Cvpav0PR();
    init_selection_model_BCgC8uEN();
  }
});

// node_modules/@angular/material/fesm2022/pseudo-checkbox-DDmgx3P4.mjs
var MatPseudoCheckbox;
var init_pseudo_checkbox_DDmgx3P4 = __esm({
  "node_modules/@angular/material/fesm2022/pseudo-checkbox-DDmgx3P4.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_animation_DfMFjxHu();
    MatPseudoCheckbox = class _MatPseudoCheckbox {
      _animationsDisabled = _animationsDisabled();
      /** Display state of the checkbox. */
      state = "unchecked";
      /** Whether the checkbox is disabled. */
      disabled = false;
      /**
       * Appearance of the pseudo checkbox. Default appearance of 'full' renders a checkmark/mixedmark
       * indicator inside a square box. 'minimal' appearance only renders the checkmark/mixedmark.
       */
      appearance = "full";
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPseudoCheckbox, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatPseudoCheckbox, isStandalone: true, selector: "mat-pseudo-checkbox", inputs: { state: "state", disabled: "disabled", appearance: "appearance" }, host: { properties: { "class.mat-pseudo-checkbox-indeterminate": 'state === "indeterminate"', "class.mat-pseudo-checkbox-checked": 'state === "checked"', "class.mat-pseudo-checkbox-disabled": "disabled", "class.mat-pseudo-checkbox-minimal": 'appearance === "minimal"', "class.mat-pseudo-checkbox-full": 'appearance === "full"', "class._mat-animation-noopable": "_animationsDisabled" }, classAttribute: "mat-pseudo-checkbox" }, ngImport: core_exports, template: "", isInline: true, styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatPseudoCheckbox, decorators: [{
      type: Component,
      args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "mat-pseudo-checkbox", template: "", host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": "_animationsDisabled"
      }, styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'] }]
    }], ctorParameters: () => [], propDecorators: { state: [{
      type: Input
    }], disabled: [{
      type: Input
    }], appearance: [{
      type: Input
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/option-BzhYL_xC.mjs
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;
    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }
    return groupCounter;
  }
  return 0;
}
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }
  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }
  return currentScrollPosition;
}
var MAT_OPTION_PARENT_COMPONENT, MAT_OPTGROUP, MatOptgroup, MatOptionSelectionChange, MatOption;
var init_option_BzhYL_xC = __esm({
  "node_modules/@angular/material/fesm2022/option-BzhYL_xC.mjs"() {
    "use strict";
    init_a11y();
    init_keycodes();
    init_core();
    init_core();
    init_esm();
    init_ripple_BYgV4oZC();
    init_pseudo_checkbox_DDmgx3P4();
    init_structural_styles_CObeNzjn();
    init_private();
    MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
    MAT_OPTGROUP = new InjectionToken("MatOptgroup");
    MatOptgroup = class _MatOptgroup {
      /** Label for the option group. */
      label;
      /** whether the option group is disabled. */
      disabled = false;
      /** Unique id for the underlying label. */
      _labelId = inject(_IdGenerator).getId("mat-optgroup-label-");
      /** Whether the group is in inert a11y mode. */
      _inert;
      constructor() {
        const parent = inject(MAT_OPTION_PARENT_COMPONENT, { optional: true });
        this._inert = parent?.inertGroups ?? false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatOptgroup, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatOptgroup, isStandalone: true, selector: "mat-optgroup", inputs: { label: "label", disabled: ["disabled", "disabled", booleanAttribute] }, host: { properties: { "attr.role": '_inert ? null : "group"', "attr.aria-disabled": "_inert ? null : disabled.toString()", "attr.aria-labelledby": "_inert ? null : _labelId" }, classAttribute: "mat-mdc-optgroup" }, providers: [{ provide: MAT_OPTGROUP, useExisting: _MatOptgroup }], exportAs: ["matOptgroup"], ngImport: core_exports, template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n', styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatOptgroup, decorators: [{
      type: Component,
      args: [{ selector: "mat-optgroup", exportAs: "matOptgroup", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "class": "mat-mdc-optgroup",
        "[attr.role]": '_inert ? null : "group"',
        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
        "[attr.aria-labelledby]": "_inert ? null : _labelId"
      }, providers: [{ provide: MAT_OPTGROUP, useExisting: MatOptgroup }], template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n', styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"] }]
    }], ctorParameters: () => [], propDecorators: { label: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MatOptionSelectionChange = class {
      source;
      isUserInput;
      constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
      }
    };
    MatOption = class _MatOption {
      _element = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _parent = inject(MAT_OPTION_PARENT_COMPONENT, { optional: true });
      group = inject(MAT_OPTGROUP, { optional: true });
      _signalDisableRipple = false;
      _selected = false;
      _active = false;
      _mostRecentViewValue = "";
      /** Whether the wrapping component is in multiple selection mode. */
      get multiple() {
        return this._parent && this._parent.multiple;
      }
      /** Whether or not the option is currently selected. */
      get selected() {
        return this._selected;
      }
      /** The form value of the option. */
      value;
      /** The unique ID of the option. */
      id = inject(_IdGenerator).getId("mat-option-");
      /** Whether the option is disabled. */
      get disabled() {
        return this.group && this.group.disabled || this._disabled();
      }
      set disabled(value) {
        this._disabled.set(value);
      }
      _disabled = signal(false);
      /** Whether ripples for the option are disabled. */
      get disableRipple() {
        return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple;
      }
      /** Whether to display checkmark for single-selection. */
      get hideSingleSelectionIndicator() {
        return !!(this._parent && this._parent.hideSingleSelectionIndicator);
      }
      /** Event emitted when the option is selected or deselected. */
      // tslint:disable-next-line:no-output-on-prefix
      onSelectionChange = new EventEmitter();
      /** Element containing the option's text. */
      _text;
      /** Emits when the state of the option changes and any parents have to be notified. */
      _stateChanges = new Subject();
      constructor() {
        const styleLoader = inject(_CdkPrivateStyleLoader);
        styleLoader.load(_StructuralStylesLoader);
        styleLoader.load(_VisuallyHiddenLoader);
        this._signalDisableRipple = !!this._parent && isSignal(this._parent.disableRipple);
      }
      /**
       * Whether or not the option is currently active and ready to be selected.
       * An active option displays styles as if it is focused, but the
       * focus is actually retained somewhere else. This comes in handy
       * for components like autocomplete where focus must remain on the input.
       */
      get active() {
        return this._active;
      }
      /**
       * The displayed value of the option. It is necessary to show the selected option in the
       * select's trigger.
       */
      get viewValue() {
        return (this._text?.nativeElement.textContent || "").trim();
      }
      /** Selects the option. */
      select(emitEvent = true) {
        if (!this._selected) {
          this._selected = true;
          this._changeDetectorRef.markForCheck();
          if (emitEvent) {
            this._emitSelectionChangeEvent();
          }
        }
      }
      /** Deselects the option. */
      deselect(emitEvent = true) {
        if (this._selected) {
          this._selected = false;
          this._changeDetectorRef.markForCheck();
          if (emitEvent) {
            this._emitSelectionChangeEvent();
          }
        }
      }
      /** Sets focus onto this option. */
      focus(_origin, options) {
        const element = this._getHostElement();
        if (typeof element.focus === "function") {
          element.focus(options);
        }
      }
      /**
       * This method sets display styles on the option to make it appear
       * active. This is used by the ActiveDescendantKeyManager so key
       * events will display the proper options as active on arrow key events.
       */
      setActiveStyles() {
        if (!this._active) {
          this._active = true;
          this._changeDetectorRef.markForCheck();
        }
      }
      /**
       * This method removes display styles on the option that made it appear
       * active. This is used by the ActiveDescendantKeyManager so key
       * events will display the proper options as active on arrow key events.
       */
      setInactiveStyles() {
        if (this._active) {
          this._active = false;
          this._changeDetectorRef.markForCheck();
        }
      }
      /** Gets the label to be used when determining whether the option should be focused. */
      getLabel() {
        return this.viewValue;
      }
      /** Ensures the option is selected when activated from the keyboard. */
      _handleKeydown(event) {
        if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
          this._selectViaInteraction();
          event.preventDefault();
        }
      }
      /**
       * `Selects the option while indicating the selection came from the user. Used to
       * determine if the select's view -> model callback should be invoked.`
       */
      _selectViaInteraction() {
        if (!this.disabled) {
          this._selected = this.multiple ? !this._selected : true;
          this._changeDetectorRef.markForCheck();
          this._emitSelectionChangeEvent(true);
        }
      }
      /** Returns the correct tabindex for the option depending on disabled state. */
      // This method is only used by `MatLegacyOption`. Keeping it here to avoid breaking the types.
      // That's because `MatLegacyOption` use `MatOption` type in a few places such as
      // `MatOptionSelectionChange`. It is safe to delete this when `MatLegacyOption` is deleted.
      _getTabIndex() {
        return this.disabled ? "-1" : "0";
      }
      /** Gets the host DOM element. */
      _getHostElement() {
        return this._element.nativeElement;
      }
      ngAfterViewChecked() {
        if (this._selected) {
          const viewValue = this.viewValue;
          if (viewValue !== this._mostRecentViewValue) {
            if (this._mostRecentViewValue) {
              this._stateChanges.next();
            }
            this._mostRecentViewValue = viewValue;
          }
        }
      }
      ngOnDestroy() {
        this._stateChanges.complete();
      }
      /** Emits the selection change event. */
      _emitSelectionChangeEvent(isUserInput = false) {
        this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatOption, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatOption, isStandalone: true, selector: "mat-option", inputs: { value: "value", id: "id", disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { onSelectionChange: "onSelectionChange" }, host: { attributes: { "role": "option" }, listeners: { "click": "_selectViaInteraction()", "keydown": "_handleKeydown($event)" }, properties: { "class.mdc-list-item--selected": "selected", "class.mat-mdc-option-multiple": "multiple", "class.mat-mdc-option-active": "active", "class.mdc-list-item--disabled": "disabled", "id": "id", "attr.aria-selected": "selected", "attr.aria-disabled": "disabled.toString()" }, classAttribute: "mat-mdc-option mdc-list-item" }, viewQueries: [{ propertyName: "_text", first: true, predicate: ["text"], descendants: true, static: true }], exportAs: ["matOption"], ngImport: core_exports, template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`, styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}\n'], dependencies: [{ kind: "component", type: MatPseudoCheckbox, selector: "mat-pseudo-checkbox", inputs: ["state", "disabled", "appearance"] }, { kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatOption, decorators: [{
      type: Component,
      args: [{ selector: "mat-option", exportAs: "matOption", host: {
        "role": "option",
        "[class.mdc-list-item--selected]": "selected",
        "[class.mat-mdc-option-multiple]": "multiple",
        "[class.mat-mdc-option-active]": "active",
        "[class.mdc-list-item--disabled]": "disabled",
        "[id]": "id",
        // Set aria-selected to false for non-selected items and true for selected items. Conform to
        // [WAI ARIA Listbox authoring practices guide](
        //  https://www.w3.org/WAI/ARIA/apg/patterns/listbox/), "If any options are selected, each
        // selected option has either aria-selected or aria-checked  set to true. All options that are
        // selectable but not selected have either aria-selected or aria-checked set to false." Align
        // aria-selected implementation of Chips and List components.
        //
        // Set `aria-selected="false"` on not-selected listbox options to fix VoiceOver announcing
        // every option as "selected" (#21491).
        "[attr.aria-selected]": "selected",
        "[attr.aria-disabled]": "disabled.toString()",
        "(click)": "_selectViaInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "class": "mat-mdc-option mdc-list-item"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [MatPseudoCheckbox, MatRipple], template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`, styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}\n'] }]
    }], ctorParameters: () => [], propDecorators: { value: [{
      type: Input
    }], id: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], onSelectionChange: [{
      type: Output
    }], _text: [{
      type: ViewChild,
      args: ["text", { static: true }]
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/pseudo-checkbox-module-4F8Up4PL.mjs
var MatPseudoCheckboxModule;
var init_pseudo_checkbox_module_4F8Up4PL = __esm({
  "node_modules/@angular/material/fesm2022/pseudo-checkbox-module-4F8Up4PL.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_pseudo_checkbox_DDmgx3P4();
    init_common_module_cKSwHniA();
    MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPseudoCheckboxModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPseudoCheckboxModule, imports: [MatCommonModule, MatPseudoCheckbox], exports: [MatPseudoCheckbox] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPseudoCheckboxModule, imports: [MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatPseudoCheckboxModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatPseudoCheckbox],
        exports: [MatPseudoCheckbox]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/index-DwiL-HGk.mjs
var MatOptionModule;
var init_index_DwiL_HGk = __esm({
  "node_modules/@angular/material/fesm2022/index-DwiL-HGk.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_index_BFRo2fUq();
    init_common_module_cKSwHniA();
    init_option_BzhYL_xC();
    init_pseudo_checkbox_module_4F8Up4PL();
    MatOptionModule = class _MatOptionModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatOptionModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatOptionModule, imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup], exports: [MatOption, MatOptgroup] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatOptionModule, imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatOptionModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
        exports: [MatOption, MatOptgroup]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/module-BDiw_nWS.mjs
function getMatSelectDynamicMultipleError() {
  return Error("Cannot change `multiple` mode of select after initialization.");
}
function getMatSelectNonArrayValueError() {
  return Error("Value must be an array in multiple-selection mode.");
}
function getMatSelectNonFunctionValueError() {
  return Error("`compareWith` must be a function.");
}
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_TRIGGER, MatSelectChange, MatSelect, MatSelectTrigger, MatSelectModule;
var init_module_BDiw_nWS = __esm({
  "node_modules/@angular/material/fesm2022/module-BDiw_nWS.mjs"() {
    "use strict";
    init_overlay();
    init_core();
    init_core();
    init_scrolling();
    init_a11y();
    init_bidi();
    init_collections();
    init_keycodes();
    init_forms();
    init_esm();
    init_operators();
    init_common();
    init_form_field_C9DZXojn();
    init_animation_DfMFjxHu();
    init_option_BzhYL_xC();
    init_error_options_DCNQlTOA();
    init_error_state_Dtb1IHM();
    init_index_DwiL_HGk();
    init_common_module_cKSwHniA();
    init_module_DzZHEh7B();
    MAT_SELECT_SCROLL_STRATEGY = new InjectionToken("mat-select-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector);
      }
    });
    MAT_SELECT_CONFIG = new InjectionToken("MAT_SELECT_CONFIG");
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
      provide: MAT_SELECT_SCROLL_STRATEGY,
      deps: [],
      useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    MAT_SELECT_TRIGGER = new InjectionToken("MatSelectTrigger");
    MatSelectChange = class {
      source;
      value;
      constructor(source, value) {
        this.source = source;
        this.value = value;
      }
    };
    MatSelect = class _MatSelect {
      _viewportRuler = inject(ViewportRuler);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _elementRef = inject(ElementRef);
      _dir = inject(Directionality, { optional: true });
      _idGenerator = inject(_IdGenerator);
      _renderer = inject(Renderer2);
      _parentFormField = inject(MAT_FORM_FIELD, { optional: true });
      ngControl = inject(NgControl, { self: true, optional: true });
      _liveAnnouncer = inject(LiveAnnouncer);
      _defaultOptions = inject(MAT_SELECT_CONFIG, { optional: true });
      _animationsDisabled = _animationsDisabled();
      _initialized = new Subject();
      _cleanupDetach;
      /** All of the defined select options. */
      options;
      // TODO(crisbeto): this is only necessary for the non-MDC select, but it's technically a
      // public API so we have to keep it. It should be deprecated and removed eventually.
      /** All of the defined groups of options. */
      optionGroups;
      /** User-supplied override of the trigger element. */
      customTrigger;
      /**
       * This position config ensures that the top "start" corner of the overlay
       * is aligned with with the top "start" of the origin by default (overlapping
       * the trigger completely). If the panel cannot fit below the trigger, it
       * will fall back to a position above the trigger.
       */
      _positions = [
        {
          originX: "start",
          originY: "bottom",
          overlayX: "start",
          overlayY: "top"
        },
        {
          originX: "end",
          originY: "bottom",
          overlayX: "end",
          overlayY: "top"
        },
        {
          originX: "start",
          originY: "top",
          overlayX: "start",
          overlayY: "bottom",
          panelClass: "mat-mdc-select-panel-above"
        },
        {
          originX: "end",
          originY: "top",
          overlayX: "end",
          overlayY: "bottom",
          panelClass: "mat-mdc-select-panel-above"
        }
      ];
      /** Scrolls a particular option into the view. */
      _scrollOptionIntoView(index) {
        const option = this.options.toArray()[index];
        if (option) {
          const panel = this.panel.nativeElement;
          const labelCount = _countGroupLabelsBeforeOption(index, this.options, this.optionGroups);
          const element = option._getHostElement();
          if (index === 0 && labelCount === 1) {
            panel.scrollTop = 0;
          } else {
            panel.scrollTop = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, panel.scrollTop, panel.offsetHeight);
          }
        }
      }
      /** Called when the panel has been opened and the overlay has settled on its final position. */
      _positioningSettled() {
        this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
      }
      /** Creates a change event object that should be emitted by the select. */
      _getChangeEvent(value) {
        return new MatSelectChange(this, value);
      }
      /** Factory function used to create a scroll strategy for this select. */
      _scrollStrategyFactory = inject(MAT_SELECT_SCROLL_STRATEGY);
      /** Whether or not the overlay panel is open. */
      _panelOpen = false;
      /** Comparison function to specify which option is displayed. Defaults to object equality. */
      _compareWith = (o1, o2) => o1 === o2;
      /** Unique id for this input. */
      _uid = this._idGenerator.getId("mat-select-");
      /** Current `aria-labelledby` value for the select trigger. */
      _triggerAriaLabelledBy = null;
      /**
       * Keeps track of the previous form control assigned to the select.
       * Used to detect if it has changed.
       */
      _previousControl;
      /** Emits whenever the component is destroyed. */
      _destroy = new Subject();
      /** Tracks the error state of the select. */
      _errorStateTracker;
      /**
       * Emits whenever the component state changes and should cause the parent
       * form-field to update. Implemented as part of `MatFormFieldControl`.
       * @docs-private
       */
      stateChanges = new Subject();
      /**
       * Disable the automatic labeling to avoid issues like #27241.
       * @docs-private
       */
      disableAutomaticLabeling = true;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      userAriaDescribedBy;
      /** Deals with the selection logic. */
      _selectionModel;
      /** Manages keyboard events for options in the panel. */
      _keyManager;
      /** Ideal origin for the overlay panel. */
      _preferredOverlayOrigin;
      /** Width of the overlay panel. */
      _overlayWidth;
      /** `View -> model callback called when value changes` */
      _onChange = () => {
      };
      /** `View -> model callback called when select has been touched` */
      _onTouched = () => {
      };
      /** ID for the DOM node containing the select's value. */
      _valueId = this._idGenerator.getId("mat-select-value-");
      /** Strategy that will be used to handle scrolling while the select panel is open. */
      _scrollStrategy;
      _overlayPanelClass = this._defaultOptions?.overlayPanelClass || "";
      /** Whether the select is focused. */
      get focused() {
        return this._focused || this._panelOpen;
      }
      _focused = false;
      /** A name for this control that can be used by `mat-form-field`. */
      controlType = "mat-select";
      /** Trigger that opens the select. */
      trigger;
      /** Panel containing the select options. */
      panel;
      /** Overlay pane containing the options. */
      _overlayDir;
      /** Classes to be passed to the select panel. Supports the same syntax as `ngClass`. */
      panelClass;
      /** Whether the select is disabled. */
      disabled = false;
      /** Whether ripples in the select are disabled. */
      get disableRipple() {
        return this._disableRipple();
      }
      set disableRipple(value) {
        this._disableRipple.set(value);
      }
      _disableRipple = signal(false);
      /** Tab index of the select. */
      tabIndex = 0;
      /** Whether checkmark indicator for single-selection options is hidden. */
      get hideSingleSelectionIndicator() {
        return this._hideSingleSelectionIndicator;
      }
      set hideSingleSelectionIndicator(value) {
        this._hideSingleSelectionIndicator = value;
        this._syncParentProperties();
      }
      _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
      /** Placeholder to be shown if no value has been selected. */
      get placeholder() {
        return this._placeholder;
      }
      set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
      }
      _placeholder;
      /** Whether the component is required. */
      get required() {
        return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
      }
      set required(value) {
        this._required = value;
        this.stateChanges.next();
      }
      _required;
      /** Whether the user should be allowed to select multiple options. */
      get multiple() {
        return this._multiple;
      }
      set multiple(value) {
        if (this._selectionModel && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatSelectDynamicMultipleError();
        }
        this._multiple = value;
      }
      _multiple = false;
      /** Whether to center the active option over the trigger. */
      disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? false;
      /**
       * Function to compare the option values with the selected values. The first argument
       * is a value from an option. The second is a value from the selection. A boolean
       * should be returned.
       */
      get compareWith() {
        return this._compareWith;
      }
      set compareWith(fn) {
        if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatSelectNonFunctionValueError();
        }
        this._compareWith = fn;
        if (this._selectionModel) {
          this._initializeSelection();
        }
      }
      /** Value of the select control. */
      get value() {
        return this._value;
      }
      set value(newValue) {
        const hasAssigned = this._assignValue(newValue);
        if (hasAssigned) {
          this._onChange(newValue);
        }
      }
      _value;
      /** Aria label of the select. */
      ariaLabel = "";
      /** Input that can be used to specify the `aria-labelledby` attribute. */
      ariaLabelledby;
      /** Object used to control when error messages are shown. */
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(value) {
        this._errorStateTracker.matcher = value;
      }
      /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */
      typeaheadDebounceInterval;
      /**
       * Function used to sort the values in a select in multiple mode.
       * Follows the same logic as `Array.prototype.sort`.
       */
      sortComparator;
      /** Unique id of the element. */
      get id() {
        return this._id;
      }
      set id(value) {
        this._id = value || this._uid;
        this.stateChanges.next();
      }
      _id;
      /** Whether the select is in an error state. */
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(value) {
        this._errorStateTracker.errorState = value;
      }
      /**
       * Width of the panel. If set to `auto`, the panel will match the trigger width.
       * If set to null or an empty string, the panel will grow to match the longest option's text.
       */
      panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth !== "undefined" ? this._defaultOptions.panelWidth : "auto";
      /**
       * By default selecting an option with a `null` or `undefined` value will reset the select's
       * value. Enable this option if the reset behavior doesn't match your requirements and instead
       * the nullable options should become selected. The value of this input can be controlled app-wide
       * using the `MAT_SELECT_CONFIG` injection token.
       */
      canSelectNullableOptions = this._defaultOptions?.canSelectNullableOptions ?? false;
      /** Combined stream of all of the child options' change events. */
      optionSelectionChanges = defer(() => {
        const options = this.options;
        if (options) {
          return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
        }
        return this._initialized.pipe(switchMap(() => this.optionSelectionChanges));
      });
      /** Event emitted when the select panel has been toggled. */
      openedChange = new EventEmitter();
      /** Event emitted when the select has been opened. */
      _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
      }));
      /** Event emitted when the select has been closed. */
      _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
      }));
      /** Event emitted when the selected value has been changed by the user. */
      selectionChange = new EventEmitter();
      /**
       * Event that emits whenever the raw value of the select changes. This is here primarily
       * to facilitate the two-way binding for the `value` input.
       * @docs-private
       */
      valueChange = new EventEmitter();
      constructor() {
        const defaultErrorStateMatcher = inject(ErrorStateMatcher);
        const parentForm = inject(NgForm, { optional: true });
        const parentFormGroup = inject(FormGroupDirective, { optional: true });
        const tabIndex = inject(new HostAttributeToken("tabindex"), { optional: true });
        if (this.ngControl) {
          this.ngControl.valueAccessor = this;
        }
        if (this._defaultOptions?.typeaheadDebounceInterval != null) {
          this.typeaheadDebounceInterval = this._defaultOptions.typeaheadDebounceInterval;
        }
        this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
        this._scrollStrategy = this._scrollStrategyFactory();
        this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
        this.id = this.id;
      }
      ngOnInit() {
        this._selectionModel = new SelectionModel(this.multiple);
        this.stateChanges.next();
        this._viewportRuler.change().pipe(takeUntil(this._destroy)).subscribe(() => {
          if (this.panelOpen) {
            this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
            this._changeDetectorRef.detectChanges();
          }
        });
      }
      ngAfterContentInit() {
        this._initialized.next();
        this._initialized.complete();
        this._initKeyManager();
        this._selectionModel.changed.pipe(takeUntil(this._destroy)).subscribe((event) => {
          event.added.forEach((option) => option.select());
          event.removed.forEach((option) => option.deselect());
        });
        this.options.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
          this._resetOptions();
          this._initializeSelection();
        });
      }
      ngDoCheck() {
        const newAriaLabelledby = this._getTriggerAriaLabelledby();
        const ngControl = this.ngControl;
        if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
          const element = this._elementRef.nativeElement;
          this._triggerAriaLabelledBy = newAriaLabelledby;
          if (newAriaLabelledby) {
            element.setAttribute("aria-labelledby", newAriaLabelledby);
          } else {
            element.removeAttribute("aria-labelledby");
          }
        }
        if (ngControl) {
          if (this._previousControl !== ngControl.control) {
            if (this._previousControl !== void 0 && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
              this.disabled = ngControl.disabled;
            }
            this._previousControl = ngControl.control;
          }
          this.updateErrorState();
        }
      }
      ngOnChanges(changes) {
        if (changes["disabled"] || changes["userAriaDescribedBy"]) {
          this.stateChanges.next();
        }
        if (changes["typeaheadDebounceInterval"] && this._keyManager) {
          this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
        }
      }
      ngOnDestroy() {
        this._cleanupDetach?.();
        this._keyManager?.destroy();
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
        this._clearFromModal();
      }
      /** Toggles the overlay panel open or closed. */
      toggle() {
        this.panelOpen ? this.close() : this.open();
      }
      /** Opens the overlay panel. */
      open() {
        if (!this._canOpen()) {
          return;
        }
        if (this._parentFormField) {
          this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin();
        }
        this._cleanupDetach?.();
        this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
        this._applyModalPanelOwnership();
        this._panelOpen = true;
        this._overlayDir.positionChange.pipe(take(1)).subscribe(() => {
          this._changeDetectorRef.detectChanges();
          this._positioningSettled();
        });
        this._overlayDir.attachOverlay();
        this._keyManager.withHorizontalOrientation(null);
        this._highlightCorrectOption();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
        Promise.resolve().then(() => this.openedChange.emit(true));
      }
      /**
       * Track which modal we have modified the `aria-owns` attribute of. When the combobox trigger is
       * inside an aria-modal, we apply aria-owns to the parent modal with the `id` of the options
       * panel. Track the modal we have changed so we can undo the changes on destroy.
       */
      _trackedModal = null;
      /**
       * If the autocomplete trigger is inside of an `aria-modal` element, connect
       * that modal to the options panel with `aria-owns`.
       *
       * For some browser + screen reader combinations, when navigation is inside
       * of an `aria-modal` element, the screen reader treats everything outside
       * of that modal as hidden or invisible.
       *
       * This causes a problem when the combobox trigger is _inside_ of a modal, because the
       * options panel is rendered _outside_ of that modal, preventing screen reader navigation
       * from reaching the panel.
       *
       * We can work around this issue by applying `aria-owns` to the modal with the `id` of
       * the options panel. This effectively communicates to assistive technology that the
       * options panel is part of the same interaction as the modal.
       *
       * At time of this writing, this issue is present in VoiceOver.
       * See https://github.com/angular/components/issues/20694
       */
      _applyModalPanelOwnership() {
        const modal = this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');
        if (!modal) {
          return;
        }
        const panelId = `${this.id}-panel`;
        if (this._trackedModal) {
          removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
        }
        addAriaReferencedId(modal, "aria-owns", panelId);
        this._trackedModal = modal;
      }
      /** Clears the reference to the listbox overlay element from the modal it was added to. */
      _clearFromModal() {
        if (!this._trackedModal) {
          return;
        }
        const panelId = `${this.id}-panel`;
        removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
        this._trackedModal = null;
      }
      /** Closes the overlay panel and focuses the host element. */
      close() {
        if (this._panelOpen) {
          this._panelOpen = false;
          this._exitAndDetach();
          this._keyManager.withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr");
          this._changeDetectorRef.markForCheck();
          this._onTouched();
          this.stateChanges.next();
          Promise.resolve().then(() => this.openedChange.emit(false));
        }
      }
      /** Triggers the exit animation and detaches the overlay at the end. */
      _exitAndDetach() {
        if (this._animationsDisabled || !this.panel) {
          this._detachOverlay();
          return;
        }
        this._cleanupDetach?.();
        this._cleanupDetach = () => {
          cleanupEvent();
          clearTimeout(exitFallbackTimer);
          this._cleanupDetach = void 0;
        };
        const panel = this.panel.nativeElement;
        const cleanupEvent = this._renderer.listen(panel, "animationend", (event) => {
          if (event.animationName === "_mat-select-exit") {
            this._cleanupDetach?.();
            this._detachOverlay();
          }
        });
        const exitFallbackTimer = setTimeout(() => {
          this._cleanupDetach?.();
          this._detachOverlay();
        }, 200);
        panel.classList.add("mat-select-panel-exit");
      }
      /** Detaches the current overlay directive. */
      _detachOverlay() {
        this._overlayDir.detachOverlay();
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Sets the select's value. Part of the ControlValueAccessor interface
       * required to integrate with Angular's core forms API.
       *
       * @param value New value to be written to the model.
       */
      writeValue(value) {
        this._assignValue(value);
      }
      /**
       * Saves a callback function to be invoked when the select's value
       * changes from user input. Part of the ControlValueAccessor interface
       * required to integrate with Angular's core forms API.
       *
       * @param fn Callback to be triggered when the value changes.
       */
      registerOnChange(fn) {
        this._onChange = fn;
      }
      /**
       * Saves a callback function to be invoked when the select is blurred
       * by the user. Part of the ControlValueAccessor interface required
       * to integrate with Angular's core forms API.
       *
       * @param fn Callback to be triggered when the component has been touched.
       */
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      /**
       * Disables the select. Part of the ControlValueAccessor interface required
       * to integrate with Angular's core forms API.
       *
       * @param isDisabled Sets whether the component is disabled.
       */
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
      }
      /** Whether or not the overlay panel is open. */
      get panelOpen() {
        return this._panelOpen;
      }
      /** The currently selected option. */
      get selected() {
        return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
      }
      /** The value displayed in the trigger. */
      get triggerValue() {
        if (this.empty) {
          return "";
        }
        if (this._multiple) {
          const selectedOptions = this._selectionModel.selected.map((option) => option.viewValue);
          if (this._isRtl()) {
            selectedOptions.reverse();
          }
          return selectedOptions.join(", ");
        }
        return this._selectionModel.selected[0].viewValue;
      }
      /** Refreshes the error state of the select. */
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      /** Whether the element is in RTL mode. */
      _isRtl() {
        return this._dir ? this._dir.value === "rtl" : false;
      }
      /** Handles all keydown events on the select. */
      _handleKeydown(event) {
        if (!this.disabled) {
          this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
        }
      }
      /** Handles keyboard events while the select is closed. */
      _handleClosedKeydown(event) {
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW;
        const isOpenKey = keyCode === ENTER || keyCode === SPACE;
        const manager = this._keyManager;
        if (!manager.isTyping() && isOpenKey && !hasModifierKey(event) || (this.multiple || event.altKey) && isArrowKey) {
          event.preventDefault();
          this.open();
        } else if (!this.multiple) {
          const previouslySelectedOption = this.selected;
          manager.onKeydown(event);
          const selectedOption = this.selected;
          if (selectedOption && previouslySelectedOption !== selectedOption) {
            this._liveAnnouncer.announce(selectedOption.viewValue, 1e4);
          }
        }
      }
      /** Handles keyboard events when the selected is open. */
      _handleOpenKeydown(event) {
        const manager = this._keyManager;
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW;
        const isTyping = manager.isTyping();
        if (isArrowKey && event.altKey) {
          event.preventDefault();
          this.close();
        } else if (!isTyping && (keyCode === ENTER || keyCode === SPACE) && manager.activeItem && !hasModifierKey(event)) {
          event.preventDefault();
          manager.activeItem._selectViaInteraction();
        } else if (!isTyping && this._multiple && keyCode === A && event.ctrlKey) {
          event.preventDefault();
          const hasDeselectedOptions = this.options.some((opt) => !opt.disabled && !opt.selected);
          this.options.forEach((option) => {
            if (!option.disabled) {
              hasDeselectedOptions ? option.select() : option.deselect();
            }
          });
        } else {
          const previouslyFocusedIndex = manager.activeItemIndex;
          manager.onKeydown(event);
          if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
            manager.activeItem._selectViaInteraction();
          }
        }
      }
      /** Handles keyboard events coming from the overlay. */
      _handleOverlayKeydown(event) {
        if (event.keyCode === ESCAPE && !hasModifierKey(event)) {
          event.preventDefault();
          this.close();
        }
      }
      _onFocus() {
        if (!this.disabled) {
          this._focused = true;
          this.stateChanges.next();
        }
      }
      /**
       * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
       * "blur" to the panel when it opens, causing a false positive.
       */
      _onBlur() {
        this._focused = false;
        this._keyManager?.cancelTypeahead();
        if (!this.disabled && !this.panelOpen) {
          this._onTouched();
          this._changeDetectorRef.markForCheck();
          this.stateChanges.next();
        }
      }
      /** Returns the theme to be used on the panel. */
      _getPanelTheme() {
        return this._parentFormField ? `mat-${this._parentFormField.color}` : "";
      }
      /** Whether the select has a value. */
      get empty() {
        return !this._selectionModel || this._selectionModel.isEmpty();
      }
      _initializeSelection() {
        Promise.resolve().then(() => {
          if (this.ngControl) {
            this._value = this.ngControl.value;
          }
          this._setSelectionByValue(this._value);
          this.stateChanges.next();
        });
      }
      /**
       * Sets the selected option based on a value. If no option can be
       * found with the designated value, the select trigger is cleared.
       */
      _setSelectionByValue(value) {
        this.options.forEach((option) => option.setInactiveStyles());
        this._selectionModel.clear();
        if (this.multiple && value) {
          if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getMatSelectNonArrayValueError();
          }
          value.forEach((currentValue) => this._selectOptionByValue(currentValue));
          this._sortValues();
        } else {
          const correspondingOption = this._selectOptionByValue(value);
          if (correspondingOption) {
            this._keyManager.updateActiveItem(correspondingOption);
          } else if (!this.panelOpen) {
            this._keyManager.updateActiveItem(-1);
          }
        }
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Finds and selects and option based on its value.
       * @returns Option that has the corresponding value.
       */
      _selectOptionByValue(value) {
        const correspondingOption = this.options.find((option) => {
          if (this._selectionModel.isSelected(option)) {
            return false;
          }
          try {
            return (option.value != null || this.canSelectNullableOptions) && this._compareWith(option.value, value);
          } catch (error) {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              console.warn(error);
            }
            return false;
          }
        });
        if (correspondingOption) {
          this._selectionModel.select(correspondingOption);
        }
        return correspondingOption;
      }
      /** Assigns a specific value to the select. Returns whether the value has changed. */
      _assignValue(newValue) {
        if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
          if (this.options) {
            this._setSelectionByValue(newValue);
          }
          this._value = newValue;
          return true;
        }
        return false;
      }
      // `skipPredicate` determines if key manager should avoid putting a given option in the tab
      // order. Allow disabled list items to receive focus via keyboard to align with WAI ARIA
      // recommendation.
      //
      // Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
      // makes a few exceptions for compound widgets.
      //
      // From [Developing a Keyboard Interface](
      // https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
      //   "For the following composite widget elements, keep them focusable when disabled: Options in a
      //   Listbox..."
      //
      // The user can focus disabled options using the keyboard, but the user cannot click disabled
      // options.
      _skipPredicate = (option) => {
        if (this.panelOpen) {
          return false;
        }
        return option.disabled;
      };
      /** Gets how wide the overlay panel should be. */
      _getOverlayWidth(preferredOrigin) {
        if (this.panelWidth === "auto") {
          const refToMeasure = preferredOrigin instanceof CdkOverlayOrigin ? preferredOrigin.elementRef : preferredOrigin || this._elementRef;
          return refToMeasure.nativeElement.getBoundingClientRect().width;
        }
        return this.panelWidth === null ? "" : this.panelWidth;
      }
      /** Syncs the parent state with the individual options. */
      _syncParentProperties() {
        if (this.options) {
          for (const option of this.options) {
            option._changeDetectorRef.markForCheck();
          }
        }
      }
      /** Sets up a key manager to listen to keyboard events on the overlay panel. */
      _initKeyManager() {
        this._keyManager = new ActiveDescendantKeyManager(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate);
        this._keyManager.tabOut.subscribe(() => {
          if (this.panelOpen) {
            if (!this.multiple && this._keyManager.activeItem) {
              this._keyManager.activeItem._selectViaInteraction();
            }
            this.focus();
            this.close();
          }
        });
        this._keyManager.change.subscribe(() => {
          if (this._panelOpen && this.panel) {
            this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
          } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
            this._keyManager.activeItem._selectViaInteraction();
          }
        });
      }
      /** Drops current option subscriptions and IDs and resets from scratch. */
      _resetOptions() {
        const changedOrDestroyed = merge(this.options.changes, this._destroy);
        this.optionSelectionChanges.pipe(takeUntil(changedOrDestroyed)).subscribe((event) => {
          this._onSelect(event.source, event.isUserInput);
          if (event.isUserInput && !this.multiple && this._panelOpen) {
            this.close();
            this.focus();
          }
        });
        merge(...this.options.map((option) => option._stateChanges)).pipe(takeUntil(changedOrDestroyed)).subscribe(() => {
          this._changeDetectorRef.detectChanges();
          this.stateChanges.next();
        });
      }
      /** Invoked when an option is clicked. */
      _onSelect(option, isUserInput) {
        const wasSelected = this._selectionModel.isSelected(option);
        if (!this.canSelectNullableOptions && option.value == null && !this._multiple) {
          option.deselect();
          this._selectionModel.clear();
          if (this.value != null) {
            this._propagateChanges(option.value);
          }
        } else {
          if (wasSelected !== option.selected) {
            option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
          }
          if (isUserInput) {
            this._keyManager.setActiveItem(option);
          }
          if (this.multiple) {
            this._sortValues();
            if (isUserInput) {
              this.focus();
            }
          }
        }
        if (wasSelected !== this._selectionModel.isSelected(option)) {
          this._propagateChanges();
        }
        this.stateChanges.next();
      }
      /** Sorts the selected values in the selected based on their order in the panel. */
      _sortValues() {
        if (this.multiple) {
          const options = this.options.toArray();
          this._selectionModel.sort((a, b) => {
            return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
          });
          this.stateChanges.next();
        }
      }
      /** Emits change event to set the model value. */
      _propagateChanges(fallbackValue) {
        let valueToEmit;
        if (this.multiple) {
          valueToEmit = this.selected.map((option) => option.value);
        } else {
          valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this.selectionChange.emit(this._getChangeEvent(valueToEmit));
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Highlights the selected item. If no option is selected, it will highlight
       * the first *enabled* option.
       */
      _highlightCorrectOption() {
        if (this._keyManager) {
          if (this.empty) {
            let firstEnabledOptionIndex = -1;
            for (let index = 0; index < this.options.length; index++) {
              const option = this.options.get(index);
              if (!option.disabled) {
                firstEnabledOptionIndex = index;
                break;
              }
            }
            this._keyManager.setActiveItem(firstEnabledOptionIndex);
          } else {
            this._keyManager.setActiveItem(this._selectionModel.selected[0]);
          }
        }
      }
      /** Whether the panel is allowed to open. */
      _canOpen() {
        return !this._panelOpen && !this.disabled && this.options?.length > 0 && !!this._overlayDir;
      }
      /** Focuses the select element. */
      focus(options) {
        this._elementRef.nativeElement.focus(options);
      }
      /** Gets the aria-labelledby for the select panel. */
      _getPanelAriaLabelledby() {
        if (this.ariaLabel) {
          return null;
        }
        const labelId = this._parentFormField?.getLabelId() || null;
        const labelExpression = labelId ? labelId + " " : "";
        return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
      }
      /** Determines the `aria-activedescendant` to be set on the host. */
      _getAriaActiveDescendant() {
        if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
          return this._keyManager.activeItem.id;
        }
        return null;
      }
      /** Gets the aria-labelledby of the select component trigger. */
      _getTriggerAriaLabelledby() {
        if (this.ariaLabel) {
          return null;
        }
        let value = this._parentFormField?.getLabelId() || "";
        if (this.ariaLabelledby) {
          value += " " + this.ariaLabelledby;
        }
        if (!value) {
          value = this._valueId;
        }
        return value;
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
        if (ids.length) {
          this._elementRef.nativeElement.setAttribute("aria-describedby", ids.join(" "));
        } else {
          this._elementRef.nativeElement.removeAttribute("aria-describedby");
        }
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      onContainerClick() {
        this.focus();
        this.open();
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get shouldLabelFloat() {
        return this.panelOpen || !this.empty || this.focused && !!this.placeholder;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSelect, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatSelect, isStandalone: true, selector: "mat-select", inputs: { userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], panelClass: "panelClass", disabled: ["disabled", "disabled", booleanAttribute], disableRipple: ["disableRipple", "disableRipple", booleanAttribute], tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)], hideSingleSelectionIndicator: ["hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute], placeholder: "placeholder", required: ["required", "required", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], disableOptionCentering: ["disableOptionCentering", "disableOptionCentering", booleanAttribute], compareWith: "compareWith", value: "value", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], errorStateMatcher: "errorStateMatcher", typeaheadDebounceInterval: ["typeaheadDebounceInterval", "typeaheadDebounceInterval", numberAttribute], sortComparator: "sortComparator", id: "id", panelWidth: "panelWidth", canSelectNullableOptions: ["canSelectNullableOptions", "canSelectNullableOptions", booleanAttribute] }, outputs: { openedChange: "openedChange", _openedStream: "opened", _closedStream: "closed", selectionChange: "selectionChange", valueChange: "valueChange" }, host: { attributes: { "role": "combobox", "aria-haspopup": "listbox" }, listeners: { "keydown": "_handleKeydown($event)", "focus": "_onFocus()", "blur": "_onBlur()" }, properties: { "attr.id": "id", "attr.tabindex": "disabled ? -1 : tabIndex", "attr.aria-controls": 'panelOpen ? id + "-panel" : null', "attr.aria-expanded": "panelOpen", "attr.aria-label": "ariaLabel || null", "attr.aria-required": "required.toString()", "attr.aria-disabled": "disabled.toString()", "attr.aria-invalid": "errorState", "attr.aria-activedescendant": "_getAriaActiveDescendant()", "class.mat-mdc-select-disabled": "disabled", "class.mat-mdc-select-invalid": "errorState", "class.mat-mdc-select-required": "required", "class.mat-mdc-select-empty": "empty", "class.mat-mdc-select-multiple": "multiple" }, classAttribute: "mat-mdc-select" }, providers: [
        { provide: MatFormFieldControl, useExisting: _MatSelect },
        { provide: MAT_OPTION_PARENT_COMPONENT, useExisting: _MatSelect }
      ], queries: [{ propertyName: "customTrigger", first: true, predicate: MAT_SELECT_TRIGGER, descendants: true }, { propertyName: "options", predicate: MatOption, descendants: true }, { propertyName: "optionGroups", predicate: MAT_OPTGROUP, descendants: true }], viewQueries: [{ propertyName: "trigger", first: true, predicate: ["trigger"], descendants: true }, { propertyName: "panel", first: true, predicate: ["panel"], descendants: true }, { propertyName: "_overlayDir", first: true, predicate: CdkConnectedOverlay, descendants: true }], exportAs: ["matSelect"], usesOnChanges: true, ngImport: core_exports, template: `<div cdk-overlay-origin
     class="mat-mdc-select-trigger"
     (click)="open()"
     #fallbackOverlayOrigin="cdkOverlayOrigin"
     #trigger>

  <div class="mat-mdc-select-value" [attr.id]="_valueId">
    @if (empty) {
      <span class="mat-mdc-select-placeholder mat-mdc-select-min-line">{{placeholder}}</span>
    } @else {
      <span class="mat-mdc-select-value-text">
        @if (customTrigger) {
          <ng-content select="mat-select-trigger"></ng-content>
        } @else {
          <span class="mat-mdc-select-min-line">{{triggerValue}}</span>
        }
      </span>
    }
  </div>

  <div class="mat-mdc-select-arrow-wrapper">
    <div class="mat-mdc-select-arrow">
      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->
      <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  </div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayLockPosition
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayDisableClose]="true"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="_preferredOverlayOrigin || fallbackOverlayOrigin"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayWidth]="_overlayWidth"
  [cdkConnectedOverlayFlexibleDimensions]="true"
  (detach)="close()"
  (backdropClick)="close()"
  (overlayKeydown)="_handleOverlayKeydown($event)">
  <div
    #panel
    role="listbox"
    tabindex="-1"
    class="mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open {{ _getPanelTheme() }}"
    [class.mat-select-panel-animations-enabled]="!_animationsDisabled"
    [attr.id]="id + '-panel'"
    [attr.aria-multiselectable]="multiple"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby()"
    [ngClass]="panelClass"
    (keydown)="_handleKeydown($event)">
    <ng-content></ng-content>
  </div>
</ng-template>
`, styles: ['@keyframes _mat-select-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-select-exit{from{opacity:1}to{opacity:0}}.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:relative;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-select-panel-animations-enabled{animation:_mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-select-panel-animations-enabled.mat-select-panel-exit{animation:_mat-select-exit 100ms linear}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}\n'], dependencies: [{ kind: "directive", type: CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { kind: "directive", type: CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSelect, decorators: [{
      type: Component,
      args: [{ selector: "mat-select", exportAs: "matSelect", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "role": "combobox",
        "aria-haspopup": "listbox",
        "class": "mat-mdc-select",
        "[attr.id]": "id",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": 'panelOpen ? id + "-panel" : null',
        "[attr.aria-expanded]": "panelOpen",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.aria-required]": "required.toString()",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[attr.aria-activedescendant]": "_getAriaActiveDescendant()",
        "[class.mat-mdc-select-disabled]": "disabled",
        "[class.mat-mdc-select-invalid]": "errorState",
        "[class.mat-mdc-select-required]": "required",
        "[class.mat-mdc-select-empty]": "empty",
        "[class.mat-mdc-select-multiple]": "multiple",
        "(keydown)": "_handleKeydown($event)",
        "(focus)": "_onFocus()",
        "(blur)": "_onBlur()"
      }, providers: [
        { provide: MatFormFieldControl, useExisting: MatSelect },
        { provide: MAT_OPTION_PARENT_COMPONENT, useExisting: MatSelect }
      ], imports: [CdkOverlayOrigin, CdkConnectedOverlay, NgClass], template: `<div cdk-overlay-origin
     class="mat-mdc-select-trigger"
     (click)="open()"
     #fallbackOverlayOrigin="cdkOverlayOrigin"
     #trigger>

  <div class="mat-mdc-select-value" [attr.id]="_valueId">
    @if (empty) {
      <span class="mat-mdc-select-placeholder mat-mdc-select-min-line">{{placeholder}}</span>
    } @else {
      <span class="mat-mdc-select-value-text">
        @if (customTrigger) {
          <ng-content select="mat-select-trigger"></ng-content>
        } @else {
          <span class="mat-mdc-select-min-line">{{triggerValue}}</span>
        }
      </span>
    }
  </div>

  <div class="mat-mdc-select-arrow-wrapper">
    <div class="mat-mdc-select-arrow">
      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->
      <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  </div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayLockPosition
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayDisableClose]="true"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="_preferredOverlayOrigin || fallbackOverlayOrigin"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayWidth]="_overlayWidth"
  [cdkConnectedOverlayFlexibleDimensions]="true"
  (detach)="close()"
  (backdropClick)="close()"
  (overlayKeydown)="_handleOverlayKeydown($event)">
  <div
    #panel
    role="listbox"
    tabindex="-1"
    class="mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open {{ _getPanelTheme() }}"
    [class.mat-select-panel-animations-enabled]="!_animationsDisabled"
    [attr.id]="id + '-panel'"
    [attr.aria-multiselectable]="multiple"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby()"
    [ngClass]="panelClass"
    (keydown)="_handleKeydown($event)">
    <ng-content></ng-content>
  </div>
</ng-template>
`, styles: ['@keyframes _mat-select-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-select-exit{from{opacity:1}to{opacity:0}}.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:relative;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-select-panel-animations-enabled{animation:_mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-select-panel-animations-enabled.mat-select-panel-exit{animation:_mat-select-exit 100ms linear}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}\n'] }]
    }], ctorParameters: () => [], propDecorators: { options: [{
      type: ContentChildren,
      args: [MatOption, { descendants: true }]
    }], optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, { descendants: true }]
    }], customTrigger: [{
      type: ContentChild,
      args: [MAT_SELECT_TRIGGER]
    }], userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }], trigger: [{
      type: ViewChild,
      args: ["trigger"]
    }], panel: [{
      type: ViewChild,
      args: ["panel"]
    }], _overlayDir: [{
      type: ViewChild,
      args: [CdkConnectedOverlay]
    }], panelClass: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }], hideSingleSelectionIndicator: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], placeholder: [{
      type: Input
    }], required: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], multiple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disableOptionCentering: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], compareWith: [{
      type: Input
    }], value: [{
      type: Input
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], errorStateMatcher: [{
      type: Input
    }], typeaheadDebounceInterval: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], sortComparator: [{
      type: Input
    }], id: [{
      type: Input
    }], panelWidth: [{
      type: Input
    }], canSelectNullableOptions: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], openedChange: [{
      type: Output
    }], _openedStream: [{
      type: Output,
      args: ["opened"]
    }], _closedStream: [{
      type: Output,
      args: ["closed"]
    }], selectionChange: [{
      type: Output
    }], valueChange: [{
      type: Output
    }] } });
    MatSelectTrigger = class _MatSelectTrigger {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSelectTrigger, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatSelectTrigger, isStandalone: true, selector: "mat-select-trigger", providers: [{ provide: MAT_SELECT_TRIGGER, useExisting: _MatSelectTrigger }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSelectTrigger, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-select-trigger",
        providers: [{ provide: MAT_SELECT_TRIGGER, useExisting: MatSelectTrigger }]
      }]
    }] });
    MatSelectModule = class _MatSelectModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSelectModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSelectModule, imports: [OverlayModule, MatOptionModule, MatCommonModule, MatSelect, MatSelectTrigger], exports: [
        CdkScrollableModule,
        MatFormFieldModule,
        MatSelect,
        MatSelectTrigger,
        MatOptionModule,
        MatCommonModule
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSelectModule, providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER], imports: [
        OverlayModule,
        MatOptionModule,
        MatCommonModule,
        CdkScrollableModule,
        MatFormFieldModule,
        MatOptionModule,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSelectModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [OverlayModule, MatOptionModule, MatCommonModule, MatSelect, MatSelectTrigger],
        exports: [
          CdkScrollableModule,
          MatFormFieldModule,
          MatSelect,
          MatSelectTrigger,
          MatOptionModule,
          MatCommonModule
        ],
        providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
      }]
    }] });
  }
});

export {
  _DisposeViewRepeaterStrategy,
  init_dispose_view_repeater_strategy_Cvpav0PR,
  UniqueSelectionDispatcher,
  init_unique_selection_dispatcher_Cewa_Eg3,
  SelectionModel,
  init_collections,
  MatPseudoCheckbox,
  init_pseudo_checkbox_DDmgx3P4,
  MAT_OPTION_PARENT_COMPONENT,
  MAT_OPTGROUP,
  MatOptionSelectionChange,
  MatOption,
  _countGroupLabelsBeforeOption,
  _getOptionScrollPosition,
  init_option_BzhYL_xC,
  MatPseudoCheckboxModule,
  init_pseudo_checkbox_module_4F8Up4PL,
  MatOptionModule,
  init_index_DwiL_HGk,
  MatSelect,
  MatSelectModule,
  init_module_BDiw_nWS
};
//# sourceMappingURL=chunk-HMSNM5K4.js.map
