import {
  SharedResizeObserver,
  init_private as init_private2
} from "./chunk-ML2ODG5X.js";
import {
  CdkMonitorFocus,
  CdkObserveContent,
  CdkPortal,
  CdkPortalOutlet,
  CdkScrollable,
  Directionality,
  ENTER,
  FocusKeyManager,
  FocusMonitor,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatCommonModule,
  MatRipple,
  Platform,
  SPACE,
  TemplatePortal,
  ViewportRuler,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  hasModifierKey,
  init_a11y,
  init_animation_DfMFjxHu,
  init_bidi,
  init_common_module_cKSwHniA,
  init_keycodes,
  init_observers,
  init_platform,
  init_portal,
  init_private,
  init_ripple_BYgV4oZC,
  init_scrolling,
  init_structural_styles_CObeNzjn
} from "./chunk-5C27C2Q6.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  HostAttributeToken,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  QueryList,
  Renderer2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  computed,
  core_exports,
  debounceTime,
  filter,
  forwardRef,
  init_core,
  init_esm,
  init_operators,
  inject,
  merge,
  numberAttribute,
  of,
  signal,
  skip,
  startWith,
  switchMap,
  takeUntil,
  timer,
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

// node_modules/@angular/material/fesm2022/tabs.mjs
function _MAT_INK_BAR_POSITIONER_FACTORY() {
  const method = (element) => ({
    left: element ? (element.offsetLeft || 0) + "px" : "0",
    width: element ? (element.offsetWidth || 0) + "px" : "0"
  });
  return method;
}
var MAT_TAB_CONTENT, MatTabContent, MAT_TAB_LABEL, MAT_TAB, MatTabLabel, MAT_TAB_GROUP, MatTab, ACTIVE_CLASS, NO_TRANSITION_CLASS, MatInkBar, InkBarItem, _MAT_INK_BAR_POSITIONER, MatTabLabelWrapper, passiveEventListenerOptions, HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL, MatPaginatedTabHeader, MatTabHeader, MAT_TABS_CONFIG, MatTabBodyPortal, MatTabBody, MatTabGroup, MatTabChangeEvent, MatTabNav, MatTabLink, MatTabNavPanel, MatTabsModule;
var init_tabs = __esm({
  "node_modules/@angular/material/fesm2022/tabs.mjs"() {
    "use strict";
    init_a11y();
    init_bidi();
    init_keycodes();
    init_private2();
    init_platform();
    init_scrolling();
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_animation_DfMFjxHu();
    init_portal();
    init_private();
    init_structural_styles_CObeNzjn();
    init_observers();
    init_ripple_BYgV4oZC();
    init_common_module_cKSwHniA();
    MAT_TAB_CONTENT = new InjectionToken("MatTabContent");
    MatTabContent = class _MatTabContent {
      template = inject(TemplateRef);
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTabContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatTabContent, isStandalone: true, selector: "[matTabContent]", providers: [{ provide: MAT_TAB_CONTENT, useExisting: _MatTabContent }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTabContent, decorators: [{
      type: Directive,
      args: [{
        selector: "[matTabContent]",
        providers: [{ provide: MAT_TAB_CONTENT, useExisting: MatTabContent }]
      }]
    }], ctorParameters: () => [] });
    MAT_TAB_LABEL = new InjectionToken("MatTabLabel");
    MAT_TAB = new InjectionToken("MAT_TAB");
    MatTabLabel = class _MatTabLabel extends CdkPortal {
      _closestTab = inject(MAT_TAB, { optional: true });
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTabLabel, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatTabLabel, isStandalone: true, selector: "[mat-tab-label], [matTabLabel]", providers: [{ provide: MAT_TAB_LABEL, useExisting: _MatTabLabel }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTabLabel, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-tab-label], [matTabLabel]",
        providers: [{ provide: MAT_TAB_LABEL, useExisting: MatTabLabel }]
      }]
    }] });
    MAT_TAB_GROUP = new InjectionToken("MAT_TAB_GROUP");
    MatTab = class _MatTab {
      _viewContainerRef = inject(ViewContainerRef);
      _closestTabGroup = inject(MAT_TAB_GROUP, { optional: true });
      /** whether the tab is disabled. */
      disabled = false;
      /** Content for the tab label given by `<ng-template mat-tab-label>`. */
      get templateLabel() {
        return this._templateLabel;
      }
      set templateLabel(value) {
        this._setTemplateLabelInput(value);
      }
      _templateLabel;
      /**
       * Template provided in the tab content that will be used if present, used to enable lazy-loading
       */
      _explicitContent = void 0;
      /** Template inside the MatTab view that contains an `<ng-content>`. */
      _implicitContent;
      /** Plain text label for the tab, used when there is no template label. */
      textLabel = "";
      /** Aria label for the tab. */
      ariaLabel;
      /**
       * Reference to the element that the tab is labelled by.
       * Will be cleared if `aria-label` is set at the same time.
       */
      ariaLabelledby;
      /** Classes to be passed to the tab label inside the mat-tab-header container. */
      labelClass;
      /** Classes to be passed to the tab mat-tab-body container. */
      bodyClass;
      /**
       * Custom ID for the tab, overriding the auto-generated one by Material.
       * Note that when using this input, it's your responsibility to ensure that the ID is unique.
       */
      id = null;
      /** Portal that will be the hosted content of the tab */
      _contentPortal = null;
      /** @docs-private */
      get content() {
        return this._contentPortal;
      }
      /** Emits whenever the internal state of the tab changes. */
      _stateChanges = new Subject();
      /**
       * The relatively indexed position where 0 represents the center, negative is left, and positive
       * represents the right.
       */
      position = null;
      // TODO(crisbeto): we no longer use this, but some internal apps appear to rely on it.
      /**
       * The initial relatively index origin of the tab if it was created and selected after there
       * was already a selected tab. Provides context of what position the tab should originate from.
       */
      origin = null;
      /**
       * Whether the tab is currently active.
       */
      isActive = false;
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
      }
      ngOnChanges(changes) {
        if (changes.hasOwnProperty("textLabel") || changes.hasOwnProperty("disabled")) {
          this._stateChanges.next();
        }
      }
      ngOnDestroy() {
        this._stateChanges.complete();
      }
      ngOnInit() {
        this._contentPortal = new TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
      }
      /**
       * This has been extracted to a util because of TS 4 and VE.
       * View Engine doesn't support property rename inheritance.
       * TS 4.0 doesn't allow properties to override accessors or vice-versa.
       * @docs-private
       */
      _setTemplateLabelInput(value) {
        if (value && value._closestTab === this) {
          this._templateLabel = value;
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTab, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatTab, isStandalone: true, selector: "mat-tab", inputs: { disabled: ["disabled", "disabled", booleanAttribute], textLabel: ["label", "textLabel"], ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], labelClass: "labelClass", bodyClass: "bodyClass", id: "id" }, host: { attributes: { "hidden": "" }, properties: { "attr.id": "null" } }, providers: [{ provide: MAT_TAB, useExisting: _MatTab }], queries: [{ propertyName: "templateLabel", first: true, predicate: MatTabLabel, descendants: true }, { propertyName: "_explicitContent", first: true, predicate: MatTabContent, descendants: true, read: TemplateRef, static: true }], viewQueries: [{ propertyName: "_implicitContent", first: true, predicate: TemplateRef, descendants: true, static: true }], exportAs: ["matTab"], usesOnChanges: true, ngImport: core_exports, template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n", changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTab, decorators: [{
      type: Component,
      args: [{ selector: "mat-tab", changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None, exportAs: "matTab", providers: [{ provide: MAT_TAB, useExisting: MatTab }], host: {
        // This element will be rendered on the server in order to support hydration.
        // Hide it so it doesn't cause a layout shift when it's removed on the client.
        "hidden": "",
        // Clear any custom IDs from the tab since they'll be forwarded to the actual tab.
        "[attr.id]": "null"
      }, template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n" }]
    }], ctorParameters: () => [], propDecorators: { disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], templateLabel: [{
      type: ContentChild,
      args: [MatTabLabel]
    }], _explicitContent: [{
      type: ContentChild,
      args: [MatTabContent, { read: TemplateRef, static: true }]
    }], _implicitContent: [{
      type: ViewChild,
      args: [TemplateRef, { static: true }]
    }], textLabel: [{
      type: Input,
      args: ["label"]
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], labelClass: [{
      type: Input
    }], bodyClass: [{
      type: Input
    }], id: [{
      type: Input
    }] } });
    ACTIVE_CLASS = "mdc-tab-indicator--active";
    NO_TRANSITION_CLASS = "mdc-tab-indicator--no-transition";
    MatInkBar = class {
      _items;
      /** Item to which the ink bar is aligned currently. */
      _currentItem;
      constructor(_items) {
        this._items = _items;
      }
      /** Hides the ink bar. */
      hide() {
        this._items.forEach((item) => item.deactivateInkBar());
        this._currentItem = void 0;
      }
      /** Aligns the ink bar to a DOM node. */
      alignToElement(element) {
        const correspondingItem = this._items.find((item) => item.elementRef.nativeElement === element);
        const currentItem = this._currentItem;
        if (correspondingItem === currentItem) {
          return;
        }
        currentItem?.deactivateInkBar();
        if (correspondingItem) {
          const domRect = currentItem?.elementRef.nativeElement.getBoundingClientRect?.();
          correspondingItem.activateInkBar(domRect);
          this._currentItem = correspondingItem;
        }
      }
    };
    InkBarItem = class _InkBarItem {
      _elementRef = inject(ElementRef);
      _inkBarElement;
      _inkBarContentElement;
      _fitToContent = false;
      /** Whether the ink bar should fit to the entire tab or just its content. */
      get fitInkBarToContent() {
        return this._fitToContent;
      }
      set fitInkBarToContent(newValue) {
        if (this._fitToContent !== newValue) {
          this._fitToContent = newValue;
          if (this._inkBarElement) {
            this._appendInkBarElement();
          }
        }
      }
      /** Aligns the ink bar to the current item. */
      activateInkBar(previousIndicatorClientRect) {
        const element = this._elementRef.nativeElement;
        if (!previousIndicatorClientRect || !element.getBoundingClientRect || !this._inkBarContentElement) {
          element.classList.add(ACTIVE_CLASS);
          return;
        }
        const currentClientRect = element.getBoundingClientRect();
        const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
        const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
        element.classList.add(NO_TRANSITION_CLASS);
        this._inkBarContentElement.style.setProperty("transform", `translateX(${xPosition}px) scaleX(${widthDelta})`);
        element.getBoundingClientRect();
        element.classList.remove(NO_TRANSITION_CLASS);
        element.classList.add(ACTIVE_CLASS);
        this._inkBarContentElement.style.setProperty("transform", "");
      }
      /** Removes the ink bar from the current item. */
      deactivateInkBar() {
        this._elementRef.nativeElement.classList.remove(ACTIVE_CLASS);
      }
      /** Initializes the foundation. */
      ngOnInit() {
        this._createInkBarElement();
      }
      /** Destroys the foundation. */
      ngOnDestroy() {
        this._inkBarElement?.remove();
        this._inkBarElement = this._inkBarContentElement = null;
      }
      /** Creates and appends the ink bar element. */
      _createInkBarElement() {
        const documentNode = this._elementRef.nativeElement.ownerDocument || document;
        const inkBarElement = this._inkBarElement = documentNode.createElement("span");
        const inkBarContentElement = this._inkBarContentElement = documentNode.createElement("span");
        inkBarElement.className = "mdc-tab-indicator";
        inkBarContentElement.className = "mdc-tab-indicator__content mdc-tab-indicator__content--underline";
        inkBarElement.appendChild(this._inkBarContentElement);
        this._appendInkBarElement();
      }
      /**
       * Appends the ink bar to the tab host element or content, depending on whether
       * the ink bar should fit to content.
       */
      _appendInkBarElement() {
        if (!this._inkBarElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("Ink bar element has not been created and cannot be appended");
        }
        const parentElement = this._fitToContent ? this._elementRef.nativeElement.querySelector(".mdc-tab__content") : this._elementRef.nativeElement;
        if (!parentElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("Missing element to host the ink bar");
        }
        parentElement.appendChild(this._inkBarElement);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _InkBarItem, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _InkBarItem, isStandalone: true, inputs: { fitInkBarToContent: ["fitInkBarToContent", "fitInkBarToContent", booleanAttribute] }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: InkBarItem, decorators: [{
      type: Directive
    }], propDecorators: { fitInkBarToContent: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    _MAT_INK_BAR_POSITIONER = new InjectionToken("MatInkBarPositioner", {
      providedIn: "root",
      factory: _MAT_INK_BAR_POSITIONER_FACTORY
    });
    MatTabLabelWrapper = class _MatTabLabelWrapper extends InkBarItem {
      elementRef = inject(ElementRef);
      /** Whether the tab is disabled. */
      disabled = false;
      /** Sets focus on the wrapper element */
      focus() {
        this.elementRef.nativeElement.focus();
      }
      getOffsetLeft() {
        return this.elementRef.nativeElement.offsetLeft;
      }
      getOffsetWidth() {
        return this.elementRef.nativeElement.offsetWidth;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTabLabelWrapper, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatTabLabelWrapper, isStandalone: true, selector: "[matTabLabelWrapper]", inputs: { disabled: ["disabled", "disabled", booleanAttribute] }, host: { properties: { "class.mat-mdc-tab-disabled": "disabled", "attr.aria-disabled": "!!disabled" } }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTabLabelWrapper, decorators: [{
      type: Directive,
      args: [{
        selector: "[matTabLabelWrapper]",
        host: {
          "[class.mat-mdc-tab-disabled]": "disabled",
          "[attr.aria-disabled]": "!!disabled"
        }
      }]
    }], propDecorators: { disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    passiveEventListenerOptions = {
      passive: true
    };
    HEADER_SCROLL_DELAY = 650;
    HEADER_SCROLL_INTERVAL = 100;
    MatPaginatedTabHeader = class _MatPaginatedTabHeader {
      _elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _viewportRuler = inject(ViewportRuler);
      _dir = inject(Directionality, { optional: true });
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _sharedResizeObserver = inject(SharedResizeObserver);
      _injector = inject(Injector);
      _renderer = inject(Renderer2);
      _animationsDisabled = _animationsDisabled();
      _eventCleanups;
      /** The distance in pixels that the tab labels should be translated to the left. */
      _scrollDistance = 0;
      /** Whether the header should scroll to the selected index after the view has been checked. */
      _selectedIndexChanged = false;
      /** Emits when the component is destroyed. */
      _destroyed = new Subject();
      /** Whether the controls for pagination should be displayed */
      _showPaginationControls = false;
      /** Whether the tab list can be scrolled more towards the end of the tab label list. */
      _disableScrollAfter = true;
      /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
      _disableScrollBefore = true;
      /**
       * The number of tab labels that are displayed on the header. When this changes, the header
       * should re-evaluate the scroll position.
       */
      _tabLabelCount;
      /** Whether the scroll distance has changed and should be applied after the view is checked. */
      _scrollDistanceChanged;
      /** Used to manage focus between the tabs. */
      _keyManager;
      /** Cached text content of the header. */
      _currentTextContent;
      /** Stream that will stop the automated scrolling. */
      _stopScrolling = new Subject();
      /**
       * Whether pagination should be disabled. This can be used to avoid unnecessary
       * layout recalculations if it's known that pagination won't be required.
       */
      disablePagination = false;
      /** The index of the active tab. */
      get selectedIndex() {
        return this._selectedIndex;
      }
      set selectedIndex(v) {
        const value = isNaN(v) ? 0 : v;
        if (this._selectedIndex != value) {
          this._selectedIndexChanged = true;
          this._selectedIndex = value;
          if (this._keyManager) {
            this._keyManager.updateActiveItem(value);
          }
        }
      }
      _selectedIndex = 0;
      /** Event emitted when the option is selected. */
      selectFocusedIndex = new EventEmitter();
      /** Event emitted when a label is focused. */
      indexFocused = new EventEmitter();
      constructor() {
        this._eventCleanups = this._ngZone.runOutsideAngular(() => [
          this._renderer.listen(this._elementRef.nativeElement, "mouseleave", () => this._stopInterval())
        ]);
      }
      ngAfterViewInit() {
        this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("before"), passiveEventListenerOptions), this._renderer.listen(this._nextPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("after"), passiveEventListenerOptions));
      }
      ngAfterContentInit() {
        const dirChange = this._dir ? this._dir.change : of("ltr");
        const resize = this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(debounceTime(32), takeUntil(this._destroyed));
        const viewportResize = this._viewportRuler.change(150).pipe(takeUntil(this._destroyed));
        const realign = () => {
          this.updatePagination();
          this._alignInkBarToSelectedTab();
        };
        this._keyManager = new FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(() => false);
        this._keyManager.updateActiveItem(Math.max(this._selectedIndex, 0));
        afterNextRender(realign, { injector: this._injector });
        merge(dirChange, viewportResize, resize, this._items.changes, this._itemsResized()).pipe(takeUntil(this._destroyed)).subscribe(() => {
          this._ngZone.run(() => {
            Promise.resolve().then(() => {
              this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
              realign();
            });
          });
          this._keyManager?.withHorizontalOrientation(this._getLayoutDirection());
        });
        this._keyManager.change.subscribe((newFocusIndex) => {
          this.indexFocused.emit(newFocusIndex);
          this._setTabFocus(newFocusIndex);
        });
      }
      /** Sends any changes that could affect the layout of the items. */
      _itemsResized() {
        if (typeof ResizeObserver !== "function") {
          return EMPTY;
        }
        return this._items.changes.pipe(
          startWith(this._items),
          switchMap((tabItems) => new Observable((observer) => this._ngZone.runOutsideAngular(() => {
            const resizeObserver = new ResizeObserver((entries) => observer.next(entries));
            tabItems.forEach((item) => resizeObserver.observe(item.elementRef.nativeElement));
            return () => {
              resizeObserver.disconnect();
            };
          }))),
          // Skip the first emit since the resize observer emits when an item
          // is observed for new items when the tab is already inserted
          skip(1),
          // Skip emissions where all the elements are invisible since we don't want
          // the header to try and re-render with invalid measurements. See #25574.
          filter((entries) => entries.some((e) => e.contentRect.width > 0 && e.contentRect.height > 0))
        );
      }
      ngAfterContentChecked() {
        if (this._tabLabelCount != this._items.length) {
          this.updatePagination();
          this._tabLabelCount = this._items.length;
          this._changeDetectorRef.markForCheck();
        }
        if (this._selectedIndexChanged) {
          this._scrollToLabel(this._selectedIndex);
          this._checkScrollingControls();
          this._alignInkBarToSelectedTab();
          this._selectedIndexChanged = false;
          this._changeDetectorRef.markForCheck();
        }
        if (this._scrollDistanceChanged) {
          this._updateTabScrollPosition();
          this._scrollDistanceChanged = false;
          this._changeDetectorRef.markForCheck();
        }
      }
      ngOnDestroy() {
        this._eventCleanups.forEach((cleanup) => cleanup());
        this._keyManager?.destroy();
        this._destroyed.next();
        this._destroyed.complete();
        this._stopScrolling.complete();
      }
      /** Handles keyboard events on the header. */
      _handleKeydown(event) {
        if (hasModifierKey(event)) {
          return;
        }
        switch (event.keyCode) {
          case ENTER:
          case SPACE:
            if (this.focusIndex !== this.selectedIndex) {
              const item = this._items.get(this.focusIndex);
              if (item && !item.disabled) {
                this.selectFocusedIndex.emit(this.focusIndex);
                this._itemSelected(event);
              }
            }
            break;
          default:
            this._keyManager?.onKeydown(event);
        }
      }
      /**
       * Callback for when the MutationObserver detects that the content has changed.
       */
      _onContentChanges() {
        const textContent = this._elementRef.nativeElement.textContent;
        if (textContent !== this._currentTextContent) {
          this._currentTextContent = textContent || "";
          this._ngZone.run(() => {
            this.updatePagination();
            this._alignInkBarToSelectedTab();
            this._changeDetectorRef.markForCheck();
          });
        }
      }
      /**
       * Updates the view whether pagination should be enabled or not.
       *
       * WARNING: Calling this method can be very costly in terms of performance. It should be called
       * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
       * page.
       */
      updatePagination() {
        this._checkPaginationEnabled();
        this._checkScrollingControls();
        this._updateTabScrollPosition();
      }
      /** Tracks which element has focus; used for keyboard navigation */
      get focusIndex() {
        return this._keyManager ? this._keyManager.activeItemIndex : 0;
      }
      /** When the focus index is set, we must manually send focus to the correct label */
      set focusIndex(value) {
        if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
          return;
        }
        this._keyManager.setActiveItem(value);
      }
      /**
       * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
       * providing a valid index and return true.
       */
      _isValidIndex(index) {
        return this._items ? !!this._items.toArray()[index] : true;
      }
      /**
       * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
       * scrolling is enabled.
       */
      _setTabFocus(tabIndex) {
        if (this._showPaginationControls) {
          this._scrollToLabel(tabIndex);
        }
        if (this._items && this._items.length) {
          this._items.toArray()[tabIndex].focus();
          const containerEl = this._tabListContainer.nativeElement;
          const dir = this._getLayoutDirection();
          if (dir == "ltr") {
            containerEl.scrollLeft = 0;
          } else {
            containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
          }
        }
      }
      /** The layout direction of the containing app. */
      _getLayoutDirection() {
        return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
      }
      /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
      _updateTabScrollPosition() {
        if (this.disablePagination) {
          return;
        }
        const scrollDistance = this.scrollDistance;
        const translateX = this._getLayoutDirection() === "ltr" ? -scrollDistance : scrollDistance;
        this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
        if (this._platform.TRIDENT || this._platform.EDGE) {
          this._tabListContainer.nativeElement.scrollLeft = 0;
        }
      }
      /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
      get scrollDistance() {
        return this._scrollDistance;
      }
      set scrollDistance(value) {
        this._scrollTo(value);
      }
      /**
       * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
       * the end of the list, respectively). The distance to scroll is computed to be a third of the
       * length of the tab list view window.
       *
       * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
       * should be called sparingly.
       */
      _scrollHeader(direction) {
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        const scrollAmount = (direction == "before" ? -1 : 1) * viewLength / 3;
        return this._scrollTo(this._scrollDistance + scrollAmount);
      }
      /** Handles click events on the pagination arrows. */
      _handlePaginatorClick(direction) {
        this._stopInterval();
        this._scrollHeader(direction);
      }
      /**
       * Moves the tab list such that the desired tab label (marked by index) is moved into view.
       *
       * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
       * should be called sparingly.
       */
      _scrollToLabel(labelIndex) {
        if (this.disablePagination) {
          return;
        }
        const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
        if (!selectedLabel) {
          return;
        }
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        const { offsetLeft, offsetWidth } = selectedLabel.elementRef.nativeElement;
        let labelBeforePos, labelAfterPos;
        if (this._getLayoutDirection() == "ltr") {
          labelBeforePos = offsetLeft;
          labelAfterPos = labelBeforePos + offsetWidth;
        } else {
          labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
          labelBeforePos = labelAfterPos - offsetWidth;
        }
        const beforeVisiblePos = this.scrollDistance;
        const afterVisiblePos = this.scrollDistance + viewLength;
        if (labelBeforePos < beforeVisiblePos) {
          this.scrollDistance -= beforeVisiblePos - labelBeforePos;
        } else if (labelAfterPos > afterVisiblePos) {
          this.scrollDistance += Math.min(labelAfterPos - afterVisiblePos, labelBeforePos - beforeVisiblePos);
        }
      }
      /**
       * Evaluate whether the pagination controls should be displayed. If the scroll width of the
       * tab list is wider than the size of the header container, then the pagination controls should
       * be shown.
       *
       * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
       * should be called sparingly.
       */
      _checkPaginationEnabled() {
        if (this.disablePagination) {
          this._showPaginationControls = false;
        } else {
          const scrollWidth = this._tabListInner.nativeElement.scrollWidth;
          const containerWidth = this._elementRef.nativeElement.offsetWidth;
          const isEnabled = scrollWidth - containerWidth >= 5;
          if (!isEnabled) {
            this.scrollDistance = 0;
          }
          if (isEnabled !== this._showPaginationControls) {
            this._showPaginationControls = isEnabled;
            this._changeDetectorRef.markForCheck();
          }
        }
      }
      /**
       * Evaluate whether the before and after controls should be enabled or disabled.
       * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
       * before button. If the header is at the end of the list (scroll distance is equal to the
       * maximum distance we can scroll), then disable the after button.
       *
       * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
       * should be called sparingly.
       */
      _checkScrollingControls() {
        if (this.disablePagination) {
          this._disableScrollAfter = this._disableScrollBefore = true;
        } else {
          this._disableScrollBefore = this.scrollDistance == 0;
          this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
          this._changeDetectorRef.markForCheck();
        }
      }
      /**
       * Determines what is the maximum length in pixels that can be set for the scroll distance. This
       * is equal to the difference in width between the tab list container and tab header container.
       *
       * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
       * should be called sparingly.
       */
      _getMaxScrollDistance() {
        const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        return lengthOfTabList - viewLength || 0;
      }
      /** Tells the ink-bar to align itself to the current label wrapper */
      _alignInkBarToSelectedTab() {
        const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
        const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
        if (selectedLabelWrapper) {
          this._inkBar.alignToElement(selectedLabelWrapper);
        } else {
          this._inkBar.hide();
        }
      }
      /** Stops the currently-running paginator interval.  */
      _stopInterval() {
        this._stopScrolling.next();
      }
      /**
       * Handles the user pressing down on one of the paginators.
       * Starts scrolling the header after a certain amount of time.
       * @param direction In which direction the paginator should be scrolled.
       */
      _handlePaginatorPress(direction, mouseEvent) {
        if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
          return;
        }
        this._stopInterval();
        timer(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL).pipe(takeUntil(merge(this._stopScrolling, this._destroyed))).subscribe(() => {
          const { maxScrollDistance, distance } = this._scrollHeader(direction);
          if (distance === 0 || distance >= maxScrollDistance) {
            this._stopInterval();
          }
        });
      }
      /**
       * Scrolls the header to a given position.
       * @param position Position to which to scroll.
       * @returns Information on the current scroll distance and the maximum.
       */
      _scrollTo(position) {
        if (this.disablePagination) {
          return { maxScrollDistance: 0, distance: 0 };
        }
        const maxScrollDistance = this._getMaxScrollDistance();
        this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
        this._scrollDistanceChanged = true;
        this._checkScrollingControls();
        return { maxScrollDistance, distance: this._scrollDistance };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPaginatedTabHeader, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatPaginatedTabHeader, isStandalone: true, inputs: { disablePagination: ["disablePagination", "disablePagination", booleanAttribute], selectedIndex: ["selectedIndex", "selectedIndex", numberAttribute] }, outputs: { selectFocusedIndex: "selectFocusedIndex", indexFocused: "indexFocused" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatPaginatedTabHeader, decorators: [{
      type: Directive
    }], ctorParameters: () => [], propDecorators: { disablePagination: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], selectedIndex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], selectFocusedIndex: [{
      type: Output
    }], indexFocused: [{
      type: Output
    }] } });
    MatTabHeader = class _MatTabHeader extends MatPaginatedTabHeader {
      _items;
      _tabListContainer;
      _tabList;
      _tabListInner;
      _nextPaginator;
      _previousPaginator;
      _inkBar;
      /** Aria label of the header. */
      ariaLabel;
      /** Sets the `aria-labelledby` of the header. */
      ariaLabelledby;
      /** Whether the ripple effect is disabled or not. */
      disableRipple = false;
      ngAfterContentInit() {
        this._inkBar = new MatInkBar(this._items);
        super.ngAfterContentInit();
      }
      _itemSelected(event) {
        event.preventDefault();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTabHeader, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatTabHeader, isStandalone: true, selector: "mat-tab-header", inputs: { ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], disableRipple: ["disableRipple", "disableRipple", booleanAttribute] }, host: { properties: { "class.mat-mdc-tab-header-pagination-controls-enabled": "_showPaginationControls", "class.mat-mdc-tab-header-rtl": "_getLayoutDirection() == 'rtl'" }, classAttribute: "mat-mdc-tab-header" }, queries: [{ propertyName: "_items", predicate: MatTabLabelWrapper }], viewQueries: [{ propertyName: "_tabListContainer", first: true, predicate: ["tabListContainer"], descendants: true, static: true }, { propertyName: "_tabList", first: true, predicate: ["tabList"], descendants: true, static: true }, { propertyName: "_tabListInner", first: true, predicate: ["tabListInner"], descendants: true, static: true }, { propertyName: "_nextPaginator", first: true, predicate: ["nextPaginator"], descendants: true }, { propertyName: "_previousPaginator", first: true, predicate: ["previousPaginator"], descendants: true }], usesInheritance: true, ngImport: core_exports, template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div
  class="mat-mdc-tab-label-container"
  #tabListContainer
  (keydown)="_handleKeydown($event)"
  [class._mat-animation-noopable]="_animationsDisabled">
  <div
    #tabList
    class="mat-mdc-tab-list"
    role="tablist"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-labels" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`, styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-divider-height, 1px);border-top-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab::before{margin:5px}@media(forced-colors: active){.mat-mdc-tab[aria-disabled=true]{color:GrayText}}\n"], dependencies: [{ kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTabHeader, decorators: [{
      type: Component,
      args: [{ selector: "mat-tab-header", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, host: {
        "class": "mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'"
      }, imports: [MatRipple, CdkObserveContent], template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div
  class="mat-mdc-tab-label-container"
  #tabListContainer
  (keydown)="_handleKeydown($event)"
  [class._mat-animation-noopable]="_animationsDisabled">
  <div
    #tabList
    class="mat-mdc-tab-list"
    role="tablist"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-labels" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`, styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-divider-height, 1px);border-top-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab::before{margin:5px}@media(forced-colors: active){.mat-mdc-tab[aria-disabled=true]{color:GrayText}}\n"] }]
    }], propDecorators: { _items: [{
      type: ContentChildren,
      args: [MatTabLabelWrapper, { descendants: false }]
    }], _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", { static: true }]
    }], _tabList: [{
      type: ViewChild,
      args: ["tabList", { static: true }]
    }], _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", { static: true }]
    }], _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }], _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MAT_TABS_CONFIG = new InjectionToken("MAT_TABS_CONFIG");
    MatTabBodyPortal = class _MatTabBodyPortal extends CdkPortalOutlet {
      _host = inject(MatTabBody);
      /** Subscription to events for when the tab body begins centering. */
      _centeringSub = Subscription.EMPTY;
      /** Subscription to events for when the tab body finishes leaving from center position. */
      _leavingSub = Subscription.EMPTY;
      constructor() {
        super();
      }
      /** Set initial visibility or set up subscription for changing visibility. */
      ngOnInit() {
        super.ngOnInit();
        this._centeringSub = this._host._beforeCentering.pipe(startWith(this._host._isCenterPosition())).subscribe((isCentering) => {
          if (this._host._content && isCentering && !this.hasAttached()) {
            this.attach(this._host._content);
          }
        });
        this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
          if (!this._host.preserveContent) {
            this.detach();
          }
        });
      }
      /** Clean up centering subscription. */
      ngOnDestroy() {
        super.ngOnDestroy();
        this._centeringSub.unsubscribe();
        this._leavingSub.unsubscribe();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTabBodyPortal, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatTabBodyPortal, isStandalone: true, selector: "[matTabBodyHost]", usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTabBodyPortal, decorators: [{
      type: Directive,
      args: [{ selector: "[matTabBodyHost]" }]
    }], ctorParameters: () => [] });
    MatTabBody = class _MatTabBody {
      _elementRef = inject(ElementRef);
      _dir = inject(Directionality, { optional: true });
      _ngZone = inject(NgZone);
      _injector = inject(Injector);
      _renderer = inject(Renderer2);
      _diAnimationsDisabled = _animationsDisabled();
      _eventCleanups;
      _initialized;
      _fallbackTimer;
      /** Current position of the tab-body in the tab-group. Zero means that the tab is visible. */
      _positionIndex;
      /** Subscription to the directionality change observable. */
      _dirChangeSubscription = Subscription.EMPTY;
      /** Current position of the body within the tab group. */
      _position;
      /** Previous position of the body. */
      _previousPosition;
      /** Event emitted when the tab begins to animate towards the center as the active tab. */
      _onCentering = new EventEmitter();
      /** Event emitted before the centering of the tab begins. */
      _beforeCentering = new EventEmitter();
      /** Event emitted before the centering of the tab begins. */
      _afterLeavingCenter = new EventEmitter();
      /** Event emitted when the tab completes its animation towards the center. */
      _onCentered = new EventEmitter(true);
      /** The portal host inside of this container into which the tab body content will be loaded. */
      _portalHost;
      /** Element in which the content is rendered. */
      _contentElement;
      /** The tab body content to display. */
      _content;
      // Note that the default value will always be overwritten by `MatTabBody`, but we need one
      // anyway to prevent the animations module from throwing an error if the body is used on its own.
      /** Duration for the tab's animation. */
      animationDuration = "500ms";
      /** Whether the tab's content should be kept in the DOM while it's off-screen. */
      preserveContent = false;
      /** The shifted index position of the tab body, where zero represents the active center tab. */
      set position(position) {
        this._positionIndex = position;
        this._computePositionAnimationState();
      }
      constructor() {
        if (this._dir) {
          const changeDetectorRef = inject(ChangeDetectorRef);
          this._dirChangeSubscription = this._dir.change.subscribe((dir) => {
            this._computePositionAnimationState(dir);
            changeDetectorRef.markForCheck();
          });
        }
      }
      ngOnInit() {
        this._bindTransitionEvents();
        if (this._position === "center") {
          this._setActiveClass(true);
          afterNextRender(() => this._onCentering.emit(this._elementRef.nativeElement.clientHeight), {
            injector: this._injector
          });
        }
        this._initialized = true;
      }
      ngOnDestroy() {
        clearTimeout(this._fallbackTimer);
        this._eventCleanups?.forEach((cleanup) => cleanup());
        this._dirChangeSubscription.unsubscribe();
      }
      /** Sets up the transition events. */
      _bindTransitionEvents() {
        this._ngZone.runOutsideAngular(() => {
          const element = this._elementRef.nativeElement;
          const transitionDone = (event) => {
            if (event.target === this._contentElement?.nativeElement) {
              this._elementRef.nativeElement.classList.remove("mat-tab-body-animating");
              if (event.type === "transitionend") {
                this._transitionDone();
              }
            }
          };
          this._eventCleanups = [
            this._renderer.listen(element, "transitionstart", (event) => {
              if (event.target === this._contentElement?.nativeElement) {
                this._elementRef.nativeElement.classList.add("mat-tab-body-animating");
                this._transitionStarted();
              }
            }),
            this._renderer.listen(element, "transitionend", transitionDone),
            this._renderer.listen(element, "transitioncancel", transitionDone)
          ];
        });
      }
      /** Called when a transition has started. */
      _transitionStarted() {
        clearTimeout(this._fallbackTimer);
        const isCentering = this._position === "center";
        this._beforeCentering.emit(isCentering);
        if (isCentering) {
          this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
        }
      }
      /** Called when a transition is done. */
      _transitionDone() {
        if (this._position === "center") {
          this._onCentered.emit();
        } else if (this._previousPosition === "center") {
          this._afterLeavingCenter.emit();
        }
      }
      /** Sets the active styling on the tab body based on its current position. */
      _setActiveClass(isActive) {
        this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active", isActive);
      }
      /** The text direction of the containing app. */
      _getLayoutDirection() {
        return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
      }
      /** Whether the provided position state is considered center, regardless of origin. */
      _isCenterPosition() {
        return this._positionIndex === 0;
      }
      /** Computes the position state that will be used for the tab-body animation trigger. */
      _computePositionAnimationState(dir = this._getLayoutDirection()) {
        this._previousPosition = this._position;
        if (this._positionIndex < 0) {
          this._position = dir == "ltr" ? "left" : "right";
        } else if (this._positionIndex > 0) {
          this._position = dir == "ltr" ? "right" : "left";
        } else {
          this._position = "center";
        }
        if (this._animationsDisabled()) {
          this._simulateTransitionEvents();
        } else if (this._initialized && (this._position === "center" || this._previousPosition === "center")) {
          clearTimeout(this._fallbackTimer);
          this._fallbackTimer = this._ngZone.runOutsideAngular(() => setTimeout(() => this._simulateTransitionEvents(), 100));
        }
      }
      /** Simulates the body's transition events in an environment where they might not fire. */
      _simulateTransitionEvents() {
        this._transitionStarted();
        afterNextRender(() => this._transitionDone(), { injector: this._injector });
      }
      /** Whether animations are disabled for the tab group. */
      _animationsDisabled() {
        return this._diAnimationsDisabled || this.animationDuration === "0ms" || this.animationDuration === "0s";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTabBody, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatTabBody, isStandalone: true, selector: "mat-tab-body", inputs: { _content: ["content", "_content"], animationDuration: "animationDuration", preserveContent: "preserveContent", position: "position" }, outputs: { _onCentering: "_onCentering", _beforeCentering: "_beforeCentering", _onCentered: "_onCentered" }, host: { properties: { "attr.inert": '_position === "center" ? null : ""' }, classAttribute: "mat-mdc-tab-body" }, viewQueries: [{ propertyName: "_portalHost", first: true, predicate: MatTabBodyPortal, descendants: true }, { propertyName: "_contentElement", first: true, predicate: ["content"], descendants: true }], ngImport: core_exports, template: `<div
   class="mat-mdc-tab-body-content"
   #content
   cdkScrollable
   [class.mat-tab-body-content-left]="_position === 'left'"
   [class.mat-tab-body-content-right]="_position === 'right'"
   [class.mat-tab-body-content-can-animate]="_position === 'center' || _previousPosition === 'center'">
  <ng-template matTabBodyHost></ng-template>
</div>
`, styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto;transform:none;visibility:hidden}.mat-tab-body-animating>.mat-mdc-tab-body-content,.mat-mdc-tab-body-active>.mat-mdc-tab-body-content{visibility:visible}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-tab-body-content-can-animate{transition:transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate{transition:none}.mat-tab-body-content-left{transform:translate3d(-100%, 0, 0)}.mat-tab-body-content-right{transform:translate3d(100%, 0, 0)}\n"], dependencies: [{ kind: "directive", type: MatTabBodyPortal, selector: "[matTabBodyHost]" }, { kind: "directive", type: CdkScrollable, selector: "[cdk-scrollable], [cdkScrollable]" }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTabBody, decorators: [{
      type: Component,
      args: [{ selector: "mat-tab-body", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, host: {
        "class": "mat-mdc-tab-body",
        // In most cases the `visibility: hidden` that we set on the off-screen content is enough
        // to stop interactions with it, but if a child element sets its own `visibility`, it'll
        // override the one from the parent. This ensures that even those elements will be removed
        // from the accessibility tree.
        "[attr.inert]": '_position === "center" ? null : ""'
      }, imports: [MatTabBodyPortal, CdkScrollable], template: `<div
   class="mat-mdc-tab-body-content"
   #content
   cdkScrollable
   [class.mat-tab-body-content-left]="_position === 'left'"
   [class.mat-tab-body-content-right]="_position === 'right'"
   [class.mat-tab-body-content-can-animate]="_position === 'center' || _previousPosition === 'center'">
  <ng-template matTabBodyHost></ng-template>
</div>
`, styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto;transform:none;visibility:hidden}.mat-tab-body-animating>.mat-mdc-tab-body-content,.mat-mdc-tab-body-active>.mat-mdc-tab-body-content{visibility:visible}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-tab-body-content-can-animate{transition:transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate{transition:none}.mat-tab-body-content-left{transform:translate3d(-100%, 0, 0)}.mat-tab-body-content-right{transform:translate3d(100%, 0, 0)}\n"] }]
    }], ctorParameters: () => [], propDecorators: { _onCentering: [{
      type: Output
    }], _beforeCentering: [{
      type: Output
    }], _onCentered: [{
      type: Output
    }], _portalHost: [{
      type: ViewChild,
      args: [MatTabBodyPortal]
    }], _contentElement: [{
      type: ViewChild,
      args: ["content"]
    }], _content: [{
      type: Input,
      args: ["content"]
    }], animationDuration: [{
      type: Input
    }], preserveContent: [{
      type: Input
    }], position: [{
      type: Input
    }] } });
    MatTabGroup = class _MatTabGroup {
      _elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _ngZone = inject(NgZone);
      _tabsSubscription = Subscription.EMPTY;
      _tabLabelSubscription = Subscription.EMPTY;
      _tabBodySubscription = Subscription.EMPTY;
      _diAnimationsDisabled = _animationsDisabled();
      /**
       * All tabs inside the tab group. This includes tabs that belong to groups that are nested
       * inside the current one. We filter out only the tabs that belong to this group in `_tabs`.
       */
      _allTabs;
      _tabBodies;
      _tabBodyWrapper;
      _tabHeader;
      /** All of the tabs that belong to the group. */
      _tabs = new QueryList();
      /** The tab index that should be selected after the content has been checked. */
      _indexToSelect = 0;
      /** Index of the tab that was focused last. */
      _lastFocusedTabIndex = null;
      /** Snapshot of the height of the tab body wrapper before another tab is activated. */
      _tabBodyWrapperHeight = 0;
      /**
       * Theme color of the tab group. This API is supported in M2 themes only, it
       * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/tabs/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /** Whether the ink bar should fit its width to the size of the tab label content. */
      get fitInkBarToContent() {
        return this._fitInkBarToContent;
      }
      set fitInkBarToContent(value) {
        this._fitInkBarToContent = value;
        this._changeDetectorRef.markForCheck();
      }
      _fitInkBarToContent = false;
      /** Whether tabs should be stretched to fill the header. */
      stretchTabs = true;
      /** Alignment for tabs label. */
      alignTabs = null;
      /** Whether the tab group should grow to the size of the active tab. */
      dynamicHeight = false;
      /** The index of the active tab. */
      get selectedIndex() {
        return this._selectedIndex;
      }
      set selectedIndex(value) {
        this._indexToSelect = isNaN(value) ? null : value;
      }
      _selectedIndex = null;
      /** Position of the tab header. */
      headerPosition = "above";
      /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
      get animationDuration() {
        return this._animationDuration;
      }
      set animationDuration(value) {
        const stringValue = value + "";
        this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
      }
      _animationDuration;
      /**
       * `tabindex` to be set on the inner element that wraps the tab content. Can be used for improved
       * accessibility when the tab does not have focusable elements or if it has scrollable content.
       * The `tabindex` will be removed automatically for inactive tabs.
       * Read more at https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
       */
      get contentTabIndex() {
        return this._contentTabIndex;
      }
      set contentTabIndex(value) {
        this._contentTabIndex = isNaN(value) ? null : value;
      }
      _contentTabIndex;
      /**
       * Whether pagination should be disabled. This can be used to avoid unnecessary
       * layout recalculations if it's known that pagination won't be required.
       */
      disablePagination = false;
      /** Whether ripples in the tab group are disabled. */
      disableRipple = false;
      /**
       * By default tabs remove their content from the DOM while it's off-screen.
       * Setting this to `true` will keep it in the DOM which will prevent elements
       * like iframes and videos from reloading next time it comes back into the view.
       */
      preserveContent = false;
      /**
       * Theme color of the background of the tab group. This API is supported in M2 themes only, it
       * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/tabs/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       *
       * @deprecated The background color should be customized through Sass theming APIs.
       * @breaking-change 20.0.0 Remove this input
       */
      get backgroundColor() {
        return this._backgroundColor;
      }
      set backgroundColor(value) {
        const classList = this._elementRef.nativeElement.classList;
        classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
        if (value) {
          classList.add("mat-tabs-with-background", `mat-background-${value}`);
        }
        this._backgroundColor = value;
      }
      _backgroundColor;
      /** Aria label of the inner `tablist` of the group. */
      ariaLabel;
      /** Sets the `aria-labelledby` of the inner `tablist` of the group. */
      ariaLabelledby;
      /** Output to enable support for two-way binding on `[(selectedIndex)]` */
      selectedIndexChange = new EventEmitter();
      /** Event emitted when focus has changed within a tab group. */
      focusChange = new EventEmitter();
      /** Event emitted when the body animation has completed */
      animationDone = new EventEmitter();
      /** Event emitted when the tab selection has changed. */
      selectedTabChange = new EventEmitter(true);
      _groupId;
      /** Whether the tab group is rendered on the server. */
      _isServer = !inject(Platform).isBrowser;
      constructor() {
        const defaultConfig = inject(MAT_TABS_CONFIG, { optional: true });
        this._groupId = inject(_IdGenerator).getId("mat-tab-group-");
        this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : "500ms";
        this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
        this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
        if (defaultConfig?.contentTabIndex != null) {
          this.contentTabIndex = defaultConfig.contentTabIndex;
        }
        this.preserveContent = !!defaultConfig?.preserveContent;
        this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
        this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
        this.alignTabs = defaultConfig && defaultConfig.alignTabs != null ? defaultConfig.alignTabs : null;
      }
      /**
       * After the content is checked, this component knows what tabs have been defined
       * and what the selected index should be. This is where we can know exactly what position
       * each tab should be in according to the new selected index, and additionally we know how
       * a new selected tab should transition in (from the left or right).
       */
      ngAfterContentChecked() {
        const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
        if (this._selectedIndex != indexToSelect) {
          const isFirstRun = this._selectedIndex == null;
          if (!isFirstRun) {
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
            const wrapper = this._tabBodyWrapper.nativeElement;
            wrapper.style.minHeight = wrapper.clientHeight + "px";
          }
          Promise.resolve().then(() => {
            this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
            if (!isFirstRun) {
              this.selectedIndexChange.emit(indexToSelect);
              this._tabBodyWrapper.nativeElement.style.minHeight = "";
            }
          });
        }
        this._tabs.forEach((tab, index) => {
          tab.position = index - indexToSelect;
          if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
            tab.origin = indexToSelect - this._selectedIndex;
          }
        });
        if (this._selectedIndex !== indexToSelect) {
          this._selectedIndex = indexToSelect;
          this._lastFocusedTabIndex = null;
          this._changeDetectorRef.markForCheck();
        }
      }
      ngAfterContentInit() {
        this._subscribeToAllTabChanges();
        this._subscribeToTabLabels();
        this._tabsSubscription = this._tabs.changes.subscribe(() => {
          const indexToSelect = this._clampTabIndex(this._indexToSelect);
          if (indexToSelect === this._selectedIndex) {
            const tabs = this._tabs.toArray();
            let selectedTab;
            for (let i = 0; i < tabs.length; i++) {
              if (tabs[i].isActive) {
                this._indexToSelect = this._selectedIndex = i;
                this._lastFocusedTabIndex = null;
                selectedTab = tabs[i];
                break;
              }
            }
            if (!selectedTab && tabs[indexToSelect]) {
              Promise.resolve().then(() => {
                tabs[indexToSelect].isActive = true;
                this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
              });
            }
          }
          this._changeDetectorRef.markForCheck();
        });
      }
      ngAfterViewInit() {
        this._tabBodySubscription = this._tabBodies.changes.subscribe(() => this._bodyCentered(true));
      }
      /** Listens to changes in all of the tabs. */
      _subscribeToAllTabChanges() {
        this._allTabs.changes.pipe(startWith(this._allTabs)).subscribe((tabs) => {
          this._tabs.reset(tabs.filter((tab) => {
            return tab._closestTabGroup === this || !tab._closestTabGroup;
          }));
          this._tabs.notifyOnChanges();
        });
      }
      ngOnDestroy() {
        this._tabs.destroy();
        this._tabsSubscription.unsubscribe();
        this._tabLabelSubscription.unsubscribe();
        this._tabBodySubscription.unsubscribe();
      }
      /** Re-aligns the ink bar to the selected tab element. */
      realignInkBar() {
        if (this._tabHeader) {
          this._tabHeader._alignInkBarToSelectedTab();
        }
      }
      /**
       * Recalculates the tab group's pagination dimensions.
       *
       * WARNING: Calling this method can be very costly in terms of performance. It should be called
       * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
       * page.
       */
      updatePagination() {
        if (this._tabHeader) {
          this._tabHeader.updatePagination();
        }
      }
      /**
       * Sets focus to a particular tab.
       * @param index Index of the tab to be focused.
       */
      focusTab(index) {
        const header = this._tabHeader;
        if (header) {
          header.focusIndex = index;
        }
      }
      _focusChanged(index) {
        this._lastFocusedTabIndex = index;
        this.focusChange.emit(this._createChangeEvent(index));
      }
      _createChangeEvent(index) {
        const event = new MatTabChangeEvent();
        event.index = index;
        if (this._tabs && this._tabs.length) {
          event.tab = this._tabs.toArray()[index];
        }
        return event;
      }
      /**
       * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
       * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
       * binding to be updated, we need to subscribe to changes in it and trigger change detection
       * manually.
       */
      _subscribeToTabLabels() {
        if (this._tabLabelSubscription) {
          this._tabLabelSubscription.unsubscribe();
        }
        this._tabLabelSubscription = merge(...this._tabs.map((tab) => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
      }
      /** Clamps the given index to the bounds of 0 and the tabs length. */
      _clampTabIndex(index) {
        return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
      }
      /** Returns a unique id for each tab label element */
      _getTabLabelId(tab, index) {
        return tab.id || `${this._groupId}-label-${index}`;
      }
      /** Returns a unique id for each tab content element */
      _getTabContentId(index) {
        return `${this._groupId}-content-${index}`;
      }
      /**
       * Sets the height of the body wrapper to the height of the activating tab if dynamic
       * height property is true.
       */
      _setTabBodyWrapperHeight(tabHeight) {
        if (!this.dynamicHeight || !this._tabBodyWrapperHeight) {
          this._tabBodyWrapperHeight = tabHeight;
          return;
        }
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.height = this._tabBodyWrapperHeight + "px";
        if (this._tabBodyWrapper.nativeElement.offsetHeight) {
          wrapper.style.height = tabHeight + "px";
        }
      }
      /** Removes the height of the tab body wrapper. */
      _removeTabBodyWrapperHeight() {
        const wrapper = this._tabBodyWrapper.nativeElement;
        this._tabBodyWrapperHeight = wrapper.clientHeight;
        wrapper.style.height = "";
        this._ngZone.run(() => this.animationDone.emit());
      }
      /** Handle click events, setting new selected index if appropriate. */
      _handleClick(tab, tabHeader, index) {
        tabHeader.focusIndex = index;
        if (!tab.disabled) {
          this.selectedIndex = index;
        }
      }
      /** Retrieves the tabindex for the tab. */
      _getTabIndex(index) {
        const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
        return index === targetIndex ? 0 : -1;
      }
      /** Callback for when the focused state of a tab has changed. */
      _tabFocusChanged(focusOrigin, index) {
        if (focusOrigin && focusOrigin !== "mouse" && focusOrigin !== "touch") {
          this._tabHeader.focusIndex = index;
        }
      }
      /**
       * Callback invoked when the centered state of a tab body changes.
       * @param isCenter Whether the tab will be in the center.
       */
      _bodyCentered(isCenter) {
        if (isCenter) {
          this._tabBodies?.forEach((body, i) => body._setActiveClass(i === this._selectedIndex));
        }
      }
      _animationsDisabled() {
        return this._diAnimationsDisabled || this.animationDuration === "0" || this.animationDuration === "0ms";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTabGroup, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatTabGroup, isStandalone: true, selector: "mat-tab-group", inputs: { color: "color", fitInkBarToContent: ["fitInkBarToContent", "fitInkBarToContent", booleanAttribute], stretchTabs: ["mat-stretch-tabs", "stretchTabs", booleanAttribute], alignTabs: ["mat-align-tabs", "alignTabs"], dynamicHeight: ["dynamicHeight", "dynamicHeight", booleanAttribute], selectedIndex: ["selectedIndex", "selectedIndex", numberAttribute], headerPosition: "headerPosition", animationDuration: "animationDuration", contentTabIndex: ["contentTabIndex", "contentTabIndex", numberAttribute], disablePagination: ["disablePagination", "disablePagination", booleanAttribute], disableRipple: ["disableRipple", "disableRipple", booleanAttribute], preserveContent: ["preserveContent", "preserveContent", booleanAttribute], backgroundColor: "backgroundColor", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"] }, outputs: { selectedIndexChange: "selectedIndexChange", focusChange: "focusChange", animationDone: "animationDone", selectedTabChange: "selectedTabChange" }, host: { properties: { "class": '"mat-" + (color || "primary")', "class.mat-mdc-tab-group-dynamic-height": "dynamicHeight", "class.mat-mdc-tab-group-inverted-header": 'headerPosition === "below"', "class.mat-mdc-tab-group-stretch-tabs": "stretchTabs", "attr.mat-align-tabs": "alignTabs", "style.--mat-tab-animation-duration": "animationDuration" }, classAttribute: "mat-mdc-tab-group" }, providers: [
        {
          provide: MAT_TAB_GROUP,
          useExisting: _MatTabGroup
        }
      ], queries: [{ propertyName: "_allTabs", predicate: MatTab, descendants: true }], viewQueries: [{ propertyName: "_tabBodyWrapper", first: true, predicate: ["tabBodyWrapper"], descendants: true }, { propertyName: "_tabHeader", first: true, predicate: ["tabHeader"], descendants: true }, { propertyName: "_tabBodies", predicate: MatTabBody, descendants: true }], exportAs: ["matTabGroup"], ngImport: core_exports, template: '<mat-tab-header #tabHeader\n                [selectedIndex]="selectedIndex || 0"\n                [disableRipple]="disableRipple"\n                [disablePagination]="disablePagination"\n                [aria-label]="ariaLabel"\n                [aria-labelledby]="ariaLabelledby"\n                (indexFocused)="_focusChanged($event)"\n                (selectFocusedIndex)="selectedIndex = $event">\n\n  @for (tab of _tabs; track tab) {\n    <div class="mdc-tab mat-mdc-tab mat-focus-indicator"\n        #tabNode\n        role="tab"\n        matTabLabelWrapper\n        cdkMonitorElementFocus\n        [id]="_getTabLabelId(tab, $index)"\n        [attr.tabIndex]="_getTabIndex($index)"\n        [attr.aria-posinset]="$index + 1"\n        [attr.aria-setsize]="_tabs.length"\n        [attr.aria-controls]="_getTabContentId($index)"\n        [attr.aria-selected]="selectedIndex === $index"\n        [attr.aria-label]="tab.ariaLabel || null"\n        [attr.aria-labelledby]="(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null"\n        [class.mdc-tab--active]="selectedIndex === $index"\n        [class]="tab.labelClass"\n        [disabled]="tab.disabled"\n        [fitInkBarToContent]="fitInkBarToContent"\n        (click)="_handleClick(tab, tabHeader, $index)"\n        (cdkFocusChange)="_tabFocusChanged($event, $index)">\n      <span class="mdc-tab__ripple"></span>\n\n      <!-- Needs to be a separate element, because we can\'t put\n          `overflow: hidden` on tab due to the ink bar. -->\n      <div\n        class="mat-mdc-tab-ripple"\n        mat-ripple\n        [matRippleTrigger]="tabNode"\n        [matRippleDisabled]="tab.disabled || disableRipple"></div>\n\n      <span class="mdc-tab__content">\n        <span class="mdc-tab__text-label">\n          <!--\n            If there is a label template, use it, otherwise fall back to the text label.\n            Note that we don\'t have indentation around the text label, because it adds\n            whitespace around the text which breaks some internal tests.\n          -->\n          @if (tab.templateLabel) {\n            <ng-template [cdkPortalOutlet]="tab.templateLabel"></ng-template>\n          } @else {{{tab.textLabel}}}\n        </span>\n      </span>\n    </div>\n  }\n</mat-tab-header>\n\n<!--\n  We need to project the content somewhere to avoid hydration errors. Some observations:\n  1. This is only necessary on the server.\n  2. We get a hydration error if there aren\'t any nodes after the `ng-content`.\n  3. We get a hydration error if `ng-content` is wrapped in another element.\n-->\n@if (_isServer) {\n  <ng-content/>\n}\n\n<div\n  class="mat-mdc-tab-body-wrapper"\n  [class._mat-animation-noopable]="_animationsDisabled()"\n  #tabBodyWrapper>\n  @for (tab of _tabs; track tab;) {\n    <mat-tab-body role="tabpanel"\n                 [id]="_getTabContentId($index)"\n                 [attr.tabindex]="(contentTabIndex != null && selectedIndex === $index) ? contentTabIndex : null"\n                 [attr.aria-labelledby]="_getTabLabelId(tab, $index)"\n                 [attr.aria-hidden]="selectedIndex !== $index"\n                 [class]="tab.bodyClass"\n                 [content]="tab.content!"\n                 [position]="tab.position!"\n                 [animationDuration]="animationDuration"\n                 [preserveContent]="preserveContent"\n                 (_onCentered)="_removeTabBodyWrapperHeight()"\n                 (_onCentering)="_setTabBodyWrapperHeight($event)"\n                 (_beforeCentering)="_bodyCentered($event)"/>\n  }\n</div>\n', styles: ['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}\n'], dependencies: [{ kind: "component", type: MatTabHeader, selector: "mat-tab-header", inputs: ["aria-label", "aria-labelledby", "disableRipple"] }, { kind: "directive", type: MatTabLabelWrapper, selector: "[matTabLabelWrapper]", inputs: ["disabled"] }, { kind: "directive", type: CdkMonitorFocus, selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]", outputs: ["cdkFocusChange"], exportAs: ["cdkMonitorFocus"] }, { kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "directive", type: CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }, { kind: "component", type: MatTabBody, selector: "mat-tab-body", inputs: ["content", "animationDuration", "preserveContent", "position"], outputs: ["_onCentering", "_beforeCentering", "_onCentered"] }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTabGroup, decorators: [{
      type: Component,
      args: [{ selector: "mat-tab-group", exportAs: "matTabGroup", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, providers: [
        {
          provide: MAT_TAB_GROUP,
          useExisting: MatTabGroup
        }
      ], host: {
        "class": "mat-mdc-tab-group",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mat-mdc-tab-group-dynamic-height]": "dynamicHeight",
        "[class.mat-mdc-tab-group-inverted-header]": 'headerPosition === "below"',
        "[class.mat-mdc-tab-group-stretch-tabs]": "stretchTabs",
        "[attr.mat-align-tabs]": "alignTabs",
        "[style.--mat-tab-animation-duration]": "animationDuration"
      }, imports: [
        MatTabHeader,
        MatTabLabelWrapper,
        CdkMonitorFocus,
        MatRipple,
        CdkPortalOutlet,
        MatTabBody
      ], template: '<mat-tab-header #tabHeader\n                [selectedIndex]="selectedIndex || 0"\n                [disableRipple]="disableRipple"\n                [disablePagination]="disablePagination"\n                [aria-label]="ariaLabel"\n                [aria-labelledby]="ariaLabelledby"\n                (indexFocused)="_focusChanged($event)"\n                (selectFocusedIndex)="selectedIndex = $event">\n\n  @for (tab of _tabs; track tab) {\n    <div class="mdc-tab mat-mdc-tab mat-focus-indicator"\n        #tabNode\n        role="tab"\n        matTabLabelWrapper\n        cdkMonitorElementFocus\n        [id]="_getTabLabelId(tab, $index)"\n        [attr.tabIndex]="_getTabIndex($index)"\n        [attr.aria-posinset]="$index + 1"\n        [attr.aria-setsize]="_tabs.length"\n        [attr.aria-controls]="_getTabContentId($index)"\n        [attr.aria-selected]="selectedIndex === $index"\n        [attr.aria-label]="tab.ariaLabel || null"\n        [attr.aria-labelledby]="(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null"\n        [class.mdc-tab--active]="selectedIndex === $index"\n        [class]="tab.labelClass"\n        [disabled]="tab.disabled"\n        [fitInkBarToContent]="fitInkBarToContent"\n        (click)="_handleClick(tab, tabHeader, $index)"\n        (cdkFocusChange)="_tabFocusChanged($event, $index)">\n      <span class="mdc-tab__ripple"></span>\n\n      <!-- Needs to be a separate element, because we can\'t put\n          `overflow: hidden` on tab due to the ink bar. -->\n      <div\n        class="mat-mdc-tab-ripple"\n        mat-ripple\n        [matRippleTrigger]="tabNode"\n        [matRippleDisabled]="tab.disabled || disableRipple"></div>\n\n      <span class="mdc-tab__content">\n        <span class="mdc-tab__text-label">\n          <!--\n            If there is a label template, use it, otherwise fall back to the text label.\n            Note that we don\'t have indentation around the text label, because it adds\n            whitespace around the text which breaks some internal tests.\n          -->\n          @if (tab.templateLabel) {\n            <ng-template [cdkPortalOutlet]="tab.templateLabel"></ng-template>\n          } @else {{{tab.textLabel}}}\n        </span>\n      </span>\n    </div>\n  }\n</mat-tab-header>\n\n<!--\n  We need to project the content somewhere to avoid hydration errors. Some observations:\n  1. This is only necessary on the server.\n  2. We get a hydration error if there aren\'t any nodes after the `ng-content`.\n  3. We get a hydration error if `ng-content` is wrapped in another element.\n-->\n@if (_isServer) {\n  <ng-content/>\n}\n\n<div\n  class="mat-mdc-tab-body-wrapper"\n  [class._mat-animation-noopable]="_animationsDisabled()"\n  #tabBodyWrapper>\n  @for (tab of _tabs; track tab;) {\n    <mat-tab-body role="tabpanel"\n                 [id]="_getTabContentId($index)"\n                 [attr.tabindex]="(contentTabIndex != null && selectedIndex === $index) ? contentTabIndex : null"\n                 [attr.aria-labelledby]="_getTabLabelId(tab, $index)"\n                 [attr.aria-hidden]="selectedIndex !== $index"\n                 [class]="tab.bodyClass"\n                 [content]="tab.content!"\n                 [position]="tab.position!"\n                 [animationDuration]="animationDuration"\n                 [preserveContent]="preserveContent"\n                 (_onCentered)="_removeTabBodyWrapperHeight()"\n                 (_onCentering)="_setTabBodyWrapperHeight($event)"\n                 (_beforeCentering)="_bodyCentered($event)"/>\n  }\n</div>\n', styles: ['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}\n'] }]
    }], ctorParameters: () => [], propDecorators: { _allTabs: [{
      type: ContentChildren,
      args: [MatTab, { descendants: true }]
    }], _tabBodies: [{
      type: ViewChildren,
      args: [MatTabBody]
    }], _tabBodyWrapper: [{
      type: ViewChild,
      args: ["tabBodyWrapper"]
    }], _tabHeader: [{
      type: ViewChild,
      args: ["tabHeader"]
    }], color: [{
      type: Input
    }], fitInkBarToContent: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], stretchTabs: [{
      type: Input,
      args: [{ alias: "mat-stretch-tabs", transform: booleanAttribute }]
    }], alignTabs: [{
      type: Input,
      args: [{ alias: "mat-align-tabs" }]
    }], dynamicHeight: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], selectedIndex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], headerPosition: [{
      type: Input
    }], animationDuration: [{
      type: Input
    }], contentTabIndex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], disablePagination: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], preserveContent: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], backgroundColor: [{
      type: Input
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], selectedIndexChange: [{
      type: Output
    }], focusChange: [{
      type: Output
    }], animationDone: [{
      type: Output
    }], selectedTabChange: [{
      type: Output
    }] } });
    MatTabChangeEvent = class {
      /** Index of the currently-selected tab. */
      index;
      /** Reference to the currently-selected tab. */
      tab;
    };
    MatTabNav = class _MatTabNav extends MatPaginatedTabHeader {
      _focusedItem = signal(null);
      /** Whether the ink bar should fit its width to the size of the tab label content. */
      get fitInkBarToContent() {
        return this._fitInkBarToContent.value;
      }
      set fitInkBarToContent(value) {
        this._fitInkBarToContent.next(value);
        this._changeDetectorRef.markForCheck();
      }
      _fitInkBarToContent = new BehaviorSubject(false);
      /** Whether tabs should be stretched to fill the header. */
      stretchTabs = true;
      get animationDuration() {
        return this._animationDuration;
      }
      set animationDuration(value) {
        const stringValue = value + "";
        this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
      }
      _animationDuration;
      /** Query list of all tab links of the tab navigation. */
      _items;
      /**
       * Theme color of the background of the tab nav. This API is supported in M2 themes only, it
       * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/tabs/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      get backgroundColor() {
        return this._backgroundColor;
      }
      set backgroundColor(value) {
        const classList = this._elementRef.nativeElement.classList;
        classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
        if (value) {
          classList.add("mat-tabs-with-background", `mat-background-${value}`);
        }
        this._backgroundColor = value;
      }
      _backgroundColor;
      /** Whether the ripple effect is disabled or not. */
      get disableRipple() {
        return this._disableRipple();
      }
      set disableRipple(value) {
        this._disableRipple.set(value);
      }
      _disableRipple = signal(false);
      /**
       * Theme color of the nav bar. This API is supported in M2 themes only, it has
       * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/tabs/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color = "primary";
      /**
       * Associated tab panel controlled by the nav bar. If not provided, then the nav bar
       * follows the ARIA link / navigation landmark pattern. If provided, it follows the
       * ARIA tabs design pattern.
       */
      tabPanel;
      _tabListContainer;
      _tabList;
      _tabListInner;
      _nextPaginator;
      _previousPaginator;
      _inkBar;
      constructor() {
        const defaultConfig = inject(MAT_TABS_CONFIG, { optional: true });
        super();
        this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
        this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
        this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
      }
      _itemSelected() {
      }
      ngAfterContentInit() {
        this._inkBar = new MatInkBar(this._items);
        this._items.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => this.updateActiveLink());
        super.ngAfterContentInit();
        this._keyManager.change.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => this._focusedItem.set(this._keyManager?.activeItem || null));
      }
      ngAfterViewInit() {
        if (!this.tabPanel && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new Error("A mat-tab-nav-panel must be specified via [tabPanel].");
        }
        super.ngAfterViewInit();
      }
      /** Notifies the component that the active link has been changed. */
      updateActiveLink() {
        if (!this._items) {
          return;
        }
        const items = this._items.toArray();
        for (let i = 0; i < items.length; i++) {
          if (items[i].active) {
            this.selectedIndex = i;
            if (this.tabPanel) {
              this.tabPanel._activeTabId = items[i].id;
            }
            this._focusedItem.set(items[i]);
            this._changeDetectorRef.markForCheck();
            return;
          }
        }
        this.selectedIndex = -1;
      }
      _getRole() {
        return this.tabPanel ? "tablist" : this._elementRef.nativeElement.getAttribute("role");
      }
      _hasFocus(link) {
        return this._keyManager?.activeItem === link;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTabNav, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatTabNav, isStandalone: true, selector: "[mat-tab-nav-bar]", inputs: { fitInkBarToContent: ["fitInkBarToContent", "fitInkBarToContent", booleanAttribute], stretchTabs: ["mat-stretch-tabs", "stretchTabs", booleanAttribute], animationDuration: "animationDuration", backgroundColor: "backgroundColor", disableRipple: ["disableRipple", "disableRipple", booleanAttribute], color: "color", tabPanel: "tabPanel" }, host: { properties: { "attr.role": "_getRole()", "class.mat-mdc-tab-header-pagination-controls-enabled": "_showPaginationControls", "class.mat-mdc-tab-header-rtl": "_getLayoutDirection() == 'rtl'", "class.mat-mdc-tab-nav-bar-stretch-tabs": "stretchTabs", "class.mat-primary": 'color !== "warn" && color !== "accent"', "class.mat-accent": 'color === "accent"', "class.mat-warn": 'color === "warn"', "class._mat-animation-noopable": "_animationsDisabled", "style.--mat-tab-animation-duration": "animationDuration" }, classAttribute: "mat-mdc-tab-nav-bar mat-mdc-tab-header" }, queries: [{ propertyName: "_items", predicate: forwardRef(() => MatTabLink), descendants: true }], viewQueries: [{ propertyName: "_tabListContainer", first: true, predicate: ["tabListContainer"], descendants: true, static: true }, { propertyName: "_tabList", first: true, predicate: ["tabList"], descendants: true, static: true }, { propertyName: "_tabListInner", first: true, predicate: ["tabListInner"], descendants: true, static: true }, { propertyName: "_nextPaginator", first: true, predicate: ["nextPaginator"], descendants: true }, { propertyName: "_previousPaginator", first: true, predicate: ["previousPaginator"], descendants: true }], exportAs: ["matTabNavBar", "matTabNav"], usesInheritance: true, ngImport: core_exports, template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div class="mat-mdc-tab-link-container" #tabListContainer (keydown)="_handleKeydown($event)">
  <div class="mat-mdc-tab-list" #tabList (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-links" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`, styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}\n"], dependencies: [{ kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTabNav, decorators: [{
      type: Component,
      args: [{ selector: "[mat-tab-nav-bar]", exportAs: "matTabNavBar, matTabNav", host: {
        "[attr.role]": "_getRole()",
        "class": "mat-mdc-tab-nav-bar mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'",
        "[class.mat-mdc-tab-nav-bar-stretch-tabs]": "stretchTabs",
        "[class.mat-primary]": 'color !== "warn" && color !== "accent"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[style.--mat-tab-animation-duration]": "animationDuration"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, imports: [MatRipple, CdkObserveContent], template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div class="mat-mdc-tab-link-container" #tabListContainer (keydown)="_handleKeydown($event)">
  <div class="mat-mdc-tab-list" #tabList (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-links" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`, styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}\n"] }]
    }], ctorParameters: () => [], propDecorators: { fitInkBarToContent: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], stretchTabs: [{
      type: Input,
      args: [{ alias: "mat-stretch-tabs", transform: booleanAttribute }]
    }], animationDuration: [{
      type: Input
    }], _items: [{
      type: ContentChildren,
      args: [forwardRef(() => MatTabLink), { descendants: true }]
    }], backgroundColor: [{
      type: Input
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], color: [{
      type: Input
    }], tabPanel: [{
      type: Input
    }], _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", { static: true }]
    }], _tabList: [{
      type: ViewChild,
      args: ["tabList", { static: true }]
    }], _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", { static: true }]
    }], _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }], _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }] } });
    MatTabLink = class _MatTabLink extends InkBarItem {
      _tabNavBar = inject(MatTabNav);
      elementRef = inject(ElementRef);
      _focusMonitor = inject(FocusMonitor);
      _destroyed = new Subject();
      /** Whether the tab link is active or not. */
      _isActive = false;
      _tabIndex = computed(() => this._tabNavBar._focusedItem() === this ? this.tabIndex : -1);
      /** Whether the link is active. */
      get active() {
        return this._isActive;
      }
      set active(value) {
        if (value !== this._isActive) {
          this._isActive = value;
          this._tabNavBar.updateActiveLink();
        }
      }
      /** Whether the tab link is disabled. */
      disabled = false;
      /** Whether ripples are disabled on the tab link. */
      get disableRipple() {
        return this._disableRipple();
      }
      set disableRipple(value) {
        this._disableRipple.set(value);
      }
      _disableRipple = signal(false);
      tabIndex = 0;
      /**
       * Ripple configuration for ripples that are launched on pointer down. The ripple config
       * is set to the global ripple options since we don't have any configurable options for
       * the tab link ripples.
       * @docs-private
       */
      rippleConfig;
      /**
       * Whether ripples are disabled on interaction.
       * @docs-private
       */
      get rippleDisabled() {
        return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
      }
      /** Unique id for the tab. */
      id = inject(_IdGenerator).getId("mat-tab-link-");
      constructor() {
        super();
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
          optional: true
        });
        const tabIndex = inject(new HostAttributeToken("tabindex"), { optional: true });
        this.rippleConfig = globalRippleOptions || {};
        this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
        if (_animationsDisabled()) {
          this.rippleConfig.animation = { enterDuration: 0, exitDuration: 0 };
        }
        this._tabNavBar._fitInkBarToContent.pipe(takeUntil(this._destroyed)).subscribe((fitInkBarToContent) => {
          this.fitInkBarToContent = fitInkBarToContent;
        });
      }
      /** Focuses the tab link. */
      focus() {
        this.elementRef.nativeElement.focus();
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this.elementRef);
      }
      ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        super.ngOnDestroy();
        this._focusMonitor.stopMonitoring(this.elementRef);
      }
      _handleFocus() {
        this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
      }
      _handleKeydown(event) {
        if (event.keyCode === SPACE || event.keyCode === ENTER) {
          if (this.disabled) {
            event.preventDefault();
          } else if (this._tabNavBar.tabPanel) {
            if (event.keyCode === SPACE) {
              event.preventDefault();
            }
            this.elementRef.nativeElement.click();
          }
        }
      }
      _getAriaControls() {
        return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute("aria-controls");
      }
      _getAriaSelected() {
        if (this._tabNavBar.tabPanel) {
          return this.active ? "true" : "false";
        } else {
          return this.elementRef.nativeElement.getAttribute("aria-selected");
        }
      }
      _getAriaCurrent() {
        return this.active && !this._tabNavBar.tabPanel ? "page" : null;
      }
      _getRole() {
        return this._tabNavBar.tabPanel ? "tab" : this.elementRef.nativeElement.getAttribute("role");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTabLink, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatTabLink, isStandalone: true, selector: "[mat-tab-link], [matTabLink]", inputs: { active: ["active", "active", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], disableRipple: ["disableRipple", "disableRipple", booleanAttribute], tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)], id: "id" }, host: { listeners: { "focus": "_handleFocus()", "keydown": "_handleKeydown($event)" }, properties: { "attr.aria-controls": "_getAriaControls()", "attr.aria-current": "_getAriaCurrent()", "attr.aria-disabled": "disabled", "attr.aria-selected": "_getAriaSelected()", "attr.id": "id", "attr.tabIndex": "_tabIndex()", "attr.role": "_getRole()", "class.mat-mdc-tab-disabled": "disabled", "class.mdc-tab--active": "active" }, classAttribute: "mdc-tab mat-mdc-tab-link mat-focus-indicator" }, exportAs: ["matTabLink"], usesInheritance: true, ngImport: core_exports, template: '<span class="mdc-tab__ripple"></span>\n\n<div\n  class="mat-mdc-tab-ripple"\n  mat-ripple\n  [matRippleTrigger]="elementRef.nativeElement"\n  [matRippleDisabled]="rippleDisabled"></div>\n\n<span class="mdc-tab__content">\n  <span class="mdc-tab__text-label">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n', styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}\n'], dependencies: [{ kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTabLink, decorators: [{
      type: Component,
      args: [{ selector: "[mat-tab-link], [matTabLink]", exportAs: "matTabLink", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
        "class": "mdc-tab mat-mdc-tab-link mat-focus-indicator",
        "[attr.aria-controls]": "_getAriaControls()",
        "[attr.aria-current]": "_getAriaCurrent()",
        "[attr.aria-disabled]": "disabled",
        "[attr.aria-selected]": "_getAriaSelected()",
        "[attr.id]": "id",
        "[attr.tabIndex]": "_tabIndex()",
        "[attr.role]": "_getRole()",
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[class.mdc-tab--active]": "active",
        "(focus)": "_handleFocus()",
        "(keydown)": "_handleKeydown($event)"
      }, imports: [MatRipple], template: '<span class="mdc-tab__ripple"></span>\n\n<div\n  class="mat-mdc-tab-ripple"\n  mat-ripple\n  [matRippleTrigger]="elementRef.nativeElement"\n  [matRippleDisabled]="rippleDisabled"></div>\n\n<span class="mdc-tab__content">\n  <span class="mdc-tab__text-label">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n', styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}\n'] }]
    }], ctorParameters: () => [], propDecorators: { active: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
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
    }], id: [{
      type: Input
    }] } });
    MatTabNavPanel = class _MatTabNavPanel {
      /** Unique id for the tab panel. */
      id = inject(_IdGenerator).getId("mat-tab-nav-panel-");
      /** Id of the active tab in the nav bar. */
      _activeTabId;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTabNavPanel, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatTabNavPanel, isStandalone: true, selector: "mat-tab-nav-panel", inputs: { id: "id" }, host: { attributes: { "role": "tabpanel" }, properties: { "attr.aria-labelledby": "_activeTabId", "attr.id": "id" }, classAttribute: "mat-mdc-tab-nav-panel" }, exportAs: ["matTabNavPanel"], ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTabNavPanel, decorators: [{
      type: Component,
      args: [{
        selector: "mat-tab-nav-panel",
        exportAs: "matTabNavPanel",
        template: "<ng-content></ng-content>",
        host: {
          "[attr.aria-labelledby]": "_activeTabId",
          "[attr.id]": "id",
          "class": "mat-mdc-tab-nav-panel",
          "role": "tabpanel"
        },
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush
      }]
    }], propDecorators: { id: [{
      type: Input
    }] } });
    MatTabsModule = class _MatTabsModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTabsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTabsModule, imports: [
        MatCommonModule,
        MatTabContent,
        MatTabLabel,
        MatTab,
        MatTabGroup,
        MatTabNav,
        MatTabNavPanel,
        MatTabLink
      ], exports: [
        MatCommonModule,
        MatTabContent,
        MatTabLabel,
        MatTab,
        MatTabGroup,
        MatTabNav,
        MatTabNavPanel,
        MatTabLink
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTabsModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTabsModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          MatCommonModule,
          MatTabContent,
          MatTabLabel,
          MatTab,
          MatTabGroup,
          MatTabNav,
          MatTabNavPanel,
          MatTabLink
        ],
        exports: [
          MatCommonModule,
          MatTabContent,
          MatTabLabel,
          MatTab,
          MatTabGroup,
          MatTabNav,
          MatTabNavPanel,
          MatTabLink
        ]
      }]
    }] });
  }
});

export {
  MatTabsModule,
  init_tabs
};
//# sourceMappingURL=chunk-IVE3Q6XP.js.map
