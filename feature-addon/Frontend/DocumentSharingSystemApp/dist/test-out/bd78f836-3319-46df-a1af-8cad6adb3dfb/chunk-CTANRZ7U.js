import {
  BasePortalOutlet,
  BreakpointObserver,
  Breakpoints,
  CdkPortalOutlet,
  ComponentPortal,
  LiveAnnouncer,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  OverlayConfig,
  OverlayModule,
  Platform,
  PortalModule,
  TemplatePortal,
  _IdGenerator,
  _animationsDisabled,
  createGlobalPositionStrategy,
  createOverlayRef,
  init_a11y,
  init_animation_DfMFjxHu,
  init_button,
  init_common_module_cKSwHniA,
  init_layout,
  init_overlay,
  init_platform,
  init_portal
} from "./chunk-PI2YTXAG.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  FactoryTarget,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Subject,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  afterNextRender,
  core_exports,
  init_core,
  init_esm,
  init_operators,
  inject,
  of,
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

// node_modules/@angular/material/fesm2022/snack-bar.mjs
function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
  return new MatSnackBarConfig();
}
var MAX_TIMEOUT, MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBarConfig, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction, SimpleSnackBar, ENTER_ANIMATION, EXIT_ANIMATION, MatSnackBarContainer, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar, DIRECTIVES, MatSnackBarModule;
var init_snack_bar = __esm({
  "node_modules/@angular/material/fesm2022/snack-bar.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_button();
    init_a11y();
    init_platform();
    init_portal();
    init_animation_DfMFjxHu();
    init_layout();
    init_overlay();
    init_operators();
    init_common_module_cKSwHniA();
    MAX_TIMEOUT = Math.pow(2, 31) - 1;
    MatSnackBarRef = class {
      _overlayRef;
      /** The instance of the component making up the content of the snack bar. */
      instance;
      /**
       * The instance of the component making up the content of the snack bar.
       * @docs-private
       */
      containerInstance;
      /** Subject for notifying the user that the snack bar has been dismissed. */
      _afterDismissed = new Subject();
      /** Subject for notifying the user that the snack bar has opened and appeared. */
      _afterOpened = new Subject();
      /** Subject for notifying the user that the snack bar action was called. */
      _onAction = new Subject();
      /**
       * Timeout ID for the duration setTimeout call. Used to clear the timeout if the snackbar is
       * dismissed before the duration passes.
       */
      _durationTimeoutId;
      /** Whether the snack bar was dismissed using the action button. */
      _dismissedByAction = false;
      constructor(containerInstance, _overlayRef) {
        this._overlayRef = _overlayRef;
        this.containerInstance = containerInstance;
        containerInstance._onExit.subscribe(() => this._finishDismiss());
      }
      /** Dismisses the snack bar. */
      dismiss() {
        if (!this._afterDismissed.closed) {
          this.containerInstance.exit();
        }
        clearTimeout(this._durationTimeoutId);
      }
      /** Marks the snackbar action clicked. */
      dismissWithAction() {
        if (!this._onAction.closed) {
          this._dismissedByAction = true;
          this._onAction.next();
          this._onAction.complete();
          this.dismiss();
        }
        clearTimeout(this._durationTimeoutId);
      }
      /**
       * Marks the snackbar action clicked.
       * @deprecated Use `dismissWithAction` instead.
       * @breaking-change 8.0.0
       */
      closeWithAction() {
        this.dismissWithAction();
      }
      /** Dismisses the snack bar after some duration */
      _dismissAfter(duration) {
        this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
      }
      /** Marks the snackbar as opened */
      _open() {
        if (!this._afterOpened.closed) {
          this._afterOpened.next();
          this._afterOpened.complete();
        }
      }
      /** Cleans up the DOM after closing. */
      _finishDismiss() {
        this._overlayRef.dispose();
        if (!this._onAction.closed) {
          this._onAction.complete();
        }
        this._afterDismissed.next({ dismissedByAction: this._dismissedByAction });
        this._afterDismissed.complete();
        this._dismissedByAction = false;
      }
      /** Gets an observable that is notified when the snack bar is finished closing. */
      afterDismissed() {
        return this._afterDismissed;
      }
      /** Gets an observable that is notified when the snack bar has opened and appeared. */
      afterOpened() {
        return this.containerInstance._onEnter;
      }
      /** Gets an observable that is notified when the snack bar action is called. */
      onAction() {
        return this._onAction;
      }
    };
    MAT_SNACK_BAR_DATA = new InjectionToken("MatSnackBarData");
    MatSnackBarConfig = class {
      /** The politeness level for the MatAriaLiveAnnouncer announcement. */
      politeness = "polite";
      /**
       * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
       * component or template, the announcement message will default to the specified message.
       */
      announcementMessage = "";
      /**
       * The view container that serves as the parent for the snackbar for the purposes of dependency
       * injection. Note: this does not affect where the snackbar is inserted in the DOM.
       */
      viewContainerRef;
      /** The length of time in milliseconds to wait before automatically dismissing the snack bar. */
      duration = 0;
      /** Extra CSS classes to be added to the snack bar container. */
      panelClass;
      /** Text layout direction for the snack bar. */
      direction;
      /** Data being injected into the child component. */
      data = null;
      /** The horizontal position to place the snack bar. */
      horizontalPosition = "center";
      /** The vertical position to place the snack bar. */
      verticalPosition = "bottom";
    };
    MatSnackBarLabel = class _MatSnackBarLabel {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarLabel, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatSnackBarLabel, isStandalone: true, selector: "[matSnackBarLabel]", host: { classAttribute: "mat-mdc-snack-bar-label mdc-snackbar__label" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSnackBarLabel, decorators: [{
      type: Directive,
      args: [{
        selector: `[matSnackBarLabel]`,
        host: {
          "class": "mat-mdc-snack-bar-label mdc-snackbar__label"
        }
      }]
    }] });
    MatSnackBarActions = class _MatSnackBarActions {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarActions, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatSnackBarActions, isStandalone: true, selector: "[matSnackBarActions]", host: { classAttribute: "mat-mdc-snack-bar-actions mdc-snackbar__actions" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSnackBarActions, decorators: [{
      type: Directive,
      args: [{
        selector: `[matSnackBarActions]`,
        host: {
          "class": "mat-mdc-snack-bar-actions mdc-snackbar__actions"
        }
      }]
    }] });
    MatSnackBarAction = class _MatSnackBarAction {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarAction, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatSnackBarAction, isStandalone: true, selector: "[matSnackBarAction]", host: { classAttribute: "mat-mdc-snack-bar-action mdc-snackbar__action" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSnackBarAction, decorators: [{
      type: Directive,
      args: [{
        selector: `[matSnackBarAction]`,
        host: {
          "class": "mat-mdc-snack-bar-action mdc-snackbar__action"
        }
      }]
    }] });
    SimpleSnackBar = class _SimpleSnackBar {
      snackBarRef = inject(MatSnackBarRef);
      data = inject(MAT_SNACK_BAR_DATA);
      constructor() {
      }
      /** Performs the action on the snack bar. */
      action() {
        this.snackBarRef.dismissWithAction();
      }
      /** If the action button should be shown. */
      get hasAction() {
        return !!this.data.action;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _SimpleSnackBar, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _SimpleSnackBar, isStandalone: true, selector: "simple-snack-bar", host: { classAttribute: "mat-mdc-simple-snack-bar" }, exportAs: ["matSnackBar"], ngImport: core_exports, template: '<div matSnackBarLabel>\n  {{data.message}}\n</div>\n\n@if (hasAction) {\n  <div matSnackBarActions>\n    <button matButton matSnackBarAction (click)="action()">\n      {{data.action}}\n    </button>\n  </div>\n}\n', styles: [".mat-mdc-simple-snack-bar{display:flex}\n"], dependencies: [{ kind: "component", type: MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "directive", type: MatSnackBarLabel, selector: "[matSnackBarLabel]" }, { kind: "directive", type: MatSnackBarActions, selector: "[matSnackBarActions]" }, { kind: "directive", type: MatSnackBarAction, selector: "[matSnackBarAction]" }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: SimpleSnackBar, decorators: [{
      type: Component,
      args: [{ selector: "simple-snack-bar", exportAs: "matSnackBar", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction], host: {
        "class": "mat-mdc-simple-snack-bar"
      }, template: '<div matSnackBarLabel>\n  {{data.message}}\n</div>\n\n@if (hasAction) {\n  <div matSnackBarActions>\n    <button matButton matSnackBarAction (click)="action()">\n      {{data.action}}\n    </button>\n  </div>\n}\n', styles: [".mat-mdc-simple-snack-bar{display:flex}\n"] }]
    }], ctorParameters: () => [] });
    ENTER_ANIMATION = "_mat-snack-bar-enter";
    EXIT_ANIMATION = "_mat-snack-bar-exit";
    MatSnackBarContainer = class _MatSnackBarContainer extends BasePortalOutlet {
      _ngZone = inject(NgZone);
      _elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _platform = inject(Platform);
      _animationsDisabled = _animationsDisabled();
      snackBarConfig = inject(MatSnackBarConfig);
      _document = inject(DOCUMENT);
      _trackedModals = /* @__PURE__ */ new Set();
      _enterFallback;
      _exitFallback;
      _injector = inject(Injector);
      /** The number of milliseconds to wait before announcing the snack bar's content. */
      _announceDelay = 150;
      /** The timeout for announcing the snack bar's content. */
      _announceTimeoutId;
      /** Whether the component has been destroyed. */
      _destroyed = false;
      /** The portal outlet inside of this container into which the snack bar content will be loaded. */
      _portalOutlet;
      /** Subject for notifying that the snack bar has announced to screen readers. */
      _onAnnounce = new Subject();
      /** Subject for notifying that the snack bar has exited from view. */
      _onExit = new Subject();
      /** Subject for notifying that the snack bar has finished entering the view. */
      _onEnter = new Subject();
      /** The state of the snack bar animations. */
      _animationState = "void";
      /** aria-live value for the live region. */
      _live;
      /**
       * Element that will have the `mdc-snackbar__label` class applied if the attached component
       * or template does not have it. This ensures that the appropriate structure, typography, and
       * color is applied to the attached view.
       */
      _label;
      /**
       * Role of the live region. This is only for Firefox as there is a known issue where Firefox +
       * JAWS does not read out aria-live message.
       */
      _role;
      /** Unique ID of the aria-live element. */
      _liveElementId = inject(_IdGenerator).getId("mat-snack-bar-container-live-");
      constructor() {
        super();
        const config = this.snackBarConfig;
        if (config.politeness === "assertive" && !config.announcementMessage) {
          this._live = "assertive";
        } else if (config.politeness === "off") {
          this._live = "off";
        } else {
          this._live = "polite";
        }
        if (this._platform.FIREFOX) {
          if (this._live === "polite") {
            this._role = "status";
          }
          if (this._live === "assertive") {
            this._role = "alert";
          }
        }
      }
      /** Attach a component portal as content to this snack bar container. */
      attachComponentPortal(portal) {
        this._assertNotAttached();
        const result = this._portalOutlet.attachComponentPortal(portal);
        this._afterPortalAttached();
        return result;
      }
      /** Attach a template portal as content to this snack bar container. */
      attachTemplatePortal(portal) {
        this._assertNotAttached();
        const result = this._portalOutlet.attachTemplatePortal(portal);
        this._afterPortalAttached();
        return result;
      }
      /**
       * Attaches a DOM portal to the snack bar container.
       * @deprecated To be turned into a method.
       * @breaking-change 10.0.0
       */
      attachDomPortal = (portal) => {
        this._assertNotAttached();
        const result = this._portalOutlet.attachDomPortal(portal);
        this._afterPortalAttached();
        return result;
      };
      /** Handle end of animations, updating the state of the snackbar. */
      onAnimationEnd(animationName) {
        if (animationName === EXIT_ANIMATION) {
          this._completeExit();
        } else if (animationName === ENTER_ANIMATION) {
          clearTimeout(this._enterFallback);
          this._ngZone.run(() => {
            this._onEnter.next();
            this._onEnter.complete();
          });
        }
      }
      /** Begin animation of snack bar entrance into view. */
      enter() {
        if (!this._destroyed) {
          this._animationState = "visible";
          this._changeDetectorRef.markForCheck();
          this._changeDetectorRef.detectChanges();
          this._screenReaderAnnounce();
          if (this._animationsDisabled) {
            afterNextRender(() => {
              this._ngZone.run(() => queueMicrotask(() => this.onAnimationEnd(ENTER_ANIMATION)));
            }, { injector: this._injector });
          } else {
            clearTimeout(this._enterFallback);
            this._enterFallback = setTimeout(() => {
              this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible");
              this.onAnimationEnd(ENTER_ANIMATION);
            }, 200);
          }
        }
      }
      /** Begin animation of the snack bar exiting from view. */
      exit() {
        if (this._destroyed) {
          return of(void 0);
        }
        this._ngZone.run(() => {
          this._animationState = "hidden";
          this._changeDetectorRef.markForCheck();
          this._elementRef.nativeElement.setAttribute("mat-exit", "");
          clearTimeout(this._announceTimeoutId);
          if (this._animationsDisabled) {
            afterNextRender(() => {
              this._ngZone.run(() => queueMicrotask(() => this.onAnimationEnd(EXIT_ANIMATION)));
            }, { injector: this._injector });
          } else {
            clearTimeout(this._exitFallback);
            this._exitFallback = setTimeout(() => this.onAnimationEnd(EXIT_ANIMATION), 200);
          }
        });
        return this._onExit;
      }
      /** Makes sure the exit callbacks have been invoked when the element is destroyed. */
      ngOnDestroy() {
        this._destroyed = true;
        this._clearFromModals();
        this._completeExit();
      }
      _completeExit() {
        clearTimeout(this._exitFallback);
        queueMicrotask(() => {
          this._onExit.next();
          this._onExit.complete();
        });
      }
      /**
       * Called after the portal contents have been attached. Can be
       * used to modify the DOM once it's guaranteed to be in place.
       */
      _afterPortalAttached() {
        const element = this._elementRef.nativeElement;
        const panelClasses = this.snackBarConfig.panelClass;
        if (panelClasses) {
          if (Array.isArray(panelClasses)) {
            panelClasses.forEach((cssClass) => element.classList.add(cssClass));
          } else {
            element.classList.add(panelClasses);
          }
        }
        this._exposeToModals();
        const label = this._label.nativeElement;
        const labelClass = "mdc-snackbar__label";
        label.classList.toggle(labelClass, !label.querySelector(`.${labelClass}`));
      }
      /**
       * Some browsers won't expose the accessibility node of the live element if there is an
       * `aria-modal` and the live element is outside of it. This method works around the issue by
       * pointing the `aria-owns` of all modals to the live element.
       */
      _exposeToModals() {
        const id = this._liveElementId;
        const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
        for (let i = 0; i < modals.length; i++) {
          const modal = modals[i];
          const ariaOwns = modal.getAttribute("aria-owns");
          this._trackedModals.add(modal);
          if (!ariaOwns) {
            modal.setAttribute("aria-owns", id);
          } else if (ariaOwns.indexOf(id) === -1) {
            modal.setAttribute("aria-owns", ariaOwns + " " + id);
          }
        }
      }
      /** Clears the references to the live element from any modals it was added to. */
      _clearFromModals() {
        this._trackedModals.forEach((modal) => {
          const ariaOwns = modal.getAttribute("aria-owns");
          if (ariaOwns) {
            const newValue = ariaOwns.replace(this._liveElementId, "").trim();
            if (newValue.length > 0) {
              modal.setAttribute("aria-owns", newValue);
            } else {
              modal.removeAttribute("aria-owns");
            }
          }
        });
        this._trackedModals.clear();
      }
      /** Asserts that no content is already attached to the container. */
      _assertNotAttached() {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("Attempting to attach snack bar content after content is already attached");
        }
      }
      /**
       * Starts a timeout to move the snack bar content to the live region so screen readers will
       * announce it.
       */
      _screenReaderAnnounce() {
        if (this._announceTimeoutId) {
          return;
        }
        this._ngZone.runOutsideAngular(() => {
          this._announceTimeoutId = setTimeout(() => {
            if (this._destroyed) {
              return;
            }
            const element = this._elementRef.nativeElement;
            const inertElement = element.querySelector("[aria-hidden]");
            const liveElement = element.querySelector("[aria-live]");
            if (inertElement && liveElement) {
              let focusedElement = null;
              if (this._platform.isBrowser && document.activeElement instanceof HTMLElement && inertElement.contains(document.activeElement)) {
                focusedElement = document.activeElement;
              }
              inertElement.removeAttribute("aria-hidden");
              liveElement.appendChild(inertElement);
              focusedElement?.focus();
              this._onAnnounce.next();
              this._onAnnounce.complete();
            }
          }, this._announceDelay);
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarContainer, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatSnackBarContainer, isStandalone: true, selector: "mat-snack-bar-container", host: { listeners: { "animationend": "onAnimationEnd($event.animationName)", "animationcancel": "onAnimationEnd($event.animationName)" }, properties: { "class.mat-snack-bar-container-enter": '_animationState === "visible"', "class.mat-snack-bar-container-exit": '_animationState === "hidden"', "class.mat-snack-bar-container-animations-enabled": "!_animationsDisabled" }, classAttribute: "mdc-snackbar mat-mdc-snack-bar-container" }, viewQueries: [{ propertyName: "_portalOutlet", first: true, predicate: CdkPortalOutlet, descendants: true, static: true }, { propertyName: "_label", first: true, predicate: ["label"], descendants: true, static: true }], usesInheritance: true, ngImport: core_exports, template: '<div class="mdc-snackbar__surface mat-mdc-snackbar-surface">\n  <!--\n    This outer label wrapper will have the class `mdc-snackbar__label` applied if\n    the attached template/component does not contain it.\n  -->\n  <div class="mat-mdc-snack-bar-label" #label>\n    <!-- Initialy holds the snack bar content, will be empty after announcing to screen readers. -->\n    <div aria-hidden="true">\n      <ng-template cdkPortalOutlet />\n    </div>\n\n    <!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n    <div [attr.aria-live]="_live" [attr.role]="_role" [attr.id]="_liveElementId"></div>\n  </div>\n</div>\n', styles: ["@keyframes _mat-snack-bar-enter{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}@keyframes _mat-snack-bar-exit{from{opacity:1}to{opacity:0}}.mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-snack-bar-container-animations-enabled{opacity:0}.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible{opacity:1}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter{animation:_mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit{animation:_mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-button-text-state-layer-color: currentColor;--mat-button-text-ripple-color: currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}\n"], dependencies: [{ kind: "directive", type: CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSnackBarContainer, decorators: [{
      type: Component,
      args: [{ selector: "mat-snack-bar-container", changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None, imports: [CdkPortalOutlet], host: {
        "class": "mdc-snackbar mat-mdc-snack-bar-container",
        "[class.mat-snack-bar-container-enter]": '_animationState === "visible"',
        "[class.mat-snack-bar-container-exit]": '_animationState === "hidden"',
        "[class.mat-snack-bar-container-animations-enabled]": "!_animationsDisabled",
        "(animationend)": "onAnimationEnd($event.animationName)",
        "(animationcancel)": "onAnimationEnd($event.animationName)"
      }, template: '<div class="mdc-snackbar__surface mat-mdc-snackbar-surface">\n  <!--\n    This outer label wrapper will have the class `mdc-snackbar__label` applied if\n    the attached template/component does not contain it.\n  -->\n  <div class="mat-mdc-snack-bar-label" #label>\n    <!-- Initialy holds the snack bar content, will be empty after announcing to screen readers. -->\n    <div aria-hidden="true">\n      <ng-template cdkPortalOutlet />\n    </div>\n\n    <!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n    <div [attr.aria-live]="_live" [attr.role]="_role" [attr.id]="_liveElementId"></div>\n  </div>\n</div>\n', styles: ["@keyframes _mat-snack-bar-enter{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}@keyframes _mat-snack-bar-exit{from{opacity:1}to{opacity:0}}.mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-snack-bar-container-animations-enabled{opacity:0}.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible{opacity:1}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter{animation:_mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit{animation:_mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-button-text-state-layer-color: currentColor;--mat-button-text-ripple-color: currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}\n"] }]
    }], ctorParameters: () => [], propDecorators: { _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, { static: true }]
    }], _label: [{
      type: ViewChild,
      args: ["label", { static: true }]
    }] } });
    MAT_SNACK_BAR_DEFAULT_OPTIONS = new InjectionToken("mat-snack-bar-default-options", {
      providedIn: "root",
      factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY
    });
    MatSnackBar = class _MatSnackBar {
      _live = inject(LiveAnnouncer);
      _injector = inject(Injector);
      _breakpointObserver = inject(BreakpointObserver);
      _parentSnackBar = inject(_MatSnackBar, { optional: true, skipSelf: true });
      _defaultConfig = inject(MAT_SNACK_BAR_DEFAULT_OPTIONS);
      _animationsDisabled = _animationsDisabled();
      /**
       * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
       * If there is a parent snack-bar service, all operations should delegate to that parent
       * via `_openedSnackBarRef`.
       */
      _snackBarRefAtThisLevel = null;
      /** The component that should be rendered as the snack bar's simple component. */
      simpleSnackBarComponent = SimpleSnackBar;
      /** The container component that attaches the provided template or component. */
      snackBarContainerComponent = MatSnackBarContainer;
      /** The CSS class to apply for handset mode. */
      handsetCssClass = "mat-mdc-snack-bar-handset";
      /** Reference to the currently opened snackbar at *any* level. */
      get _openedSnackBarRef() {
        const parent = this._parentSnackBar;
        return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
      }
      set _openedSnackBarRef(value) {
        if (this._parentSnackBar) {
          this._parentSnackBar._openedSnackBarRef = value;
        } else {
          this._snackBarRefAtThisLevel = value;
        }
      }
      constructor() {
      }
      /**
       * Creates and dispatches a snack bar with a custom component for the content, removing any
       * currently opened snack bars.
       *
       * @param component Component to be instantiated.
       * @param config Extra configuration for the snack bar.
       */
      openFromComponent(component, config) {
        return this._attach(component, config);
      }
      /**
       * Creates and dispatches a snack bar with a custom template for the content, removing any
       * currently opened snack bars.
       *
       * @param template Template to be instantiated.
       * @param config Extra configuration for the snack bar.
       */
      openFromTemplate(template, config) {
        return this._attach(template, config);
      }
      /**
       * Opens a snackbar with a message and an optional action.
       * @param message The message to show in the snackbar.
       * @param action The label for the snackbar action.
       * @param config Additional configuration options for the snackbar.
       */
      open(message, action = "", config) {
        const _config = __spreadValues(__spreadValues({}, this._defaultConfig), config);
        _config.data = { message, action };
        if (_config.announcementMessage === message) {
          _config.announcementMessage = void 0;
        }
        return this.openFromComponent(this.simpleSnackBarComponent, _config);
      }
      /**
       * Dismisses the currently-visible snack bar.
       */
      dismiss() {
        if (this._openedSnackBarRef) {
          this._openedSnackBarRef.dismiss();
        }
      }
      ngOnDestroy() {
        if (this._snackBarRefAtThisLevel) {
          this._snackBarRefAtThisLevel.dismiss();
        }
      }
      /**
       * Attaches the snack bar container component to the overlay.
       */
      _attachSnackBarContainer(overlayRef, config) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injector = Injector.create({
          parent: userInjector || this._injector,
          providers: [{ provide: MatSnackBarConfig, useValue: config }]
        });
        const containerPortal = new ComponentPortal(this.snackBarContainerComponent, config.viewContainerRef, injector);
        const containerRef = overlayRef.attach(containerPortal);
        containerRef.instance.snackBarConfig = config;
        return containerRef.instance;
      }
      /**
       * Places a new component or a template as the content of the snack bar container.
       */
      _attach(content, userConfig) {
        const config = __spreadValues(__spreadValues(__spreadValues({}, new MatSnackBarConfig()), this._defaultConfig), userConfig);
        const overlayRef = this._createOverlay(config);
        const container = this._attachSnackBarContainer(overlayRef, config);
        const snackBarRef = new MatSnackBarRef(container, overlayRef);
        if (content instanceof TemplateRef) {
          const portal = new TemplatePortal(content, null, {
            $implicit: config.data,
            snackBarRef
          });
          snackBarRef.instance = container.attachTemplatePortal(portal);
        } else {
          const injector = this._createInjector(config, snackBarRef);
          const portal = new ComponentPortal(content, void 0, injector);
          const contentRef = container.attachComponentPortal(portal);
          snackBarRef.instance = contentRef.instance;
        }
        this._breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(takeUntil(overlayRef.detachments())).subscribe((state) => {
          overlayRef.overlayElement.classList.toggle(this.handsetCssClass, state.matches);
        });
        if (config.announcementMessage) {
          container._onAnnounce.subscribe(() => {
            this._live.announce(config.announcementMessage, config.politeness);
          });
        }
        this._animateSnackBar(snackBarRef, config);
        this._openedSnackBarRef = snackBarRef;
        return this._openedSnackBarRef;
      }
      /** Animates the old snack bar out and the new one in. */
      _animateSnackBar(snackBarRef, config) {
        snackBarRef.afterDismissed().subscribe(() => {
          if (this._openedSnackBarRef == snackBarRef) {
            this._openedSnackBarRef = null;
          }
          if (config.announcementMessage) {
            this._live.clear();
          }
        });
        if (config.duration && config.duration > 0) {
          snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration));
        }
        if (this._openedSnackBarRef) {
          this._openedSnackBarRef.afterDismissed().subscribe(() => {
            snackBarRef.containerInstance.enter();
          });
          this._openedSnackBarRef.dismiss();
        } else {
          snackBarRef.containerInstance.enter();
        }
      }
      /**
       * Creates a new overlay and places it in the correct location.
       * @param config The user-specified snack bar config.
       */
      _createOverlay(config) {
        const overlayConfig = new OverlayConfig();
        overlayConfig.direction = config.direction;
        const positionStrategy = createGlobalPositionStrategy(this._injector);
        const isRtl = config.direction === "rtl";
        const isLeft = config.horizontalPosition === "left" || config.horizontalPosition === "start" && !isRtl || config.horizontalPosition === "end" && isRtl;
        const isRight = !isLeft && config.horizontalPosition !== "center";
        if (isLeft) {
          positionStrategy.left("0");
        } else if (isRight) {
          positionStrategy.right("0");
        } else {
          positionStrategy.centerHorizontally();
        }
        if (config.verticalPosition === "top") {
          positionStrategy.top("0");
        } else {
          positionStrategy.bottom("0");
        }
        overlayConfig.positionStrategy = positionStrategy;
        overlayConfig.disableAnimations = this._animationsDisabled;
        return createOverlayRef(this._injector, overlayConfig);
      }
      /**
       * Creates an injector to be used inside of a snack bar component.
       * @param config Config that was used to create the snack bar.
       * @param snackBarRef Reference to the snack bar.
       */
      _createInjector(config, snackBarRef) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        return Injector.create({
          parent: userInjector || this._injector,
          providers: [
            { provide: MatSnackBarRef, useValue: snackBarRef },
            { provide: MAT_SNACK_BAR_DATA, useValue: config.data }
          ]
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBar, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBar, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSnackBar, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    DIRECTIVES = [MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction];
    MatSnackBarModule = class _MatSnackBarModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarModule, imports: [
        OverlayModule,
        PortalModule,
        MatButtonModule,
        MatCommonModule,
        SimpleSnackBar,
        MatSnackBarContainer,
        MatSnackBarLabel,
        MatSnackBarActions,
        MatSnackBarAction
      ], exports: [MatCommonModule, MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSnackBarModule, providers: [MatSnackBar], imports: [
        OverlayModule,
        PortalModule,
        MatButtonModule,
        MatCommonModule,
        SimpleSnackBar,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSnackBarModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          OverlayModule,
          PortalModule,
          MatButtonModule,
          MatCommonModule,
          SimpleSnackBar,
          ...DIRECTIVES
        ],
        exports: [MatCommonModule, ...DIRECTIVES],
        providers: [MatSnackBar]
      }]
    }] });
  }
});

export {
  MatSnackBar,
  MatSnackBarModule,
  init_snack_bar
};
//# sourceMappingURL=chunk-CTANRZ7U.js.map
