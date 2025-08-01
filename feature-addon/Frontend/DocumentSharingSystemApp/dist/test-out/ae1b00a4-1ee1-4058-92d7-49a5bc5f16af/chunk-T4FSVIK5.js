import {
  init_xhr_CEmSPUGj
} from "./chunk-53DDW4RY.js";
import {
  ApplicationRef,
  Attribute,
  ChangeDetectorRef,
  DEFAULT_CURRENCY_CODE,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  FactoryTarget,
  Host,
  IMAGE_CONFIG,
  IMAGE_CONFIG_DEFAULTS,
  INTERNAL_APPLICATION_ERROR_HANDLER,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  KeyValueDiffers,
  LOCALE_ID,
  LocaleDataIndex,
  NgModule,
  NgModuleRef$1,
  NgZone,
  Optional,
  Pipe,
  Renderer2,
  RendererStyleFlags2,
  RuntimeError,
  Subject,
  TemplateRef,
  Version,
  ViewContainerRef,
  booleanAttribute,
  core_exports,
  createNgModule,
  findLocaleData,
  formatRuntimeError,
  getLocalePluralCase,
  init_core,
  init_esm,
  inject,
  isPromise,
  isSubscribable,
  numberAttribute,
  performanceMarkFeature,
  stringify,
  untracked,
  unwrapSafeValue,
  ɵɵdefineInjectable,
  ɵɵinject,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule,
  ɵɵngDeclarePipe
} from "./chunk-DV5BYKE4.js";
import {
  __async,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-3HY6NCXN.js";

// node_modules/@angular/common/fesm2022/location-BIEtBxGx.mjs
function getDOM() {
  return _DOM;
}
function setRootDomAdapter(adapter) {
  _DOM ??= adapter;
}
function joinWithSlash(start, end) {
  if (!start)
    return end;
  if (!end)
    return start;
  if (start.endsWith("/")) {
    return end.startsWith("/") ? start + end.slice(1) : start + end;
  }
  return end.startsWith("/") ? start + end : `${start}/${end}`;
}
function stripTrailingSlash(url) {
  const pathEndIdx = url.search(/#|\?|$/);
  return url[pathEndIdx - 1] === "/" ? url.slice(0, pathEndIdx - 1) + url.slice(pathEndIdx) : url;
}
function normalizeQueryParams(params) {
  return params && params[0] !== "?" ? `?${params}` : params;
}
function createLocation() {
  return new Location(\u0275\u0275inject(LocationStrategy));
}
function _stripBasePath(basePath, url) {
  if (!basePath || !url.startsWith(basePath)) {
    return url;
  }
  const strippedUrl = url.substring(basePath.length);
  if (strippedUrl === "" || ["/", ";", "?", "#"].includes(strippedUrl[0])) {
    return strippedUrl;
  }
  return url;
}
function _stripIndexHtml(url) {
  return url.replace(/\/index.html$/, "");
}
function _stripOrigin(baseHref) {
  const isAbsoluteUrl2 = new RegExp("^(https?:)?//").test(baseHref);
  if (isAbsoluteUrl2) {
    const [, pathname] = baseHref.split(/\/\/[^\/]+/);
    return pathname;
  }
  return baseHref;
}
var _DOM, DomAdapter, PlatformLocation, LOCATION_INITIALIZED, BrowserPlatformLocation, LocationStrategy, APP_BASE_HREF, PathLocationStrategy, Location;
var init_location_BIEtBxGx = __esm({
  "node_modules/@angular/common/fesm2022/location-BIEtBxGx.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    _DOM = null;
    DomAdapter = class {
    };
    PlatformLocation = class _PlatformLocation {
      historyGo(relativePosition) {
        throw new Error(ngDevMode ? "Not implemented" : "");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _PlatformLocation, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _PlatformLocation, providedIn: "platform", useFactory: () => inject(BrowserPlatformLocation) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: PlatformLocation, decorators: [{
      type: Injectable,
      args: [{ providedIn: "platform", useFactory: () => inject(BrowserPlatformLocation) }]
    }] });
    LOCATION_INITIALIZED = new InjectionToken(ngDevMode ? "Location Initialized" : "");
    BrowserPlatformLocation = class _BrowserPlatformLocation extends PlatformLocation {
      _location;
      _history;
      _doc = inject(DOCUMENT);
      constructor() {
        super();
        this._location = window.location;
        this._history = window.history;
      }
      getBaseHrefFromDOM() {
        return getDOM().getBaseHref(this._doc);
      }
      onPopState(fn) {
        const window2 = getDOM().getGlobalEventTarget(this._doc, "window");
        window2.addEventListener("popstate", fn, false);
        return () => window2.removeEventListener("popstate", fn);
      }
      onHashChange(fn) {
        const window2 = getDOM().getGlobalEventTarget(this._doc, "window");
        window2.addEventListener("hashchange", fn, false);
        return () => window2.removeEventListener("hashchange", fn);
      }
      get href() {
        return this._location.href;
      }
      get protocol() {
        return this._location.protocol;
      }
      get hostname() {
        return this._location.hostname;
      }
      get port() {
        return this._location.port;
      }
      get pathname() {
        return this._location.pathname;
      }
      get search() {
        return this._location.search;
      }
      get hash() {
        return this._location.hash;
      }
      set pathname(newPath) {
        this._location.pathname = newPath;
      }
      pushState(state, title, url) {
        this._history.pushState(state, title, url);
      }
      replaceState(state, title, url) {
        this._history.replaceState(state, title, url);
      }
      forward() {
        this._history.forward();
      }
      back() {
        this._history.back();
      }
      historyGo(relativePosition = 0) {
        this._history.go(relativePosition);
      }
      getState() {
        return this._history.state;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _BrowserPlatformLocation, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _BrowserPlatformLocation, providedIn: "platform", useFactory: () => new _BrowserPlatformLocation() });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: BrowserPlatformLocation, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "platform",
        useFactory: () => new BrowserPlatformLocation()
      }]
    }], ctorParameters: () => [] });
    LocationStrategy = class _LocationStrategy {
      historyGo(relativePosition) {
        throw new Error(ngDevMode ? "Not implemented" : "");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _LocationStrategy, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _LocationStrategy, providedIn: "root", useFactory: () => inject(PathLocationStrategy) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: LocationStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => inject(PathLocationStrategy) }]
    }] });
    APP_BASE_HREF = new InjectionToken(ngDevMode ? "appBaseHref" : "");
    PathLocationStrategy = class _PathLocationStrategy extends LocationStrategy {
      _platformLocation;
      _baseHref;
      _removeListenerFns = [];
      constructor(_platformLocation, href) {
        super();
        this._platformLocation = _platformLocation;
        this._baseHref = href ?? this._platformLocation.getBaseHrefFromDOM() ?? inject(DOCUMENT).location?.origin ?? "";
      }
      /** @docs-private */
      ngOnDestroy() {
        while (this._removeListenerFns.length) {
          this._removeListenerFns.pop()();
        }
      }
      onPopState(fn) {
        this._removeListenerFns.push(this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn));
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(internal) {
        return joinWithSlash(this._baseHref, internal);
      }
      path(includeHash = false) {
        const pathname = this._platformLocation.pathname + normalizeQueryParams(this._platformLocation.search);
        const hash = this._platformLocation.hash;
        return hash && includeHash ? `${pathname}${hash}` : pathname;
      }
      pushState(state, title, url, queryParams) {
        const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
        this._platformLocation.pushState(state, title, externalUrl);
      }
      replaceState(state, title, url, queryParams) {
        const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
        this._platformLocation.replaceState(state, title, externalUrl);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(relativePosition = 0) {
        this._platformLocation.historyGo?.(relativePosition);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _PathLocationStrategy, deps: [{ token: PlatformLocation }, { token: APP_BASE_HREF, optional: true }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _PathLocationStrategy, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: PathLocationStrategy, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: PlatformLocation }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [APP_BASE_HREF]
    }] }] });
    Location = class _Location {
      /** @internal */
      _subject = new Subject();
      /** @internal */
      _basePath;
      /** @internal */
      _locationStrategy;
      /** @internal */
      _urlChangeListeners = [];
      /** @internal */
      _urlChangeSubscription = null;
      constructor(locationStrategy) {
        this._locationStrategy = locationStrategy;
        const baseHref = this._locationStrategy.getBaseHref();
        this._basePath = _stripOrigin(stripTrailingSlash(_stripIndexHtml(baseHref)));
        this._locationStrategy.onPopState((ev) => {
          this._subject.next({
            "url": this.path(true),
            "pop": true,
            "state": ev.state,
            "type": ev.type
          });
        });
      }
      /** @docs-private */
      ngOnDestroy() {
        this._urlChangeSubscription?.unsubscribe();
        this._urlChangeListeners = [];
      }
      /**
       * Normalizes the URL path for this location.
       *
       * @param includeHash True to include an anchor fragment in the path.
       *
       * @returns The normalized URL path.
       */
      // TODO: vsavkin. Remove the boolean flag and always include hash once the deprecated router is
      // removed.
      path(includeHash = false) {
        return this.normalize(this._locationStrategy.path(includeHash));
      }
      /**
       * Reports the current state of the location history.
       * @returns The current value of the `history.state` object.
       */
      getState() {
        return this._locationStrategy.getState();
      }
      /**
       * Normalizes the given path and compares to the current normalized path.
       *
       * @param path The given URL path.
       * @param query Query parameters.
       *
       * @returns True if the given URL path is equal to the current normalized path, false
       * otherwise.
       */
      isCurrentPathEqualTo(path, query = "") {
        return this.path() == this.normalize(path + normalizeQueryParams(query));
      }
      /**
       * Normalizes a URL path by stripping any trailing slashes.
       *
       * @param url String representing a URL.
       *
       * @returns The normalized URL string.
       */
      normalize(url) {
        return _Location.stripTrailingSlash(_stripBasePath(this._basePath, _stripIndexHtml(url)));
      }
      /**
       * Normalizes an external URL path.
       * If the given URL doesn't begin with a leading slash (`'/'`), adds one
       * before normalizing. Adds a hash if `HashLocationStrategy` is
       * in use, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
       *
       * @param url String representing a URL.
       *
       * @returns  A normalized platform-specific URL.
       */
      prepareExternalUrl(url) {
        if (url && url[0] !== "/") {
          url = "/" + url;
        }
        return this._locationStrategy.prepareExternalUrl(url);
      }
      // TODO: rename this method to pushState
      /**
       * Changes the browser's URL to a normalized version of a given URL, and pushes a
       * new item onto the platform's history.
       *
       * @param path  URL path to normalize.
       * @param query Query parameters.
       * @param state Location history state.
       *
       */
      go(path, query = "", state = null) {
        this._locationStrategy.pushState(state, "", path, query);
        this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
      }
      /**
       * Changes the browser's URL to a normalized version of the given URL, and replaces
       * the top item on the platform's history stack.
       *
       * @param path  URL path to normalize.
       * @param query Query parameters.
       * @param state Location history state.
       */
      replaceState(path, query = "", state = null) {
        this._locationStrategy.replaceState(state, "", path, query);
        this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
      }
      /**
       * Navigates forward in the platform's history.
       */
      forward() {
        this._locationStrategy.forward();
      }
      /**
       * Navigates back in the platform's history.
       */
      back() {
        this._locationStrategy.back();
      }
      /**
       * Navigate to a specific page from session history, identified by its relative position to the
       * current page.
       *
       * @param relativePosition  Position of the target page in the history relative to the current
       *     page.
       * A negative value moves backwards, a positive value moves forwards, e.g. `location.historyGo(2)`
       * moves forward two pages and `location.historyGo(-2)` moves back two pages. When we try to go
       * beyond what's stored in the history session, we stay in the current page. Same behaviour occurs
       * when `relativePosition` equals 0.
       * @see https://developer.mozilla.org/en-US/docs/Web/API/History_API#Moving_to_a_specific_point_in_history
       */
      historyGo(relativePosition = 0) {
        this._locationStrategy.historyGo?.(relativePosition);
      }
      /**
       * Registers a URL change listener. Use to catch updates performed by the Angular
       * framework that are not detectible through "popstate" or "hashchange" events.
       *
       * @param fn The change handler function, which take a URL and a location history state.
       * @returns A function that, when executed, unregisters a URL change listener.
       */
      onUrlChange(fn) {
        this._urlChangeListeners.push(fn);
        this._urlChangeSubscription ??= this.subscribe((v) => {
          this._notifyUrlChangeListeners(v.url, v.state);
        });
        return () => {
          const fnIndex = this._urlChangeListeners.indexOf(fn);
          this._urlChangeListeners.splice(fnIndex, 1);
          if (this._urlChangeListeners.length === 0) {
            this._urlChangeSubscription?.unsubscribe();
            this._urlChangeSubscription = null;
          }
        };
      }
      /** @internal */
      _notifyUrlChangeListeners(url = "", state) {
        this._urlChangeListeners.forEach((fn) => fn(url, state));
      }
      /**
       * Subscribes to the platform's `popState` events.
       *
       * Note: `Location.go()` does not trigger the `popState` event in the browser. Use
       * `Location.onUrlChange()` to subscribe to URL changes instead.
       *
       * @param value Event that is triggered when the state history changes.
       * @param exception The exception to throw.
       *
       * @see [onpopstate](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate)
       *
       * @returns Subscribed events.
       */
      subscribe(onNext, onThrow, onReturn) {
        return this._subject.subscribe({
          next: onNext,
          error: onThrow ?? void 0,
          complete: onReturn ?? void 0
        });
      }
      /**
       * Normalizes URL parameters by prepending with `?` if needed.
       *
       * @param  params String of URL parameters.
       *
       * @returns The normalized URL parameters string.
       */
      static normalizeQueryParams = normalizeQueryParams;
      /**
       * Joins two parts of a URL with a slash if needed.
       *
       * @param start  URL string
       * @param end    URL string
       *
       *
       * @returns The joined URL string.
       */
      static joinWithSlash = joinWithSlash;
      /**
       * Removes a trailing slash from a URL string if needed.
       * Looks for the first occurrence of either `#`, `?`, or the end of the
       * line as `/` characters and removes the trailing slash if one exists.
       *
       * @param url URL string.
       *
       * @returns The URL string, modified if needed.
       */
      static stripTrailingSlash = stripTrailingSlash;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _Location, deps: [{ token: LocationStrategy }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _Location, providedIn: "root", useFactory: createLocation });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: Location, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root",
        // See #23917
        useFactory: createLocation
      }]
    }], ctorParameters: () => [{ type: LocationStrategy }] });
  }
});

// node_modules/@angular/common/fesm2022/common_module-D4mHDfs1.mjs
function getLocaleId(locale) {
  return findLocaleData(locale)[LocaleDataIndex.LocaleId];
}
function getLocaleDayPeriods(locale, formStyle, width) {
  const data = findLocaleData(locale);
  const amPmData = [
    data[LocaleDataIndex.DayPeriodsFormat],
    data[LocaleDataIndex.DayPeriodsStandalone]
  ];
  const amPm = getLastDefinedValue(amPmData, formStyle);
  return getLastDefinedValue(amPm, width);
}
function getLocaleDayNames(locale, formStyle, width) {
  const data = findLocaleData(locale);
  const daysData = [
    data[LocaleDataIndex.DaysFormat],
    data[LocaleDataIndex.DaysStandalone]
  ];
  const days = getLastDefinedValue(daysData, formStyle);
  return getLastDefinedValue(days, width);
}
function getLocaleMonthNames(locale, formStyle, width) {
  const data = findLocaleData(locale);
  const monthsData = [
    data[LocaleDataIndex.MonthsFormat],
    data[LocaleDataIndex.MonthsStandalone]
  ];
  const months = getLastDefinedValue(monthsData, formStyle);
  return getLastDefinedValue(months, width);
}
function getLocaleEraNames(locale, width) {
  const data = findLocaleData(locale);
  const erasData = data[LocaleDataIndex.Eras];
  return getLastDefinedValue(erasData, width);
}
function getLocaleDateFormat(locale, width) {
  const data = findLocaleData(locale);
  return getLastDefinedValue(data[LocaleDataIndex.DateFormat], width);
}
function getLocaleTimeFormat(locale, width) {
  const data = findLocaleData(locale);
  return getLastDefinedValue(data[LocaleDataIndex.TimeFormat], width);
}
function getLocaleDateTimeFormat(locale, width) {
  const data = findLocaleData(locale);
  const dateTimeFormatData = data[LocaleDataIndex.DateTimeFormat];
  return getLastDefinedValue(dateTimeFormatData, width);
}
function getLocaleNumberSymbol(locale, symbol) {
  const data = findLocaleData(locale);
  const res = data[LocaleDataIndex.NumberSymbols][symbol];
  if (typeof res === "undefined") {
    if (symbol === NumberSymbol.CurrencyDecimal) {
      return data[LocaleDataIndex.NumberSymbols][NumberSymbol.Decimal];
    } else if (symbol === NumberSymbol.CurrencyGroup) {
      return data[LocaleDataIndex.NumberSymbols][NumberSymbol.Group];
    }
  }
  return res;
}
function getLocaleNumberFormat(locale, type) {
  const data = findLocaleData(locale);
  return data[LocaleDataIndex.NumberFormats][type];
}
function getLocaleCurrencies(locale) {
  const data = findLocaleData(locale);
  return data[LocaleDataIndex.Currencies];
}
function checkFullData(data) {
  if (!data[LocaleDataIndex.ExtraData]) {
    throw new RuntimeError(2303, ngDevMode && `Missing extra locale data for the locale "${data[LocaleDataIndex.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`);
  }
}
function getLocaleExtraDayPeriodRules(locale) {
  const data = findLocaleData(locale);
  checkFullData(data);
  const rules = data[LocaleDataIndex.ExtraData][
    2
    /* ɵExtraLocaleDataIndex.ExtraDayPeriodsRules */
  ] || [];
  return rules.map((rule) => {
    if (typeof rule === "string") {
      return extractTime(rule);
    }
    return [extractTime(rule[0]), extractTime(rule[1])];
  });
}
function getLocaleExtraDayPeriods(locale, formStyle, width) {
  const data = findLocaleData(locale);
  checkFullData(data);
  const dayPeriodsData = [
    data[LocaleDataIndex.ExtraData][
      0
      /* ɵExtraLocaleDataIndex.ExtraDayPeriodFormats */
    ],
    data[LocaleDataIndex.ExtraData][
      1
      /* ɵExtraLocaleDataIndex.ExtraDayPeriodStandalone */
    ]
  ];
  const dayPeriods = getLastDefinedValue(dayPeriodsData, formStyle) || [];
  return getLastDefinedValue(dayPeriods, width) || [];
}
function getLastDefinedValue(data, index) {
  for (let i = index; i > -1; i--) {
    if (typeof data[i] !== "undefined") {
      return data[i];
    }
  }
  throw new RuntimeError(2304, ngDevMode && "Locale data API: locale data undefined");
}
function extractTime(time) {
  const [h, m] = time.split(":");
  return { hours: +h, minutes: +m };
}
function getCurrencySymbol(code, format, locale = "en") {
  const currency = getLocaleCurrencies(locale)[code] || CURRENCIES_EN[code] || [];
  const symbolNarrow = currency[
    1
    /* ɵCurrencyIndex.SymbolNarrow */
  ];
  if (format === "narrow" && typeof symbolNarrow === "string") {
    return symbolNarrow;
  }
  return currency[
    0
    /* ɵCurrencyIndex.Symbol */
  ] || code;
}
function getNumberOfCurrencyDigits(code) {
  let digits;
  const currency = CURRENCIES_EN[code];
  if (currency) {
    digits = currency[
      2
      /* ɵCurrencyIndex.NbOfDigits */
    ];
  }
  return typeof digits === "number" ? digits : DEFAULT_NB_OF_CURRENCY_DIGITS;
}
function formatDate(value, format, locale, timezone) {
  let date = toDate(value);
  const namedFormat = getNamedFormat(locale, format);
  format = namedFormat || format;
  let parts = [];
  let match;
  while (format) {
    match = DATE_FORMATS_SPLIT.exec(format);
    if (match) {
      parts = parts.concat(match.slice(1));
      const part = parts.pop();
      if (!part) {
        break;
      }
      format = part;
    } else {
      parts.push(format);
      break;
    }
  }
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    assertValidDateFormat(parts);
  }
  let dateTimezoneOffset = date.getTimezoneOffset();
  if (timezone) {
    dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
    date = convertTimezoneToLocal(date, timezone);
  }
  let text = "";
  parts.forEach((value2) => {
    const dateFormatter = getDateFormatter(value2);
    text += dateFormatter ? dateFormatter(date, locale, dateTimezoneOffset) : value2 === "''" ? "'" : value2.replace(/(^'|'$)/g, "").replace(/''/g, "'");
  });
  return text;
}
function assertValidDateFormat(parts) {
  if (parts.some((part) => /^Y+$/.test(part)) && !parts.some((part) => /^w+$/.test(part))) {
    const message = `Suspicious use of week-based year "Y" in date pattern "${parts.join("")}". Did you mean to use calendar year "y" instead?`;
    if (parts.length === 1) {
      console.error(formatRuntimeError(2300, message));
    } else {
      throw new RuntimeError(2300, message);
    }
  }
}
function createDate(year, month, date) {
  const newDate = /* @__PURE__ */ new Date(0);
  newDate.setFullYear(year, month, date);
  newDate.setHours(0, 0, 0);
  return newDate;
}
function getNamedFormat(locale, format) {
  const localeId = getLocaleId(locale);
  NAMED_FORMATS[localeId] ??= {};
  if (NAMED_FORMATS[localeId][format]) {
    return NAMED_FORMATS[localeId][format];
  }
  let formatValue = "";
  switch (format) {
    case "shortDate":
      formatValue = getLocaleDateFormat(locale, FormatWidth.Short);
      break;
    case "mediumDate":
      formatValue = getLocaleDateFormat(locale, FormatWidth.Medium);
      break;
    case "longDate":
      formatValue = getLocaleDateFormat(locale, FormatWidth.Long);
      break;
    case "fullDate":
      formatValue = getLocaleDateFormat(locale, FormatWidth.Full);
      break;
    case "shortTime":
      formatValue = getLocaleTimeFormat(locale, FormatWidth.Short);
      break;
    case "mediumTime":
      formatValue = getLocaleTimeFormat(locale, FormatWidth.Medium);
      break;
    case "longTime":
      formatValue = getLocaleTimeFormat(locale, FormatWidth.Long);
      break;
    case "fullTime":
      formatValue = getLocaleTimeFormat(locale, FormatWidth.Full);
      break;
    case "short":
      const shortTime = getNamedFormat(locale, "shortTime");
      const shortDate = getNamedFormat(locale, "shortDate");
      formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Short), [
        shortTime,
        shortDate
      ]);
      break;
    case "medium":
      const mediumTime = getNamedFormat(locale, "mediumTime");
      const mediumDate = getNamedFormat(locale, "mediumDate");
      formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Medium), [
        mediumTime,
        mediumDate
      ]);
      break;
    case "long":
      const longTime = getNamedFormat(locale, "longTime");
      const longDate = getNamedFormat(locale, "longDate");
      formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Long), [
        longTime,
        longDate
      ]);
      break;
    case "full":
      const fullTime = getNamedFormat(locale, "fullTime");
      const fullDate = getNamedFormat(locale, "fullDate");
      formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Full), [
        fullTime,
        fullDate
      ]);
      break;
  }
  if (formatValue) {
    NAMED_FORMATS[localeId][format] = formatValue;
  }
  return formatValue;
}
function formatDateTime(str, opt_values) {
  if (opt_values) {
    str = str.replace(/\{([^}]+)}/g, function(match, key) {
      return opt_values != null && key in opt_values ? opt_values[key] : match;
    });
  }
  return str;
}
function padNumber(num, digits, minusSign = "-", trim, negWrap) {
  let neg = "";
  if (num < 0 || negWrap && num <= 0) {
    if (negWrap) {
      num = -num + 1;
    } else {
      num = -num;
      neg = minusSign;
    }
  }
  let strNum = String(num);
  while (strNum.length < digits) {
    strNum = "0" + strNum;
  }
  if (trim) {
    strNum = strNum.slice(strNum.length - digits);
  }
  return neg + strNum;
}
function formatFractionalSeconds(milliseconds, digits) {
  const strMs = padNumber(milliseconds, 3);
  return strMs.substring(0, digits);
}
function dateGetter(name, size, offset = 0, trim = false, negWrap = false) {
  return function(date, locale) {
    let part = getDatePart(name, date);
    if (offset > 0 || part > -offset) {
      part += offset;
    }
    if (name === 3) {
      if (part === 0 && offset === -12) {
        part = 12;
      }
    } else if (name === 6) {
      return formatFractionalSeconds(part, size);
    }
    const localeMinus = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
    return padNumber(part, size, localeMinus, trim, negWrap);
  };
}
function getDatePart(part, date) {
  switch (part) {
    case 0:
      return date.getFullYear();
    case 1:
      return date.getMonth();
    case 2:
      return date.getDate();
    case 3:
      return date.getHours();
    case 4:
      return date.getMinutes();
    case 5:
      return date.getSeconds();
    case 6:
      return date.getMilliseconds();
    case 7:
      return date.getDay();
    default:
      throw new RuntimeError(2301, ngDevMode && `Unknown DateType value "${part}".`);
  }
}
function dateStrGetter(name, width, form = FormStyle.Format, extended = false) {
  return function(date, locale) {
    return getDateTranslation(date, locale, name, width, form, extended);
  };
}
function getDateTranslation(date, locale, name, width, form, extended) {
  switch (name) {
    case 2:
      return getLocaleMonthNames(locale, form, width)[date.getMonth()];
    case 1:
      return getLocaleDayNames(locale, form, width)[date.getDay()];
    case 0:
      const currentHours = date.getHours();
      const currentMinutes = date.getMinutes();
      if (extended) {
        const rules = getLocaleExtraDayPeriodRules(locale);
        const dayPeriods = getLocaleExtraDayPeriods(locale, form, width);
        const index = rules.findIndex((rule) => {
          if (Array.isArray(rule)) {
            const [from, to] = rule;
            const afterFrom = currentHours >= from.hours && currentMinutes >= from.minutes;
            const beforeTo = currentHours < to.hours || currentHours === to.hours && currentMinutes < to.minutes;
            if (from.hours < to.hours) {
              if (afterFrom && beforeTo) {
                return true;
              }
            } else if (afterFrom || beforeTo) {
              return true;
            }
          } else {
            if (rule.hours === currentHours && rule.minutes === currentMinutes) {
              return true;
            }
          }
          return false;
        });
        if (index !== -1) {
          return dayPeriods[index];
        }
      }
      return getLocaleDayPeriods(locale, form, width)[currentHours < 12 ? 0 : 1];
    case 3:
      return getLocaleEraNames(locale, width)[date.getFullYear() <= 0 ? 0 : 1];
    default:
      const unexpected = name;
      throw new RuntimeError(2302, ngDevMode && `unexpected translation type ${unexpected}`);
  }
}
function timeZoneGetter(width) {
  return function(date, locale, offset) {
    const zone = -1 * offset;
    const minusSign = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
    const hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);
    switch (width) {
      case 0:
        return (zone >= 0 ? "+" : "") + padNumber(hours, 2, minusSign) + padNumber(Math.abs(zone % 60), 2, minusSign);
      case 1:
        return "GMT" + (zone >= 0 ? "+" : "") + padNumber(hours, 1, minusSign);
      case 2:
        return "GMT" + (zone >= 0 ? "+" : "") + padNumber(hours, 2, minusSign) + ":" + padNumber(Math.abs(zone % 60), 2, minusSign);
      case 3:
        if (offset === 0) {
          return "Z";
        } else {
          return (zone >= 0 ? "+" : "") + padNumber(hours, 2, minusSign) + ":" + padNumber(Math.abs(zone % 60), 2, minusSign);
        }
      default:
        throw new RuntimeError(2302, ngDevMode && `Unknown zone width "${width}"`);
    }
  };
}
function getFirstThursdayOfYear(year) {
  const firstDayOfYear = createDate(year, JANUARY, 1).getDay();
  return createDate(year, 0, 1 + (firstDayOfYear <= THURSDAY ? THURSDAY : THURSDAY + 7) - firstDayOfYear);
}
function getThursdayThisIsoWeek(datetime) {
  const currentDay = datetime.getDay();
  const deltaToThursday = currentDay === 0 ? -3 : THURSDAY - currentDay;
  return createDate(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + deltaToThursday);
}
function weekGetter(size, monthBased = false) {
  return function(date, locale) {
    let result;
    if (monthBased) {
      const nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
      const today = date.getDate();
      result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
    } else {
      const thisThurs = getThursdayThisIsoWeek(date);
      const firstThurs = getFirstThursdayOfYear(thisThurs.getFullYear());
      const diff = thisThurs.getTime() - firstThurs.getTime();
      result = 1 + Math.round(diff / 6048e5);
    }
    return padNumber(result, size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
  };
}
function weekNumberingYearGetter(size, trim = false) {
  return function(date, locale) {
    const thisThurs = getThursdayThisIsoWeek(date);
    const weekNumberingYear = thisThurs.getFullYear();
    return padNumber(weekNumberingYear, size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign), trim);
  };
}
function getDateFormatter(format) {
  if (DATE_FORMATS[format]) {
    return DATE_FORMATS[format];
  }
  let formatter;
  switch (format) {
    // Era name (AD/BC)
    case "G":
    case "GG":
    case "GGG":
      formatter = dateStrGetter(3, TranslationWidth.Abbreviated);
      break;
    case "GGGG":
      formatter = dateStrGetter(3, TranslationWidth.Wide);
      break;
    case "GGGGG":
      formatter = dateStrGetter(3, TranslationWidth.Narrow);
      break;
    // 1 digit representation of the year, e.g. (AD 1 => 1, AD 199 => 199)
    case "y":
      formatter = dateGetter(0, 1, 0, false, true);
      break;
    // 2 digit representation of the year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
    case "yy":
      formatter = dateGetter(0, 2, 0, true, true);
      break;
    // 3 digit representation of the year, padded (000-999). (e.g. AD 2001 => 01, AD 2010 => 10)
    case "yyy":
      formatter = dateGetter(0, 3, 0, false, true);
      break;
    // 4 digit representation of the year (e.g. AD 1 => 0001, AD 2010 => 2010)
    case "yyyy":
      formatter = dateGetter(0, 4, 0, false, true);
      break;
    // 1 digit representation of the week-numbering year, e.g. (AD 1 => 1, AD 199 => 199)
    case "Y":
      formatter = weekNumberingYearGetter(1);
      break;
    // 2 digit representation of the week-numbering year, padded (00-99). (e.g. AD 2001 => 01, AD
    // 2010 => 10)
    case "YY":
      formatter = weekNumberingYearGetter(2, true);
      break;
    // 3 digit representation of the week-numbering year, padded (000-999). (e.g. AD 1 => 001, AD
    // 2010 => 2010)
    case "YYY":
      formatter = weekNumberingYearGetter(3);
      break;
    // 4 digit representation of the week-numbering year (e.g. AD 1 => 0001, AD 2010 => 2010)
    case "YYYY":
      formatter = weekNumberingYearGetter(4);
      break;
    // Month of the year (1-12), numeric
    case "M":
    case "L":
      formatter = dateGetter(1, 1, 1);
      break;
    case "MM":
    case "LL":
      formatter = dateGetter(1, 2, 1);
      break;
    // Month of the year (January, ...), string, format
    case "MMM":
      formatter = dateStrGetter(2, TranslationWidth.Abbreviated);
      break;
    case "MMMM":
      formatter = dateStrGetter(2, TranslationWidth.Wide);
      break;
    case "MMMMM":
      formatter = dateStrGetter(2, TranslationWidth.Narrow);
      break;
    // Month of the year (January, ...), string, standalone
    case "LLL":
      formatter = dateStrGetter(2, TranslationWidth.Abbreviated, FormStyle.Standalone);
      break;
    case "LLLL":
      formatter = dateStrGetter(2, TranslationWidth.Wide, FormStyle.Standalone);
      break;
    case "LLLLL":
      formatter = dateStrGetter(2, TranslationWidth.Narrow, FormStyle.Standalone);
      break;
    // Week of the year (1, ... 52)
    case "w":
      formatter = weekGetter(1);
      break;
    case "ww":
      formatter = weekGetter(2);
      break;
    // Week of the month (1, ...)
    case "W":
      formatter = weekGetter(1, true);
      break;
    // Day of the month (1-31)
    case "d":
      formatter = dateGetter(2, 1);
      break;
    case "dd":
      formatter = dateGetter(2, 2);
      break;
    // Day of the Week StandAlone (1, 1, Mon, Monday, M, Mo)
    case "c":
    case "cc":
      formatter = dateGetter(7, 1);
      break;
    case "ccc":
      formatter = dateStrGetter(1, TranslationWidth.Abbreviated, FormStyle.Standalone);
      break;
    case "cccc":
      formatter = dateStrGetter(1, TranslationWidth.Wide, FormStyle.Standalone);
      break;
    case "ccccc":
      formatter = dateStrGetter(1, TranslationWidth.Narrow, FormStyle.Standalone);
      break;
    case "cccccc":
      formatter = dateStrGetter(1, TranslationWidth.Short, FormStyle.Standalone);
      break;
    // Day of the Week
    case "E":
    case "EE":
    case "EEE":
      formatter = dateStrGetter(1, TranslationWidth.Abbreviated);
      break;
    case "EEEE":
      formatter = dateStrGetter(1, TranslationWidth.Wide);
      break;
    case "EEEEE":
      formatter = dateStrGetter(1, TranslationWidth.Narrow);
      break;
    case "EEEEEE":
      formatter = dateStrGetter(1, TranslationWidth.Short);
      break;
    // Generic period of the day (am-pm)
    case "a":
    case "aa":
    case "aaa":
      formatter = dateStrGetter(0, TranslationWidth.Abbreviated);
      break;
    case "aaaa":
      formatter = dateStrGetter(0, TranslationWidth.Wide);
      break;
    case "aaaaa":
      formatter = dateStrGetter(0, TranslationWidth.Narrow);
      break;
    // Extended period of the day (midnight, at night, ...), standalone
    case "b":
    case "bb":
    case "bbb":
      formatter = dateStrGetter(0, TranslationWidth.Abbreviated, FormStyle.Standalone, true);
      break;
    case "bbbb":
      formatter = dateStrGetter(0, TranslationWidth.Wide, FormStyle.Standalone, true);
      break;
    case "bbbbb":
      formatter = dateStrGetter(0, TranslationWidth.Narrow, FormStyle.Standalone, true);
      break;
    // Extended period of the day (midnight, night, ...), standalone
    case "B":
    case "BB":
    case "BBB":
      formatter = dateStrGetter(0, TranslationWidth.Abbreviated, FormStyle.Format, true);
      break;
    case "BBBB":
      formatter = dateStrGetter(0, TranslationWidth.Wide, FormStyle.Format, true);
      break;
    case "BBBBB":
      formatter = dateStrGetter(0, TranslationWidth.Narrow, FormStyle.Format, true);
      break;
    // Hour in AM/PM, (1-12)
    case "h":
      formatter = dateGetter(3, 1, -12);
      break;
    case "hh":
      formatter = dateGetter(3, 2, -12);
      break;
    // Hour of the day (0-23)
    case "H":
      formatter = dateGetter(3, 1);
      break;
    // Hour in day, padded (00-23)
    case "HH":
      formatter = dateGetter(3, 2);
      break;
    // Minute of the hour (0-59)
    case "m":
      formatter = dateGetter(4, 1);
      break;
    case "mm":
      formatter = dateGetter(4, 2);
      break;
    // Second of the minute (0-59)
    case "s":
      formatter = dateGetter(5, 1);
      break;
    case "ss":
      formatter = dateGetter(5, 2);
      break;
    // Fractional second
    case "S":
      formatter = dateGetter(6, 1);
      break;
    case "SS":
      formatter = dateGetter(6, 2);
      break;
    case "SSS":
      formatter = dateGetter(6, 3);
      break;
    // Timezone ISO8601 short format (-0430)
    case "Z":
    case "ZZ":
    case "ZZZ":
      formatter = timeZoneGetter(
        0
        /* ZoneWidth.Short */
      );
      break;
    // Timezone ISO8601 extended format (-04:30)
    case "ZZZZZ":
      formatter = timeZoneGetter(
        3
        /* ZoneWidth.Extended */
      );
      break;
    // Timezone GMT short format (GMT+4)
    case "O":
    case "OO":
    case "OOO":
    // Should be location, but fallback to format O instead because we don't have the data yet
    case "z":
    case "zz":
    case "zzz":
      formatter = timeZoneGetter(
        1
        /* ZoneWidth.ShortGMT */
      );
      break;
    // Timezone GMT long format (GMT+0430)
    case "OOOO":
    case "ZZZZ":
    // Should be location, but fallback to format O instead because we don't have the data yet
    case "zzzz":
      formatter = timeZoneGetter(
        2
        /* ZoneWidth.Long */
      );
      break;
    default:
      return null;
  }
  DATE_FORMATS[format] = formatter;
  return formatter;
}
function timezoneToOffset(timezone, fallback) {
  timezone = timezone.replace(/:/g, "");
  const requestedTimezoneOffset = Date.parse("Jan 01, 1970 00:00:00 " + timezone) / 6e4;
  return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
}
function addDateMinutes(date, minutes) {
  date = new Date(date.getTime());
  date.setMinutes(date.getMinutes() + minutes);
  return date;
}
function convertTimezoneToLocal(date, timezone, reverse) {
  const reverseValue = -1;
  const dateTimezoneOffset = date.getTimezoneOffset();
  const timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
  return addDateMinutes(date, reverseValue * (timezoneOffset - dateTimezoneOffset));
}
function toDate(value) {
  if (isDate(value)) {
    return value;
  }
  if (typeof value === "number" && !isNaN(value)) {
    return new Date(value);
  }
  if (typeof value === "string") {
    value = value.trim();
    if (/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(value)) {
      const [y, m = 1, d = 1] = value.split("-").map((val) => +val);
      return createDate(y, m - 1, d);
    }
    const parsedNb = parseFloat(value);
    if (!isNaN(value - parsedNb)) {
      return new Date(parsedNb);
    }
    let match;
    if (match = value.match(ISO8601_DATE_REGEX)) {
      return isoStringToDate(match);
    }
  }
  const date = new Date(value);
  if (!isDate(date)) {
    throw new RuntimeError(2302, ngDevMode && `Unable to convert "${value}" into a date`);
  }
  return date;
}
function isoStringToDate(match) {
  const date = /* @__PURE__ */ new Date(0);
  let tzHour = 0;
  let tzMin = 0;
  const dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
  const timeSetter = match[8] ? date.setUTCHours : date.setHours;
  if (match[9]) {
    tzHour = Number(match[9] + match[10]);
    tzMin = Number(match[9] + match[11]);
  }
  dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  const h = Number(match[4] || 0) - tzHour;
  const m = Number(match[5] || 0) - tzMin;
  const s = Number(match[6] || 0);
  const ms = Math.floor(parseFloat("0." + (match[7] || 0)) * 1e3);
  timeSetter.call(date, h, m, s, ms);
  return date;
}
function isDate(value) {
  return value instanceof Date && !isNaN(value.valueOf());
}
function formatNumberToLocaleString(value, pattern, locale, groupSymbol, decimalSymbol, digitsInfo, isPercent = false) {
  let formattedText = "";
  let isZero = false;
  if (!isFinite(value)) {
    formattedText = getLocaleNumberSymbol(locale, NumberSymbol.Infinity);
  } else {
    let parsedNumber = parseNumber(value);
    if (isPercent) {
      parsedNumber = toPercent(parsedNumber);
    }
    let minInt = pattern.minInt;
    let minFraction = pattern.minFrac;
    let maxFraction = pattern.maxFrac;
    if (digitsInfo) {
      const parts = digitsInfo.match(NUMBER_FORMAT_REGEXP);
      if (parts === null) {
        throw new RuntimeError(2306, ngDevMode && `${digitsInfo} is not a valid digit info`);
      }
      const minIntPart = parts[1];
      const minFractionPart = parts[3];
      const maxFractionPart = parts[5];
      if (minIntPart != null) {
        minInt = parseIntAutoRadix(minIntPart);
      }
      if (minFractionPart != null) {
        minFraction = parseIntAutoRadix(minFractionPart);
      }
      if (maxFractionPart != null) {
        maxFraction = parseIntAutoRadix(maxFractionPart);
      } else if (minFractionPart != null && minFraction > maxFraction) {
        maxFraction = minFraction;
      }
    }
    roundNumber(parsedNumber, minFraction, maxFraction);
    let digits = parsedNumber.digits;
    let integerLen = parsedNumber.integerLen;
    const exponent = parsedNumber.exponent;
    let decimals = [];
    isZero = digits.every((d) => !d);
    for (; integerLen < minInt; integerLen++) {
      digits.unshift(0);
    }
    for (; integerLen < 0; integerLen++) {
      digits.unshift(0);
    }
    if (integerLen > 0) {
      decimals = digits.splice(integerLen, digits.length);
    } else {
      decimals = digits;
      digits = [0];
    }
    const groups = [];
    if (digits.length >= pattern.lgSize) {
      groups.unshift(digits.splice(-pattern.lgSize, digits.length).join(""));
    }
    while (digits.length > pattern.gSize) {
      groups.unshift(digits.splice(-pattern.gSize, digits.length).join(""));
    }
    if (digits.length) {
      groups.unshift(digits.join(""));
    }
    formattedText = groups.join(getLocaleNumberSymbol(locale, groupSymbol));
    if (decimals.length) {
      formattedText += getLocaleNumberSymbol(locale, decimalSymbol) + decimals.join("");
    }
    if (exponent) {
      formattedText += getLocaleNumberSymbol(locale, NumberSymbol.Exponential) + "+" + exponent;
    }
  }
  if (value < 0 && !isZero) {
    formattedText = pattern.negPre + formattedText + pattern.negSuf;
  } else {
    formattedText = pattern.posPre + formattedText + pattern.posSuf;
  }
  return formattedText;
}
function formatCurrency(value, locale, currency, currencyCode, digitsInfo) {
  const format = getLocaleNumberFormat(locale, NumberFormatStyle.Currency);
  const pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
  pattern.minFrac = getNumberOfCurrencyDigits(currencyCode);
  pattern.maxFrac = pattern.minFrac;
  const res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.CurrencyGroup, NumberSymbol.CurrencyDecimal, digitsInfo);
  return res.replace(CURRENCY_CHAR, currency).replace(CURRENCY_CHAR, "").trim();
}
function formatPercent(value, locale, digitsInfo) {
  const format = getLocaleNumberFormat(locale, NumberFormatStyle.Percent);
  const pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
  const res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo, true);
  return res.replace(new RegExp(PERCENT_CHAR, "g"), getLocaleNumberSymbol(locale, NumberSymbol.PercentSign));
}
function formatNumber(value, locale, digitsInfo) {
  const format = getLocaleNumberFormat(locale, NumberFormatStyle.Decimal);
  const pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
  return formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo);
}
function parseNumberFormat(format, minusSign = "-") {
  const p = {
    minInt: 1,
    minFrac: 0,
    maxFrac: 0,
    posPre: "",
    posSuf: "",
    negPre: "",
    negSuf: "",
    gSize: 0,
    lgSize: 0
  };
  const patternParts = format.split(PATTERN_SEP);
  const positive = patternParts[0];
  const negative = patternParts[1];
  const positiveParts = positive.indexOf(DECIMAL_SEP) !== -1 ? positive.split(DECIMAL_SEP) : [
    positive.substring(0, positive.lastIndexOf(ZERO_CHAR) + 1),
    positive.substring(positive.lastIndexOf(ZERO_CHAR) + 1)
  ], integer = positiveParts[0], fraction = positiveParts[1] || "";
  p.posPre = integer.substring(0, integer.indexOf(DIGIT_CHAR));
  for (let i = 0; i < fraction.length; i++) {
    const ch = fraction.charAt(i);
    if (ch === ZERO_CHAR) {
      p.minFrac = p.maxFrac = i + 1;
    } else if (ch === DIGIT_CHAR) {
      p.maxFrac = i + 1;
    } else {
      p.posSuf += ch;
    }
  }
  const groups = integer.split(GROUP_SEP);
  p.gSize = groups[1] ? groups[1].length : 0;
  p.lgSize = groups[2] || groups[1] ? (groups[2] || groups[1]).length : 0;
  if (negative) {
    const trunkLen = positive.length - p.posPre.length - p.posSuf.length, pos = negative.indexOf(DIGIT_CHAR);
    p.negPre = negative.substring(0, pos).replace(/'/g, "");
    p.negSuf = negative.slice(pos + trunkLen).replace(/'/g, "");
  } else {
    p.negPre = minusSign + p.posPre;
    p.negSuf = p.posSuf;
  }
  return p;
}
function toPercent(parsedNumber) {
  if (parsedNumber.digits[0] === 0) {
    return parsedNumber;
  }
  const fractionLen = parsedNumber.digits.length - parsedNumber.integerLen;
  if (parsedNumber.exponent) {
    parsedNumber.exponent += 2;
  } else {
    if (fractionLen === 0) {
      parsedNumber.digits.push(0, 0);
    } else if (fractionLen === 1) {
      parsedNumber.digits.push(0);
    }
    parsedNumber.integerLen += 2;
  }
  return parsedNumber;
}
function parseNumber(num) {
  let numStr = Math.abs(num) + "";
  let exponent = 0, digits, integerLen;
  let i, j, zeros;
  if ((integerLen = numStr.indexOf(DECIMAL_SEP)) > -1) {
    numStr = numStr.replace(DECIMAL_SEP, "");
  }
  if ((i = numStr.search(/e/i)) > 0) {
    if (integerLen < 0)
      integerLen = i;
    integerLen += +numStr.slice(i + 1);
    numStr = numStr.substring(0, i);
  } else if (integerLen < 0) {
    integerLen = numStr.length;
  }
  for (i = 0; numStr.charAt(i) === ZERO_CHAR; i++) {
  }
  if (i === (zeros = numStr.length)) {
    digits = [0];
    integerLen = 1;
  } else {
    zeros--;
    while (numStr.charAt(zeros) === ZERO_CHAR)
      zeros--;
    integerLen -= i;
    digits = [];
    for (j = 0; i <= zeros; i++, j++) {
      digits[j] = Number(numStr.charAt(i));
    }
  }
  if (integerLen > MAX_DIGITS) {
    digits = digits.splice(0, MAX_DIGITS - 1);
    exponent = integerLen - 1;
    integerLen = 1;
  }
  return { digits, exponent, integerLen };
}
function roundNumber(parsedNumber, minFrac, maxFrac) {
  if (minFrac > maxFrac) {
    throw new RuntimeError(2307, ngDevMode && `The minimum number of digits after fraction (${minFrac}) is higher than the maximum (${maxFrac}).`);
  }
  let digits = parsedNumber.digits;
  let fractionLen = digits.length - parsedNumber.integerLen;
  const fractionSize = Math.min(Math.max(minFrac, fractionLen), maxFrac);
  let roundAt = fractionSize + parsedNumber.integerLen;
  let digit = digits[roundAt];
  if (roundAt > 0) {
    digits.splice(Math.max(parsedNumber.integerLen, roundAt));
    for (let j = roundAt; j < digits.length; j++) {
      digits[j] = 0;
    }
  } else {
    fractionLen = Math.max(0, fractionLen);
    parsedNumber.integerLen = 1;
    digits.length = Math.max(1, roundAt = fractionSize + 1);
    digits[0] = 0;
    for (let i = 1; i < roundAt; i++)
      digits[i] = 0;
  }
  if (digit >= 5) {
    if (roundAt - 1 < 0) {
      for (let k = 0; k > roundAt; k--) {
        digits.unshift(0);
        parsedNumber.integerLen++;
      }
      digits.unshift(1);
      parsedNumber.integerLen++;
    } else {
      digits[roundAt - 1]++;
    }
  }
  for (; fractionLen < Math.max(0, fractionSize); fractionLen++)
    digits.push(0);
  let dropTrailingZeros = fractionSize !== 0;
  const minLen = minFrac + parsedNumber.integerLen;
  const carry = digits.reduceRight(function(carry2, d, i, digits2) {
    d = d + carry2;
    digits2[i] = d < 10 ? d : d - 10;
    if (dropTrailingZeros) {
      if (digits2[i] === 0 && i >= minLen) {
        digits2.pop();
      } else {
        dropTrailingZeros = false;
      }
    }
    return d >= 10 ? 1 : 0;
  }, 0);
  if (carry) {
    digits.unshift(carry);
    parsedNumber.integerLen++;
  }
}
function parseIntAutoRadix(text) {
  const result = parseInt(text);
  if (isNaN(result)) {
    throw new RuntimeError(2305, ngDevMode && "Invalid integer literal when parsing " + text);
  }
  return result;
}
function getPluralCategory(value, cases, ngLocalization, locale) {
  let key = `=${value}`;
  if (cases.indexOf(key) > -1) {
    return key;
  }
  key = ngLocalization.getPluralCategory(value, locale);
  if (cases.indexOf(key) > -1) {
    return key;
  }
  if (cases.indexOf("other") > -1) {
    return "other";
  }
  throw new RuntimeError(2308, ngDevMode && `No plural message found for value "${value}"`);
}
function getParentInjector(injector) {
  const parentNgModule = injector.get(NgModuleRef$1);
  return parentNgModule.injector;
}
function applyViewChange(view, record) {
  view.context.$implicit = record.item;
}
function getTypeName(type) {
  return type["name"] || typeof type;
}
function assertTemplate(templateRef, property) {
  if (templateRef && !templateRef.createEmbeddedView) {
    throw new RuntimeError(2020, (typeof ngDevMode === "undefined" || ngDevMode) && `${property} must be a TemplateRef, but received '${stringify(templateRef)}'.`);
  }
}
function throwNgSwitchProviderNotFoundError(attrName, directiveName) {
  throw new RuntimeError(2e3, `An element with the "${attrName}" attribute (matching the "${directiveName}" directive) must be located inside an element with the "ngSwitch" attribute (matching "NgSwitch" directive)`);
}
function invalidPipeArgumentError(type, value) {
  return new RuntimeError(2100, ngDevMode && `InvalidPipeArgument: '${value}' for pipe '${stringify(type)}'`);
}
function makeKeyValuePair(key, value) {
  return { key, value };
}
function defaultComparator(keyValueA, keyValueB) {
  const a = keyValueA.key;
  const b = keyValueB.key;
  if (a === b)
    return 0;
  if (a == null)
    return 1;
  if (b == null)
    return -1;
  if (typeof a == "string" && typeof b == "string") {
    return a < b ? -1 : 1;
  }
  if (typeof a == "number" && typeof b == "number") {
    return a - b;
  }
  if (typeof a == "boolean" && typeof b == "boolean") {
    return a < b ? -1 : 1;
  }
  const aString = String(a);
  const bString = String(b);
  return aString == bString ? 0 : aString < bString ? -1 : 1;
}
function isValue(value) {
  return !(value == null || value === "" || value !== value);
}
function strToNumber(value) {
  if (typeof value === "string" && !isNaN(Number(value) - parseFloat(value))) {
    return Number(value);
  }
  if (typeof value !== "number") {
    throw new RuntimeError(2309, ngDevMode && `${value} is not a number`);
  }
  return value;
}
var HashLocationStrategy, CURRENCIES_EN, NumberFormatStyle, Plural, FormStyle, TranslationWidth, FormatWidth, NumberSymbol, WeekDay, getLocalePluralCase2, DEFAULT_NB_OF_CURRENCY_DIGITS, ISO8601_DATE_REGEX, NAMED_FORMATS, DATE_FORMATS_SPLIT, JANUARY, THURSDAY, DATE_FORMATS, NUMBER_FORMAT_REGEXP, MAX_DIGITS, DECIMAL_SEP, ZERO_CHAR, PATTERN_SEP, GROUP_SEP, DIGIT_CHAR, CURRENCY_CHAR, PERCENT_CHAR, NgLocalization, NgLocaleLocalization, WS_REGEXP, EMPTY_ARRAY, NgClass, NgComponentOutlet, NgForOfContext, NgForOf, NgIf, NgIfContext, SwitchView, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, NgStyle, NgTemplateOutlet, COMMON_DIRECTIVES, SubscribableStrategy, PromiseStrategy, _promiseStrategy, _subscribableStrategy, AsyncPipe, LowerCasePipe, unicodeWordMatch, TitleCasePipe, UpperCasePipe, DEFAULT_DATE_FORMAT, DATE_PIPE_DEFAULT_TIMEZONE, DATE_PIPE_DEFAULT_OPTIONS, DatePipe, _INTERPOLATION_REGEXP, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, DecimalPipe, PercentPipe, CurrencyPipe, SlicePipe, COMMON_PIPES, CommonModule;
var init_common_module_D4mHDfs1 = __esm({
  "node_modules/@angular/common/fesm2022/common_module-D4mHDfs1.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_location_BIEtBxGx();
    HashLocationStrategy = class _HashLocationStrategy extends LocationStrategy {
      _platformLocation;
      _baseHref = "";
      _removeListenerFns = [];
      constructor(_platformLocation, _baseHref) {
        super();
        this._platformLocation = _platformLocation;
        if (_baseHref != null) {
          this._baseHref = _baseHref;
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        while (this._removeListenerFns.length) {
          this._removeListenerFns.pop()();
        }
      }
      onPopState(fn) {
        this._removeListenerFns.push(this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn));
      }
      getBaseHref() {
        return this._baseHref;
      }
      path(includeHash = false) {
        const path = this._platformLocation.hash ?? "#";
        return path.length > 0 ? path.substring(1) : path;
      }
      prepareExternalUrl(internal) {
        const url = joinWithSlash(this._baseHref, internal);
        return url.length > 0 ? "#" + url : url;
      }
      pushState(state, title, path, queryParams) {
        const url = this.prepareExternalUrl(path + normalizeQueryParams(queryParams)) || this._platformLocation.pathname;
        this._platformLocation.pushState(state, title, url);
      }
      replaceState(state, title, path, queryParams) {
        const url = this.prepareExternalUrl(path + normalizeQueryParams(queryParams)) || this._platformLocation.pathname;
        this._platformLocation.replaceState(state, title, url);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(relativePosition = 0) {
        this._platformLocation.historyGo?.(relativePosition);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _HashLocationStrategy, deps: [{ token: PlatformLocation }, { token: APP_BASE_HREF, optional: true }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _HashLocationStrategy });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: HashLocationStrategy, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: PlatformLocation }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [APP_BASE_HREF]
    }] }] });
    CURRENCIES_EN = { "ADP": [void 0, void 0, 0], "AFN": [void 0, "\u060B", 0], "ALL": [void 0, void 0, 0], "AMD": [void 0, "\u058F", 2], "AOA": [void 0, "Kz"], "ARS": [void 0, "$"], "AUD": ["A$", "$"], "AZN": [void 0, "\u20BC"], "BAM": [void 0, "KM"], "BBD": [void 0, "$"], "BDT": [void 0, "\u09F3"], "BHD": [void 0, void 0, 3], "BIF": [void 0, void 0, 0], "BMD": [void 0, "$"], "BND": [void 0, "$"], "BOB": [void 0, "Bs"], "BRL": ["R$"], "BSD": [void 0, "$"], "BWP": [void 0, "P"], "BYN": [void 0, void 0, 2], "BYR": [void 0, void 0, 0], "BZD": [void 0, "$"], "CAD": ["CA$", "$", 2], "CHF": [void 0, void 0, 2], "CLF": [void 0, void 0, 4], "CLP": [void 0, "$", 0], "CNY": ["CN\xA5", "\xA5"], "COP": [void 0, "$", 2], "CRC": [void 0, "\u20A1", 2], "CUC": [void 0, "$"], "CUP": [void 0, "$"], "CZK": [void 0, "K\u010D", 2], "DJF": [void 0, void 0, 0], "DKK": [void 0, "kr", 2], "DOP": [void 0, "$"], "EGP": [void 0, "E\xA3"], "ESP": [void 0, "\u20A7", 0], "EUR": ["\u20AC"], "FJD": [void 0, "$"], "FKP": [void 0, "\xA3"], "GBP": ["\xA3"], "GEL": [void 0, "\u20BE"], "GHS": [void 0, "GH\u20B5"], "GIP": [void 0, "\xA3"], "GNF": [void 0, "FG", 0], "GTQ": [void 0, "Q"], "GYD": [void 0, "$", 2], "HKD": ["HK$", "$"], "HNL": [void 0, "L"], "HRK": [void 0, "kn"], "HUF": [void 0, "Ft", 2], "IDR": [void 0, "Rp", 2], "ILS": ["\u20AA"], "INR": ["\u20B9"], "IQD": [void 0, void 0, 0], "IRR": [void 0, void 0, 0], "ISK": [void 0, "kr", 0], "ITL": [void 0, void 0, 0], "JMD": [void 0, "$"], "JOD": [void 0, void 0, 3], "JPY": ["\xA5", void 0, 0], "KHR": [void 0, "\u17DB"], "KMF": [void 0, "CF", 0], "KPW": [void 0, "\u20A9", 0], "KRW": ["\u20A9", void 0, 0], "KWD": [void 0, void 0, 3], "KYD": [void 0, "$"], "KZT": [void 0, "\u20B8"], "LAK": [void 0, "\u20AD", 0], "LBP": [void 0, "L\xA3", 0], "LKR": [void 0, "Rs"], "LRD": [void 0, "$"], "LTL": [void 0, "Lt"], "LUF": [void 0, void 0, 0], "LVL": [void 0, "Ls"], "LYD": [void 0, void 0, 3], "MGA": [void 0, "Ar", 0], "MGF": [void 0, void 0, 0], "MMK": [void 0, "K", 0], "MNT": [void 0, "\u20AE", 2], "MRO": [void 0, void 0, 0], "MUR": [void 0, "Rs", 2], "MXN": ["MX$", "$"], "MYR": [void 0, "RM"], "NAD": [void 0, "$"], "NGN": [void 0, "\u20A6"], "NIO": [void 0, "C$"], "NOK": [void 0, "kr", 2], "NPR": [void 0, "Rs"], "NZD": ["NZ$", "$"], "OMR": [void 0, void 0, 3], "PHP": ["\u20B1"], "PKR": [void 0, "Rs", 2], "PLN": [void 0, "z\u0142"], "PYG": [void 0, "\u20B2", 0], "RON": [void 0, "lei"], "RSD": [void 0, void 0, 0], "RUB": [void 0, "\u20BD"], "RWF": [void 0, "RF", 0], "SBD": [void 0, "$"], "SEK": [void 0, "kr", 2], "SGD": [void 0, "$"], "SHP": [void 0, "\xA3"], "SLE": [void 0, void 0, 2], "SLL": [void 0, void 0, 0], "SOS": [void 0, void 0, 0], "SRD": [void 0, "$"], "SSP": [void 0, "\xA3"], "STD": [void 0, void 0, 0], "STN": [void 0, "Db"], "SYP": [void 0, "\xA3", 0], "THB": [void 0, "\u0E3F"], "TMM": [void 0, void 0, 0], "TND": [void 0, void 0, 3], "TOP": [void 0, "T$"], "TRL": [void 0, void 0, 0], "TRY": [void 0, "\u20BA"], "TTD": [void 0, "$"], "TWD": ["NT$", "$", 2], "TZS": [void 0, void 0, 2], "UAH": [void 0, "\u20B4"], "UGX": [void 0, void 0, 0], "USD": ["$"], "UYI": [void 0, void 0, 0], "UYU": [void 0, "$"], "UYW": [void 0, void 0, 4], "UZS": [void 0, void 0, 2], "VEF": [void 0, "Bs", 2], "VND": ["\u20AB", void 0, 0], "VUV": [void 0, void 0, 0], "XAF": ["FCFA", void 0, 0], "XCD": ["EC$", "$"], "XOF": ["F\u202FCFA", void 0, 0], "XPF": ["CFPF", void 0, 0], "XXX": ["\xA4"], "YER": [void 0, void 0, 0], "ZAR": [void 0, "R"], "ZMK": [void 0, void 0, 0], "ZMW": [void 0, "ZK"], "ZWD": [void 0, void 0, 0] };
    (function(NumberFormatStyle2) {
      NumberFormatStyle2[NumberFormatStyle2["Decimal"] = 0] = "Decimal";
      NumberFormatStyle2[NumberFormatStyle2["Percent"] = 1] = "Percent";
      NumberFormatStyle2[NumberFormatStyle2["Currency"] = 2] = "Currency";
      NumberFormatStyle2[NumberFormatStyle2["Scientific"] = 3] = "Scientific";
    })(NumberFormatStyle || (NumberFormatStyle = {}));
    (function(Plural2) {
      Plural2[Plural2["Zero"] = 0] = "Zero";
      Plural2[Plural2["One"] = 1] = "One";
      Plural2[Plural2["Two"] = 2] = "Two";
      Plural2[Plural2["Few"] = 3] = "Few";
      Plural2[Plural2["Many"] = 4] = "Many";
      Plural2[Plural2["Other"] = 5] = "Other";
    })(Plural || (Plural = {}));
    (function(FormStyle2) {
      FormStyle2[FormStyle2["Format"] = 0] = "Format";
      FormStyle2[FormStyle2["Standalone"] = 1] = "Standalone";
    })(FormStyle || (FormStyle = {}));
    (function(TranslationWidth2) {
      TranslationWidth2[TranslationWidth2["Narrow"] = 0] = "Narrow";
      TranslationWidth2[TranslationWidth2["Abbreviated"] = 1] = "Abbreviated";
      TranslationWidth2[TranslationWidth2["Wide"] = 2] = "Wide";
      TranslationWidth2[TranslationWidth2["Short"] = 3] = "Short";
    })(TranslationWidth || (TranslationWidth = {}));
    (function(FormatWidth2) {
      FormatWidth2[FormatWidth2["Short"] = 0] = "Short";
      FormatWidth2[FormatWidth2["Medium"] = 1] = "Medium";
      FormatWidth2[FormatWidth2["Long"] = 2] = "Long";
      FormatWidth2[FormatWidth2["Full"] = 3] = "Full";
    })(FormatWidth || (FormatWidth = {}));
    NumberSymbol = {
      /**
       * Decimal separator.
       * For `en-US`, the dot character.
       * Example: 2,345`.`67
       */
      Decimal: 0,
      /**
       * Grouping separator, typically for thousands.
       * For `en-US`, the comma character.
       * Example: 2`,`345.67
       */
      Group: 1,
      /**
       * List-item separator.
       * Example: "one, two, and three"
       */
      List: 2,
      /**
       * Sign for percentage (out of 100).
       * Example: 23.4%
       */
      PercentSign: 3,
      /**
       * Sign for positive numbers.
       * Example: +23
       */
      PlusSign: 4,
      /**
       * Sign for negative numbers.
       * Example: -23
       */
      MinusSign: 5,
      /**
       * Computer notation for exponential value (n times a power of 10).
       * Example: 1.2E3
       */
      Exponential: 6,
      /**
       * Human-readable format of exponential.
       * Example: 1.2x103
       */
      SuperscriptingExponent: 7,
      /**
       * Sign for permille (out of 1000).
       * Example: 23.4‰
       */
      PerMille: 8,
      /**
       * Infinity, can be used with plus and minus.
       * Example: ∞, +∞, -∞
       */
      Infinity: 9,
      /**
       * Not a number.
       * Example: NaN
       */
      NaN: 10,
      /**
       * Symbol used between time units.
       * Example: 10:52
       */
      TimeSeparator: 11,
      /**
       * Decimal separator for currency values (fallback to `Decimal`).
       * Example: $2,345.67
       */
      CurrencyDecimal: 12,
      /**
       * Group separator for currency values (fallback to `Group`).
       * Example: $2,345.67
       */
      CurrencyGroup: 13
    };
    (function(WeekDay2) {
      WeekDay2[WeekDay2["Sunday"] = 0] = "Sunday";
      WeekDay2[WeekDay2["Monday"] = 1] = "Monday";
      WeekDay2[WeekDay2["Tuesday"] = 2] = "Tuesday";
      WeekDay2[WeekDay2["Wednesday"] = 3] = "Wednesday";
      WeekDay2[WeekDay2["Thursday"] = 4] = "Thursday";
      WeekDay2[WeekDay2["Friday"] = 5] = "Friday";
      WeekDay2[WeekDay2["Saturday"] = 6] = "Saturday";
    })(WeekDay || (WeekDay = {}));
    getLocalePluralCase2 = getLocalePluralCase;
    DEFAULT_NB_OF_CURRENCY_DIGITS = 2;
    ISO8601_DATE_REGEX = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    NAMED_FORMATS = {};
    DATE_FORMATS_SPLIT = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
    JANUARY = 0;
    THURSDAY = 4;
    DATE_FORMATS = {};
    NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
    MAX_DIGITS = 22;
    DECIMAL_SEP = ".";
    ZERO_CHAR = "0";
    PATTERN_SEP = ";";
    GROUP_SEP = ",";
    DIGIT_CHAR = "#";
    CURRENCY_CHAR = "\xA4";
    PERCENT_CHAR = "%";
    NgLocalization = class _NgLocalization {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgLocalization, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgLocalization, providedIn: "root", useFactory: (locale) => new NgLocaleLocalization(locale), deps: [{ token: LOCALE_ID }] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgLocalization, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root",
        useFactory: (locale) => new NgLocaleLocalization(locale),
        deps: [LOCALE_ID]
      }]
    }] });
    NgLocaleLocalization = class _NgLocaleLocalization extends NgLocalization {
      locale;
      constructor(locale) {
        super();
        this.locale = locale;
      }
      getPluralCategory(value, locale) {
        const plural = getLocalePluralCase2(locale || this.locale)(value);
        switch (plural) {
          case Plural.Zero:
            return "zero";
          case Plural.One:
            return "one";
          case Plural.Two:
            return "two";
          case Plural.Few:
            return "few";
          case Plural.Many:
            return "many";
          default:
            return "other";
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgLocaleLocalization, deps: [{ token: LOCALE_ID }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgLocaleLocalization });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgLocaleLocalization, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }] }] });
    WS_REGEXP = /\s+/;
    EMPTY_ARRAY = [];
    NgClass = class _NgClass {
      _ngEl;
      _renderer;
      initialClasses = EMPTY_ARRAY;
      rawClass;
      stateMap = /* @__PURE__ */ new Map();
      constructor(_ngEl, _renderer) {
        this._ngEl = _ngEl;
        this._renderer = _renderer;
      }
      set klass(value) {
        this.initialClasses = value != null ? value.trim().split(WS_REGEXP) : EMPTY_ARRAY;
      }
      set ngClass(value) {
        this.rawClass = typeof value === "string" ? value.trim().split(WS_REGEXP) : value;
      }
      /*
        The NgClass directive uses the custom change detection algorithm for its inputs. The custom
        algorithm is necessary since inputs are represented as complex object or arrays that need to be
        deeply-compared.
      
        This algorithm is perf-sensitive since NgClass is used very frequently and its poor performance
        might negatively impact runtime performance of the entire change detection cycle. The design of
        this algorithm is making sure that:
        - there is no unnecessary DOM manipulation (CSS classes are added / removed from the DOM only when
        needed), even if references to bound objects change;
        - there is no memory allocation if nothing changes (even relatively modest memory allocation
        during the change detection cycle can result in GC pauses for some of the CD cycles).
      
        The algorithm works by iterating over the set of bound classes, staring with [class] binding and
        then going over [ngClass] binding. For each CSS class name:
        - check if it was seen before (this information is tracked in the state map) and if its value
        changed;
        - mark it as "touched" - names that are not marked are not present in the latest set of binding
        and we can remove such class name from the internal data structures;
      
        After iteration over all the CSS class names we've got data structure with all the information
        necessary to synchronize changes to the DOM - it is enough to iterate over the state map, flush
        changes to the DOM and reset internal data structures so those are ready for the next change
        detection cycle.
         */
      ngDoCheck() {
        for (const klass of this.initialClasses) {
          this._updateState(klass, true);
        }
        const rawClass = this.rawClass;
        if (Array.isArray(rawClass) || rawClass instanceof Set) {
          for (const klass of rawClass) {
            this._updateState(klass, true);
          }
        } else if (rawClass != null) {
          for (const klass of Object.keys(rawClass)) {
            this._updateState(klass, Boolean(rawClass[klass]));
          }
        }
        this._applyStateDiff();
      }
      _updateState(klass, nextEnabled) {
        const state = this.stateMap.get(klass);
        if (state !== void 0) {
          if (state.enabled !== nextEnabled) {
            state.changed = true;
            state.enabled = nextEnabled;
          }
          state.touched = true;
        } else {
          this.stateMap.set(klass, { enabled: nextEnabled, changed: true, touched: true });
        }
      }
      _applyStateDiff() {
        for (const stateEntry of this.stateMap) {
          const klass = stateEntry[0];
          const state = stateEntry[1];
          if (state.changed) {
            this._toggleClass(klass, state.enabled);
            state.changed = false;
          } else if (!state.touched) {
            if (state.enabled) {
              this._toggleClass(klass, false);
            }
            this.stateMap.delete(klass);
          }
          state.touched = false;
        }
      }
      _toggleClass(klass, enabled) {
        if (ngDevMode) {
          if (typeof klass !== "string") {
            throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${stringify(klass)}`);
          }
        }
        klass = klass.trim();
        if (klass.length > 0) {
          klass.split(WS_REGEXP).forEach((klass2) => {
            if (enabled) {
              this._renderer.addClass(this._ngEl.nativeElement, klass2);
            } else {
              this._renderer.removeClass(this._ngEl.nativeElement, klass2);
            }
          });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgClass, deps: [{ token: ElementRef }, { token: Renderer2 }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.4", type: _NgClass, isStandalone: true, selector: "[ngClass]", inputs: { klass: ["class", "klass"], ngClass: "ngClass" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgClass, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngClass]"
      }]
    }], ctorParameters: () => [{ type: ElementRef }, { type: Renderer2 }], propDecorators: { klass: [{
      type: Input,
      args: ["class"]
    }], ngClass: [{
      type: Input,
      args: ["ngClass"]
    }] } });
    NgComponentOutlet = class _NgComponentOutlet {
      _viewContainerRef;
      // TODO(crisbeto): this should be `Type<T>`, but doing so broke a few
      // targets in a TGP so we need to do it in a major version.
      /** Component that should be rendered in the outlet. */
      ngComponentOutlet = null;
      ngComponentOutletInputs;
      ngComponentOutletInjector;
      ngComponentOutletContent;
      ngComponentOutletNgModule;
      /**
       * @deprecated This input is deprecated, use `ngComponentOutletNgModule` instead.
       */
      ngComponentOutletNgModuleFactory;
      _componentRef;
      _moduleRef;
      /**
       * A helper data structure that allows us to track inputs that were part of the
       * ngComponentOutletInputs expression. Tracking inputs is necessary for proper removal of ones
       * that are no longer referenced.
       */
      _inputsUsed = /* @__PURE__ */ new Map();
      /**
       * Gets the instance of the currently-rendered component.
       * Will be null if no component has been rendered.
       */
      get componentInstance() {
        return this._componentRef?.instance ?? null;
      }
      constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
      }
      _needToReCreateNgModuleInstance(changes) {
        return changes["ngComponentOutletNgModule"] !== void 0 || changes["ngComponentOutletNgModuleFactory"] !== void 0;
      }
      _needToReCreateComponentInstance(changes) {
        return changes["ngComponentOutlet"] !== void 0 || changes["ngComponentOutletContent"] !== void 0 || changes["ngComponentOutletInjector"] !== void 0 || this._needToReCreateNgModuleInstance(changes);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if (this._needToReCreateComponentInstance(changes)) {
          this._viewContainerRef.clear();
          this._inputsUsed.clear();
          this._componentRef = void 0;
          if (this.ngComponentOutlet) {
            const injector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
            if (this._needToReCreateNgModuleInstance(changes)) {
              this._moduleRef?.destroy();
              if (this.ngComponentOutletNgModule) {
                this._moduleRef = createNgModule(this.ngComponentOutletNgModule, getParentInjector(injector));
              } else if (this.ngComponentOutletNgModuleFactory) {
                this._moduleRef = this.ngComponentOutletNgModuleFactory.create(getParentInjector(injector));
              } else {
                this._moduleRef = void 0;
              }
            }
            this._componentRef = this._viewContainerRef.createComponent(this.ngComponentOutlet, {
              injector,
              ngModuleRef: this._moduleRef,
              projectableNodes: this.ngComponentOutletContent
            });
          }
        }
      }
      /** @docs-private */
      ngDoCheck() {
        if (this._componentRef) {
          if (this.ngComponentOutletInputs) {
            for (const inputName of Object.keys(this.ngComponentOutletInputs)) {
              this._inputsUsed.set(inputName, true);
            }
          }
          this._applyInputStateDiff(this._componentRef);
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        this._moduleRef?.destroy();
      }
      _applyInputStateDiff(componentRef) {
        for (const [inputName, touched] of this._inputsUsed) {
          if (!touched) {
            componentRef.setInput(inputName, void 0);
            this._inputsUsed.delete(inputName);
          } else {
            componentRef.setInput(inputName, this.ngComponentOutletInputs[inputName]);
            this._inputsUsed.set(inputName, false);
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgComponentOutlet, deps: [{ token: ViewContainerRef }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.4", type: _NgComponentOutlet, isStandalone: true, selector: "[ngComponentOutlet]", inputs: { ngComponentOutlet: "ngComponentOutlet", ngComponentOutletInputs: "ngComponentOutletInputs", ngComponentOutletInjector: "ngComponentOutletInjector", ngComponentOutletContent: "ngComponentOutletContent", ngComponentOutletNgModule: "ngComponentOutletNgModule", ngComponentOutletNgModuleFactory: "ngComponentOutletNgModuleFactory" }, exportAs: ["ngComponentOutlet"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgComponentOutlet, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngComponentOutlet]",
        exportAs: "ngComponentOutlet"
      }]
    }], ctorParameters: () => [{ type: ViewContainerRef }], propDecorators: { ngComponentOutlet: [{
      type: Input
    }], ngComponentOutletInputs: [{
      type: Input
    }], ngComponentOutletInjector: [{
      type: Input
    }], ngComponentOutletContent: [{
      type: Input
    }], ngComponentOutletNgModule: [{
      type: Input
    }], ngComponentOutletNgModuleFactory: [{
      type: Input
    }] } });
    NgForOfContext = class {
      $implicit;
      ngForOf;
      index;
      count;
      constructor($implicit, ngForOf, index, count) {
        this.$implicit = $implicit;
        this.ngForOf = ngForOf;
        this.index = index;
        this.count = count;
      }
      // Indicates whether this is the first item in the collection.
      get first() {
        return this.index === 0;
      }
      // Indicates whether this is the last item in the collection.
      get last() {
        return this.index === this.count - 1;
      }
      // Indicates whether an index of this item in the collection is even.
      get even() {
        return this.index % 2 === 0;
      }
      // Indicates whether an index of this item in the collection is odd.
      get odd() {
        return !this.even;
      }
    };
    NgForOf = class _NgForOf {
      _viewContainer;
      _template;
      _differs;
      /**
       * The value of the iterable expression, which can be used as a
       * [template input variable](guide/directives/structural-directives#shorthand).
       * @deprecated The `ngFor` directive is deprecated. Use the `@for` block instead.
       */
      set ngForOf(ngForOf) {
        this._ngForOf = ngForOf;
        this._ngForOfDirty = true;
      }
      /**
       * Specifies a custom `TrackByFunction` to compute the identity of items in an iterable.
       *
       * If a custom `TrackByFunction` is not provided, `NgForOf` will use the item's [object
       * identity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
       * as the key.
       *
       * `NgForOf` uses the computed key to associate items in an iterable with DOM elements
       * it produces for these items.
       *
       * A custom `TrackByFunction` is useful to provide good user experience in cases when items in an
       * iterable rendered using `NgForOf` have a natural identifier (for example, custom ID or a
       * primary key), and this iterable could be updated with new object instances that still
       * represent the same underlying entity (for example, when data is re-fetched from the server,
       * and the iterable is recreated and re-rendered, but most of the data is still the same).
       *
       * @see {@link TrackByFunction}
       * @deprecated The `ngFor` directive is deprecated. Use the `@for` block instead.
       */
      set ngForTrackBy(fn) {
        if ((typeof ngDevMode === "undefined" || ngDevMode) && fn != null && typeof fn !== "function") {
          console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`);
        }
        this._trackByFn = fn;
      }
      get ngForTrackBy() {
        return this._trackByFn;
      }
      _ngForOf = null;
      _ngForOfDirty = true;
      _differ = null;
      // waiting for microsoft/typescript#43662 to allow the return type `TrackByFunction|undefined` for
      // the getter
      _trackByFn;
      constructor(_viewContainer, _template, _differs) {
        this._viewContainer = _viewContainer;
        this._template = _template;
        this._differs = _differs;
      }
      /**
       * A reference to the template that is stamped out for each item in the iterable.
       * @see [template reference variable](guide/templates/variables#template-reference-variables)
       * @deprecated The `ngFor` directive is deprecated. Use the `@for` block instead.
       */
      set ngForTemplate(value) {
        if (value) {
          this._template = value;
        }
      }
      /**
       * Applies the changes when needed.
       * @docs-private
       */
      ngDoCheck() {
        if (this._ngForOfDirty) {
          this._ngForOfDirty = false;
          const value = this._ngForOf;
          if (!this._differ && value) {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              try {
                this._differ = this._differs.find(value).create(this.ngForTrackBy);
              } catch {
                let errorMessage = `Cannot find a differ supporting object '${value}' of type '${getTypeName(value)}'. NgFor only supports binding to Iterables, such as Arrays.`;
                if (typeof value === "object") {
                  errorMessage += " Did you mean to use the keyvalue pipe?";
                }
                throw new RuntimeError(-2200, errorMessage);
              }
            } else {
              this._differ = this._differs.find(value).create(this.ngForTrackBy);
            }
          }
        }
        if (this._differ) {
          const changes = this._differ.diff(this._ngForOf);
          if (changes)
            this._applyChanges(changes);
        }
      }
      _applyChanges(changes) {
        const viewContainer = this._viewContainer;
        changes.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
          if (item.previousIndex == null) {
            viewContainer.createEmbeddedView(this._template, new NgForOfContext(item.item, this._ngForOf, -1, -1), currentIndex === null ? void 0 : currentIndex);
          } else if (currentIndex == null) {
            viewContainer.remove(adjustedPreviousIndex === null ? void 0 : adjustedPreviousIndex);
          } else if (adjustedPreviousIndex !== null) {
            const view = viewContainer.get(adjustedPreviousIndex);
            viewContainer.move(view, currentIndex);
            applyViewChange(view, item);
          }
        });
        for (let i = 0, ilen = viewContainer.length; i < ilen; i++) {
          const viewRef = viewContainer.get(i);
          const context = viewRef.context;
          context.index = i;
          context.count = ilen;
          context.ngForOf = this._ngForOf;
        }
        changes.forEachIdentityChange((record) => {
          const viewRef = viewContainer.get(record.currentIndex);
          applyViewChange(viewRef, record);
        });
      }
      /**
       * Asserts the correct type of the context for the template that `NgForOf` will render.
       *
       * The presence of this method is a signal to the Ivy template type-check compiler that the
       * `NgForOf` structural directive renders its template with a specific context type.
       */
      static ngTemplateContextGuard(dir, ctx) {
        return true;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgForOf, deps: [{ token: ViewContainerRef }, { token: TemplateRef }, { token: IterableDiffers }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.4", type: _NgForOf, isStandalone: true, selector: "[ngFor][ngForOf]", inputs: { ngForOf: "ngForOf", ngForTrackBy: "ngForTrackBy", ngForTemplate: "ngForTemplate" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgForOf, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngFor][ngForOf]"
      }]
    }], ctorParameters: () => [{ type: ViewContainerRef }, { type: TemplateRef }, { type: IterableDiffers }], propDecorators: { ngForOf: [{
      type: Input
    }], ngForTrackBy: [{
      type: Input
    }], ngForTemplate: [{
      type: Input
    }] } });
    NgIf = class _NgIf {
      _viewContainer;
      _context = new NgIfContext();
      _thenTemplateRef = null;
      _elseTemplateRef = null;
      _thenViewRef = null;
      _elseViewRef = null;
      constructor(_viewContainer, templateRef) {
        this._viewContainer = _viewContainer;
        this._thenTemplateRef = templateRef;
      }
      /**
       * The Boolean expression to evaluate as the condition for showing a template.
       * @deprecated Use the @if block instead. Intent to remove in v22
       */
      set ngIf(condition) {
        this._context.$implicit = this._context.ngIf = condition;
        this._updateView();
      }
      /**
       * A template to show if the condition expression evaluates to true.
       * @deprecated Use the @if block instead. Intent to remove in v22
       */
      set ngIfThen(templateRef) {
        assertTemplate(templateRef, (typeof ngDevMode === "undefined" || ngDevMode) && "ngIfThen");
        this._thenTemplateRef = templateRef;
        this._thenViewRef = null;
        this._updateView();
      }
      /**
       * A template to show if the condition expression evaluates to false.
       * @deprecated Use the @if block instead. Intent to remove in v22
       */
      set ngIfElse(templateRef) {
        assertTemplate(templateRef, (typeof ngDevMode === "undefined" || ngDevMode) && "ngIfElse");
        this._elseTemplateRef = templateRef;
        this._elseViewRef = null;
        this._updateView();
      }
      _updateView() {
        if (this._context.$implicit) {
          if (!this._thenViewRef) {
            this._viewContainer.clear();
            this._elseViewRef = null;
            if (this._thenTemplateRef) {
              this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
            }
          }
        } else {
          if (!this._elseViewRef) {
            this._viewContainer.clear();
            this._thenViewRef = null;
            if (this._elseTemplateRef) {
              this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
            }
          }
        }
      }
      /** @internal */
      static ngIfUseIfTypeGuard;
      /**
       * Assert the correct type of the expression bound to the `ngIf` input within the template.
       *
       * The presence of this static field is a signal to the Ivy template type check compiler that
       * when the `NgIf` structural directive renders its template, the type of the expression bound
       * to `ngIf` should be narrowed in some way. For `NgIf`, the binding expression itself is used to
       * narrow its type, which allows the strictNullChecks feature of TypeScript to work with `NgIf`.
       */
      static ngTemplateGuard_ngIf;
      /**
       * Asserts the correct type of the context for the template that `NgIf` will render.
       *
       * The presence of this method is a signal to the Ivy template type-check compiler that the
       * `NgIf` structural directive renders its template with a specific context type.
       */
      static ngTemplateContextGuard(dir, ctx) {
        return true;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgIf, deps: [{ token: ViewContainerRef }, { token: TemplateRef }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.4", type: _NgIf, isStandalone: true, selector: "[ngIf]", inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgIf, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngIf]"
      }]
    }], ctorParameters: () => [{ type: ViewContainerRef }, { type: TemplateRef }], propDecorators: { ngIf: [{
      type: Input
    }], ngIfThen: [{
      type: Input
    }], ngIfElse: [{
      type: Input
    }] } });
    NgIfContext = class {
      $implicit = null;
      ngIf = null;
    };
    SwitchView = class {
      _viewContainerRef;
      _templateRef;
      _created = false;
      constructor(_viewContainerRef, _templateRef) {
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
      }
      create() {
        this._created = true;
        this._viewContainerRef.createEmbeddedView(this._templateRef);
      }
      destroy() {
        this._created = false;
        this._viewContainerRef.clear();
      }
      enforceState(created) {
        if (created && !this._created) {
          this.create();
        } else if (!created && this._created) {
          this.destroy();
        }
      }
    };
    NgSwitch = class _NgSwitch {
      _defaultViews = [];
      _defaultUsed = false;
      _caseCount = 0;
      _lastCaseCheckIndex = 0;
      _lastCasesMatched = false;
      _ngSwitch;
      /** @deprecated Use the @switch block instead. Intent to remove in v22 */
      set ngSwitch(newValue) {
        this._ngSwitch = newValue;
        if (this._caseCount === 0) {
          this._updateDefaultCases(true);
        }
      }
      /** @internal */
      _addCase() {
        return this._caseCount++;
      }
      /** @internal */
      _addDefault(view) {
        this._defaultViews.push(view);
      }
      /** @internal */
      _matchCase(value) {
        const matched = value === this._ngSwitch;
        this._lastCasesMatched ||= matched;
        this._lastCaseCheckIndex++;
        if (this._lastCaseCheckIndex === this._caseCount) {
          this._updateDefaultCases(!this._lastCasesMatched);
          this._lastCaseCheckIndex = 0;
          this._lastCasesMatched = false;
        }
        return matched;
      }
      _updateDefaultCases(useDefault) {
        if (this._defaultViews.length > 0 && useDefault !== this._defaultUsed) {
          this._defaultUsed = useDefault;
          for (const defaultView of this._defaultViews) {
            defaultView.enforceState(useDefault);
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgSwitch, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.4", type: _NgSwitch, isStandalone: true, selector: "[ngSwitch]", inputs: { ngSwitch: "ngSwitch" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgSwitch, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngSwitch]"
      }]
    }], propDecorators: { ngSwitch: [{
      type: Input
    }] } });
    NgSwitchCase = class _NgSwitchCase {
      ngSwitch;
      _view;
      /**
       * Stores the HTML template to be selected on match.
       * @deprecated Use the @case block within a @switch block instead. Intent to remove in v22
       */
      ngSwitchCase;
      constructor(viewContainer, templateRef, ngSwitch) {
        this.ngSwitch = ngSwitch;
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !ngSwitch) {
          throwNgSwitchProviderNotFoundError("ngSwitchCase", "NgSwitchCase");
        }
        ngSwitch._addCase();
        this._view = new SwitchView(viewContainer, templateRef);
      }
      /**
       * Performs case matching. For internal use only.
       * @docs-private
       */
      ngDoCheck() {
        this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgSwitchCase, deps: [{ token: ViewContainerRef }, { token: TemplateRef }, { token: NgSwitch, host: true, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.4", type: _NgSwitchCase, isStandalone: true, selector: "[ngSwitchCase]", inputs: { ngSwitchCase: "ngSwitchCase" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgSwitchCase, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngSwitchCase]"
      }]
    }], ctorParameters: () => [{ type: ViewContainerRef }, { type: TemplateRef }, { type: NgSwitch, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }], propDecorators: { ngSwitchCase: [{
      type: Input
    }] } });
    NgSwitchDefault = class _NgSwitchDefault {
      constructor(viewContainer, templateRef, ngSwitch) {
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !ngSwitch) {
          throwNgSwitchProviderNotFoundError("ngSwitchDefault", "NgSwitchDefault");
        }
        ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgSwitchDefault, deps: [{ token: ViewContainerRef }, { token: TemplateRef }, { token: NgSwitch, host: true, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.4", type: _NgSwitchDefault, isStandalone: true, selector: "[ngSwitchDefault]", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgSwitchDefault, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngSwitchDefault]"
      }]
    }], ctorParameters: () => [{ type: ViewContainerRef }, { type: TemplateRef }, { type: NgSwitch, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }] });
    NgPlural = class _NgPlural {
      _localization;
      _activeView;
      _caseViews = {};
      constructor(_localization) {
        this._localization = _localization;
      }
      set ngPlural(value) {
        this._updateView(value);
      }
      addCase(value, switchView) {
        this._caseViews[value] = switchView;
      }
      _updateView(switchValue) {
        this._clearViews();
        const cases = Object.keys(this._caseViews);
        const key = getPluralCategory(switchValue, cases, this._localization);
        this._activateView(this._caseViews[key]);
      }
      _clearViews() {
        if (this._activeView)
          this._activeView.destroy();
      }
      _activateView(view) {
        if (view) {
          this._activeView = view;
          this._activeView.create();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgPlural, deps: [{ token: NgLocalization }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.4", type: _NgPlural, isStandalone: true, selector: "[ngPlural]", inputs: { ngPlural: "ngPlural" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgPlural, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngPlural]"
      }]
    }], ctorParameters: () => [{ type: NgLocalization }], propDecorators: { ngPlural: [{
      type: Input
    }] } });
    NgPluralCase = class _NgPluralCase {
      value;
      constructor(value, template, viewContainer, ngPlural) {
        this.value = value;
        const isANumber = !isNaN(Number(value));
        ngPlural.addCase(isANumber ? `=${value}` : value, new SwitchView(viewContainer, template));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgPluralCase, deps: [{ token: "ngPluralCase", attribute: true }, { token: TemplateRef }, { token: ViewContainerRef }, { token: NgPlural, host: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.4", type: _NgPluralCase, isStandalone: true, selector: "[ngPluralCase]", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgPluralCase, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngPluralCase]"
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Attribute,
      args: ["ngPluralCase"]
    }] }, { type: TemplateRef }, { type: ViewContainerRef }, { type: NgPlural, decorators: [{
      type: Host
    }] }] });
    NgStyle = class _NgStyle {
      _ngEl;
      _differs;
      _renderer;
      _ngStyle = null;
      _differ = null;
      constructor(_ngEl, _differs, _renderer) {
        this._ngEl = _ngEl;
        this._differs = _differs;
        this._renderer = _renderer;
      }
      set ngStyle(values) {
        this._ngStyle = values;
        if (!this._differ && values) {
          this._differ = this._differs.find(values).create();
        }
      }
      ngDoCheck() {
        if (this._differ) {
          const changes = this._differ.diff(this._ngStyle);
          if (changes) {
            this._applyChanges(changes);
          }
        }
      }
      _setStyle(nameAndUnit, value) {
        const [name, unit] = nameAndUnit.split(".");
        const flags = name.indexOf("-") === -1 ? void 0 : RendererStyleFlags2.DashCase;
        if (value != null) {
          this._renderer.setStyle(this._ngEl.nativeElement, name, unit ? `${value}${unit}` : value, flags);
        } else {
          this._renderer.removeStyle(this._ngEl.nativeElement, name, flags);
        }
      }
      _applyChanges(changes) {
        changes.forEachRemovedItem((record) => this._setStyle(record.key, null));
        changes.forEachAddedItem((record) => this._setStyle(record.key, record.currentValue));
        changes.forEachChangedItem((record) => this._setStyle(record.key, record.currentValue));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgStyle, deps: [{ token: ElementRef }, { token: KeyValueDiffers }, { token: Renderer2 }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.4", type: _NgStyle, isStandalone: true, selector: "[ngStyle]", inputs: { ngStyle: "ngStyle" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgStyle, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngStyle]"
      }]
    }], ctorParameters: () => [{ type: ElementRef }, { type: KeyValueDiffers }, { type: Renderer2 }], propDecorators: { ngStyle: [{
      type: Input,
      args: ["ngStyle"]
    }] } });
    NgTemplateOutlet = class _NgTemplateOutlet {
      _viewContainerRef;
      _viewRef = null;
      /**
       * A context object to attach to the {@link EmbeddedViewRef}. This should be an
       * object, the object's keys will be available for binding by the local template `let`
       * declarations.
       * Using the key `$implicit` in the context object will set its value as default.
       */
      ngTemplateOutletContext = null;
      /**
       * A string defining the template reference and optionally the context object for the template.
       */
      ngTemplateOutlet = null;
      /** Injector to be used within the embedded view. */
      ngTemplateOutletInjector = null;
      constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
      }
      ngOnChanges(changes) {
        if (this._shouldRecreateView(changes)) {
          const viewContainerRef = this._viewContainerRef;
          if (this._viewRef) {
            viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
          }
          if (!this.ngTemplateOutlet) {
            this._viewRef = null;
            return;
          }
          const viewContext = this._createContextForwardProxy();
          this._viewRef = viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, viewContext, {
            injector: this.ngTemplateOutletInjector ?? void 0
          });
        }
      }
      /**
       * We need to re-create existing embedded view if either is true:
       * - the outlet changed.
       * - the injector changed.
       */
      _shouldRecreateView(changes) {
        return !!changes["ngTemplateOutlet"] || !!changes["ngTemplateOutletInjector"];
      }
      /**
       * For a given outlet instance, we create a proxy object that delegates
       * to the user-specified context. This allows changing, or swapping out
       * the context object completely without having to destroy/re-create the view.
       */
      _createContextForwardProxy() {
        return new Proxy({}, {
          set: (_target, prop, newValue) => {
            if (!this.ngTemplateOutletContext) {
              return false;
            }
            return Reflect.set(this.ngTemplateOutletContext, prop, newValue);
          },
          get: (_target, prop, receiver) => {
            if (!this.ngTemplateOutletContext) {
              return void 0;
            }
            return Reflect.get(this.ngTemplateOutletContext, prop, receiver);
          }
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgTemplateOutlet, deps: [{ token: ViewContainerRef }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.4", type: _NgTemplateOutlet, isStandalone: true, selector: "[ngTemplateOutlet]", inputs: { ngTemplateOutletContext: "ngTemplateOutletContext", ngTemplateOutlet: "ngTemplateOutlet", ngTemplateOutletInjector: "ngTemplateOutletInjector" }, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgTemplateOutlet, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngTemplateOutlet]"
      }]
    }], ctorParameters: () => [{ type: ViewContainerRef }], propDecorators: { ngTemplateOutletContext: [{
      type: Input
    }], ngTemplateOutlet: [{
      type: Input
    }], ngTemplateOutletInjector: [{
      type: Input
    }] } });
    COMMON_DIRECTIVES = [
      NgClass,
      NgComponentOutlet,
      NgForOf,
      NgIf,
      NgTemplateOutlet,
      NgStyle,
      NgSwitch,
      NgSwitchCase,
      NgSwitchDefault,
      NgPlural,
      NgPluralCase
    ];
    SubscribableStrategy = class {
      createSubscription(async, updateLatestValue, onError) {
        return untracked(() => async.subscribe({
          next: updateLatestValue,
          error: onError
        }));
      }
      dispose(subscription) {
        untracked(() => subscription.unsubscribe());
      }
    };
    PromiseStrategy = class {
      createSubscription(async, updateLatestValue, onError) {
        async.then(
          // Using optional chaining because we may have set it to `null`; since the promise
          // is async, the view might be destroyed by the time the promise resolves.
          (v) => updateLatestValue?.(v),
          (e) => onError?.(e)
        );
        return {
          unsubscribe: () => {
            updateLatestValue = null;
            onError = null;
          }
        };
      }
      dispose(subscription) {
        subscription.unsubscribe();
      }
    };
    _promiseStrategy = new PromiseStrategy();
    _subscribableStrategy = new SubscribableStrategy();
    AsyncPipe = class _AsyncPipe {
      _ref;
      _latestValue = null;
      markForCheckOnValueUpdate = true;
      _subscription = null;
      _obj = null;
      _strategy = null;
      applicationErrorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
      constructor(ref) {
        this._ref = ref;
      }
      ngOnDestroy() {
        if (this._subscription) {
          this._dispose();
        }
        this._ref = null;
      }
      transform(obj) {
        if (!this._obj) {
          if (obj) {
            try {
              this.markForCheckOnValueUpdate = false;
              this._subscribe(obj);
            } finally {
              this.markForCheckOnValueUpdate = true;
            }
          }
          return this._latestValue;
        }
        if (obj !== this._obj) {
          this._dispose();
          return this.transform(obj);
        }
        return this._latestValue;
      }
      _subscribe(obj) {
        this._obj = obj;
        this._strategy = this._selectStrategy(obj);
        this._subscription = this._strategy.createSubscription(obj, (value) => this._updateLatestValue(obj, value), (e) => this.applicationErrorHandler(e));
      }
      _selectStrategy(obj) {
        if (isPromise(obj)) {
          return _promiseStrategy;
        }
        if (isSubscribable(obj)) {
          return _subscribableStrategy;
        }
        throw invalidPipeArgumentError(_AsyncPipe, obj);
      }
      _dispose() {
        this._strategy.dispose(this._subscription);
        this._latestValue = null;
        this._subscription = null;
        this._obj = null;
      }
      _updateLatestValue(async, value) {
        if (async === this._obj) {
          this._latestValue = value;
          if (this.markForCheckOnValueUpdate) {
            this._ref?.markForCheck();
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _AsyncPipe, deps: [{ token: ChangeDetectorRef }], target: FactoryTarget.Pipe });
      static \u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _AsyncPipe, isStandalone: true, name: "async", pure: false });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: AsyncPipe, decorators: [{
      type: Pipe,
      args: [{
        name: "async",
        pure: false
      }]
    }], ctorParameters: () => [{ type: ChangeDetectorRef }] });
    LowerCasePipe = class _LowerCasePipe {
      transform(value) {
        if (value == null)
          return null;
        if (typeof value !== "string") {
          throw invalidPipeArgumentError(_LowerCasePipe, value);
        }
        return value.toLowerCase();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _LowerCasePipe, deps: [], target: FactoryTarget.Pipe });
      static \u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _LowerCasePipe, isStandalone: true, name: "lowercase" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: LowerCasePipe, decorators: [{
      type: Pipe,
      args: [{
        name: "lowercase"
      }]
    }] });
    unicodeWordMatch = /(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;
    TitleCasePipe = class _TitleCasePipe {
      transform(value) {
        if (value == null)
          return null;
        if (typeof value !== "string") {
          throw invalidPipeArgumentError(_TitleCasePipe, value);
        }
        return value.replace(unicodeWordMatch, (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase());
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _TitleCasePipe, deps: [], target: FactoryTarget.Pipe });
      static \u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _TitleCasePipe, isStandalone: true, name: "titlecase" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: TitleCasePipe, decorators: [{
      type: Pipe,
      args: [{
        name: "titlecase"
      }]
    }] });
    UpperCasePipe = class _UpperCasePipe {
      transform(value) {
        if (value == null)
          return null;
        if (typeof value !== "string") {
          throw invalidPipeArgumentError(_UpperCasePipe, value);
        }
        return value.toUpperCase();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _UpperCasePipe, deps: [], target: FactoryTarget.Pipe });
      static \u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _UpperCasePipe, isStandalone: true, name: "uppercase" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: UpperCasePipe, decorators: [{
      type: Pipe,
      args: [{
        name: "uppercase"
      }]
    }] });
    DEFAULT_DATE_FORMAT = "mediumDate";
    DATE_PIPE_DEFAULT_TIMEZONE = new InjectionToken(ngDevMode ? "DATE_PIPE_DEFAULT_TIMEZONE" : "");
    DATE_PIPE_DEFAULT_OPTIONS = new InjectionToken(ngDevMode ? "DATE_PIPE_DEFAULT_OPTIONS" : "");
    DatePipe = class _DatePipe {
      locale;
      defaultTimezone;
      defaultOptions;
      constructor(locale, defaultTimezone, defaultOptions) {
        this.locale = locale;
        this.defaultTimezone = defaultTimezone;
        this.defaultOptions = defaultOptions;
      }
      transform(value, format, timezone, locale) {
        if (value == null || value === "" || value !== value)
          return null;
        try {
          const _format = format ?? this.defaultOptions?.dateFormat ?? DEFAULT_DATE_FORMAT;
          const _timezone = timezone ?? this.defaultOptions?.timezone ?? this.defaultTimezone ?? void 0;
          return formatDate(value, _format, locale || this.locale, _timezone);
        } catch (error) {
          throw invalidPipeArgumentError(_DatePipe, error.message);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _DatePipe, deps: [{ token: LOCALE_ID }, { token: DATE_PIPE_DEFAULT_TIMEZONE, optional: true }, { token: DATE_PIPE_DEFAULT_OPTIONS, optional: true }], target: FactoryTarget.Pipe });
      static \u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _DatePipe, isStandalone: true, name: "date" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: DatePipe, decorators: [{
      type: Pipe,
      args: [{
        name: "date"
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }] }, { type: void 0, decorators: [{
      type: Inject,
      args: [DATE_PIPE_DEFAULT_TIMEZONE]
    }, {
      type: Optional
    }] }, { type: void 0, decorators: [{
      type: Inject,
      args: [DATE_PIPE_DEFAULT_OPTIONS]
    }, {
      type: Optional
    }] }] });
    _INTERPOLATION_REGEXP = /#/g;
    I18nPluralPipe = class _I18nPluralPipe {
      _localization;
      constructor(_localization) {
        this._localization = _localization;
      }
      /**
       * @param value the number to be formatted
       * @param pluralMap an object that mimics the ICU format, see
       * https://unicode-org.github.io/icu/userguide/format_parse/messages/.
       * @param locale a `string` defining the locale to use (uses the current {@link LOCALE_ID} by
       * default).
       */
      transform(value, pluralMap, locale) {
        if (value == null)
          return "";
        if (typeof pluralMap !== "object" || pluralMap === null) {
          throw invalidPipeArgumentError(_I18nPluralPipe, pluralMap);
        }
        const key = getPluralCategory(value, Object.keys(pluralMap), this._localization, locale);
        return pluralMap[key].replace(_INTERPOLATION_REGEXP, value.toString());
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _I18nPluralPipe, deps: [{ token: NgLocalization }], target: FactoryTarget.Pipe });
      static \u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _I18nPluralPipe, isStandalone: true, name: "i18nPlural" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: I18nPluralPipe, decorators: [{
      type: Pipe,
      args: [{
        name: "i18nPlural"
      }]
    }], ctorParameters: () => [{ type: NgLocalization }] });
    I18nSelectPipe = class _I18nSelectPipe {
      /**
       * @param value a string to be internationalized.
       * @param mapping an object that indicates the text that should be displayed
       * for different values of the provided `value`.
       */
      transform(value, mapping) {
        if (value == null)
          return "";
        if (typeof mapping !== "object" || typeof value !== "string") {
          throw invalidPipeArgumentError(_I18nSelectPipe, mapping);
        }
        if (mapping.hasOwnProperty(value)) {
          return mapping[value];
        }
        if (mapping.hasOwnProperty("other")) {
          return mapping["other"];
        }
        return "";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _I18nSelectPipe, deps: [], target: FactoryTarget.Pipe });
      static \u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _I18nSelectPipe, isStandalone: true, name: "i18nSelect" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: I18nSelectPipe, decorators: [{
      type: Pipe,
      args: [{
        name: "i18nSelect"
      }]
    }] });
    JsonPipe = class _JsonPipe {
      /**
       * @param value A value of any type to convert into a JSON-format string.
       */
      transform(value) {
        return JSON.stringify(value, null, 2);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _JsonPipe, deps: [], target: FactoryTarget.Pipe });
      static \u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _JsonPipe, isStandalone: true, name: "json", pure: false });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: JsonPipe, decorators: [{
      type: Pipe,
      args: [{
        name: "json",
        pure: false
      }]
    }] });
    KeyValuePipe = class _KeyValuePipe {
      differs;
      constructor(differs) {
        this.differs = differs;
      }
      differ;
      keyValues = [];
      compareFn = defaultComparator;
      transform(input, compareFn = defaultComparator) {
        if (!input || !(input instanceof Map) && typeof input !== "object") {
          return null;
        }
        this.differ ??= this.differs.find(input).create();
        const differChanges = this.differ.diff(input);
        const compareFnChanged = compareFn !== this.compareFn;
        if (differChanges) {
          this.keyValues = [];
          differChanges.forEachItem((r) => {
            this.keyValues.push(makeKeyValuePair(r.key, r.currentValue));
          });
        }
        if (differChanges || compareFnChanged) {
          if (compareFn) {
            this.keyValues.sort(compareFn);
          }
          this.compareFn = compareFn;
        }
        return this.keyValues;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _KeyValuePipe, deps: [{ token: KeyValueDiffers }], target: FactoryTarget.Pipe });
      static \u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _KeyValuePipe, isStandalone: true, name: "keyvalue", pure: false });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: KeyValuePipe, decorators: [{
      type: Pipe,
      args: [{
        name: "keyvalue",
        pure: false
      }]
    }], ctorParameters: () => [{ type: KeyValueDiffers }] });
    DecimalPipe = class _DecimalPipe {
      _locale;
      constructor(_locale) {
        this._locale = _locale;
      }
      transform(value, digitsInfo, locale) {
        if (!isValue(value))
          return null;
        locale ||= this._locale;
        try {
          const num = strToNumber(value);
          return formatNumber(num, locale, digitsInfo);
        } catch (error) {
          throw invalidPipeArgumentError(_DecimalPipe, error.message);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _DecimalPipe, deps: [{ token: LOCALE_ID }], target: FactoryTarget.Pipe });
      static \u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _DecimalPipe, isStandalone: true, name: "number" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: DecimalPipe, decorators: [{
      type: Pipe,
      args: [{
        name: "number"
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }] }] });
    PercentPipe = class _PercentPipe {
      _locale;
      constructor(_locale) {
        this._locale = _locale;
      }
      /**
       *
       * @param value The number to be formatted as a percentage.
       * @param digitsInfo Decimal representation options, specified by a string
       * in the following format:<br>
       * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
       *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
       * Default is `1`.
       *   - `minFractionDigits`: The minimum number of digits after the decimal point.
       * Default is `0`.
       *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
       * Default is `0`.
       * @param locale A locale code for the locale format rules to use.
       * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
       * See [Setting your app locale](guide/i18n/locale-id).
       */
      transform(value, digitsInfo, locale) {
        if (!isValue(value))
          return null;
        locale ||= this._locale;
        try {
          const num = strToNumber(value);
          return formatPercent(num, locale, digitsInfo);
        } catch (error) {
          throw invalidPipeArgumentError(_PercentPipe, error.message);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _PercentPipe, deps: [{ token: LOCALE_ID }], target: FactoryTarget.Pipe });
      static \u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _PercentPipe, isStandalone: true, name: "percent" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: PercentPipe, decorators: [{
      type: Pipe,
      args: [{
        name: "percent"
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }] }] });
    CurrencyPipe = class _CurrencyPipe {
      _locale;
      _defaultCurrencyCode;
      constructor(_locale, _defaultCurrencyCode = "USD") {
        this._locale = _locale;
        this._defaultCurrencyCode = _defaultCurrencyCode;
      }
      transform(value, currencyCode = this._defaultCurrencyCode, display = "symbol", digitsInfo, locale) {
        if (!isValue(value))
          return null;
        locale ||= this._locale;
        if (typeof display === "boolean") {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            console.warn(`Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".`);
          }
          display = display ? "symbol" : "code";
        }
        let currency = currencyCode || this._defaultCurrencyCode;
        if (display !== "code") {
          if (display === "symbol" || display === "symbol-narrow") {
            currency = getCurrencySymbol(currency, display === "symbol" ? "wide" : "narrow", locale);
          } else {
            currency = display;
          }
        }
        try {
          const num = strToNumber(value);
          return formatCurrency(num, locale, currency, currencyCode, digitsInfo);
        } catch (error) {
          throw invalidPipeArgumentError(_CurrencyPipe, error.message);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _CurrencyPipe, deps: [{ token: LOCALE_ID }, { token: DEFAULT_CURRENCY_CODE }], target: FactoryTarget.Pipe });
      static \u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _CurrencyPipe, isStandalone: true, name: "currency" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: CurrencyPipe, decorators: [{
      type: Pipe,
      args: [{
        name: "currency"
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }] }, { type: void 0, decorators: [{
      type: Inject,
      args: [DEFAULT_CURRENCY_CODE]
    }] }] });
    SlicePipe = class _SlicePipe {
      transform(value, start, end) {
        if (value == null)
          return null;
        const supports = typeof value === "string" || Array.isArray(value);
        if (!supports) {
          throw invalidPipeArgumentError(_SlicePipe, value);
        }
        return value.slice(start, end);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _SlicePipe, deps: [], target: FactoryTarget.Pipe });
      static \u0275pipe = \u0275\u0275ngDeclarePipe({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _SlicePipe, isStandalone: true, name: "slice", pure: false });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: SlicePipe, decorators: [{
      type: Pipe,
      args: [{
        name: "slice",
        pure: false
      }]
    }] });
    COMMON_PIPES = [
      AsyncPipe,
      UpperCasePipe,
      LowerCasePipe,
      JsonPipe,
      SlicePipe,
      DecimalPipe,
      PercentPipe,
      TitleCasePipe,
      CurrencyPipe,
      DatePipe,
      I18nPluralPipe,
      I18nSelectPipe,
      KeyValuePipe
    ];
    CommonModule = class _CommonModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _CommonModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.4", ngImport: core_exports, type: _CommonModule, imports: [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe], exports: [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _CommonModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: CommonModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [COMMON_DIRECTIVES, COMMON_PIPES],
        exports: [COMMON_DIRECTIVES, COMMON_PIPES]
      }]
    }] });
  }
});

// node_modules/@angular/common/fesm2022/platform_navigation-B45Jeakb.mjs
var PlatformNavigation;
var init_platform_navigation_B45Jeakb = __esm({
  "node_modules/@angular/common/fesm2022/platform_navigation-B45Jeakb.mjs"() {
    "use strict";
    init_core();
    init_core();
    PlatformNavigation = class _PlatformNavigation {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _PlatformNavigation, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _PlatformNavigation, providedIn: "platform", useFactory: () => window.navigation });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: PlatformNavigation, decorators: [{
      type: Injectable,
      args: [{ providedIn: "platform", useFactory: () => window.navigation }]
    }] });
  }
});

// node_modules/@angular/common/fesm2022/common.mjs
function isPlatformBrowser(platformId) {
  return platformId === PLATFORM_BROWSER_ID;
}
function isPlatformServer(platformId) {
  return platformId === PLATFORM_SERVER_ID;
}
function findAnchorFromDocument(document, target) {
  const documentResult = document.getElementById(target) || document.getElementsByName(target)[0];
  if (documentResult) {
    return documentResult;
  }
  if (typeof document.createTreeWalker === "function" && document.body && typeof document.body.attachShadow === "function") {
    const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    let currentNode = treeWalker.currentNode;
    while (currentNode) {
      const shadowRoot = currentNode.shadowRoot;
      if (shadowRoot) {
        const result = shadowRoot.getElementById(target) || shadowRoot.querySelector(`[name="${target}"]`);
        if (result) {
          return result;
        }
      }
      currentNode = treeWalker.nextNode();
    }
  }
  return null;
}
function getUrl(src, win) {
  return isAbsoluteUrl(src) ? new URL(src) : new URL(src, win.location.href);
}
function isAbsoluteUrl(src) {
  return /^https?:\/\//.test(src);
}
function extractHostname(url) {
  return isAbsoluteUrl(url) ? new URL(url).hostname : url;
}
function isValidPath(path) {
  const isString = typeof path === "string";
  if (!isString || path.trim() === "") {
    return false;
  }
  try {
    const url = new URL(path);
    return true;
  } catch {
    return false;
  }
}
function normalizePath(path) {
  return path.endsWith("/") ? path.slice(0, -1) : path;
}
function normalizeSrc(src) {
  return src.startsWith("/") ? src.slice(1) : src;
}
function createImageLoader(buildUrlFn, exampleUrls) {
  return function provideImageLoader(path) {
    if (!isValidPath(path)) {
      throwInvalidPathError(path, exampleUrls || []);
    }
    path = normalizePath(path);
    const loaderFn = (config) => {
      if (isAbsoluteUrl(config.src)) {
        throwUnexpectedAbsoluteUrlError(path, config.src);
      }
      return buildUrlFn(path, __spreadProps(__spreadValues({}, config), { src: normalizeSrc(config.src) }));
    };
    const providers = [{ provide: IMAGE_LOADER, useValue: loaderFn }];
    return providers;
  };
}
function throwInvalidPathError(path, exampleUrls) {
  throw new RuntimeError(2959, ngDevMode && `Image loader has detected an invalid path (\`${path}\`). To fix this, supply a path using one of the following formats: ${exampleUrls.join(" or ")}`);
}
function throwUnexpectedAbsoluteUrlError(path, url) {
  throw new RuntimeError(2959, ngDevMode && `Image loader has detected a \`<img>\` tag with an invalid \`ngSrc\` attribute: ${url}. This image loader expects \`ngSrc\` to be a relative URL - however the provided value is an absolute URL. To fix this, provide \`ngSrc\` as a path relative to the base URL configured for this loader (\`${path}\`).`);
}
function createCloudflareUrl(path, config) {
  let params = `format=auto`;
  if (config.width) {
    params += `,width=${config.width}`;
  }
  if (config.isPlaceholder) {
    params += `,quality=${PLACEHOLDER_QUALITY}`;
  }
  return `${path}/cdn-cgi/image/${params}/${config.src}`;
}
function isCloudinaryUrl(url) {
  return CLOUDINARY_LOADER_REGEX.test(url);
}
function createCloudinaryUrl(path, config) {
  const quality = config.isPlaceholder ? "q_auto:low" : "q_auto";
  let params = `f_auto,${quality}`;
  if (config.width) {
    params += `,w_${config.width}`;
  }
  if (config.loaderParams?.["rounded"]) {
    params += `,r_max`;
  }
  return `${path}/image/upload/${params}/${config.src}`;
}
function isImageKitUrl(url) {
  return IMAGE_KIT_LOADER_REGEX.test(url);
}
function createImagekitUrl(path, config) {
  const { src, width } = config;
  const params = [];
  if (width) {
    params.push(`w-${width}`);
  }
  if (config.isPlaceholder) {
    params.push(`q-${PLACEHOLDER_QUALITY}`);
  }
  const urlSegments = params.length ? [path, `tr:${params.join(",")}`, src] : [path, src];
  const url = new URL(urlSegments.join("/"));
  return url.href;
}
function isImgixUrl(url) {
  return IMGIX_LOADER_REGEX.test(url);
}
function createImgixUrl(path, config) {
  const url = new URL(`${path}/${config.src}`);
  url.searchParams.set("auto", "format");
  if (config.width) {
    url.searchParams.set("w", config.width.toString());
  }
  if (config.isPlaceholder) {
    url.searchParams.set("q", PLACEHOLDER_QUALITY);
  }
  return url.href;
}
function isNetlifyUrl(url) {
  return NETLIFY_LOADER_REGEX.test(url);
}
function imgDirectiveDetails(ngSrc, includeNgSrc = true) {
  const ngSrcInfo = includeNgSrc ? `(activated on an <img> element with the \`ngSrc="${ngSrc}"\`) ` : "";
  return `The NgOptimizedImage directive ${ngSrcInfo}has detected that`;
}
function assertDevMode(checkName) {
  if (!ngDevMode) {
    throw new RuntimeError(2958, `Unexpected invocation of the ${checkName} in the prod mode. Please make sure that the prod mode is enabled for production builds.`);
  }
}
function logMissingPriorityError(ngSrc) {
  const directiveDetails = imgDirectiveDetails(ngSrc);
  console.error(formatRuntimeError(2955, `${directiveDetails} this image is the Largest Contentful Paint (LCP) element but was not marked "priority". This image should be marked "priority" in order to prioritize its loading. To fix this, add the "priority" attribute.`));
}
function logModifiedWarning(ngSrc) {
  const directiveDetails = imgDirectiveDetails(ngSrc);
  console.warn(formatRuntimeError(2964, `${directiveDetails} this image is the Largest Contentful Paint (LCP) element and has had its "ngSrc" attribute modified. This can cause slower loading performance. It is recommended not to modify the "ngSrc" property on any image which could be the LCP element.`));
}
function deepForEach(input, fn) {
  for (let value of input) {
    Array.isArray(value) ? deepForEach(value, fn) : fn(value);
  }
}
function processConfig(config) {
  let sortedBreakpoints = {};
  if (config.breakpoints) {
    sortedBreakpoints.breakpoints = config.breakpoints.sort((a, b) => a - b);
  }
  return Object.assign({}, IMAGE_CONFIG_DEFAULTS, config, sortedBreakpoints);
}
function assertNoConflictingSrc(dir) {
  if (dir.src) {
    throw new RuntimeError(2950, `${imgDirectiveDetails(dir.ngSrc)} both \`src\` and \`ngSrc\` have been set. Supplying both of these attributes breaks lazy loading. The NgOptimizedImage directive sets \`src\` itself based on the value of \`ngSrc\`. To fix this, please remove the \`src\` attribute.`);
  }
}
function assertNoConflictingSrcset(dir) {
  if (dir.srcset) {
    throw new RuntimeError(2951, `${imgDirectiveDetails(dir.ngSrc)} both \`srcset\` and \`ngSrcset\` have been set. Supplying both of these attributes breaks lazy loading. The NgOptimizedImage directive sets \`srcset\` itself based on the value of \`ngSrcset\`. To fix this, please remove the \`srcset\` attribute.`);
  }
}
function assertNotBase64Image(dir) {
  let ngSrc = dir.ngSrc.trim();
  if (ngSrc.startsWith("data:")) {
    if (ngSrc.length > BASE64_IMG_MAX_LENGTH_IN_ERROR) {
      ngSrc = ngSrc.substring(0, BASE64_IMG_MAX_LENGTH_IN_ERROR) + "...";
    }
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`ngSrc\` is a Base64-encoded string (${ngSrc}). NgOptimizedImage does not support Base64-encoded strings. To fix this, disable the NgOptimizedImage directive for this element by removing \`ngSrc\` and using a standard \`src\` attribute instead.`);
  }
}
function assertNoComplexSizes(dir) {
  let sizes = dir.sizes;
  if (sizes?.match(/((\)|,)\s|^)\d+px/)) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`sizes\` was set to a string including pixel values. For automatic \`srcset\` generation, \`sizes\` must only include responsive values, such as \`sizes="50vw"\` or \`sizes="(min-width: 768px) 50vw, 100vw"\`. To fix this, modify the \`sizes\` attribute, or provide your own \`ngSrcset\` value directly.`);
  }
}
function assertValidPlaceholder(dir, imageLoader) {
  assertNoPlaceholderConfigWithoutPlaceholder(dir);
  assertNoRelativePlaceholderWithoutLoader(dir, imageLoader);
  assertNoOversizedDataUrl(dir);
}
function assertNoPlaceholderConfigWithoutPlaceholder(dir) {
  if (dir.placeholderConfig && !dir.placeholder) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`placeholderConfig\` options were provided for an image that does not use the \`placeholder\` attribute, and will have no effect.`);
  }
}
function assertNoRelativePlaceholderWithoutLoader(dir, imageLoader) {
  if (dir.placeholder === true && imageLoader === noopImageLoader) {
    throw new RuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to true but no image loader is configured (i.e. the default one is being used), which would result in the same image being used for the primary image and its placeholder. To fix this, provide a loader or remove the \`placeholder\` attribute from the image.`);
  }
}
function assertNoOversizedDataUrl(dir) {
  if (dir.placeholder && typeof dir.placeholder === "string" && dir.placeholder.startsWith("data:")) {
    if (dir.placeholder.length > DATA_URL_ERROR_LIMIT) {
      throw new RuntimeError(2965, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to a data URL which is longer than ${DATA_URL_ERROR_LIMIT} characters. This is strongly discouraged, as large inline placeholders directly increase the bundle size of Angular and hurt page load performance. To fix this, generate a smaller data URL placeholder.`);
    }
    if (dir.placeholder.length > DATA_URL_WARN_LIMIT) {
      console.warn(formatRuntimeError(2965, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to a data URL which is longer than ${DATA_URL_WARN_LIMIT} characters. This is discouraged, as large inline placeholders directly increase the bundle size of Angular and hurt page load performance. For better loading performance, generate a smaller data URL placeholder.`));
    }
  }
}
function assertNotBlobUrl(dir) {
  const ngSrc = dir.ngSrc.trim();
  if (ngSrc.startsWith("blob:")) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`ngSrc\` was set to a blob URL (${ngSrc}). Blob URLs are not supported by the NgOptimizedImage directive. To fix this, disable the NgOptimizedImage directive for this element by removing \`ngSrc\` and using a regular \`src\` attribute instead.`);
  }
}
function assertNonEmptyInput(dir, name, value) {
  const isString = typeof value === "string";
  const isEmptyString = isString && value.trim() === "";
  if (!isString || isEmptyString) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`${name}\` has an invalid value (\`${value}\`). To fix this, change the value to a non-empty string.`);
  }
}
function assertValidNgSrcset(dir, value) {
  if (value == null)
    return;
  assertNonEmptyInput(dir, "ngSrcset", value);
  const stringVal = value;
  const isValidWidthDescriptor = VALID_WIDTH_DESCRIPTOR_SRCSET.test(stringVal);
  const isValidDensityDescriptor = VALID_DENSITY_DESCRIPTOR_SRCSET.test(stringVal);
  if (isValidDensityDescriptor) {
    assertUnderDensityCap(dir, stringVal);
  }
  const isValidSrcset = isValidWidthDescriptor || isValidDensityDescriptor;
  if (!isValidSrcset) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`ngSrcset\` has an invalid value (\`${value}\`). To fix this, supply \`ngSrcset\` using a comma-separated list of one or more width descriptors (e.g. "100w, 200w") or density descriptors (e.g. "1x, 2x").`);
  }
}
function assertUnderDensityCap(dir, value) {
  const underDensityCap = value.split(",").every((num) => num === "" || parseFloat(num) <= ABSOLUTE_SRCSET_DENSITY_CAP);
  if (!underDensityCap) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`ngSrcset\` contains an unsupported image density:\`${value}\`. NgOptimizedImage generally recommends a max image density of ${RECOMMENDED_SRCSET_DENSITY_CAP}x but supports image densities up to ${ABSOLUTE_SRCSET_DENSITY_CAP}x. The human eye cannot distinguish between image densities greater than ${RECOMMENDED_SRCSET_DENSITY_CAP}x - which makes them unnecessary for most use cases. Images that will be pinch-zoomed are typically the primary use case for ${ABSOLUTE_SRCSET_DENSITY_CAP}x images. Please remove the high density descriptor and try again.`);
  }
}
function postInitInputChangeError(dir, inputName) {
  let reason;
  if (inputName === "width" || inputName === "height") {
    reason = `Changing \`${inputName}\` may result in different attribute value applied to the underlying image element and cause layout shifts on a page.`;
  } else {
    reason = `Changing the \`${inputName}\` would have no effect on the underlying image element, because the resource loading has already occurred.`;
  }
  return new RuntimeError(2953, `${imgDirectiveDetails(dir.ngSrc)} \`${inputName}\` was updated after initialization. The NgOptimizedImage directive will not react to this input change. ${reason} To fix this, either switch \`${inputName}\` to a static value or wrap the image element in an @if that is gated on the necessary value.`);
}
function assertNoPostInitInputChange(dir, changes, inputs) {
  inputs.forEach((input) => {
    const isUpdated = changes.hasOwnProperty(input);
    if (isUpdated && !changes[input].isFirstChange()) {
      if (input === "ngSrc") {
        dir = { ngSrc: changes[input].previousValue };
      }
      throw postInitInputChangeError(dir, input);
    }
  });
}
function assertGreaterThanZero(dir, inputValue, inputName) {
  const validNumber = typeof inputValue === "number" && inputValue > 0;
  const validString = typeof inputValue === "string" && /^\d+$/.test(inputValue.trim()) && parseInt(inputValue) > 0;
  if (!validNumber && !validString) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`${inputName}\` has an invalid value. To fix this, provide \`${inputName}\` as a number greater than 0.`);
  }
}
function assertNoImageDistortion(dir, img, renderer) {
  const callback = () => {
    removeLoadListenerFn();
    removeErrorListenerFn();
    const computedStyle = window.getComputedStyle(img);
    let renderedWidth = parseFloat(computedStyle.getPropertyValue("width"));
    let renderedHeight = parseFloat(computedStyle.getPropertyValue("height"));
    const boxSizing = computedStyle.getPropertyValue("box-sizing");
    if (boxSizing === "border-box") {
      const paddingTop = computedStyle.getPropertyValue("padding-top");
      const paddingRight = computedStyle.getPropertyValue("padding-right");
      const paddingBottom = computedStyle.getPropertyValue("padding-bottom");
      const paddingLeft = computedStyle.getPropertyValue("padding-left");
      renderedWidth -= parseFloat(paddingRight) + parseFloat(paddingLeft);
      renderedHeight -= parseFloat(paddingTop) + parseFloat(paddingBottom);
    }
    const renderedAspectRatio = renderedWidth / renderedHeight;
    const nonZeroRenderedDimensions = renderedWidth !== 0 && renderedHeight !== 0;
    const intrinsicWidth = img.naturalWidth;
    const intrinsicHeight = img.naturalHeight;
    const intrinsicAspectRatio = intrinsicWidth / intrinsicHeight;
    const suppliedWidth = dir.width;
    const suppliedHeight = dir.height;
    const suppliedAspectRatio = suppliedWidth / suppliedHeight;
    const inaccurateDimensions = Math.abs(suppliedAspectRatio - intrinsicAspectRatio) > ASPECT_RATIO_TOLERANCE;
    const stylingDistortion = nonZeroRenderedDimensions && Math.abs(intrinsicAspectRatio - renderedAspectRatio) > ASPECT_RATIO_TOLERANCE;
    if (inaccurateDimensions) {
      console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the aspect ratio of the image does not match the aspect ratio indicated by the width and height attributes. 
Intrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h (aspect-ratio: ${round(intrinsicAspectRatio)}). 
Supplied width and height attributes: ${suppliedWidth}w x ${suppliedHeight}h (aspect-ratio: ${round(suppliedAspectRatio)}). 
To fix this, update the width and height attributes.`));
    } else if (stylingDistortion) {
      console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the aspect ratio of the rendered image does not match the image's intrinsic aspect ratio. 
Intrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h (aspect-ratio: ${round(intrinsicAspectRatio)}). 
Rendered image size: ${renderedWidth}w x ${renderedHeight}h (aspect-ratio: ${round(renderedAspectRatio)}). 
This issue can occur if "width" and "height" attributes are added to an image without updating the corresponding image styling. To fix this, adjust image styling. In most cases, adding "height: auto" or "width: auto" to the image styling will fix this issue.`));
    } else if (!dir.ngSrcset && nonZeroRenderedDimensions) {
      const recommendedWidth = RECOMMENDED_SRCSET_DENSITY_CAP * renderedWidth;
      const recommendedHeight = RECOMMENDED_SRCSET_DENSITY_CAP * renderedHeight;
      const oversizedWidth = intrinsicWidth - recommendedWidth >= OVERSIZED_IMAGE_TOLERANCE;
      const oversizedHeight = intrinsicHeight - recommendedHeight >= OVERSIZED_IMAGE_TOLERANCE;
      if (oversizedWidth || oversizedHeight) {
        console.warn(formatRuntimeError(2960, `${imgDirectiveDetails(dir.ngSrc)} the intrinsic image is significantly larger than necessary. 
Rendered image size: ${renderedWidth}w x ${renderedHeight}h. 
Intrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h. 
Recommended intrinsic image size: ${recommendedWidth}w x ${recommendedHeight}h. 
Note: Recommended intrinsic image size is calculated assuming a maximum DPR of ${RECOMMENDED_SRCSET_DENSITY_CAP}. To improve loading time, resize the image or consider using the "ngSrcset" and "sizes" attributes.`));
      }
    }
  };
  const removeLoadListenerFn = renderer.listen(img, "load", callback);
  const removeErrorListenerFn = renderer.listen(img, "error", () => {
    removeLoadListenerFn();
    removeErrorListenerFn();
  });
  callOnLoadIfImageIsLoaded(img, callback);
}
function assertNonEmptyWidthAndHeight(dir) {
  let missingAttributes = [];
  if (dir.width === void 0)
    missingAttributes.push("width");
  if (dir.height === void 0)
    missingAttributes.push("height");
  if (missingAttributes.length > 0) {
    throw new RuntimeError(2954, `${imgDirectiveDetails(dir.ngSrc)} these required attributes are missing: ${missingAttributes.map((attr) => `"${attr}"`).join(", ")}. Including "width" and "height" attributes will prevent image-related layout shifts. To fix this, include "width" and "height" attributes on the image tag or turn on "fill" mode with the \`fill\` attribute.`);
  }
}
function assertEmptyWidthAndHeight(dir) {
  if (dir.width || dir.height) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the attributes \`height\` and/or \`width\` are present along with the \`fill\` attribute. Because \`fill\` mode causes an image to fill its containing element, the size attributes have no effect and should be removed.`);
  }
}
function assertNonZeroRenderedHeight(dir, img, renderer) {
  const callback = () => {
    removeLoadListenerFn();
    removeErrorListenerFn();
    const renderedHeight = img.clientHeight;
    if (dir.fill && renderedHeight === 0) {
      console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the height of the fill-mode image is zero. This is likely because the containing element does not have the CSS 'position' property set to one of the following: "relative", "fixed", or "absolute". To fix this problem, make sure the container element has the CSS 'position' property defined and the height of the element is not zero.`));
    }
  };
  const removeLoadListenerFn = renderer.listen(img, "load", callback);
  const removeErrorListenerFn = renderer.listen(img, "error", () => {
    removeLoadListenerFn();
    removeErrorListenerFn();
  });
  callOnLoadIfImageIsLoaded(img, callback);
}
function assertValidLoadingInput(dir) {
  if (dir.loading && dir.priority) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`loading\` attribute was used on an image that was marked "priority". Setting \`loading\` on priority images is not allowed because these images will always be eagerly loaded. To fix this, remove the \u201Cloading\u201D attribute from the priority image.`);
  }
  const validInputs = ["auto", "eager", "lazy"];
  if (typeof dir.loading === "string" && !validInputs.includes(dir.loading)) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`loading\` attribute has an invalid value (\`${dir.loading}\`). To fix this, provide a valid value ("lazy", "eager", or "auto").`);
  }
}
function assertNotMissingBuiltInLoader(ngSrc, imageLoader) {
  if (imageLoader === noopImageLoader) {
    let builtInLoaderName = "";
    for (const loader of BUILT_IN_LOADERS) {
      if (loader.testUrl(ngSrc)) {
        builtInLoaderName = loader.name;
        break;
      }
    }
    if (builtInLoaderName) {
      console.warn(formatRuntimeError(2962, `NgOptimizedImage: It looks like your images may be hosted on the ${builtInLoaderName} CDN, but your app is not using Angular's built-in loader for that CDN. We recommend switching to use the built-in by calling \`provide${builtInLoaderName}Loader()\` in your \`providers\` and passing it your instance's base URL. If you don't want to use the built-in loader, define a custom loader function using IMAGE_LOADER to silence this warning.`));
    }
  }
}
function assertNoNgSrcsetWithoutLoader(dir, imageLoader) {
  if (dir.ngSrcset && imageLoader === noopImageLoader) {
    console.warn(formatRuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`ngSrcset\` attribute is present but no image loader is configured (i.e. the default one is being used), which would result in the same image being used for all configured sizes. To fix this, provide a loader or remove the \`ngSrcset\` attribute from the image.`));
  }
}
function assertNoLoaderParamsWithoutLoader(dir, imageLoader) {
  if (dir.loaderParams && imageLoader === noopImageLoader) {
    console.warn(formatRuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`loaderParams\` attribute is present but no image loader is configured (i.e. the default one is being used), which means that the loaderParams data will not be consumed and will not affect the URL. To fix this, provide a custom loader or remove the \`loaderParams\` attribute from the image.`));
  }
}
function assetPriorityCountBelowThreshold(appRef) {
  return __async(this, null, function* () {
    if (IMGS_WITH_PRIORITY_ATTR_COUNT === 0) {
      IMGS_WITH_PRIORITY_ATTR_COUNT++;
      yield appRef.whenStable();
      if (IMGS_WITH_PRIORITY_ATTR_COUNT > PRIORITY_COUNT_THRESHOLD) {
        console.warn(formatRuntimeError(2966, `NgOptimizedImage: The "priority" attribute is set to true more than ${PRIORITY_COUNT_THRESHOLD} times (${IMGS_WITH_PRIORITY_ATTR_COUNT} times). Marking too many images as "high" priority can hurt your application's LCP (https://web.dev/lcp). "Priority" should only be set on the image expected to be the page's LCP element.`));
      }
    } else {
      IMGS_WITH_PRIORITY_ATTR_COUNT++;
    }
  });
}
function assertPlaceholderDimensions(dir, imgElement) {
  const computedStyle = window.getComputedStyle(imgElement);
  let renderedWidth = parseFloat(computedStyle.getPropertyValue("width"));
  let renderedHeight = parseFloat(computedStyle.getPropertyValue("height"));
  if (renderedWidth > PLACEHOLDER_DIMENSION_LIMIT || renderedHeight > PLACEHOLDER_DIMENSION_LIMIT) {
    console.warn(formatRuntimeError(2967, `${imgDirectiveDetails(dir.ngSrc)} it uses a placeholder image, but at least one of the dimensions attribute (height or width) exceeds the limit of ${PLACEHOLDER_DIMENSION_LIMIT}px. To fix this, use a smaller image as a placeholder.`));
  }
}
function callOnLoadIfImageIsLoaded(img, callback) {
  if (img.complete && img.naturalWidth) {
    callback();
  }
}
function round(input) {
  return Number.isInteger(input) ? input : input.toFixed(2);
}
function unwrapSafeUrl(value) {
  if (typeof value === "string") {
    return value;
  }
  return unwrapSafeValue(value);
}
function booleanOrUrlAttribute(value) {
  if (typeof value === "string" && value !== "true" && value !== "false" && value !== "") {
    return value;
  }
  return booleanAttribute(value);
}
var PLATFORM_BROWSER_ID, PLATFORM_SERVER_ID, VERSION, ViewportScroller, BrowserViewportScroller, PLACEHOLDER_QUALITY, noopImageLoader, IMAGE_LOADER, provideCloudflareLoader, cloudinaryLoaderInfo, CLOUDINARY_LOADER_REGEX, provideCloudinaryLoader, imageKitLoaderInfo, IMAGE_KIT_LOADER_REGEX, provideImageKitLoader, imgixLoaderInfo, IMGIX_LOADER_REGEX, provideImgixLoader, netlifyLoaderInfo, NETLIFY_LOADER_REGEX, LCPImageObserver, INTERNAL_PRECONNECT_CHECK_BLOCKLIST, PRECONNECT_CHECK_BLOCKLIST, PreconnectLinkChecker, DEFAULT_PRELOADED_IMAGES_LIMIT, PRELOADED_IMAGES, PreloadLinkCreator, BASE64_IMG_MAX_LENGTH_IN_ERROR, VALID_WIDTH_DESCRIPTOR_SRCSET, VALID_DENSITY_DESCRIPTOR_SRCSET, ABSOLUTE_SRCSET_DENSITY_CAP, RECOMMENDED_SRCSET_DENSITY_CAP, DENSITY_SRCSET_MULTIPLIERS, VIEWPORT_BREAKPOINT_CUTOFF, ASPECT_RATIO_TOLERANCE, OVERSIZED_IMAGE_TOLERANCE, FIXED_SRCSET_WIDTH_LIMIT, FIXED_SRCSET_HEIGHT_LIMIT, PLACEHOLDER_DIMENSION_LIMIT, DATA_URL_WARN_LIMIT, DATA_URL_ERROR_LIMIT, BUILT_IN_LOADERS, PRIORITY_COUNT_THRESHOLD, IMGS_WITH_PRIORITY_ATTR_COUNT, NgOptimizedImage;
var init_common = __esm({
  "node_modules/@angular/common/fesm2022/common.mjs"() {
    "use strict";
    init_common_module_D4mHDfs1();
    init_core();
    init_core();
    init_core();
    init_xhr_CEmSPUGj();
    init_location_BIEtBxGx();
    PLATFORM_BROWSER_ID = "browser";
    PLATFORM_SERVER_ID = "server";
    VERSION = new Version("20.0.4");
    ViewportScroller = class _ViewportScroller {
      // De-sugared tree-shakable injection
      // See #23917
      /** @nocollapse */
      static \u0275prov = (
        /** @pureOrBreakMyCode */
        /* @__PURE__ */ \u0275\u0275defineInjectable({
          token: _ViewportScroller,
          providedIn: "root",
          factory: () => false ? new NullViewportScroller() : new BrowserViewportScroller(inject(DOCUMENT), window)
        })
      );
    };
    BrowserViewportScroller = class {
      document;
      window;
      offset = () => [0, 0];
      constructor(document, window2) {
        this.document = document;
        this.window = window2;
      }
      /**
       * Configures the top offset used when scrolling to an anchor.
       * @param offset A position in screen coordinates (a tuple with x and y values)
       * or a function that returns the top offset position.
       *
       */
      setOffset(offset) {
        if (Array.isArray(offset)) {
          this.offset = () => offset;
        } else {
          this.offset = offset;
        }
      }
      /**
       * Retrieves the current scroll position.
       * @returns The position in screen coordinates.
       */
      getScrollPosition() {
        return [this.window.scrollX, this.window.scrollY];
      }
      /**
       * Sets the scroll position.
       * @param position The new position in screen coordinates.
       */
      scrollToPosition(position, options) {
        this.window.scrollTo(__spreadProps(__spreadValues({}, options), { left: position[0], top: position[1] }));
      }
      /**
       * Scrolls to an element and attempts to focus the element.
       *
       * Note that the function name here is misleading in that the target string may be an ID for a
       * non-anchor element.
       *
       * @param target The ID of an element or name of the anchor.
       *
       * @see https://html.spec.whatwg.org/#the-indicated-part-of-the-document
       * @see https://html.spec.whatwg.org/#scroll-to-fragid
       */
      scrollToAnchor(target, options) {
        const elSelected = findAnchorFromDocument(this.document, target);
        if (elSelected) {
          this.scrollToElement(elSelected, options);
          elSelected.focus();
        }
      }
      /**
       * Disables automatic scroll restoration provided by the browser.
       */
      setHistoryScrollRestoration(scrollRestoration) {
        this.window.history.scrollRestoration = scrollRestoration;
      }
      /**
       * Scrolls to an element using the native offset and the specified offset set on this scroller.
       *
       * The offset can be used when we know that there is a floating header and scrolling naively to an
       * element (ex: `scrollIntoView`) leaves the element hidden behind the floating header.
       */
      scrollToElement(el, options) {
        const rect = el.getBoundingClientRect();
        const left = rect.left + this.window.pageXOffset;
        const top = rect.top + this.window.pageYOffset;
        const offset = this.offset();
        this.window.scrollTo(__spreadProps(__spreadValues({}, options), {
          left: left - offset[0],
          top: top - offset[1]
        }));
      }
    };
    PLACEHOLDER_QUALITY = "20";
    noopImageLoader = (config) => config.src;
    IMAGE_LOADER = new InjectionToken(ngDevMode ? "ImageLoader" : "", {
      providedIn: "root",
      factory: () => noopImageLoader
    });
    provideCloudflareLoader = createImageLoader(createCloudflareUrl, ngDevMode ? ["https://<ZONE>/cdn-cgi/image/<OPTIONS>/<SOURCE-IMAGE>"] : void 0);
    cloudinaryLoaderInfo = {
      name: "Cloudinary",
      testUrl: isCloudinaryUrl
    };
    CLOUDINARY_LOADER_REGEX = /https?\:\/\/[^\/]+\.cloudinary\.com\/.+/;
    provideCloudinaryLoader = createImageLoader(createCloudinaryUrl, ngDevMode ? [
      "https://res.cloudinary.com/mysite",
      "https://mysite.cloudinary.com",
      "https://subdomain.mysite.com"
    ] : void 0);
    imageKitLoaderInfo = {
      name: "ImageKit",
      testUrl: isImageKitUrl
    };
    IMAGE_KIT_LOADER_REGEX = /https?\:\/\/[^\/]+\.imagekit\.io\/.+/;
    provideImageKitLoader = createImageLoader(createImagekitUrl, ngDevMode ? ["https://ik.imagekit.io/mysite", "https://subdomain.mysite.com"] : void 0);
    imgixLoaderInfo = {
      name: "Imgix",
      testUrl: isImgixUrl
    };
    IMGIX_LOADER_REGEX = /https?\:\/\/[^\/]+\.imgix\.net\/.+/;
    provideImgixLoader = createImageLoader(createImgixUrl, ngDevMode ? ["https://somepath.imgix.net/"] : void 0);
    netlifyLoaderInfo = {
      name: "Netlify",
      testUrl: isNetlifyUrl
    };
    NETLIFY_LOADER_REGEX = /https?\:\/\/[^\/]+\.netlify\.app\/.+/;
    LCPImageObserver = class _LCPImageObserver {
      // Map of full image URLs -> original `ngSrc` values.
      images = /* @__PURE__ */ new Map();
      window = inject(DOCUMENT).defaultView;
      observer = null;
      constructor() {
        assertDevMode("LCP checker");
        if (typeof PerformanceObserver !== "undefined") {
          this.observer = this.initPerformanceObserver();
        }
      }
      /**
       * Inits PerformanceObserver and subscribes to LCP events.
       * Based on https://web.dev/lcp/#measure-lcp-in-javascript
       */
      initPerformanceObserver() {
        const observer = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          if (entries.length === 0)
            return;
          const lcpElement = entries[entries.length - 1];
          const imgSrc = lcpElement.element?.src ?? "";
          if (imgSrc.startsWith("data:") || imgSrc.startsWith("blob:"))
            return;
          const img = this.images.get(imgSrc);
          if (!img)
            return;
          if (!img.priority && !img.alreadyWarnedPriority) {
            img.alreadyWarnedPriority = true;
            logMissingPriorityError(imgSrc);
          }
          if (img.modified && !img.alreadyWarnedModified) {
            img.alreadyWarnedModified = true;
            logModifiedWarning(imgSrc);
          }
        });
        observer.observe({ type: "largest-contentful-paint", buffered: true });
        return observer;
      }
      registerImage(rewrittenSrc, originalNgSrc, isPriority) {
        if (!this.observer)
          return;
        const newObservedImageState = {
          priority: isPriority,
          modified: false,
          alreadyWarnedModified: false,
          alreadyWarnedPriority: false
        };
        this.images.set(getUrl(rewrittenSrc, this.window).href, newObservedImageState);
      }
      unregisterImage(rewrittenSrc) {
        if (!this.observer)
          return;
        this.images.delete(getUrl(rewrittenSrc, this.window).href);
      }
      updateImage(originalSrc, newSrc) {
        if (!this.observer)
          return;
        const originalUrl = getUrl(originalSrc, this.window).href;
        const img = this.images.get(originalUrl);
        if (img) {
          img.modified = true;
          this.images.set(getUrl(newSrc, this.window).href, img);
          this.images.delete(originalUrl);
        }
      }
      ngOnDestroy() {
        if (!this.observer)
          return;
        this.observer.disconnect();
        this.images.clear();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _LCPImageObserver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _LCPImageObserver, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: LCPImageObserver, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    INTERNAL_PRECONNECT_CHECK_BLOCKLIST = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "0.0.0.0"]);
    PRECONNECT_CHECK_BLOCKLIST = new InjectionToken(ngDevMode ? "PRECONNECT_CHECK_BLOCKLIST" : "");
    PreconnectLinkChecker = class _PreconnectLinkChecker {
      document = inject(DOCUMENT);
      /**
       * Set of <link rel="preconnect"> tags found on this page.
       * The `null` value indicates that there was no DOM query operation performed.
       */
      preconnectLinks = null;
      /*
       * Keep track of all already seen origin URLs to avoid repeating the same check.
       */
      alreadySeen = /* @__PURE__ */ new Set();
      window = this.document.defaultView;
      blocklist = new Set(INTERNAL_PRECONNECT_CHECK_BLOCKLIST);
      constructor() {
        assertDevMode("preconnect link checker");
        const blocklist = inject(PRECONNECT_CHECK_BLOCKLIST, { optional: true });
        if (blocklist) {
          this.populateBlocklist(blocklist);
        }
      }
      populateBlocklist(origins) {
        if (Array.isArray(origins)) {
          deepForEach(origins, (origin) => {
            this.blocklist.add(extractHostname(origin));
          });
        } else {
          this.blocklist.add(extractHostname(origins));
        }
      }
      /**
       * Checks that a preconnect resource hint exists in the head for the
       * given src.
       *
       * @param rewrittenSrc src formatted with loader
       * @param originalNgSrc ngSrc value
       */
      assertPreconnect(rewrittenSrc, originalNgSrc) {
        if (false)
          return;
        const imgUrl = getUrl(rewrittenSrc, this.window);
        if (this.blocklist.has(imgUrl.hostname) || this.alreadySeen.has(imgUrl.origin))
          return;
        this.alreadySeen.add(imgUrl.origin);
        this.preconnectLinks ??= this.queryPreconnectLinks();
        if (!this.preconnectLinks.has(imgUrl.origin)) {
          console.warn(formatRuntimeError(2956, `${imgDirectiveDetails(originalNgSrc)} there is no preconnect tag present for this image. Preconnecting to the origin(s) that serve priority images ensures that these images are delivered as soon as possible. To fix this, please add the following element into the <head> of the document:
  <link rel="preconnect" href="${imgUrl.origin}">`));
        }
      }
      queryPreconnectLinks() {
        const preconnectUrls = /* @__PURE__ */ new Set();
        const links = this.document.querySelectorAll("link[rel=preconnect]");
        for (const link of links) {
          const url = getUrl(link.href, this.window);
          preconnectUrls.add(url.origin);
        }
        return preconnectUrls;
      }
      ngOnDestroy() {
        this.preconnectLinks?.clear();
        this.alreadySeen.clear();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _PreconnectLinkChecker, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _PreconnectLinkChecker, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: PreconnectLinkChecker, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    DEFAULT_PRELOADED_IMAGES_LIMIT = 5;
    PRELOADED_IMAGES = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "NG_OPTIMIZED_PRELOADED_IMAGES" : "", {
      providedIn: "root",
      factory: () => /* @__PURE__ */ new Set()
    });
    PreloadLinkCreator = class _PreloadLinkCreator {
      preloadedImages = inject(PRELOADED_IMAGES);
      document = inject(DOCUMENT);
      errorShown = false;
      /**
       * @description Add a preload `<link>` to the `<head>` of the `index.html` that is served from the
       * server while using Angular Universal and SSR to kick off image loads for high priority images.
       *
       * The `sizes` (passed in from the user) and `srcset` (parsed and formatted from `ngSrcset`)
       * properties used to set the corresponding attributes, `imagesizes` and `imagesrcset`
       * respectively, on the preload `<link>` tag so that the correctly sized image is preloaded from
       * the CDN.
       *
       * {@link https://web.dev/preload-responsive-images/#imagesrcset-and-imagesizes}
       *
       * @param renderer The `Renderer2` passed in from the directive
       * @param src The original src of the image that is set on the `ngSrc` input.
       * @param srcset The parsed and formatted srcset created from the `ngSrcset` input
       * @param sizes The value of the `sizes` attribute passed in to the `<img>` tag
       */
      createPreloadLinkTag(renderer, src, srcset, sizes) {
        if (ngDevMode && !this.errorShown && this.preloadedImages.size >= DEFAULT_PRELOADED_IMAGES_LIMIT) {
          this.errorShown = true;
          console.warn(formatRuntimeError(2961, `The \`NgOptimizedImage\` directive has detected that more than ${DEFAULT_PRELOADED_IMAGES_LIMIT} images were marked as priority. This might negatively affect an overall performance of the page. To fix this, remove the "priority" attribute from images with less priority.`));
        }
        if (this.preloadedImages.has(src)) {
          return;
        }
        this.preloadedImages.add(src);
        const preload = renderer.createElement("link");
        renderer.setAttribute(preload, "as", "image");
        renderer.setAttribute(preload, "href", src);
        renderer.setAttribute(preload, "rel", "preload");
        renderer.setAttribute(preload, "fetchpriority", "high");
        if (sizes) {
          renderer.setAttribute(preload, "imageSizes", sizes);
        }
        if (srcset) {
          renderer.setAttribute(preload, "imageSrcset", srcset);
        }
        renderer.appendChild(this.document.head, preload);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _PreloadLinkCreator, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _PreloadLinkCreator, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: PreloadLinkCreator, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    BASE64_IMG_MAX_LENGTH_IN_ERROR = 50;
    VALID_WIDTH_DESCRIPTOR_SRCSET = /^((\s*\d+w\s*(,|$)){1,})$/;
    VALID_DENSITY_DESCRIPTOR_SRCSET = /^((\s*\d+(\.\d+)?x\s*(,|$)){1,})$/;
    ABSOLUTE_SRCSET_DENSITY_CAP = 3;
    RECOMMENDED_SRCSET_DENSITY_CAP = 2;
    DENSITY_SRCSET_MULTIPLIERS = [1, 2];
    VIEWPORT_BREAKPOINT_CUTOFF = 640;
    ASPECT_RATIO_TOLERANCE = 0.1;
    OVERSIZED_IMAGE_TOLERANCE = 1e3;
    FIXED_SRCSET_WIDTH_LIMIT = 1920;
    FIXED_SRCSET_HEIGHT_LIMIT = 1080;
    PLACEHOLDER_DIMENSION_LIMIT = 1e3;
    DATA_URL_WARN_LIMIT = 4e3;
    DATA_URL_ERROR_LIMIT = 1e4;
    BUILT_IN_LOADERS = [
      imgixLoaderInfo,
      imageKitLoaderInfo,
      cloudinaryLoaderInfo,
      netlifyLoaderInfo
    ];
    PRIORITY_COUNT_THRESHOLD = 10;
    IMGS_WITH_PRIORITY_ATTR_COUNT = 0;
    NgOptimizedImage = class _NgOptimizedImage {
      imageLoader = inject(IMAGE_LOADER);
      config = processConfig(inject(IMAGE_CONFIG));
      renderer = inject(Renderer2);
      imgElement = inject(ElementRef).nativeElement;
      injector = inject(Injector);
      // An LCP image observer should be injected only in development mode.
      // Do not assign it to `null` to avoid having a redundant property in the production bundle.
      lcpObserver;
      /**
       * Calculate the rewritten `src` once and store it.
       * This is needed to avoid repetitive calculations and make sure the directive cleanup in the
       * `ngOnDestroy` does not rely on the `IMAGE_LOADER` logic (which in turn can rely on some other
       * instance that might be already destroyed).
       */
      _renderedSrc = null;
      /**
       * Name of the source image.
       * Image name will be processed by the image loader and the final URL will be applied as the `src`
       * property of the image.
       */
      ngSrc;
      /**
       * A comma separated list of width or density descriptors.
       * The image name will be taken from `ngSrc` and combined with the list of width or density
       * descriptors to generate the final `srcset` property of the image.
       *
       * Example:
       * ```html
       * <img ngSrc="hello.jpg" ngSrcset="100w, 200w" />  =>
       * <img src="path/hello.jpg" srcset="path/hello.jpg?w=100 100w, path/hello.jpg?w=200 200w" />
       * ```
       */
      ngSrcset;
      /**
       * The base `sizes` attribute passed through to the `<img>` element.
       * Providing sizes causes the image to create an automatic responsive srcset.
       */
      sizes;
      /**
       * For responsive images: the intrinsic width of the image in pixels.
       * For fixed size images: the desired rendered width of the image in pixels.
       */
      width;
      /**
       * For responsive images: the intrinsic height of the image in pixels.
       * For fixed size images: the desired rendered height of the image in pixels.
       */
      height;
      /**
       * The desired loading behavior (lazy, eager, or auto). Defaults to `lazy`,
       * which is recommended for most images.
       *
       * Warning: Setting images as loading="eager" or loading="auto" marks them
       * as non-priority images and can hurt loading performance. For images which
       * may be the LCP element, use the `priority` attribute instead of `loading`.
       */
      loading;
      /**
       * Indicates whether this image should have a high priority.
       */
      priority = false;
      /**
       * Data to pass through to custom loaders.
       */
      loaderParams;
      /**
       * Disables automatic srcset generation for this image.
       */
      disableOptimizedSrcset = false;
      /**
       * Sets the image to "fill mode", which eliminates the height/width requirement and adds
       * styles such that the image fills its containing element.
       */
      fill = false;
      /**
       * A URL or data URL for an image to be used as a placeholder while this image loads.
       */
      placeholder;
      /**
       * Configuration object for placeholder settings. Options:
       *   * blur: Setting this to false disables the automatic CSS blur.
       */
      placeholderConfig;
      /**
       * Value of the `src` attribute if set on the host `<img>` element.
       * This input is exclusively read to assert that `src` is not set in conflict
       * with `ngSrc` and that images don't start to load until a lazy loading strategy is set.
       * @internal
       */
      src;
      /**
       * Value of the `srcset` attribute if set on the host `<img>` element.
       * This input is exclusively read to assert that `srcset` is not set in conflict
       * with `ngSrcset` and that images don't start to load until a lazy loading strategy is set.
       * @internal
       */
      srcset;
      constructor() {
        if (ngDevMode) {
          this.lcpObserver = this.injector.get(LCPImageObserver);
          const destroyRef = inject(DestroyRef);
          destroyRef.onDestroy(() => {
            if (!this.priority && this._renderedSrc !== null) {
              this.lcpObserver.unregisterImage(this._renderedSrc);
            }
          });
        }
      }
      /** @docs-private */
      ngOnInit() {
        performanceMarkFeature("NgOptimizedImage");
        if (ngDevMode) {
          const ngZone = this.injector.get(NgZone);
          assertNonEmptyInput(this, "ngSrc", this.ngSrc);
          assertValidNgSrcset(this, this.ngSrcset);
          assertNoConflictingSrc(this);
          if (this.ngSrcset) {
            assertNoConflictingSrcset(this);
          }
          assertNotBase64Image(this);
          assertNotBlobUrl(this);
          if (this.fill) {
            assertEmptyWidthAndHeight(this);
            ngZone.runOutsideAngular(() => assertNonZeroRenderedHeight(this, this.imgElement, this.renderer));
          } else {
            assertNonEmptyWidthAndHeight(this);
            if (this.height !== void 0) {
              assertGreaterThanZero(this, this.height, "height");
            }
            if (this.width !== void 0) {
              assertGreaterThanZero(this, this.width, "width");
            }
            ngZone.runOutsideAngular(() => assertNoImageDistortion(this, this.imgElement, this.renderer));
          }
          assertValidLoadingInput(this);
          if (!this.ngSrcset) {
            assertNoComplexSizes(this);
          }
          assertValidPlaceholder(this, this.imageLoader);
          assertNotMissingBuiltInLoader(this.ngSrc, this.imageLoader);
          assertNoNgSrcsetWithoutLoader(this, this.imageLoader);
          assertNoLoaderParamsWithoutLoader(this, this.imageLoader);
          ngZone.runOutsideAngular(() => {
            this.lcpObserver.registerImage(this.getRewrittenSrc(), this.ngSrc, this.priority);
          });
          if (this.priority) {
            const checker = this.injector.get(PreconnectLinkChecker);
            checker.assertPreconnect(this.getRewrittenSrc(), this.ngSrc);
            if (true) {
              const applicationRef = this.injector.get(ApplicationRef);
              assetPriorityCountBelowThreshold(applicationRef);
            }
          }
        }
        if (this.placeholder) {
          this.removePlaceholderOnLoad(this.imgElement);
        }
        this.setHostAttributes();
      }
      setHostAttributes() {
        if (this.fill) {
          this.sizes ||= "100vw";
        } else {
          this.setHostAttribute("width", this.width.toString());
          this.setHostAttribute("height", this.height.toString());
        }
        this.setHostAttribute("loading", this.getLoadingBehavior());
        this.setHostAttribute("fetchpriority", this.getFetchPriority());
        this.setHostAttribute("ng-img", "true");
        const rewrittenSrcset = this.updateSrcAndSrcset();
        if (this.sizes) {
          if (this.getLoadingBehavior() === "lazy") {
            this.setHostAttribute("sizes", "auto, " + this.sizes);
          } else {
            this.setHostAttribute("sizes", this.sizes);
          }
        } else {
          if (this.ngSrcset && VALID_WIDTH_DESCRIPTOR_SRCSET.test(this.ngSrcset) && this.getLoadingBehavior() === "lazy") {
            this.setHostAttribute("sizes", "auto, 100vw");
          }
        }
        if (false) {
          const preloadLinkCreator = this.injector.get(PreloadLinkCreator);
          preloadLinkCreator.createPreloadLinkTag(this.renderer, this.getRewrittenSrc(), rewrittenSrcset, this.sizes);
        }
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if (ngDevMode) {
          assertNoPostInitInputChange(this, changes, [
            "ngSrcset",
            "width",
            "height",
            "priority",
            "fill",
            "loading",
            "sizes",
            "loaderParams",
            "disableOptimizedSrcset"
          ]);
        }
        if (changes["ngSrc"] && !changes["ngSrc"].isFirstChange()) {
          const oldSrc = this._renderedSrc;
          this.updateSrcAndSrcset(true);
          if (ngDevMode) {
            const newSrc = this._renderedSrc;
            if (oldSrc && newSrc && oldSrc !== newSrc) {
              const ngZone = this.injector.get(NgZone);
              ngZone.runOutsideAngular(() => {
                this.lcpObserver.updateImage(oldSrc, newSrc);
              });
            }
          }
        }
        if (ngDevMode && changes["placeholder"]?.currentValue && true && true) {
          assertPlaceholderDimensions(this, this.imgElement);
        }
      }
      callImageLoader(configWithoutCustomParams) {
        let augmentedConfig = configWithoutCustomParams;
        if (this.loaderParams) {
          augmentedConfig.loaderParams = this.loaderParams;
        }
        return this.imageLoader(augmentedConfig);
      }
      getLoadingBehavior() {
        if (!this.priority && this.loading !== void 0) {
          return this.loading;
        }
        return this.priority ? "eager" : "lazy";
      }
      getFetchPriority() {
        return this.priority ? "high" : "auto";
      }
      getRewrittenSrc() {
        if (!this._renderedSrc) {
          const imgConfig = { src: this.ngSrc };
          this._renderedSrc = this.callImageLoader(imgConfig);
        }
        return this._renderedSrc;
      }
      getRewrittenSrcset() {
        const widthSrcSet = VALID_WIDTH_DESCRIPTOR_SRCSET.test(this.ngSrcset);
        const finalSrcs = this.ngSrcset.split(",").filter((src) => src !== "").map((srcStr) => {
          srcStr = srcStr.trim();
          const width = widthSrcSet ? parseFloat(srcStr) : parseFloat(srcStr) * this.width;
          return `${this.callImageLoader({ src: this.ngSrc, width })} ${srcStr}`;
        });
        return finalSrcs.join(", ");
      }
      getAutomaticSrcset() {
        if (this.sizes) {
          return this.getResponsiveSrcset();
        } else {
          return this.getFixedSrcset();
        }
      }
      getResponsiveSrcset() {
        const { breakpoints } = this.config;
        let filteredBreakpoints = breakpoints;
        if (this.sizes?.trim() === "100vw") {
          filteredBreakpoints = breakpoints.filter((bp) => bp >= VIEWPORT_BREAKPOINT_CUTOFF);
        }
        const finalSrcs = filteredBreakpoints.map((bp) => `${this.callImageLoader({ src: this.ngSrc, width: bp })} ${bp}w`);
        return finalSrcs.join(", ");
      }
      updateSrcAndSrcset(forceSrcRecalc = false) {
        if (forceSrcRecalc) {
          this._renderedSrc = null;
        }
        const rewrittenSrc = this.getRewrittenSrc();
        this.setHostAttribute("src", rewrittenSrc);
        let rewrittenSrcset = void 0;
        if (this.ngSrcset) {
          rewrittenSrcset = this.getRewrittenSrcset();
        } else if (this.shouldGenerateAutomaticSrcset()) {
          rewrittenSrcset = this.getAutomaticSrcset();
        }
        if (rewrittenSrcset) {
          this.setHostAttribute("srcset", rewrittenSrcset);
        }
        return rewrittenSrcset;
      }
      getFixedSrcset() {
        const finalSrcs = DENSITY_SRCSET_MULTIPLIERS.map((multiplier) => `${this.callImageLoader({
          src: this.ngSrc,
          width: this.width * multiplier
        })} ${multiplier}x`);
        return finalSrcs.join(", ");
      }
      shouldGenerateAutomaticSrcset() {
        let oversizedImage = false;
        if (!this.sizes) {
          oversizedImage = this.width > FIXED_SRCSET_WIDTH_LIMIT || this.height > FIXED_SRCSET_HEIGHT_LIMIT;
        }
        return !this.disableOptimizedSrcset && !this.srcset && this.imageLoader !== noopImageLoader && !oversizedImage;
      }
      /**
       * Returns an image url formatted for use with the CSS background-image property. Expects one of:
       * * A base64 encoded image, which is wrapped and passed through.
       * * A boolean. If true, calls the image loader to generate a small placeholder url.
       */
      generatePlaceholder(placeholderInput) {
        const { placeholderResolution } = this.config;
        if (placeholderInput === true) {
          return `url(${this.callImageLoader({
            src: this.ngSrc,
            width: placeholderResolution,
            isPlaceholder: true
          })})`;
        } else if (typeof placeholderInput === "string") {
          return `url(${placeholderInput})`;
        }
        return null;
      }
      /**
       * Determines if blur should be applied, based on an optional boolean
       * property `blur` within the optional configuration object `placeholderConfig`.
       */
      shouldBlurPlaceholder(placeholderConfig) {
        if (!placeholderConfig || !placeholderConfig.hasOwnProperty("blur")) {
          return true;
        }
        return Boolean(placeholderConfig.blur);
      }
      removePlaceholderOnLoad(img) {
        const callback = () => {
          const changeDetectorRef = this.injector.get(ChangeDetectorRef);
          removeLoadListenerFn();
          removeErrorListenerFn();
          this.placeholder = false;
          changeDetectorRef.markForCheck();
        };
        const removeLoadListenerFn = this.renderer.listen(img, "load", callback);
        const removeErrorListenerFn = this.renderer.listen(img, "error", callback);
        callOnLoadIfImageIsLoaded(img, callback);
      }
      setHostAttribute(name, value) {
        this.renderer.setAttribute(this.imgElement, name, value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: _NgOptimizedImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.4", type: _NgOptimizedImage, isStandalone: true, selector: "img[ngSrc]", inputs: { ngSrc: ["ngSrc", "ngSrc", unwrapSafeUrl], ngSrcset: "ngSrcset", sizes: "sizes", width: ["width", "width", numberAttribute], height: ["height", "height", numberAttribute], loading: "loading", priority: ["priority", "priority", booleanAttribute], loaderParams: "loaderParams", disableOptimizedSrcset: ["disableOptimizedSrcset", "disableOptimizedSrcset", booleanAttribute], fill: ["fill", "fill", booleanAttribute], placeholder: ["placeholder", "placeholder", booleanOrUrlAttribute], placeholderConfig: "placeholderConfig", src: "src", srcset: "srcset" }, host: { properties: { "style.position": 'fill ? "absolute" : null', "style.width": 'fill ? "100%" : null', "style.height": 'fill ? "100%" : null', "style.inset": 'fill ? "0" : null', "style.background-size": 'placeholder ? "cover" : null', "style.background-position": 'placeholder ? "50% 50%" : null', "style.background-repeat": 'placeholder ? "no-repeat" : null', "style.background-image": "placeholder ? generatePlaceholder(placeholder) : null", "style.filter": 'placeholder && shouldBlurPlaceholder(placeholderConfig) ? "blur(15px)" : null' } }, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: core_exports, type: NgOptimizedImage, decorators: [{
      type: Directive,
      args: [{
        selector: "img[ngSrc]",
        host: {
          "[style.position]": 'fill ? "absolute" : null',
          "[style.width]": 'fill ? "100%" : null',
          "[style.height]": 'fill ? "100%" : null',
          "[style.inset]": 'fill ? "0" : null',
          "[style.background-size]": 'placeholder ? "cover" : null',
          "[style.background-position]": 'placeholder ? "50% 50%" : null',
          "[style.background-repeat]": 'placeholder ? "no-repeat" : null',
          "[style.background-image]": "placeholder ? generatePlaceholder(placeholder) : null",
          "[style.filter]": 'placeholder && shouldBlurPlaceholder(placeholderConfig) ? "blur(15px)" : null'
        }
      }]
    }], ctorParameters: () => [], propDecorators: { ngSrc: [{
      type: Input,
      args: [{ required: true, transform: unwrapSafeUrl }]
    }], ngSrcset: [{
      type: Input
    }], sizes: [{
      type: Input
    }], width: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], height: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], loading: [{
      type: Input
    }], priority: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], loaderParams: [{
      type: Input
    }], disableOptimizedSrcset: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], fill: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], placeholder: [{
      type: Input,
      args: [{ transform: booleanOrUrlAttribute }]
    }], placeholderConfig: [{
      type: Input
    }], src: [{
      type: Input
    }], srcset: [{
      type: Input
    }] } });
  }
});

export {
  getDOM,
  setRootDomAdapter,
  DomAdapter,
  PlatformLocation,
  LOCATION_INITIALIZED,
  normalizeQueryParams,
  LocationStrategy,
  PathLocationStrategy,
  Location,
  HashLocationStrategy,
  NgClass,
  NgTemplateOutlet,
  AsyncPipe,
  DatePipe,
  CommonModule,
  PlatformNavigation,
  init_platform_navigation_B45Jeakb,
  PLATFORM_BROWSER_ID,
  isPlatformBrowser,
  isPlatformServer,
  ViewportScroller,
  init_common
};
/*! Bundled license information:

@angular/common/fesm2022/location-BIEtBxGx.mjs:
@angular/common/fesm2022/common_module-D4mHDfs1.mjs:
@angular/common/fesm2022/platform_navigation-B45Jeakb.mjs:
@angular/common/fesm2022/common.mjs:
  (**
   * @license Angular v20.0.4
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-T4FSVIK5.js.map
