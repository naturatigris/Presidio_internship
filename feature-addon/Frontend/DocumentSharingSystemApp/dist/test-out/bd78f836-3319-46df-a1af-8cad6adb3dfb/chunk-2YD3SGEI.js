import {
  MatOption,
  MatSelect,
  MatSelectModule,
  init_module_BDiw_nWS,
  init_option_BzhYL_xC
} from "./chunk-AUF5RPMJ.js";
import {
  MatFormField,
  init_form_field_C9DZXojn
} from "./chunk-3YSEX4UT.js";
import {
  A11yModule,
  AriaDescriber,
  CdkScrollableModule,
  ComponentPortal,
  Directionality,
  ESCAPE,
  FocusMonitor,
  MatButtonModule,
  MatCommonModule,
  MatIconButton,
  OverlayModule,
  Platform,
  ScrollDispatcher,
  _IdGenerator,
  _animationsDisabled,
  coerceBooleanProperty,
  coerceNumberProperty,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  hasModifierKey,
  init_a11y,
  init_animation_DfMFjxHu,
  init_bidi,
  init_button,
  init_coercion,
  init_common_module_cKSwHniA,
  init_icon_button_DxiIc1ex,
  init_keycodes,
  init_overlay,
  init_platform,
  init_portal,
  init_scrolling,
  normalizePassiveListenerOptions
} from "./chunk-PI2YTXAG.js";
import {
  NgClass,
  init_common
} from "./chunk-JO3QPFNY.js";
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
  Optional,
  Output,
  ReplaySubject,
  SkipSelf,
  Subject,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  core_exports,
  init_core,
  init_esm,
  init_operators,
  inject,
  numberAttribute,
  takeUntil,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-6IGNU3MH.js";
import {
  __esm,
  __spreadValues
} from "./chunk-73RR4HMO.js";

// node_modules/@angular/material/fesm2022/module-CWxMD37a.mjs
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector, { scrollThrottle: SCROLL_THROTTLE_MS });
}
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
var SCROLL_THROTTLE_MS, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_TOOLTIP_DEFAULT_OPTIONS, PANEL_CLASS, passiveListenerOptions, MIN_VIEWPORT_TOOLTIP_THRESHOLD, UNBOUNDED_ANCHOR_GAP, MIN_HEIGHT, MAX_WIDTH, MatTooltip, TooltipComponent, MatTooltipModule;
var init_module_CWxMD37a = __esm({
  "node_modules/@angular/material/fesm2022/module-CWxMD37a.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_a11y();
    init_overlay();
    init_scrolling();
    init_operators();
    init_coercion();
    init_keycodes();
    init_common();
    init_platform();
    init_bidi();
    init_portal();
    init_esm();
    init_animation_DfMFjxHu();
    init_common_module_cKSwHniA();
    SCROLL_THROTTLE_MS = 20;
    MAT_TOOLTIP_SCROLL_STRATEGY = new InjectionToken("mat-tooltip-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector, { scrollThrottle: SCROLL_THROTTLE_MS });
      }
    });
    MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_TOOLTIP_SCROLL_STRATEGY,
      deps: [],
      useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
    };
    MAT_TOOLTIP_DEFAULT_OPTIONS = new InjectionToken("mat-tooltip-default-options", {
      providedIn: "root",
      factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
    });
    PANEL_CLASS = "tooltip-panel";
    passiveListenerOptions = normalizePassiveListenerOptions({ passive: true });
    MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
    UNBOUNDED_ANCHOR_GAP = 8;
    MIN_HEIGHT = 24;
    MAX_WIDTH = 200;
    MatTooltip = class _MatTooltip {
      _elementRef = inject(ElementRef);
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _ariaDescriber = inject(AriaDescriber);
      _focusMonitor = inject(FocusMonitor);
      _dir = inject(Directionality);
      _injector = inject(Injector);
      _viewContainerRef = inject(ViewContainerRef);
      _animationsDisabled = _animationsDisabled();
      _defaultOptions = inject(MAT_TOOLTIP_DEFAULT_OPTIONS, {
        optional: true
      });
      _overlayRef;
      _tooltipInstance;
      _overlayPanelClass;
      // Used for styling internally.
      _portal;
      _position = "below";
      _positionAtOrigin = false;
      _disabled = false;
      _tooltipClass;
      _viewInitialized = false;
      _pointerExitEventsInitialized = false;
      _tooltipComponent = TooltipComponent;
      _viewportMargin = 8;
      _currentPosition;
      _cssClassPrefix = "mat-mdc";
      _ariaDescriptionPending;
      _dirSubscribed = false;
      /** Allows the user to define the position of the tooltip relative to the parent element */
      get position() {
        return this._position;
      }
      set position(value) {
        if (value !== this._position) {
          this._position = value;
          if (this._overlayRef) {
            this._updatePosition(this._overlayRef);
            this._tooltipInstance?.show(0);
            this._overlayRef.updatePosition();
          }
        }
      }
      /**
       * Whether tooltip should be relative to the click or touch origin
       * instead of outside the element bounding box.
       */
      get positionAtOrigin() {
        return this._positionAtOrigin;
      }
      set positionAtOrigin(value) {
        this._positionAtOrigin = coerceBooleanProperty(value);
        this._detach();
        this._overlayRef = null;
      }
      /** Disables the display of the tooltip. */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        const isDisabled = coerceBooleanProperty(value);
        if (this._disabled !== isDisabled) {
          this._disabled = isDisabled;
          if (isDisabled) {
            this.hide(0);
          } else {
            this._setupPointerEnterEventsIfNeeded();
          }
          this._syncAriaDescription(this.message);
        }
      }
      /** The default delay in ms before showing the tooltip after show is called */
      get showDelay() {
        return this._showDelay;
      }
      set showDelay(value) {
        this._showDelay = coerceNumberProperty(value);
      }
      _showDelay;
      /** The default delay in ms before hiding the tooltip after hide is called */
      get hideDelay() {
        return this._hideDelay;
      }
      set hideDelay(value) {
        this._hideDelay = coerceNumberProperty(value);
        if (this._tooltipInstance) {
          this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
        }
      }
      _hideDelay;
      /**
       * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
       * uses a long press gesture to show and hide, however it can conflict with the native browser
       * gestures. To work around the conflict, Angular Material disables native gestures on the
       * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
       * elements). The different values for this option configure the touch event handling as follows:
       * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
       *   browser gestures on particular elements. In particular, it allows text selection on inputs
       *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
       * - `on` - Enables touch gestures for all elements and disables native
       *   browser gestures with no exceptions.
       * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
       *   showing on touch devices.
       */
      touchGestures = "auto";
      /** The message to be displayed in the tooltip */
      get message() {
        return this._message;
      }
      set message(value) {
        const oldMessage = this._message;
        this._message = value != null ? String(value).trim() : "";
        if (!this._message && this._isTooltipVisible()) {
          this.hide(0);
        } else {
          this._setupPointerEnterEventsIfNeeded();
          this._updateTooltipMessage();
        }
        this._syncAriaDescription(oldMessage);
      }
      _message = "";
      /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
      get tooltipClass() {
        return this._tooltipClass;
      }
      set tooltipClass(value) {
        this._tooltipClass = value;
        if (this._tooltipInstance) {
          this._setTooltipClass(this._tooltipClass);
        }
      }
      /** Manually-bound passive event listeners. */
      _passiveListeners = [];
      /** Timer started at the last `touchstart` event. */
      _touchstartTimeout = null;
      /** Emits when the component is destroyed. */
      _destroyed = new Subject();
      /** Whether ngOnDestroyed has been called. */
      _isDestroyed = false;
      constructor() {
        const defaultOptions = this._defaultOptions;
        if (defaultOptions) {
          this._showDelay = defaultOptions.showDelay;
          this._hideDelay = defaultOptions.hideDelay;
          if (defaultOptions.position) {
            this.position = defaultOptions.position;
          }
          if (defaultOptions.positionAtOrigin) {
            this.positionAtOrigin = defaultOptions.positionAtOrigin;
          }
          if (defaultOptions.touchGestures) {
            this.touchGestures = defaultOptions.touchGestures;
          }
          if (defaultOptions.tooltipClass) {
            this.tooltipClass = defaultOptions.tooltipClass;
          }
        }
        this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
      }
      ngAfterViewInit() {
        this._viewInitialized = true;
        this._setupPointerEnterEventsIfNeeded();
        this._focusMonitor.monitor(this._elementRef).pipe(takeUntil(this._destroyed)).subscribe((origin) => {
          if (!origin) {
            this._ngZone.run(() => this.hide(0));
          } else if (origin === "keyboard") {
            this._ngZone.run(() => this.show());
          }
        });
      }
      /**
       * Dispose the tooltip when destroyed.
       */
      ngOnDestroy() {
        const nativeElement = this._elementRef.nativeElement;
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        if (this._overlayRef) {
          this._overlayRef.dispose();
          this._tooltipInstance = null;
        }
        this._passiveListeners.forEach(([event, listener]) => {
          nativeElement.removeEventListener(event, listener, passiveListenerOptions);
        });
        this._passiveListeners.length = 0;
        this._destroyed.next();
        this._destroyed.complete();
        this._isDestroyed = true;
        this._ariaDescriber.removeDescription(nativeElement, this.message, "tooltip");
        this._focusMonitor.stopMonitoring(nativeElement);
      }
      /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
      show(delay = this.showDelay, origin) {
        if (this.disabled || !this.message || this._isTooltipVisible()) {
          this._tooltipInstance?._cancelPendingAnimations();
          return;
        }
        const overlayRef = this._createOverlay(origin);
        this._detach();
        this._portal = this._portal || new ComponentPortal(this._tooltipComponent, this._viewContainerRef);
        const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
        instance._triggerElement = this._elementRef.nativeElement;
        instance._mouseLeaveHideDelay = this._hideDelay;
        instance.afterHidden().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
        this._setTooltipClass(this._tooltipClass);
        this._updateTooltipMessage();
        instance.show(delay);
      }
      /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
      hide(delay = this.hideDelay) {
        const instance = this._tooltipInstance;
        if (instance) {
          if (instance.isVisible()) {
            instance.hide(delay);
          } else {
            instance._cancelPendingAnimations();
            this._detach();
          }
        }
      }
      /** Shows/hides the tooltip */
      toggle(origin) {
        this._isTooltipVisible() ? this.hide() : this.show(void 0, origin);
      }
      /** Returns true if the tooltip is currently visible to the user */
      _isTooltipVisible() {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
      }
      /** Create the overlay config and position strategy */
      _createOverlay(origin) {
        if (this._overlayRef) {
          const existingStrategy = this._overlayRef.getConfig().positionStrategy;
          if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof ElementRef) {
            return this._overlayRef;
          }
          this._detach();
        }
        const scrollableAncestors = this._injector.get(ScrollDispatcher).getAncestorScrollContainers(this._elementRef);
        const panelClass = `${this._cssClassPrefix}-${PANEL_CLASS}`;
        const strategy = createFlexibleConnectedPositionStrategy(this._injector, this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
        strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe((change) => {
          this._updateCurrentPositionClass(change.connectionPair);
          if (this._tooltipInstance) {
            if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
              this._ngZone.run(() => this.hide(0));
            }
          }
        });
        this._overlayRef = createOverlayRef(this._injector, {
          direction: this._dir,
          positionStrategy: strategy,
          panelClass: this._overlayPanelClass ? [...this._overlayPanelClass, panelClass] : panelClass,
          scrollStrategy: this._injector.get(MAT_TOOLTIP_SCROLL_STRATEGY)(),
          disableAnimations: this._animationsDisabled
        });
        this._updatePosition(this._overlayRef);
        this._overlayRef.detachments().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
        this._overlayRef.outsidePointerEvents().pipe(takeUntil(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
        this._overlayRef.keydownEvents().pipe(takeUntil(this._destroyed)).subscribe((event) => {
          if (this._isTooltipVisible() && event.keyCode === ESCAPE && !hasModifierKey(event)) {
            event.preventDefault();
            event.stopPropagation();
            this._ngZone.run(() => this.hide(0));
          }
        });
        if (this._defaultOptions?.disableTooltipInteractivity) {
          this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
        }
        if (!this._dirSubscribed) {
          this._dirSubscribed = true;
          this._dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
            if (this._overlayRef) {
              this._updatePosition(this._overlayRef);
            }
          });
        }
        return this._overlayRef;
      }
      /** Detaches the currently-attached tooltip. */
      _detach() {
        if (this._overlayRef && this._overlayRef.hasAttached()) {
          this._overlayRef.detach();
        }
        this._tooltipInstance = null;
      }
      /** Updates the position of the current tooltip. */
      _updatePosition(overlayRef) {
        const position = overlayRef.getConfig().positionStrategy;
        const origin = this._getOrigin();
        const overlay = this._getOverlayPosition();
        position.withPositions([
          this._addOffset(__spreadValues(__spreadValues({}, origin.main), overlay.main)),
          this._addOffset(__spreadValues(__spreadValues({}, origin.fallback), overlay.fallback))
        ]);
      }
      /** Adds the configured offset to a position. Used as a hook for child classes. */
      _addOffset(position) {
        const offset = UNBOUNDED_ANCHOR_GAP;
        const isLtr = !this._dir || this._dir.value == "ltr";
        if (position.originY === "top") {
          position.offsetY = -offset;
        } else if (position.originY === "bottom") {
          position.offsetY = offset;
        } else if (position.originX === "start") {
          position.offsetX = isLtr ? -offset : offset;
        } else if (position.originX === "end") {
          position.offsetX = isLtr ? offset : -offset;
        }
        return position;
      }
      /**
       * Returns the origin position and a fallback position based on the user's position preference.
       * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
       */
      _getOrigin() {
        const isLtr = !this._dir || this._dir.value == "ltr";
        const position = this.position;
        let originPosition;
        if (position == "above" || position == "below") {
          originPosition = { originX: "center", originY: position == "above" ? "top" : "bottom" };
        } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
          originPosition = { originX: "start", originY: "center" };
        } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
          originPosition = { originX: "end", originY: "center" };
        } else if (typeof ngDevMode === "undefined" || ngDevMode) {
          throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(originPosition.originX, originPosition.originY);
        return {
          main: originPosition,
          fallback: { originX: x, originY: y }
        };
      }
      /** Returns the overlay position and a fallback position based on the user's preference */
      _getOverlayPosition() {
        const isLtr = !this._dir || this._dir.value == "ltr";
        const position = this.position;
        let overlayPosition;
        if (position == "above") {
          overlayPosition = { overlayX: "center", overlayY: "bottom" };
        } else if (position == "below") {
          overlayPosition = { overlayX: "center", overlayY: "top" };
        } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
          overlayPosition = { overlayX: "end", overlayY: "center" };
        } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
          overlayPosition = { overlayX: "start", overlayY: "center" };
        } else if (typeof ngDevMode === "undefined" || ngDevMode) {
          throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
        return {
          main: overlayPosition,
          fallback: { overlayX: x, overlayY: y }
        };
      }
      /** Updates the tooltip message and repositions the overlay according to the new message length */
      _updateTooltipMessage() {
        if (this._tooltipInstance) {
          this._tooltipInstance.message = this.message;
          this._tooltipInstance._markForCheck();
          afterNextRender(() => {
            if (this._tooltipInstance) {
              this._overlayRef.updatePosition();
            }
          }, {
            injector: this._injector
          });
        }
      }
      /** Updates the tooltip class */
      _setTooltipClass(tooltipClass) {
        if (this._tooltipInstance) {
          this._tooltipInstance.tooltipClass = tooltipClass;
          this._tooltipInstance._markForCheck();
        }
      }
      /** Inverts an overlay position. */
      _invertPosition(x, y) {
        if (this.position === "above" || this.position === "below") {
          if (y === "top") {
            y = "bottom";
          } else if (y === "bottom") {
            y = "top";
          }
        } else {
          if (x === "end") {
            x = "start";
          } else if (x === "start") {
            x = "end";
          }
        }
        return { x, y };
      }
      /** Updates the class on the overlay panel based on the current position of the tooltip. */
      _updateCurrentPositionClass(connectionPair) {
        const { overlayY, originX, originY } = connectionPair;
        let newPosition;
        if (overlayY === "center") {
          if (this._dir && this._dir.value === "rtl") {
            newPosition = originX === "end" ? "left" : "right";
          } else {
            newPosition = originX === "start" ? "left" : "right";
          }
        } else {
          newPosition = overlayY === "bottom" && originY === "top" ? "above" : "below";
        }
        if (newPosition !== this._currentPosition) {
          const overlayRef = this._overlayRef;
          if (overlayRef) {
            const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
            overlayRef.removePanelClass(classPrefix + this._currentPosition);
            overlayRef.addPanelClass(classPrefix + newPosition);
          }
          this._currentPosition = newPosition;
        }
      }
      /** Binds the pointer events to the tooltip trigger. */
      _setupPointerEnterEventsIfNeeded() {
        if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
          return;
        }
        if (this._platformSupportsMouseEvents()) {
          this._passiveListeners.push([
            "mouseenter",
            (event) => {
              this._setupPointerExitEventsIfNeeded();
              let point = void 0;
              if (event.x !== void 0 && event.y !== void 0) {
                point = event;
              }
              this.show(void 0, point);
            }
          ]);
        } else if (this.touchGestures !== "off") {
          this._disableNativeGesturesIfNecessary();
          this._passiveListeners.push([
            "touchstart",
            (event) => {
              const touch = event.targetTouches?.[0];
              const origin = touch ? { x: touch.clientX, y: touch.clientY } : void 0;
              this._setupPointerExitEventsIfNeeded();
              if (this._touchstartTimeout) {
                clearTimeout(this._touchstartTimeout);
              }
              const DEFAULT_LONGPRESS_DELAY = 500;
              this._touchstartTimeout = setTimeout(() => {
                this._touchstartTimeout = null;
                this.show(void 0, origin);
              }, this._defaultOptions?.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
            }
          ]);
        }
        this._addListeners(this._passiveListeners);
      }
      _setupPointerExitEventsIfNeeded() {
        if (this._pointerExitEventsInitialized) {
          return;
        }
        this._pointerExitEventsInitialized = true;
        const exitListeners = [];
        if (this._platformSupportsMouseEvents()) {
          exitListeners.push([
            "mouseleave",
            (event) => {
              const newTarget = event.relatedTarget;
              if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
                this.hide();
              }
            }
          ], ["wheel", (event) => this._wheelListener(event)]);
        } else if (this.touchGestures !== "off") {
          this._disableNativeGesturesIfNecessary();
          const touchendListener = () => {
            if (this._touchstartTimeout) {
              clearTimeout(this._touchstartTimeout);
            }
            this.hide(this._defaultOptions?.touchendHideDelay);
          };
          exitListeners.push(["touchend", touchendListener], ["touchcancel", touchendListener]);
        }
        this._addListeners(exitListeners);
        this._passiveListeners.push(...exitListeners);
      }
      _addListeners(listeners) {
        listeners.forEach(([event, listener]) => {
          this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
        });
      }
      _platformSupportsMouseEvents() {
        return !this._platform.IOS && !this._platform.ANDROID;
      }
      /** Listener for the `wheel` event on the element. */
      _wheelListener(event) {
        if (this._isTooltipVisible()) {
          const elementUnderPointer = this._injector.get(DOCUMENT).elementFromPoint(event.clientX, event.clientY);
          const element = this._elementRef.nativeElement;
          if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
            this.hide();
          }
        }
      }
      /** Disables the native browser gestures, based on how the tooltip has been configured. */
      _disableNativeGesturesIfNecessary() {
        const gestures = this.touchGestures;
        if (gestures !== "off") {
          const element = this._elementRef.nativeElement;
          const style = element.style;
          if (gestures === "on" || element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA") {
            style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = "none";
          }
          if (gestures === "on" || !element.draggable) {
            style.webkitUserDrag = "none";
          }
          style.touchAction = "none";
          style.webkitTapHighlightColor = "transparent";
        }
      }
      /** Updates the tooltip's ARIA description based on it current state. */
      _syncAriaDescription(oldMessage) {
        if (this._ariaDescriptionPending) {
          return;
        }
        this._ariaDescriptionPending = true;
        this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, "tooltip");
        if (!this._isDestroyed) {
          afterNextRender({
            write: () => {
              this._ariaDescriptionPending = false;
              if (this.message && !this.disabled) {
                this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip");
              }
            }
          }, { injector: this._injector });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltip, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatTooltip, isStandalone: true, selector: "[matTooltip]", inputs: { position: ["matTooltipPosition", "position"], positionAtOrigin: ["matTooltipPositionAtOrigin", "positionAtOrigin"], disabled: ["matTooltipDisabled", "disabled"], showDelay: ["matTooltipShowDelay", "showDelay"], hideDelay: ["matTooltipHideDelay", "hideDelay"], touchGestures: ["matTooltipTouchGestures", "touchGestures"], message: ["matTooltip", "message"], tooltipClass: ["matTooltipClass", "tooltipClass"] }, host: { properties: { "class.mat-mdc-tooltip-disabled": "disabled" }, classAttribute: "mat-mdc-tooltip-trigger" }, exportAs: ["matTooltip"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTooltip, decorators: [{
      type: Directive,
      args: [{
        selector: "[matTooltip]",
        exportAs: "matTooltip",
        host: {
          "class": "mat-mdc-tooltip-trigger",
          "[class.mat-mdc-tooltip-disabled]": "disabled"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { position: [{
      type: Input,
      args: ["matTooltipPosition"]
    }], positionAtOrigin: [{
      type: Input,
      args: ["matTooltipPositionAtOrigin"]
    }], disabled: [{
      type: Input,
      args: ["matTooltipDisabled"]
    }], showDelay: [{
      type: Input,
      args: ["matTooltipShowDelay"]
    }], hideDelay: [{
      type: Input,
      args: ["matTooltipHideDelay"]
    }], touchGestures: [{
      type: Input,
      args: ["matTooltipTouchGestures"]
    }], message: [{
      type: Input,
      args: ["matTooltip"]
    }], tooltipClass: [{
      type: Input,
      args: ["matTooltipClass"]
    }] } });
    TooltipComponent = class _TooltipComponent {
      _changeDetectorRef = inject(ChangeDetectorRef);
      _elementRef = inject(ElementRef);
      /* Whether the tooltip text overflows to multiple lines */
      _isMultiline = false;
      /** Message to display in the tooltip */
      message;
      /** Classes to be added to the tooltip. Supports the same syntax as `ngClass`. */
      tooltipClass;
      /** The timeout ID of any current timer set to show the tooltip */
      _showTimeoutId;
      /** The timeout ID of any current timer set to hide the tooltip */
      _hideTimeoutId;
      /** Element that caused the tooltip to open. */
      _triggerElement;
      /** Amount of milliseconds to delay the closing sequence. */
      _mouseLeaveHideDelay;
      /** Whether animations are currently disabled. */
      _animationsDisabled = _animationsDisabled();
      /** Reference to the internal tooltip element. */
      _tooltip;
      /** Whether interactions on the page should close the tooltip */
      _closeOnInteraction = false;
      /** Whether the tooltip is currently visible. */
      _isVisible = false;
      /** Subject for notifying that the tooltip has been hidden from the view */
      _onHide = new Subject();
      /** Name of the show animation and the class that toggles it. */
      _showAnimation = "mat-mdc-tooltip-show";
      /** Name of the hide animation and the class that toggles it. */
      _hideAnimation = "mat-mdc-tooltip-hide";
      constructor() {
      }
      /**
       * Shows the tooltip with an animation originating from the provided origin
       * @param delay Amount of milliseconds to the delay showing the tooltip.
       */
      show(delay) {
        if (this._hideTimeoutId != null) {
          clearTimeout(this._hideTimeoutId);
        }
        this._showTimeoutId = setTimeout(() => {
          this._toggleVisibility(true);
          this._showTimeoutId = void 0;
        }, delay);
      }
      /**
       * Begins the animation to hide the tooltip after the provided delay in ms.
       * @param delay Amount of milliseconds to delay showing the tooltip.
       */
      hide(delay) {
        if (this._showTimeoutId != null) {
          clearTimeout(this._showTimeoutId);
        }
        this._hideTimeoutId = setTimeout(() => {
          this._toggleVisibility(false);
          this._hideTimeoutId = void 0;
        }, delay);
      }
      /** Returns an observable that notifies when the tooltip has been hidden from view. */
      afterHidden() {
        return this._onHide;
      }
      /** Whether the tooltip is being displayed. */
      isVisible() {
        return this._isVisible;
      }
      ngOnDestroy() {
        this._cancelPendingAnimations();
        this._onHide.complete();
        this._triggerElement = null;
      }
      /**
       * Interactions on the HTML body should close the tooltip immediately as defined in the
       * material design spec.
       * https://material.io/design/components/tooltips.html#behavior
       */
      _handleBodyInteraction() {
        if (this._closeOnInteraction) {
          this.hide(0);
        }
      }
      /**
       * Marks that the tooltip needs to be checked in the next change detection run.
       * Mainly used for rendering the initial text before positioning a tooltip, which
       * can be problematic in components with OnPush change detection.
       */
      _markForCheck() {
        this._changeDetectorRef.markForCheck();
      }
      _handleMouseLeave({ relatedTarget }) {
        if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
          if (this.isVisible()) {
            this.hide(this._mouseLeaveHideDelay);
          } else {
            this._finalizeAnimation(false);
          }
        }
      }
      /**
       * Callback for when the timeout in this.show() gets completed.
       * This method is only needed by the mdc-tooltip, and so it is only implemented
       * in the mdc-tooltip, not here.
       */
      _onShow() {
        this._isMultiline = this._isTooltipMultiline();
        this._markForCheck();
      }
      /** Whether the tooltip text has overflown to the next line */
      _isTooltipMultiline() {
        const rect = this._elementRef.nativeElement.getBoundingClientRect();
        return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
      }
      /** Event listener dispatched when an animation on the tooltip finishes. */
      _handleAnimationEnd({ animationName }) {
        if (animationName === this._showAnimation || animationName === this._hideAnimation) {
          this._finalizeAnimation(animationName === this._showAnimation);
        }
      }
      /** Cancels any pending animation sequences. */
      _cancelPendingAnimations() {
        if (this._showTimeoutId != null) {
          clearTimeout(this._showTimeoutId);
        }
        if (this._hideTimeoutId != null) {
          clearTimeout(this._hideTimeoutId);
        }
        this._showTimeoutId = this._hideTimeoutId = void 0;
      }
      /** Handles the cleanup after an animation has finished. */
      _finalizeAnimation(toVisible) {
        if (toVisible) {
          this._closeOnInteraction = true;
        } else if (!this.isVisible()) {
          this._onHide.next();
        }
      }
      /** Toggles the visibility of the tooltip element. */
      _toggleVisibility(isVisible) {
        const tooltip = this._tooltip.nativeElement;
        const showClass = this._showAnimation;
        const hideClass = this._hideAnimation;
        tooltip.classList.remove(isVisible ? hideClass : showClass);
        tooltip.classList.add(isVisible ? showClass : hideClass);
        if (this._isVisible !== isVisible) {
          this._isVisible = isVisible;
          this._changeDetectorRef.markForCheck();
        }
        if (isVisible && !this._animationsDisabled && typeof getComputedStyle === "function") {
          const styles = getComputedStyle(tooltip);
          if (styles.getPropertyValue("animation-duration") === "0s" || styles.getPropertyValue("animation-name") === "none") {
            this._animationsDisabled = true;
          }
        }
        if (isVisible) {
          this._onShow();
        }
        if (this._animationsDisabled) {
          tooltip.classList.add("_mat-animation-noopable");
          this._finalizeAnimation(isVisible);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _TooltipComponent, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _TooltipComponent, isStandalone: true, selector: "mat-tooltip-component", host: { attributes: { "aria-hidden": "true" }, listeners: { "mouseleave": "_handleMouseLeave($event)" } }, viewQueries: [{ propertyName: "_tooltip", first: true, predicate: ["tooltip"], descendants: true, static: true }], ngImport: core_exports, template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n', styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n'], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: TooltipComponent, decorators: [{
      type: Component,
      args: [{ selector: "mat-tooltip-component", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "(mouseleave)": "_handleMouseLeave($event)",
        "aria-hidden": "true"
      }, imports: [NgClass], template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n', styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n'] }]
    }], ctorParameters: () => [], propDecorators: { _tooltip: [{
      type: ViewChild,
      args: ["tooltip", {
        // Use a static query here since we interact directly with
        // the DOM which can happen before `ngAfterViewInit`.
        static: true
      }]
    }] } });
    MatTooltipModule = class _MatTooltipModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltipModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltipModule, imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent], exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltipModule, providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [A11yModule, OverlayModule, MatCommonModule, MatCommonModule, CdkScrollableModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTooltipModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
        exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
        providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/paginator.mjs
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
var MatPaginatorIntl, MAT_PAGINATOR_INTL_PROVIDER, DEFAULT_PAGE_SIZE, MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginator, MatPaginatorModule;
var init_paginator = __esm({
  "node_modules/@angular/material/fesm2022/paginator.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_a11y();
    init_form_field_C9DZXojn();
    init_module_BDiw_nWS();
    init_module_CWxMD37a();
    init_option_BzhYL_xC();
    init_icon_button_DxiIc1ex();
    init_button();
    MatPaginatorIntl = class _MatPaginatorIntl {
      /**
       * Stream to emit from when labels are changed. Use this to notify components when the labels have
       * changed after initialization.
       */
      changes = new Subject();
      /** A label for the page size selector. */
      itemsPerPageLabel = "Items per page:";
      /** A label for the button that increments the current page. */
      nextPageLabel = "Next page";
      /** A label for the button that decrements the current page. */
      previousPageLabel = "Previous page";
      /** A label for the button that moves to the first page. */
      firstPageLabel = "First page";
      /** A label for the button that moves to the last page. */
      lastPageLabel = "Last page";
      /** A label for the range of items within the current page and the length of the whole list. */
      getRangeLabel = (page, pageSize, length) => {
        if (length == 0 || pageSize == 0) {
          return `0 of ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} \u2013 ${endIndex} of ${length}`;
      };
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPaginatorIntl, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPaginatorIntl, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatPaginatorIntl, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    MAT_PAGINATOR_INTL_PROVIDER = {
      // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
      provide: MatPaginatorIntl,
      deps: [[new Optional(), new SkipSelf(), MatPaginatorIntl]],
      useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
    };
    DEFAULT_PAGE_SIZE = 50;
    MAT_PAGINATOR_DEFAULT_OPTIONS = new InjectionToken("MAT_PAGINATOR_DEFAULT_OPTIONS");
    MatPaginator = class _MatPaginator {
      _intl = inject(MatPaginatorIntl);
      _changeDetectorRef = inject(ChangeDetectorRef);
      /** If set, styles the "page size" form field with the designated style. */
      _formFieldAppearance;
      /** ID for the DOM node containing the paginator's items per page label. */
      _pageSizeLabelId = inject(_IdGenerator).getId("mat-paginator-page-size-label-");
      _intlChanges;
      _isInitialized = false;
      _initializedStream = new ReplaySubject(1);
      /**
       * Theme color of the underlying form controls. This API is supported in M2
       * themes only,it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/paginator/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /** The zero-based page index of the displayed list of items. Defaulted to 0. */
      get pageIndex() {
        return this._pageIndex;
      }
      set pageIndex(value) {
        this._pageIndex = Math.max(value || 0, 0);
        this._changeDetectorRef.markForCheck();
      }
      _pageIndex = 0;
      /** The length of the total number of items that are being paginated. Defaulted to 0. */
      get length() {
        return this._length;
      }
      set length(value) {
        this._length = value || 0;
        this._changeDetectorRef.markForCheck();
      }
      _length = 0;
      /** Number of items to display on a page. By default set to 50. */
      get pageSize() {
        return this._pageSize;
      }
      set pageSize(value) {
        this._pageSize = Math.max(value || 0, 0);
        this._updateDisplayedPageSizeOptions();
      }
      _pageSize;
      /** The set of provided page size options to display to the user. */
      get pageSizeOptions() {
        return this._pageSizeOptions;
      }
      set pageSizeOptions(value) {
        this._pageSizeOptions = (value || []).map((p) => numberAttribute(p, 0));
        this._updateDisplayedPageSizeOptions();
      }
      _pageSizeOptions = [];
      /** Whether to hide the page size selection UI from the user. */
      hidePageSize = false;
      /** Whether to show the first/last buttons UI to the user. */
      showFirstLastButtons = false;
      /** Used to configure the underlying `MatSelect` inside the paginator. */
      selectConfig = {};
      /** Whether the paginator is disabled. */
      disabled = false;
      /** Event emitted when the paginator changes the page size or page index. */
      page = new EventEmitter();
      /** Displayed set of page size options. Will be sorted and include current page size. */
      _displayedPageSizeOptions;
      /** Emits when the paginator is initialized. */
      initialized = this._initializedStream;
      constructor() {
        const _intl = this._intl;
        const defaults = inject(MAT_PAGINATOR_DEFAULT_OPTIONS, {
          optional: true
        });
        this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
        if (defaults) {
          const { pageSize, pageSizeOptions, hidePageSize, showFirstLastButtons } = defaults;
          if (pageSize != null) {
            this._pageSize = pageSize;
          }
          if (pageSizeOptions != null) {
            this._pageSizeOptions = pageSizeOptions;
          }
          if (hidePageSize != null) {
            this.hidePageSize = hidePageSize;
          }
          if (showFirstLastButtons != null) {
            this.showFirstLastButtons = showFirstLastButtons;
          }
        }
        this._formFieldAppearance = defaults?.formFieldAppearance || "outline";
      }
      ngOnInit() {
        this._isInitialized = true;
        this._updateDisplayedPageSizeOptions();
        this._initializedStream.next();
      }
      ngOnDestroy() {
        this._initializedStream.complete();
        this._intlChanges.unsubscribe();
      }
      /** Advances to the next page if it exists. */
      nextPage() {
        if (this.hasNextPage()) {
          this._navigate(this.pageIndex + 1);
        }
      }
      /** Move back to the previous page if it exists. */
      previousPage() {
        if (this.hasPreviousPage()) {
          this._navigate(this.pageIndex - 1);
        }
      }
      /** Move to the first page if not already there. */
      firstPage() {
        if (this.hasPreviousPage()) {
          this._navigate(0);
        }
      }
      /** Move to the last page if not already there. */
      lastPage() {
        if (this.hasNextPage()) {
          this._navigate(this.getNumberOfPages() - 1);
        }
      }
      /** Whether there is a previous page. */
      hasPreviousPage() {
        return this.pageIndex >= 1 && this.pageSize != 0;
      }
      /** Whether there is a next page. */
      hasNextPage() {
        const maxPageIndex = this.getNumberOfPages() - 1;
        return this.pageIndex < maxPageIndex && this.pageSize != 0;
      }
      /** Calculate the number of pages */
      getNumberOfPages() {
        if (!this.pageSize) {
          return 0;
        }
        return Math.ceil(this.length / this.pageSize);
      }
      /**
       * Changes the page size so that the first item displayed on the page will still be
       * displayed using the new page size.
       *
       * For example, if the page size is 10 and on the second page (items indexed 10-19) then
       * switching so that the page size is 5 will set the third page as the current page so
       * that the 10th item will still be displayed.
       */
      _changePageSize(pageSize) {
        const startIndex = this.pageIndex * this.pageSize;
        const previousPageIndex = this.pageIndex;
        this.pageIndex = Math.floor(startIndex / pageSize) || 0;
        this.pageSize = pageSize;
        this._emitPageEvent(previousPageIndex);
      }
      /** Checks whether the buttons for going forwards should be disabled. */
      _nextButtonsDisabled() {
        return this.disabled || !this.hasNextPage();
      }
      /** Checks whether the buttons for going backwards should be disabled. */
      _previousButtonsDisabled() {
        return this.disabled || !this.hasPreviousPage();
      }
      /**
       * Updates the list of page size options to display to the user. Includes making sure that
       * the page size is an option and that the list is sorted.
       */
      _updateDisplayedPageSizeOptions() {
        if (!this._isInitialized) {
          return;
        }
        if (!this.pageSize) {
          this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
        }
        this._displayedPageSizeOptions = this.pageSizeOptions.slice();
        if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
          this._displayedPageSizeOptions.push(this.pageSize);
        }
        this._displayedPageSizeOptions.sort((a, b) => a - b);
        this._changeDetectorRef.markForCheck();
      }
      /** Emits an event notifying that a change of the paginator's properties has been triggered. */
      _emitPageEvent(previousPageIndex) {
        this.page.emit({
          previousPageIndex,
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
          length: this.length
        });
      }
      /** Navigates to a specific page index. */
      _navigate(index) {
        const previousIndex = this.pageIndex;
        if (index !== previousIndex) {
          this.pageIndex = index;
          this._emitPageEvent(previousIndex);
        }
      }
      /**
       * Callback invoked when one of the navigation buttons is called.
       * @param targetIndex Index to which the paginator should navigate.
       * @param isDisabled Whether the button is disabled.
       */
      _buttonClicked(targetIndex, isDisabled) {
        if (!isDisabled) {
          this._navigate(targetIndex);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPaginator, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatPaginator, isStandalone: true, selector: "mat-paginator", inputs: { color: "color", pageIndex: ["pageIndex", "pageIndex", numberAttribute], length: ["length", "length", numberAttribute], pageSize: ["pageSize", "pageSize", numberAttribute], pageSizeOptions: "pageSizeOptions", hidePageSize: ["hidePageSize", "hidePageSize", booleanAttribute], showFirstLastButtons: ["showFirstLastButtons", "showFirstLastButtons", booleanAttribute], selectConfig: "selectConfig", disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { page: "page" }, host: { attributes: { "role": "group" }, classAttribute: "mat-mdc-paginator" }, exportAs: ["matPaginator"], ngImport: core_exports, template: '<div class="mat-mdc-paginator-outer-container">\n  <div class="mat-mdc-paginator-container">\n    @if (!hidePageSize) {\n      <div class="mat-mdc-paginator-page-size">\n        <div class="mat-mdc-paginator-page-size-label" [attr.id]="_pageSizeLabelId">\n          {{_intl.itemsPerPageLabel}}\n        </div>\n\n        @if (_displayedPageSizeOptions.length > 1) {\n          <mat-form-field\n            [appearance]="_formFieldAppearance!"\n            [color]="color"\n            class="mat-mdc-paginator-page-size-select">\n            <mat-select\n              #selectRef\n              [value]="pageSize"\n              [disabled]="disabled"\n              [aria-labelledby]="_pageSizeLabelId"\n              [panelClass]="selectConfig.panelClass || \'\'"\n              [disableOptionCentering]="selectConfig.disableOptionCentering"\n              (selectionChange)="_changePageSize($event.value)"\n              hideSingleSelectionIndicator>\n              @for (pageSizeOption of _displayedPageSizeOptions; track pageSizeOption) {\n                <mat-option [value]="pageSizeOption">\n                  {{pageSizeOption}}\n                </mat-option>\n              }\n            </mat-select>\n          <div class="mat-mdc-paginator-touch-target" (click)="selectRef.open()"></div>\n          </mat-form-field>\n        }\n\n        @if (_displayedPageSizeOptions.length <= 1) {\n          <div class="mat-mdc-paginator-page-size-value">{{pageSize}}</div>\n        }\n      </div>\n    }\n\n    <div class="mat-mdc-paginator-range-actions">\n      <div class="mat-mdc-paginator-range-label" aria-live="polite">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <!--\n      The buttons use `disabledInteractive` so that they can retain focus if they become disabled,\n      otherwise focus is moved to the document body. However, users should not be able to navigate\n      into these buttons, so `tabindex` is set to -1 when disabled.\n      -->\n\n      @if (showFirstLastButtons) {\n        <button matIconButton type="button"\n                class="mat-mdc-paginator-navigation-first"\n                (click)="_buttonClicked(0, _previousButtonsDisabled())"\n                [attr.aria-label]="_intl.firstPageLabel"\n                [matTooltip]="_intl.firstPageLabel"\n                [matTooltipDisabled]="_previousButtonsDisabled()"\n                matTooltipPosition="above"\n                [disabled]="_previousButtonsDisabled()"\n                [tabindex]="_previousButtonsDisabled() ? -1 : null"\n                disabledInteractive>\n          <svg class="mat-mdc-paginator-icon"\n              viewBox="0 0 24 24"\n              focusable="false"\n              aria-hidden="true">\n            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>\n          </svg>\n        </button>\n      }\n      <button matIconButton type="button"\n              class="mat-mdc-paginator-navigation-previous"\n              (click)="_buttonClicked(pageIndex - 1, _previousButtonsDisabled())"\n              [attr.aria-label]="_intl.previousPageLabel"\n              [matTooltip]="_intl.previousPageLabel"\n              [matTooltipDisabled]="_previousButtonsDisabled()"\n              matTooltipPosition="above"\n              [disabled]="_previousButtonsDisabled()"\n              [tabindex]="_previousButtonsDisabled() ? -1 : null"\n              disabledInteractive>\n        <svg class="mat-mdc-paginator-icon"\n             viewBox="0 0 24 24"\n             focusable="false"\n             aria-hidden="true">\n          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>\n        </svg>\n      </button>\n      <button matIconButton type="button"\n              class="mat-mdc-paginator-navigation-next"\n              (click)="_buttonClicked(pageIndex + 1, _nextButtonsDisabled())"\n              [attr.aria-label]="_intl.nextPageLabel"\n              [matTooltip]="_intl.nextPageLabel"\n              [matTooltipDisabled]="_nextButtonsDisabled()"\n              matTooltipPosition="above"\n              [disabled]="_nextButtonsDisabled()"\n              [tabindex]="_nextButtonsDisabled() ? -1 : null"\n              disabledInteractive>\n        <svg class="mat-mdc-paginator-icon"\n             viewBox="0 0 24 24"\n             focusable="false"\n             aria-hidden="true">\n          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>\n        </svg>\n      </button>\n      @if (showFirstLastButtons) {\n        <button matIconButton type="button"\n                class="mat-mdc-paginator-navigation-last"\n                (click)="_buttonClicked(getNumberOfPages() - 1, _nextButtonsDisabled())"\n                [attr.aria-label]="_intl.lastPageLabel"\n                [matTooltip]="_intl.lastPageLabel"\n                [matTooltipDisabled]="_nextButtonsDisabled()"\n                matTooltipPosition="above"\n                [disabled]="_nextButtonsDisabled()"\n                [tabindex]="_nextButtonsDisabled() ? -1 : null"\n                disabledInteractive>\n          <svg class="mat-mdc-paginator-icon"\n              viewBox="0 0 24 24"\n              focusable="false"\n              aria-hidden="true">\n            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>\n          </svg>\n        </button>\n      }\n    </div>\n  </div>\n</div>\n', styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}\n"], dependencies: [{ kind: "component", type: MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]", exportAs: ["matButton", "matAnchor"] }, { kind: "directive", type: MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatPaginator, decorators: [{
      type: Component,
      args: [{ selector: "mat-paginator", exportAs: "matPaginator", host: {
        "class": "mat-mdc-paginator",
        "role": "group"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip], template: '<div class="mat-mdc-paginator-outer-container">\n  <div class="mat-mdc-paginator-container">\n    @if (!hidePageSize) {\n      <div class="mat-mdc-paginator-page-size">\n        <div class="mat-mdc-paginator-page-size-label" [attr.id]="_pageSizeLabelId">\n          {{_intl.itemsPerPageLabel}}\n        </div>\n\n        @if (_displayedPageSizeOptions.length > 1) {\n          <mat-form-field\n            [appearance]="_formFieldAppearance!"\n            [color]="color"\n            class="mat-mdc-paginator-page-size-select">\n            <mat-select\n              #selectRef\n              [value]="pageSize"\n              [disabled]="disabled"\n              [aria-labelledby]="_pageSizeLabelId"\n              [panelClass]="selectConfig.panelClass || \'\'"\n              [disableOptionCentering]="selectConfig.disableOptionCentering"\n              (selectionChange)="_changePageSize($event.value)"\n              hideSingleSelectionIndicator>\n              @for (pageSizeOption of _displayedPageSizeOptions; track pageSizeOption) {\n                <mat-option [value]="pageSizeOption">\n                  {{pageSizeOption}}\n                </mat-option>\n              }\n            </mat-select>\n          <div class="mat-mdc-paginator-touch-target" (click)="selectRef.open()"></div>\n          </mat-form-field>\n        }\n\n        @if (_displayedPageSizeOptions.length <= 1) {\n          <div class="mat-mdc-paginator-page-size-value">{{pageSize}}</div>\n        }\n      </div>\n    }\n\n    <div class="mat-mdc-paginator-range-actions">\n      <div class="mat-mdc-paginator-range-label" aria-live="polite">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <!--\n      The buttons use `disabledInteractive` so that they can retain focus if they become disabled,\n      otherwise focus is moved to the document body. However, users should not be able to navigate\n      into these buttons, so `tabindex` is set to -1 when disabled.\n      -->\n\n      @if (showFirstLastButtons) {\n        <button matIconButton type="button"\n                class="mat-mdc-paginator-navigation-first"\n                (click)="_buttonClicked(0, _previousButtonsDisabled())"\n                [attr.aria-label]="_intl.firstPageLabel"\n                [matTooltip]="_intl.firstPageLabel"\n                [matTooltipDisabled]="_previousButtonsDisabled()"\n                matTooltipPosition="above"\n                [disabled]="_previousButtonsDisabled()"\n                [tabindex]="_previousButtonsDisabled() ? -1 : null"\n                disabledInteractive>\n          <svg class="mat-mdc-paginator-icon"\n              viewBox="0 0 24 24"\n              focusable="false"\n              aria-hidden="true">\n            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>\n          </svg>\n        </button>\n      }\n      <button matIconButton type="button"\n              class="mat-mdc-paginator-navigation-previous"\n              (click)="_buttonClicked(pageIndex - 1, _previousButtonsDisabled())"\n              [attr.aria-label]="_intl.previousPageLabel"\n              [matTooltip]="_intl.previousPageLabel"\n              [matTooltipDisabled]="_previousButtonsDisabled()"\n              matTooltipPosition="above"\n              [disabled]="_previousButtonsDisabled()"\n              [tabindex]="_previousButtonsDisabled() ? -1 : null"\n              disabledInteractive>\n        <svg class="mat-mdc-paginator-icon"\n             viewBox="0 0 24 24"\n             focusable="false"\n             aria-hidden="true">\n          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>\n        </svg>\n      </button>\n      <button matIconButton type="button"\n              class="mat-mdc-paginator-navigation-next"\n              (click)="_buttonClicked(pageIndex + 1, _nextButtonsDisabled())"\n              [attr.aria-label]="_intl.nextPageLabel"\n              [matTooltip]="_intl.nextPageLabel"\n              [matTooltipDisabled]="_nextButtonsDisabled()"\n              matTooltipPosition="above"\n              [disabled]="_nextButtonsDisabled()"\n              [tabindex]="_nextButtonsDisabled() ? -1 : null"\n              disabledInteractive>\n        <svg class="mat-mdc-paginator-icon"\n             viewBox="0 0 24 24"\n             focusable="false"\n             aria-hidden="true">\n          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>\n        </svg>\n      </button>\n      @if (showFirstLastButtons) {\n        <button matIconButton type="button"\n                class="mat-mdc-paginator-navigation-last"\n                (click)="_buttonClicked(getNumberOfPages() - 1, _nextButtonsDisabled())"\n                [attr.aria-label]="_intl.lastPageLabel"\n                [matTooltip]="_intl.lastPageLabel"\n                [matTooltipDisabled]="_nextButtonsDisabled()"\n                matTooltipPosition="above"\n                [disabled]="_nextButtonsDisabled()"\n                [tabindex]="_nextButtonsDisabled() ? -1 : null"\n                disabledInteractive>\n          <svg class="mat-mdc-paginator-icon"\n              viewBox="0 0 24 24"\n              focusable="false"\n              aria-hidden="true">\n            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>\n          </svg>\n        </button>\n      }\n    </div>\n  </div>\n</div>\n', styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}\n"] }]
    }], ctorParameters: () => [], propDecorators: { color: [{
      type: Input
    }], pageIndex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], length: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], pageSize: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], pageSizeOptions: [{
      type: Input
    }], hidePageSize: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], showFirstLastButtons: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], selectConfig: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], page: [{
      type: Output
    }] } });
    MatPaginatorModule = class _MatPaginatorModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPaginatorModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPaginatorModule, imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator], exports: [MatPaginator] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPaginatorModule, providers: [MAT_PAGINATOR_INTL_PROVIDER], imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatPaginatorModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator],
        exports: [MatPaginator],
        providers: [MAT_PAGINATOR_INTL_PROVIDER]
      }]
    }] });
  }
});

export {
  MatPaginatorModule,
  init_paginator
};
//# sourceMappingURL=chunk-2YD3SGEI.js.map
