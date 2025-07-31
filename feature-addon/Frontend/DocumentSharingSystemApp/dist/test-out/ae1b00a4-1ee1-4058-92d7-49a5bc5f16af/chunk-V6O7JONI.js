import {
  A11yModule,
  BasePortalOutlet,
  CdkPortalOutlet,
  CdkScrollable,
  ComponentPortal,
  Directionality,
  ESCAPE,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  MatCommonModule,
  OverlayConfig,
  OverlayContainer,
  OverlayModule,
  OverlayRef,
  Platform,
  PortalModule,
  TemplatePortal,
  _IdGenerator,
  _animationsDisabled,
  _getFocusedElementPierceShadowDom,
  coerceNumberProperty,
  createBlockScrollStrategy,
  createGlobalPositionStrategy,
  createOverlayRef,
  hasModifierKey,
  init_a11y,
  init_a11y_module_DHa4AVFz,
  init_animation_DfMFjxHu,
  init_coercion,
  init_common_module_cKSwHniA,
  init_directionality_CChdj3az,
  init_focus_monitor_DLjkiju1,
  init_id_generator_LuoRZSid,
  init_keycodes,
  init_keycodes_CpHkExLC,
  init_overlay,
  init_overlay_module_Bd2UplUU,
  init_platform_DNDzkVcI,
  init_portal,
  init_scrolling,
  init_shadow_dom_B0oHn41l
} from "./chunk-5TPMZ7JT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Renderer2,
  Subject,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  afterNextRender,
  core_exports,
  defer,
  filter,
  init_core,
  init_esm,
  init_operators,
  inject,
  merge,
  signal,
  startWith,
  take,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-DV5BYKE4.js";
import {
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-3HY6NCXN.js";

// node_modules/@angular/cdk/fesm2022/dialog.mjs
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
function getDirectionality(value) {
  const valueSignal = signal(value);
  const change = new EventEmitter();
  return {
    valueSignal,
    get value() {
      return valueSignal();
    },
    change,
    ngOnDestroy() {
      change.complete();
    }
  };
}
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
var DialogConfig, CdkDialogContainer, DialogRef, DIALOG_SCROLL_STRATEGY, DIALOG_DATA, DEFAULT_DIALOG_CONFIG, Dialog, DialogModule;
var init_dialog = __esm({
  "node_modules/@angular/cdk/fesm2022/dialog.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_portal();
    init_a11y_module_DHa4AVFz();
    init_focus_monitor_DLjkiju1();
    init_platform_DNDzkVcI();
    init_shadow_dom_B0oHn41l();
    init_esm();
    init_keycodes_CpHkExLC();
    init_keycodes();
    init_operators();
    init_overlay_module_Bd2UplUU();
    init_id_generator_LuoRZSid();
    init_directionality_CChdj3az();
    DialogConfig = class {
      /**
       * Where the attached component should live in Angular's *logical* component tree.
       * This affects what is available for injection and the change detection order for the
       * component instantiated inside of the dialog. This does not affect where the dialog
       * content will be rendered.
       */
      viewContainerRef;
      /**
       * Injector used for the instantiation of the component to be attached. If provided,
       * takes precedence over the injector indirectly provided by `ViewContainerRef`.
       */
      injector;
      /** ID for the dialog. If omitted, a unique one will be generated. */
      id;
      /** The ARIA role of the dialog element. */
      role = "dialog";
      /** Optional CSS class or classes applied to the overlay panel. */
      panelClass = "";
      /** Whether the dialog has a backdrop. */
      hasBackdrop = true;
      /** Optional CSS class or classes applied to the overlay backdrop. */
      backdropClass = "";
      /** Whether the dialog closes with the escape key or pointer events outside the panel element. */
      disableClose = false;
      /** Function used to determine whether the dialog is allowed to close. */
      closePredicate;
      /** Width of the dialog. */
      width = "";
      /** Height of the dialog. */
      height = "";
      /** Min-width of the dialog. If a number is provided, assumes pixel units. */
      minWidth;
      /** Min-height of the dialog. If a number is provided, assumes pixel units. */
      minHeight;
      /** Max-width of the dialog. If a number is provided, assumes pixel units. */
      maxWidth;
      /** Max-height of the dialog. If a number is provided, assumes pixel units. */
      maxHeight;
      /** Strategy to use when positioning the dialog. Defaults to centering it on the page. */
      positionStrategy;
      /** Data being injected into the child component. */
      data = null;
      /** Layout direction for the dialog's content. */
      direction;
      /** ID of the element that describes the dialog. */
      ariaDescribedBy = null;
      /** ID of the element that labels the dialog. */
      ariaLabelledBy = null;
      /** Dialog label applied via `aria-label` */
      ariaLabel = null;
      /**
       * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
       * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
       * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
       */
      ariaModal = false;
      /**
       * Where the dialog should focus on open.
       * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
       * AutoFocusTarget instead.
       */
      autoFocus = "first-tabbable";
      /**
       * Whether the dialog should restore focus to the previously-focused element upon closing.
       * Has the following behavior based on the type that is passed in:
       * - `boolean` - when true, will return focus to the element that was focused before the dialog
       *    was opened, otherwise won't restore focus at all.
       * - `string` - focus will be restored to the first element that matches the CSS selector.
       * - `HTMLElement` - focus will be restored to the specific element.
       */
      restoreFocus = true;
      /**
       * Scroll strategy to be used for the dialog. This determines how
       * the dialog responds to scrolling underneath the panel element.
       */
      scrollStrategy;
      /**
       * Whether the dialog should close when the user navigates backwards or forwards through browser
       * history. This does not apply to navigation via anchor element unless using URL-hash based
       * routing (`HashLocationStrategy` in the Angular router).
       */
      closeOnNavigation = true;
      /**
       * Whether the dialog should close when the dialog service is destroyed. This is useful if
       * another service is wrapping the dialog and is managing the destruction instead.
       */
      closeOnDestroy = true;
      /**
       * Whether the dialog should close when the underlying overlay is detached. This is useful if
       * another service is wrapping the dialog and is managing the destruction instead. E.g. an
       * external detachment can happen as a result of a scroll strategy triggering it or when the
       * browser location changes.
       */
      closeOnOverlayDetachments = true;
      /**
       * Whether the built-in overlay animations should be disabled.
       */
      disableAnimations = false;
      /**
       * Providers that will be exposed to the contents of the dialog. Can also
       * be provided as a function in order to generate the providers lazily.
       */
      providers;
      /**
       * Component into which the dialog content will be rendered. Defaults to `CdkDialogContainer`.
       * A configuration object can be passed in to customize the providers that will be exposed
       * to the dialog container.
       */
      container;
      /**
       * Context that will be passed to template-based dialogs.
       * A function can be passed in to resolve the context lazily.
       */
      templateContext;
    };
    CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
      _elementRef = inject(ElementRef);
      _focusTrapFactory = inject(FocusTrapFactory);
      _config;
      _interactivityChecker = inject(InteractivityChecker);
      _ngZone = inject(NgZone);
      _focusMonitor = inject(FocusMonitor);
      _renderer = inject(Renderer2);
      _platform = inject(Platform);
      _document = inject(DOCUMENT, { optional: true });
      /** The portal outlet inside of this container into which the dialog content will be loaded. */
      _portalOutlet;
      /** The class that traps and manages focus within the dialog. */
      _focusTrap = null;
      /** Element that was focused before the dialog was opened. Save this to restore upon close. */
      _elementFocusedBeforeDialogWasOpened = null;
      /**
       * Type of interaction that led to the dialog being closed. This is used to determine
       * whether the focus style will be applied when returning focus to its original location
       * after the dialog is closed.
       */
      _closeInteractionType = null;
      /**
       * Queue of the IDs of the dialog's label element, based on their definition order. The first
       * ID will be used as the `aria-labelledby` value. We use a queue here to handle the case
       * where there are two or more titles in the DOM at a time and the first one is destroyed while
       * the rest are present.
       */
      _ariaLabelledByQueue = [];
      _changeDetectorRef = inject(ChangeDetectorRef);
      _injector = inject(Injector);
      _isDestroyed = false;
      constructor() {
        super();
        this._config = inject(DialogConfig, { optional: true }) || new DialogConfig();
        if (this._config.ariaLabelledBy) {
          this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
        }
      }
      _addAriaLabelledBy(id) {
        this._ariaLabelledByQueue.push(id);
        this._changeDetectorRef.markForCheck();
      }
      _removeAriaLabelledBy(id) {
        const index = this._ariaLabelledByQueue.indexOf(id);
        if (index > -1) {
          this._ariaLabelledByQueue.splice(index, 1);
          this._changeDetectorRef.markForCheck();
        }
      }
      _contentAttached() {
        this._initializeFocusTrap();
        this._captureInitialFocus();
      }
      /**
       * Can be used by child classes to customize the initial focus
       * capturing behavior (e.g. if it's tied to an animation).
       */
      _captureInitialFocus() {
        this._trapFocus();
      }
      ngOnDestroy() {
        this._isDestroyed = true;
        this._restoreFocus();
      }
      /**
       * Attach a ComponentPortal as content to this dialog container.
       * @param portal Portal to be attached as the dialog content.
       */
      attachComponentPortal(portal) {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwDialogContentAlreadyAttachedError();
        }
        const result = this._portalOutlet.attachComponentPortal(portal);
        this._contentAttached();
        return result;
      }
      /**
       * Attach a TemplatePortal as content to this dialog container.
       * @param portal Portal to be attached as the dialog content.
       */
      attachTemplatePortal(portal) {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwDialogContentAlreadyAttachedError();
        }
        const result = this._portalOutlet.attachTemplatePortal(portal);
        this._contentAttached();
        return result;
      }
      /**
       * Attaches a DOM portal to the dialog container.
       * @param portal Portal to be attached.
       * @deprecated To be turned into a method.
       * @breaking-change 10.0.0
       */
      attachDomPortal = (portal) => {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwDialogContentAlreadyAttachedError();
        }
        const result = this._portalOutlet.attachDomPortal(portal);
        this._contentAttached();
        return result;
      };
      // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
      /** Captures focus if it isn't already inside the dialog. */
      _recaptureFocus() {
        if (!this._containsFocus()) {
          this._trapFocus();
        }
      }
      /**
       * Focuses the provided element. If the element is not focusable, it will add a tabIndex
       * attribute to forcefully focus it. The attribute is removed after focus is moved.
       * @param element The element to focus.
       */
      _forceFocus(element, options) {
        if (!this._interactivityChecker.isFocusable(element)) {
          element.tabIndex = -1;
          this._ngZone.runOutsideAngular(() => {
            const callback = () => {
              deregisterBlur();
              deregisterMousedown();
              element.removeAttribute("tabindex");
            };
            const deregisterBlur = this._renderer.listen(element, "blur", callback);
            const deregisterMousedown = this._renderer.listen(element, "mousedown", callback);
          });
        }
        element.focus(options);
      }
      /**
       * Focuses the first element that matches the given selector within the focus trap.
       * @param selector The CSS selector for the element to set focus to.
       */
      _focusByCssSelector(selector, options) {
        let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
        if (elementToFocus) {
          this._forceFocus(elementToFocus, options);
        }
      }
      /**
       * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
       * cannot be moved then focus will go to the dialog container.
       */
      _trapFocus(options) {
        if (this._isDestroyed) {
          return;
        }
        afterNextRender(() => {
          const element = this._elementRef.nativeElement;
          switch (this._config.autoFocus) {
            case false:
            case "dialog":
              if (!this._containsFocus()) {
                element.focus(options);
              }
              break;
            case true:
            case "first-tabbable":
              const focusedSuccessfully = this._focusTrap?.focusInitialElement(options);
              if (!focusedSuccessfully) {
                this._focusDialogContainer(options);
              }
              break;
            case "first-heading":
              this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', options);
              break;
            default:
              this._focusByCssSelector(this._config.autoFocus, options);
              break;
          }
        }, { injector: this._injector });
      }
      /** Restores focus to the element that was focused before the dialog opened. */
      _restoreFocus() {
        const focusConfig = this._config.restoreFocus;
        let focusTargetElement = null;
        if (typeof focusConfig === "string") {
          focusTargetElement = this._document.querySelector(focusConfig);
        } else if (typeof focusConfig === "boolean") {
          focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
        } else if (focusConfig) {
          focusTargetElement = focusConfig;
        }
        if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
          const activeElement = _getFocusedElementPierceShadowDom();
          const element = this._elementRef.nativeElement;
          if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
            if (this._focusMonitor) {
              this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
              this._closeInteractionType = null;
            } else {
              focusTargetElement.focus();
            }
          }
        }
        if (this._focusTrap) {
          this._focusTrap.destroy();
        }
      }
      /** Focuses the dialog container. */
      _focusDialogContainer(options) {
        this._elementRef.nativeElement.focus?.(options);
      }
      /** Returns whether focus is inside the dialog. */
      _containsFocus() {
        const element = this._elementRef.nativeElement;
        const activeElement = _getFocusedElementPierceShadowDom();
        return element === activeElement || element.contains(activeElement);
      }
      /** Sets up the focus trap. */
      _initializeFocusTrap() {
        if (this._platform.isBrowser) {
          this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
          if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkDialogContainer, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _CdkDialogContainer, isStandalone: true, selector: "cdk-dialog-container", host: { attributes: { "tabindex": "-1" }, properties: { "attr.id": "_config.id || null", "attr.role": "_config.role", "attr.aria-modal": "_config.ariaModal", "attr.aria-labelledby": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]", "attr.aria-label": "_config.ariaLabel", "attr.aria-describedby": "_config.ariaDescribedBy || null" }, classAttribute: "cdk-dialog-container" }, viewQueries: [{ propertyName: "_portalOutlet", first: true, predicate: CdkPortalOutlet, descendants: true, static: true }], usesInheritance: true, ngImport: core_exports, template: "<ng-template cdkPortalOutlet />\n", styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"], dependencies: [{ kind: "directive", type: CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkDialogContainer, decorators: [{
      type: Component,
      args: [{ selector: "cdk-dialog-container", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, imports: [CdkPortalOutlet], host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      }, template: "<ng-template cdkPortalOutlet />\n", styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"] }]
    }], ctorParameters: () => [], propDecorators: { _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, { static: true }]
    }] } });
    DialogRef = class {
      overlayRef;
      config;
      /**
       * Instance of component opened into the dialog. Will be
       * null when the dialog is opened using a `TemplateRef`.
       */
      componentInstance;
      /**
       * `ComponentRef` of the component opened into the dialog. Will be
       * null when the dialog is opened using a `TemplateRef`.
       */
      componentRef;
      /** Instance of the container that is rendering out the dialog content. */
      containerInstance;
      /** Whether the user is allowed to close the dialog. */
      disableClose;
      /** Emits when the dialog has been closed. */
      closed = new Subject();
      /** Emits when the backdrop of the dialog is clicked. */
      backdropClick;
      /** Emits when on keyboard events within the dialog. */
      keydownEvents;
      /** Emits on pointer events that happen outside of the dialog. */
      outsidePointerEvents;
      /** Unique ID for the dialog. */
      id;
      /** Subscription to external detachments of the dialog. */
      _detachSubscription;
      constructor(overlayRef, config) {
        this.overlayRef = overlayRef;
        this.config = config;
        this.disableClose = config.disableClose;
        this.backdropClick = overlayRef.backdropClick();
        this.keydownEvents = overlayRef.keydownEvents();
        this.outsidePointerEvents = overlayRef.outsidePointerEvents();
        this.id = config.id;
        this.keydownEvents.subscribe((event) => {
          if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
            event.preventDefault();
            this.close(void 0, { focusOrigin: "keyboard" });
          }
        });
        this.backdropClick.subscribe(() => {
          if (!this.disableClose && this._canClose()) {
            this.close(void 0, { focusOrigin: "mouse" });
          } else {
            this.containerInstance._recaptureFocus?.();
          }
        });
        this._detachSubscription = overlayRef.detachments().subscribe(() => {
          if (config.closeOnOverlayDetachments !== false) {
            this.close();
          }
        });
      }
      /**
       * Close the dialog.
       * @param result Optional result to return to the dialog opener.
       * @param options Additional options to customize the closing behavior.
       */
      close(result, options) {
        if (this._canClose(result)) {
          const closedSubject = this.closed;
          this.containerInstance._closeInteractionType = options?.focusOrigin || "program";
          this._detachSubscription.unsubscribe();
          this.overlayRef.dispose();
          closedSubject.next(result);
          closedSubject.complete();
          this.componentInstance = this.containerInstance = null;
        }
      }
      /** Updates the position of the dialog based on the current position strategy. */
      updatePosition() {
        this.overlayRef.updatePosition();
        return this;
      }
      /**
       * Updates the dialog's width and height.
       * @param width New width of the dialog.
       * @param height New height of the dialog.
       */
      updateSize(width = "", height = "") {
        this.overlayRef.updateSize({ width, height });
        return this;
      }
      /** Add a CSS class or an array of classes to the overlay pane. */
      addPanelClass(classes) {
        this.overlayRef.addPanelClass(classes);
        return this;
      }
      /** Remove a CSS class or an array of classes from the overlay pane. */
      removePanelClass(classes) {
        this.overlayRef.removePanelClass(classes);
        return this;
      }
      /** Whether the dialog is allowed to close. */
      _canClose(result) {
        const config = this.config;
        return !!this.containerInstance && (!config.closePredicate || config.closePredicate(result, config, this.componentInstance));
      }
    };
    DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createBlockScrollStrategy(injector);
      }
    });
    DIALOG_DATA = new InjectionToken("DialogData");
    DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
    Dialog = class _Dialog {
      _injector = inject(Injector);
      _defaultOptions = inject(DEFAULT_DIALOG_CONFIG, { optional: true });
      _parentDialog = inject(_Dialog, { optional: true, skipSelf: true });
      _overlayContainer = inject(OverlayContainer);
      _idGenerator = inject(_IdGenerator);
      _openDialogsAtThisLevel = [];
      _afterAllClosedAtThisLevel = new Subject();
      _afterOpenedAtThisLevel = new Subject();
      _ariaHiddenElements = /* @__PURE__ */ new Map();
      _scrollStrategy = inject(DIALOG_SCROLL_STRATEGY);
      /** Keeps track of the currently-open dialogs. */
      get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
      }
      /** Stream that emits when a dialog has been opened. */
      get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
      }
      /**
       * Stream that emits when all open dialog have finished closing.
       * Will emit on subscribe if there are no open dialogs to begin with.
       */
      afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
      constructor() {
      }
      open(componentOrTemplateRef, config) {
        const defaults = this._defaultOptions || new DialogConfig();
        config = __spreadValues(__spreadValues({}, defaults), config);
        config.id = config.id || this._idGenerator.getId("cdk-dialog-");
        if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
        }
        const overlayConfig = this._getOverlayConfig(config);
        const overlayRef = createOverlayRef(this._injector, overlayConfig);
        const dialogRef = new DialogRef(overlayRef, config);
        const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
        dialogRef.containerInstance = dialogContainer;
        this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
        if (!this.openDialogs.length) {
          this._hideNonDialogContentFromAssistiveTechnology();
        }
        this.openDialogs.push(dialogRef);
        dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
        this.afterOpened.next(dialogRef);
        return dialogRef;
      }
      /**
       * Closes all of the currently-open dialogs.
       */
      closeAll() {
        reverseForEach(this.openDialogs, (dialog) => dialog.close());
      }
      /**
       * Finds an open dialog by its id.
       * @param id ID to use when looking up the dialog.
       */
      getDialogById(id) {
        return this.openDialogs.find((dialog) => dialog.id === id);
      }
      ngOnDestroy() {
        reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
          if (dialog.config.closeOnDestroy === false) {
            this._removeOpenDialog(dialog, false);
          }
        });
        reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
        this._afterAllClosedAtThisLevel.complete();
        this._afterOpenedAtThisLevel.complete();
        this._openDialogsAtThisLevel = [];
      }
      /**
       * Creates an overlay config from a dialog config.
       * @param config The dialog configuration.
       * @returns The overlay configuration.
       */
      _getOverlayConfig(config) {
        const state = new OverlayConfig({
          positionStrategy: config.positionStrategy || createGlobalPositionStrategy().centerHorizontally().centerVertically(),
          scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
          panelClass: config.panelClass,
          hasBackdrop: config.hasBackdrop,
          direction: config.direction,
          minWidth: config.minWidth,
          minHeight: config.minHeight,
          maxWidth: config.maxWidth,
          maxHeight: config.maxHeight,
          width: config.width,
          height: config.height,
          disposeOnNavigation: config.closeOnNavigation,
          disableAnimations: config.disableAnimations
        });
        if (config.backdropClass) {
          state.backdropClass = config.backdropClass;
        }
        return state;
      }
      /**
       * Attaches a dialog container to a dialog's already-created overlay.
       * @param overlay Reference to the dialog's underlying overlay.
       * @param config The dialog configuration.
       * @returns A promise resolving to a ComponentRef for the attached container.
       */
      _attachContainer(overlay, dialogRef, config) {
        const userInjector = config.injector || config.viewContainerRef?.injector;
        const providers = [
          { provide: DialogConfig, useValue: config },
          { provide: DialogRef, useValue: dialogRef },
          { provide: OverlayRef, useValue: overlay }
        ];
        let containerType;
        if (config.container) {
          if (typeof config.container === "function") {
            containerType = config.container;
          } else {
            containerType = config.container.type;
            providers.push(...config.container.providers(config));
          }
        } else {
          containerType = CdkDialogContainer;
        }
        const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({ parent: userInjector || this._injector, providers }));
        const containerRef = overlay.attach(containerPortal);
        return containerRef.instance;
      }
      /**
       * Attaches the user-provided component to the already-created dialog container.
       * @param componentOrTemplateRef The type of component being loaded into the dialog,
       *     or a TemplateRef to instantiate as the content.
       * @param dialogRef Reference to the dialog being opened.
       * @param dialogContainer Component that is going to wrap the dialog content.
       * @param config Configuration used to open the dialog.
       */
      _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
        if (componentOrTemplateRef instanceof TemplateRef) {
          const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
          let context = { $implicit: config.data, dialogRef };
          if (config.templateContext) {
            context = __spreadValues(__spreadValues({}, context), typeof config.templateContext === "function" ? config.templateContext() : config.templateContext);
          }
          dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
        } else {
          const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
          const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector));
          dialogRef.componentRef = contentRef;
          dialogRef.componentInstance = contentRef.instance;
        }
      }
      /**
       * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
       * of a dialog to close itself and, optionally, to return a value.
       * @param config Config object that is used to construct the dialog.
       * @param dialogRef Reference to the dialog being opened.
       * @param dialogContainer Component that is going to wrap the dialog content.
       * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
       * dialog injector, if the user didn't provide a custom one.
       * @returns The custom injector that can be used inside the dialog.
       */
      _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
        const userInjector = config.injector || config.viewContainerRef?.injector;
        const providers = [
          { provide: DIALOG_DATA, useValue: config.data },
          { provide: DialogRef, useValue: dialogRef }
        ];
        if (config.providers) {
          if (typeof config.providers === "function") {
            providers.push(...config.providers(dialogRef, config, dialogContainer));
          } else {
            providers.push(...config.providers);
          }
        }
        if (config.direction && (!userInjector || !userInjector.get(Directionality, null, { optional: true }))) {
          providers.push({
            provide: Directionality,
            useValue: getDirectionality(config.direction)
          });
        }
        return Injector.create({ parent: userInjector || fallbackInjector, providers });
      }
      /**
       * Removes a dialog from the array of open dialogs.
       * @param dialogRef Dialog to be removed.
       * @param emitEvent Whether to emit an event if this is the last dialog.
       */
      _removeOpenDialog(dialogRef, emitEvent) {
        const index = this.openDialogs.indexOf(dialogRef);
        if (index > -1) {
          this.openDialogs.splice(index, 1);
          if (!this.openDialogs.length) {
            this._ariaHiddenElements.forEach((previousValue, element) => {
              if (previousValue) {
                element.setAttribute("aria-hidden", previousValue);
              } else {
                element.removeAttribute("aria-hidden");
              }
            });
            this._ariaHiddenElements.clear();
            if (emitEvent) {
              this._getAfterAllClosed().next();
            }
          }
        }
      }
      /** Hides all of the content that isn't an overlay from assistive technology. */
      _hideNonDialogContentFromAssistiveTechnology() {
        const overlayContainer = this._overlayContainer.getContainerElement();
        if (overlayContainer.parentElement) {
          const siblings = overlayContainer.parentElement.children;
          for (let i = siblings.length - 1; i > -1; i--) {
            const sibling = siblings[i];
            if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
              this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
              sibling.setAttribute("aria-hidden", "true");
            }
          }
        }
      }
      _getAfterAllClosed() {
        const parent = this._parentDialog;
        return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Dialog, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Dialog, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Dialog, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    DialogModule = class _DialogModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _DialogModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _DialogModule, imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer], exports: [
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule,
        CdkDialogContainer
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _DialogModule, providers: [Dialog], imports: [
        OverlayModule,
        PortalModule,
        A11yModule,
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: DialogModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
        exports: [
          // Re-export the PortalModule so that people extending the `CdkDialogContainer`
          // don't have to remember to import it or be faced with an unhelpful error.
          PortalModule,
          CdkDialogContainer
        ],
        providers: [Dialog]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/module-Ce6F7TNm.mjs
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === "number") {
    return time;
  }
  if (time.endsWith("ms")) {
    return coerceNumberProperty(time.substring(0, time.length - 2));
  }
  if (time.endsWith("s")) {
    return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
  }
  if (time === "0") {
    return 0;
  }
  return null;
}
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var MatDialogConfig, OPEN_CLASS, OPENING_CLASS, CLOSING_CLASS, OPEN_ANIMATION_DURATION, CLOSE_ANIMATION_DURATION, MatDialogContainer, TRANSITION_DURATION_PROPERTY, MatDialogState, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MatDialog, MatDialogClose, MatDialogLayoutSection, MatDialogTitle, MatDialogContent, MatDialogActions, DIRECTIVES, MatDialogModule;
var init_module_Ce6F7TNm = __esm({
  "node_modules/@angular/material/fesm2022/module-Ce6F7TNm.mjs"() {
    "use strict";
    init_dialog();
    init_overlay();
    init_portal();
    init_core();
    init_core();
    init_coercion();
    init_animation_DfMFjxHu();
    init_esm();
    init_operators();
    init_keycodes();
    init_a11y();
    init_scrolling();
    init_scrolling();
    init_common_module_cKSwHniA();
    MatDialogConfig = class {
      /**
       * Where the attached component should live in Angular's *logical* component tree.
       * This affects what is available for injection and the change detection order for the
       * component instantiated inside of the dialog. This does not affect where the dialog
       * content will be rendered.
       */
      viewContainerRef;
      /**
       * Injector used for the instantiation of the component to be attached. If provided,
       * takes precedence over the injector indirectly provided by `ViewContainerRef`.
       */
      injector;
      /** ID for the dialog. If omitted, a unique one will be generated. */
      id;
      /** The ARIA role of the dialog element. */
      role = "dialog";
      /** Custom class for the overlay pane. */
      panelClass = "";
      /** Whether the dialog has a backdrop. */
      hasBackdrop = true;
      /** Custom class for the backdrop. */
      backdropClass = "";
      /** Whether the user can use escape or clicking on the backdrop to close the modal. */
      disableClose = false;
      /** Function used to determine whether the dialog is allowed to close. */
      closePredicate;
      /** Width of the dialog. */
      width = "";
      /** Height of the dialog. */
      height = "";
      /** Min-width of the dialog. If a number is provided, assumes pixel units. */
      minWidth;
      /** Min-height of the dialog. If a number is provided, assumes pixel units. */
      minHeight;
      /** Max-width of the dialog. If a number is provided, assumes pixel units. */
      maxWidth;
      /** Max-height of the dialog. If a number is provided, assumes pixel units. */
      maxHeight;
      /** Position overrides. */
      position;
      /** Data being injected into the child component. */
      data = null;
      /** Layout direction for the dialog's content. */
      direction;
      /** ID of the element that describes the dialog. */
      ariaDescribedBy = null;
      /** ID of the element that labels the dialog. */
      ariaLabelledBy = null;
      /** Aria label to assign to the dialog element. */
      ariaLabel = null;
      /**
       * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
       * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
       * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
       */
      ariaModal = false;
      /**
       * Where the dialog should focus on open.
       * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
       * AutoFocusTarget instead.
       */
      autoFocus = "first-tabbable";
      /**
       * Whether the dialog should restore focus to the
       * previously-focused element, after it's closed.
       */
      restoreFocus = true;
      /** Whether to wait for the opening animation to finish before trapping focus. */
      delayFocusTrap = true;
      /** Scroll strategy to be used for the dialog. */
      scrollStrategy;
      /**
       * Whether the dialog should close when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */
      closeOnNavigation = true;
      /**
       * Duration of the enter animation in ms.
       * Should be a number, string type is deprecated.
       * @breaking-change 17.0.0 Remove string signature.
       */
      enterAnimationDuration;
      /**
       * Duration of the exit animation in ms.
       * Should be a number, string type is deprecated.
       * @breaking-change 17.0.0 Remove string signature.
       */
      exitAnimationDuration;
    };
    OPEN_CLASS = "mdc-dialog--open";
    OPENING_CLASS = "mdc-dialog--opening";
    CLOSING_CLASS = "mdc-dialog--closing";
    OPEN_ANIMATION_DURATION = 150;
    CLOSE_ANIMATION_DURATION = 75;
    MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
      /** Emits when an animation state changes. */
      _animationStateChanged = new EventEmitter();
      /** Whether animations are enabled. */
      _animationsEnabled = !_animationsDisabled();
      /** Number of actions projected in the dialog. */
      _actionSectionCount = 0;
      /** Host element of the dialog container component. */
      _hostElement = this._elementRef.nativeElement;
      /** Duration of the dialog open animation. */
      _enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
      /** Duration of the dialog close animation. */
      _exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
      /** Current timer for dialog animations. */
      _animationTimer = null;
      _contentAttached() {
        super._contentAttached();
        this._startOpenAnimation();
      }
      /** Starts the dialog open animation if enabled. */
      _startOpenAnimation() {
        this._animationStateChanged.emit({ state: "opening", totalTime: this._enterAnimationDuration });
        if (this._animationsEnabled) {
          this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
          this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
          this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
        } else {
          this._hostElement.classList.add(OPEN_CLASS);
          Promise.resolve().then(() => this._finishDialogOpen());
        }
      }
      /**
       * Starts the exit animation of the dialog if enabled. This method is
       * called by the dialog ref.
       */
      _startExitAnimation() {
        this._animationStateChanged.emit({ state: "closing", totalTime: this._exitAnimationDuration });
        this._hostElement.classList.remove(OPEN_CLASS);
        if (this._animationsEnabled) {
          this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
          this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
          this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
        } else {
          Promise.resolve().then(() => this._finishDialogClose());
        }
      }
      /**
       * Updates the number action sections.
       * @param delta Increase/decrease in the number of sections.
       */
      _updateActionSectionCount(delta) {
        this._actionSectionCount += delta;
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Completes the dialog open by clearing potential animation classes, trapping
       * focus and emitting an opened event.
       */
      _finishDialogOpen = () => {
        this._clearAnimationClasses();
        this._openAnimationDone(this._enterAnimationDuration);
      };
      /**
       * Completes the dialog close by clearing potential animation classes, restoring
       * focus and emitting a closed event.
       */
      _finishDialogClose = () => {
        this._clearAnimationClasses();
        this._animationStateChanged.emit({ state: "closed", totalTime: this._exitAnimationDuration });
      };
      /** Clears all dialog animation classes. */
      _clearAnimationClasses() {
        this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
      }
      _waitForAnimationToComplete(duration, callback) {
        if (this._animationTimer !== null) {
          clearTimeout(this._animationTimer);
        }
        this._animationTimer = setTimeout(callback, duration);
      }
      /** Runs a callback in `requestAnimationFrame`, if available. */
      _requestAnimationFrame(callback) {
        this._ngZone.runOutsideAngular(() => {
          if (typeof requestAnimationFrame === "function") {
            requestAnimationFrame(callback);
          } else {
            callback();
          }
        });
      }
      _captureInitialFocus() {
        if (!this._config.delayFocusTrap) {
          this._trapFocus();
        }
      }
      /**
       * Callback for when the open dialog animation has finished. Intended to
       * be called by sub-classes that use different animation implementations.
       */
      _openAnimationDone(totalTime) {
        if (this._config.delayFocusTrap) {
          this._trapFocus();
        }
        this._animationStateChanged.next({ state: "opened", totalTime });
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        if (this._animationTimer !== null) {
          clearTimeout(this._animationTimer);
        }
      }
      attachComponentPortal(portal) {
        const ref = super.attachComponentPortal(portal);
        ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
        return ref;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogContainer, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatDialogContainer, isStandalone: true, selector: "mat-dialog-container", host: { attributes: { "tabindex": "-1" }, properties: { "attr.aria-modal": "_config.ariaModal", "id": "_config.id", "attr.role": "_config.role", "attr.aria-labelledby": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]", "attr.aria-label": "_config.ariaLabel", "attr.aria-describedby": "_config.ariaDescribedBy || null", "class._mat-animation-noopable": "!_animationsEnabled", "class.mat-mdc-dialog-container-with-actions": "_actionSectionCount > 0" }, classAttribute: "mat-mdc-dialog-container mdc-dialog" }, usesInheritance: true, ngImport: core_exports, template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n', styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n'], dependencies: [{ kind: "directive", type: CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogContainer, decorators: [{
      type: Component,
      args: [{ selector: "mat-dialog-container", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, imports: [CdkPortalOutlet], host: {
        "class": "mat-mdc-dialog-container mdc-dialog",
        "tabindex": "-1",
        "[attr.aria-modal]": "_config.ariaModal",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[class._mat-animation-noopable]": "!_animationsEnabled",
        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
      }, template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n', styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n'] }]
    }] });
    TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
    (function(MatDialogState2) {
      MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
      MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
      MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
    })(MatDialogState || (MatDialogState = {}));
    MatDialogRef = class {
      _ref;
      _config;
      _containerInstance;
      /** The instance of component opened into the dialog. */
      componentInstance;
      /**
       * `ComponentRef` of the component opened into the dialog. Will be
       * null when the dialog is opened using a `TemplateRef`.
       */
      componentRef;
      /** Whether the user is allowed to close the dialog. */
      disableClose;
      /** Unique ID for the dialog. */
      id;
      /** Subject for notifying the user that the dialog has finished opening. */
      _afterOpened = new Subject();
      /** Subject for notifying the user that the dialog has started closing. */
      _beforeClosed = new Subject();
      /** Result to be passed to afterClosed. */
      _result;
      /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
      _closeFallbackTimeout;
      /** Current state of the dialog. */
      _state = MatDialogState.OPEN;
      // TODO(crisbeto): we shouldn't have to declare this property, because `DialogRef.close`
      // already has a second `options` parameter that we can use. The problem is that internal tests
      // have assertions like `expect(MatDialogRef.close).toHaveBeenCalledWith(foo)` which will break,
      // because it'll be called with two arguments by things like `MatDialogClose`.
      /** Interaction that caused the dialog to close. */
      _closeInteractionType;
      constructor(_ref, _config, _containerInstance) {
        this._ref = _ref;
        this._config = _config;
        this._containerInstance = _containerInstance;
        this.disableClose = _config.disableClose;
        this.id = _ref.id;
        _ref.addPanelClass("mat-mdc-dialog-panel");
        _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
          this._afterOpened.next();
          this._afterOpened.complete();
        });
        _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
          clearTimeout(this._closeFallbackTimeout);
          this._finishDialogClose();
        });
        _ref.overlayRef.detachments().subscribe(() => {
          this._beforeClosed.next(this._result);
          this._beforeClosed.complete();
          this._finishDialogClose();
        });
        merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe((event) => {
          if (!this.disableClose) {
            event.preventDefault();
            _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
          }
        });
      }
      /**
       * Close the dialog.
       * @param dialogResult Optional result to return to the dialog opener.
       */
      close(dialogResult) {
        const closePredicate = this._config.closePredicate;
        if (closePredicate && !closePredicate(dialogResult, this._config, this.componentInstance)) {
          return;
        }
        this._result = dialogResult;
        this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
          this._beforeClosed.next(dialogResult);
          this._beforeClosed.complete();
          this._ref.overlayRef.detachBackdrop();
          this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
        });
        this._state = MatDialogState.CLOSING;
        this._containerInstance._startExitAnimation();
      }
      /**
       * Gets an observable that is notified when the dialog is finished opening.
       */
      afterOpened() {
        return this._afterOpened;
      }
      /**
       * Gets an observable that is notified when the dialog is finished closing.
       */
      afterClosed() {
        return this._ref.closed;
      }
      /**
       * Gets an observable that is notified when the dialog has started closing.
       */
      beforeClosed() {
        return this._beforeClosed;
      }
      /**
       * Gets an observable that emits when the overlay's backdrop has been clicked.
       */
      backdropClick() {
        return this._ref.backdropClick;
      }
      /**
       * Gets an observable that emits when keydown events are targeted on the overlay.
       */
      keydownEvents() {
        return this._ref.keydownEvents;
      }
      /**
       * Updates the dialog's position.
       * @param position New dialog position.
       */
      updatePosition(position) {
        let strategy = this._ref.config.positionStrategy;
        if (position && (position.left || position.right)) {
          position.left ? strategy.left(position.left) : strategy.right(position.right);
        } else {
          strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
          position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        } else {
          strategy.centerVertically();
        }
        this._ref.updatePosition();
        return this;
      }
      /**
       * Updates the dialog's width and height.
       * @param width New width of the dialog.
       * @param height New height of the dialog.
       */
      updateSize(width = "", height = "") {
        this._ref.updateSize(width, height);
        return this;
      }
      /** Add a CSS class or an array of classes to the overlay pane. */
      addPanelClass(classes) {
        this._ref.addPanelClass(classes);
        return this;
      }
      /** Remove a CSS class or an array of classes from the overlay pane. */
      removePanelClass(classes) {
        this._ref.removePanelClass(classes);
        return this;
      }
      /** Gets the current state of the dialog's lifecycle. */
      getState() {
        return this._state;
      }
      /**
       * Finishes the dialog close by updating the state of the dialog
       * and disposing the overlay.
       */
      _finishDialogClose() {
        this._state = MatDialogState.CLOSED;
        this._ref.close(this._result, { focusOrigin: this._closeInteractionType });
        this.componentInstance = null;
      }
    };
    MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
    MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
    MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createBlockScrollStrategy(injector);
      }
    });
    MatDialog = class _MatDialog {
      _defaultOptions = inject(MAT_DIALOG_DEFAULT_OPTIONS, { optional: true });
      _scrollStrategy = inject(MAT_DIALOG_SCROLL_STRATEGY);
      _parentDialog = inject(_MatDialog, { optional: true, skipSelf: true });
      _idGenerator = inject(_IdGenerator);
      _injector = inject(Injector);
      _dialog = inject(Dialog);
      _animationsDisabled = _animationsDisabled();
      _openDialogsAtThisLevel = [];
      _afterAllClosedAtThisLevel = new Subject();
      _afterOpenedAtThisLevel = new Subject();
      dialogConfigClass = MatDialogConfig;
      _dialogRefConstructor;
      _dialogContainerType;
      _dialogDataToken;
      /** Keeps track of the currently-open dialogs. */
      get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
      }
      /** Stream that emits when a dialog has been opened. */
      get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
      }
      _getAfterAllClosed() {
        const parent = this._parentDialog;
        return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      /**
       * Stream that emits when all open dialog have finished closing.
       * Will emit on subscribe if there are no open dialogs to begin with.
       */
      afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
      constructor() {
        this._dialogRefConstructor = MatDialogRef;
        this._dialogContainerType = MatDialogContainer;
        this._dialogDataToken = MAT_DIALOG_DATA;
      }
      open(componentOrTemplateRef, config) {
        let dialogRef;
        config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config);
        config.id = config.id || this._idGenerator.getId("mat-mdc-dialog-");
        config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
        const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config), {
          positionStrategy: createGlobalPositionStrategy(this._injector).centerHorizontally().centerVertically(),
          // Disable closing since we need to sync it up to the animation ourselves.
          disableClose: true,
          // Closing is tied to our animation so the close predicate has to be implemented separately.
          closePredicate: void 0,
          // Disable closing on destroy, because this service cleans up its open dialogs as well.
          // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
          // the dialogs immediately whereas we want it to wait for the animations to finish.
          closeOnDestroy: false,
          // Disable closing on detachments so that we can sync up the animation.
          // The Material dialog ref handles this manually.
          closeOnOverlayDetachments: false,
          disableAnimations: this._animationsDisabled || config.enterAnimationDuration?.toLocaleString() === "0" || config.exitAnimationDuration?.toString() === "0",
          container: {
            type: this._dialogContainerType,
            providers: () => [
              // Provide our config as the CDK config as well since it has the same interface as the
              // CDK one, but it contains the actual values passed in by the user for things like
              // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
              { provide: this.dialogConfigClass, useValue: config },
              { provide: DialogConfig, useValue: config }
            ]
          },
          templateContext: () => ({ dialogRef }),
          providers: (ref, cdkConfig, dialogContainer) => {
            dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
            dialogRef.updatePosition(config?.position);
            return [
              { provide: this._dialogContainerType, useValue: dialogContainer },
              { provide: this._dialogDataToken, useValue: cdkConfig.data },
              { provide: this._dialogRefConstructor, useValue: dialogRef }
            ];
          }
        }));
        dialogRef.componentRef = cdkRef.componentRef;
        dialogRef.componentInstance = cdkRef.componentInstance;
        this.openDialogs.push(dialogRef);
        this.afterOpened.next(dialogRef);
        dialogRef.afterClosed().subscribe(() => {
          const index = this.openDialogs.indexOf(dialogRef);
          if (index > -1) {
            this.openDialogs.splice(index, 1);
            if (!this.openDialogs.length) {
              this._getAfterAllClosed().next();
            }
          }
        });
        return dialogRef;
      }
      /**
       * Closes all of the currently-open dialogs.
       */
      closeAll() {
        this._closeDialogs(this.openDialogs);
      }
      /**
       * Finds an open dialog by its id.
       * @param id ID to use when looking up the dialog.
       */
      getDialogById(id) {
        return this.openDialogs.find((dialog) => dialog.id === id);
      }
      ngOnDestroy() {
        this._closeDialogs(this._openDialogsAtThisLevel);
        this._afterAllClosedAtThisLevel.complete();
        this._afterOpenedAtThisLevel.complete();
      }
      _closeDialogs(dialogs) {
        let i = dialogs.length;
        while (i--) {
          dialogs[i].close();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialog, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialog, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialog, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    MatDialogClose = class _MatDialogClose {
      dialogRef = inject(MatDialogRef, { optional: true });
      _elementRef = inject(ElementRef);
      _dialog = inject(MatDialog);
      /** Screen-reader label for the button. */
      ariaLabel;
      /** Default to "button" to prevents accidental form submits. */
      type = "button";
      /** Dialog close input. */
      dialogResult;
      _matDialogClose;
      constructor() {
      }
      ngOnInit() {
        if (!this.dialogRef) {
          this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
      }
      ngOnChanges(changes) {
        const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
        if (proxiedChange) {
          this.dialogResult = proxiedChange.currentValue;
        }
      }
      _onButtonClick(event) {
        _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogClose, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatDialogClose, isStandalone: true, selector: "[mat-dialog-close], [matDialogClose]", inputs: { ariaLabel: ["aria-label", "ariaLabel"], type: "type", dialogResult: ["mat-dialog-close", "dialogResult"], _matDialogClose: ["matDialogClose", "_matDialogClose"] }, host: { listeners: { "click": "_onButtonClick($event)" }, properties: { "attr.aria-label": "ariaLabel || null", "attr.type": "type" } }, exportAs: ["matDialogClose"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogClose, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-dialog-close], [matDialogClose]",
        exportAs: "matDialogClose",
        host: {
          "(click)": "_onButtonClick($event)",
          "[attr.aria-label]": "ariaLabel || null",
          "[attr.type]": "type"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], type: [{
      type: Input
    }], dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }], _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }] } });
    MatDialogLayoutSection = class _MatDialogLayoutSection {
      _dialogRef = inject(MatDialogRef, { optional: true });
      _elementRef = inject(ElementRef);
      _dialog = inject(MatDialog);
      constructor() {
      }
      ngOnInit() {
        if (!this._dialogRef) {
          this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
        if (this._dialogRef) {
          Promise.resolve().then(() => {
            this._onAdd();
          });
        }
      }
      ngOnDestroy() {
        const instance = this._dialogRef?._containerInstance;
        if (instance) {
          Promise.resolve().then(() => {
            this._onRemove();
          });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogLayoutSection, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatDialogLayoutSection, isStandalone: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogLayoutSection, decorators: [{
      type: Directive
    }], ctorParameters: () => [] });
    MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
      id = inject(_IdGenerator).getId("mat-mdc-dialog-title-");
      _onAdd() {
        this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
      }
      _onRemove() {
        this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogTitle, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatDialogTitle, isStandalone: true, selector: "[mat-dialog-title], [matDialogTitle]", inputs: { id: "id" }, host: { properties: { "id": "id" }, classAttribute: "mat-mdc-dialog-title mdc-dialog__title" }, exportAs: ["matDialogTitle"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogTitle, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-dialog-title], [matDialogTitle]",
        exportAs: "matDialogTitle",
        host: {
          "class": "mat-mdc-dialog-title mdc-dialog__title",
          "[id]": "id"
        }
      }]
    }], propDecorators: { id: [{
      type: Input
    }] } });
    MatDialogContent = class _MatDialogContent {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatDialogContent, isStandalone: true, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]", host: { classAttribute: "mat-mdc-dialog-content mdc-dialog__content" }, hostDirectives: [{ directive: CdkScrollable }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogContent, decorators: [{
      type: Directive,
      args: [{
        selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
        host: { "class": "mat-mdc-dialog-content mdc-dialog__content" },
        hostDirectives: [CdkScrollable]
      }]
    }] });
    MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
      /**
       * Horizontal alignment of action buttons.
       */
      align;
      _onAdd() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
      }
      _onRemove() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogActions, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatDialogActions, isStandalone: true, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: { align: "align" }, host: { properties: { "class.mat-mdc-dialog-actions-align-start": 'align === "start"', "class.mat-mdc-dialog-actions-align-center": 'align === "center"', "class.mat-mdc-dialog-actions-align-end": 'align === "end"' }, classAttribute: "mat-mdc-dialog-actions mdc-dialog__actions" }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogActions, decorators: [{
      type: Directive,
      args: [{
        selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
        host: {
          "class": "mat-mdc-dialog-actions mdc-dialog__actions",
          "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
          "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
          "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
        }
      }]
    }], propDecorators: { align: [{
      type: Input
    }] } });
    DIRECTIVES = [
      MatDialogContainer,
      MatDialogClose,
      MatDialogTitle,
      MatDialogActions,
      MatDialogContent
    ];
    MatDialogModule = class _MatDialogModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogModule, imports: [
        DialogModule,
        OverlayModule,
        PortalModule,
        MatCommonModule,
        MatDialogContainer,
        MatDialogClose,
        MatDialogTitle,
        MatDialogActions,
        MatDialogContent
      ], exports: [
        MatCommonModule,
        MatDialogContainer,
        MatDialogClose,
        MatDialogTitle,
        MatDialogActions,
        MatDialogContent
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDialogModule, providers: [MatDialog], imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDialogModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, ...DIRECTIVES],
        exports: [MatCommonModule, ...DIRECTIVES],
        providers: [MatDialog]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/dialog.mjs
var init_dialog2 = __esm({
  "node_modules/@angular/material/fesm2022/dialog.mjs"() {
    "use strict";
    init_module_Ce6F7TNm();
  }
});

export {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogModule,
  init_dialog2 as init_dialog
};
//# sourceMappingURL=chunk-V6O7JONI.js.map
