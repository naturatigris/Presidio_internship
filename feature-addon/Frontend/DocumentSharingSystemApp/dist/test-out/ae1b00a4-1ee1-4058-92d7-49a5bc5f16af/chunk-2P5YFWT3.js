import {
  CurrentUserState,
  init_current_user_state
} from "./chunk-VTW7XGUJ.js";
import {
  Store,
  init_ngxs_store
} from "./chunk-ZFPYVLZ3.js";
import {
  BehaviorSubject,
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6
} from "./chunk-DV5BYKE4.js";
import {
  __async,
  __esm,
  __require,
  __spreadProps,
  __spreadValues
} from "./chunk-3HY6NCXN.js";

// node_modules/@microsoft/signalr/dist/esm/DefaultReconnectPolicy.js
var DEFAULT_RETRY_DELAYS_IN_MILLISECONDS, DefaultReconnectPolicy;
var init_DefaultReconnectPolicy = __esm({
  "node_modules/@microsoft/signalr/dist/esm/DefaultReconnectPolicy.js"() {
    "use strict";
    DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2e3, 1e4, 3e4, null];
    DefaultReconnectPolicy = class {
      constructor(retryDelays) {
        this._retryDelays = retryDelays !== void 0 ? [...retryDelays, null] : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
      }
      nextRetryDelayInMilliseconds(retryContext) {
        return this._retryDelays[retryContext.previousRetryCount];
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/HeaderNames.js
var HeaderNames;
var init_HeaderNames = __esm({
  "node_modules/@microsoft/signalr/dist/esm/HeaderNames.js"() {
    "use strict";
    HeaderNames = class {
    };
    HeaderNames.Authorization = "Authorization";
    HeaderNames.Cookie = "Cookie";
  }
});

// node_modules/@microsoft/signalr/dist/esm/HttpClient.js
var HttpResponse, HttpClient;
var init_HttpClient = __esm({
  "node_modules/@microsoft/signalr/dist/esm/HttpClient.js"() {
    "use strict";
    HttpResponse = class {
      constructor(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
      }
    };
    HttpClient = class {
      get(url, options) {
        return this.send(__spreadProps(__spreadValues({}, options), {
          method: "GET",
          url
        }));
      }
      post(url, options) {
        return this.send(__spreadProps(__spreadValues({}, options), {
          method: "POST",
          url
        }));
      }
      delete(url, options) {
        return this.send(__spreadProps(__spreadValues({}, options), {
          method: "DELETE",
          url
        }));
      }
      /** Gets all cookies that apply to the specified URL.
       *
       * @param url The URL that the cookies are valid for.
       * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
       */
      // @ts-ignore
      getCookieString(url) {
        return "";
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/AccessTokenHttpClient.js
var AccessTokenHttpClient;
var init_AccessTokenHttpClient = __esm({
  "node_modules/@microsoft/signalr/dist/esm/AccessTokenHttpClient.js"() {
    "use strict";
    init_HeaderNames();
    init_HttpClient();
    AccessTokenHttpClient = class extends HttpClient {
      constructor(innerClient, accessTokenFactory) {
        super();
        this._innerClient = innerClient;
        this._accessTokenFactory = accessTokenFactory;
      }
      send(request) {
        return __async(this, null, function* () {
          let allowRetry = true;
          if (this._accessTokenFactory && (!this._accessToken || request.url && request.url.indexOf("/negotiate?") > 0)) {
            allowRetry = false;
            this._accessToken = yield this._accessTokenFactory();
          }
          this._setAuthorizationHeader(request);
          const response = yield this._innerClient.send(request);
          if (allowRetry && response.statusCode === 401 && this._accessTokenFactory) {
            this._accessToken = yield this._accessTokenFactory();
            this._setAuthorizationHeader(request);
            return yield this._innerClient.send(request);
          }
          return response;
        });
      }
      _setAuthorizationHeader(request) {
        if (!request.headers) {
          request.headers = {};
        }
        if (this._accessToken) {
          request.headers[HeaderNames.Authorization] = `Bearer ${this._accessToken}`;
        } else if (this._accessTokenFactory) {
          if (request.headers[HeaderNames.Authorization]) {
            delete request.headers[HeaderNames.Authorization];
          }
        }
      }
      getCookieString(url) {
        return this._innerClient.getCookieString(url);
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/Errors.js
var HttpError, TimeoutError, AbortError, UnsupportedTransportError, DisabledTransportError, FailedToStartTransportError, FailedToNegotiateWithServerError, AggregateErrors;
var init_Errors = __esm({
  "node_modules/@microsoft/signalr/dist/esm/Errors.js"() {
    "use strict";
    HttpError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
       *
       * @param {string} errorMessage A descriptive error message.
       * @param {number} statusCode The HTTP status code represented by this error.
       */
      constructor(errorMessage, statusCode) {
        const trueProto = new.target.prototype;
        super(`${errorMessage}: Status code '${statusCode}'`);
        this.statusCode = statusCode;
        this.__proto__ = trueProto;
      }
    };
    TimeoutError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
       *
       * @param {string} errorMessage A descriptive error message.
       */
      constructor(errorMessage = "A timeout occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        this.__proto__ = trueProto;
      }
    };
    AbortError = class extends Error {
      /** Constructs a new instance of {@link AbortError}.
       *
       * @param {string} errorMessage A descriptive error message.
       */
      constructor(errorMessage = "An abort occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        this.__proto__ = trueProto;
      }
    };
    UnsupportedTransportError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
       *
       * @param {string} message A descriptive error message.
       * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
       */
      constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = "UnsupportedTransportError";
        this.__proto__ = trueProto;
      }
    };
    DisabledTransportError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
       *
       * @param {string} message A descriptive error message.
       * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
       */
      constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = "DisabledTransportError";
        this.__proto__ = trueProto;
      }
    };
    FailedToStartTransportError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
       *
       * @param {string} message A descriptive error message.
       * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
       */
      constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = "FailedToStartTransportError";
        this.__proto__ = trueProto;
      }
    };
    FailedToNegotiateWithServerError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
       *
       * @param {string} message A descriptive error message.
       */
      constructor(message) {
        const trueProto = new.target.prototype;
        super(message);
        this.errorType = "FailedToNegotiateWithServerError";
        this.__proto__ = trueProto;
      }
    };
    AggregateErrors = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
       *
       * @param {string} message A descriptive error message.
       * @param {Error[]} innerErrors The collection of errors this error is aggregating.
       */
      constructor(message, innerErrors) {
        const trueProto = new.target.prototype;
        super(message);
        this.innerErrors = innerErrors;
        this.__proto__ = trueProto;
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/ILogger.js
var LogLevel;
var init_ILogger = __esm({
  "node_modules/@microsoft/signalr/dist/esm/ILogger.js"() {
    "use strict";
    (function(LogLevel2) {
      LogLevel2[LogLevel2["Trace"] = 0] = "Trace";
      LogLevel2[LogLevel2["Debug"] = 1] = "Debug";
      LogLevel2[LogLevel2["Information"] = 2] = "Information";
      LogLevel2[LogLevel2["Warning"] = 3] = "Warning";
      LogLevel2[LogLevel2["Error"] = 4] = "Error";
      LogLevel2[LogLevel2["Critical"] = 5] = "Critical";
      LogLevel2[LogLevel2["None"] = 6] = "None";
    })(LogLevel || (LogLevel = {}));
  }
});

// node_modules/@microsoft/signalr/dist/esm/Loggers.js
var NullLogger;
var init_Loggers = __esm({
  "node_modules/@microsoft/signalr/dist/esm/Loggers.js"() {
    "use strict";
    NullLogger = class {
      constructor() {
      }
      /** @inheritDoc */
      // eslint-disable-next-line
      log(_logLevel, _message) {
      }
    };
    NullLogger.instance = new NullLogger();
  }
});

// node_modules/@microsoft/signalr/dist/esm/Utils.js
function getDataDetail(data, includeContent) {
  let detail = "";
  if (isArrayBuffer(data)) {
    detail = `Binary data of length ${data.byteLength}`;
    if (includeContent) {
      detail += `. Content: '${formatArrayBuffer(data)}'`;
    }
  } else if (typeof data === "string") {
    detail = `String data of length ${data.length}`;
    if (includeContent) {
      detail += `. Content: '${data}'`;
    }
  }
  return detail;
}
function formatArrayBuffer(data) {
  const view = new Uint8Array(data);
  let str = "";
  view.forEach((num) => {
    const pad = num < 16 ? "0" : "";
    str += `0x${pad}${num.toString(16)} `;
  });
  return str.substr(0, str.length - 1);
}
function isArrayBuffer(val) {
  return val && typeof ArrayBuffer !== "undefined" && (val instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  val.constructor && val.constructor.name === "ArrayBuffer");
}
function sendMessage(logger, transportName, httpClient, url, content, options) {
  return __async(this, null, function* () {
    const headers = {};
    const [name, value] = getUserAgentHeader();
    headers[name] = value;
    logger.log(LogLevel.Trace, `(${transportName} transport) sending data. ${getDataDetail(content, options.logMessageContent)}.`);
    const responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
    const response = yield httpClient.post(url, {
      content,
      headers: __spreadValues(__spreadValues({}, headers), options.headers),
      responseType,
      timeout: options.timeout,
      withCredentials: options.withCredentials
    });
    logger.log(LogLevel.Trace, `(${transportName} transport) request complete. Response status: ${response.statusCode}.`);
  });
}
function createLogger(logger) {
  if (logger === void 0) {
    return new ConsoleLogger(LogLevel.Information);
  }
  if (logger === null) {
    return NullLogger.instance;
  }
  if (logger.log !== void 0) {
    return logger;
  }
  return new ConsoleLogger(logger);
}
function getUserAgentHeader() {
  let userAgentHeaderName = "X-SignalR-User-Agent";
  if (Platform.isNode) {
    userAgentHeaderName = "User-Agent";
  }
  return [userAgentHeaderName, constructUserAgent(VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
}
function constructUserAgent(version, os, runtime, runtimeVersion) {
  let userAgent = "Microsoft SignalR/";
  const majorAndMinor = version.split(".");
  userAgent += `${majorAndMinor[0]}.${majorAndMinor[1]}`;
  userAgent += ` (${version}; `;
  if (os && os !== "") {
    userAgent += `${os}; `;
  } else {
    userAgent += "Unknown OS; ";
  }
  userAgent += `${runtime}`;
  if (runtimeVersion) {
    userAgent += `; ${runtimeVersion}`;
  } else {
    userAgent += "; Unknown Runtime Version";
  }
  userAgent += ")";
  return userAgent;
}
function getOsName() {
  if (Platform.isNode) {
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  } else {
    return "";
  }
}
function getRuntimeVersion() {
  if (Platform.isNode) {
    return process.versions.node;
  }
  return void 0;
}
function getRuntime() {
  if (Platform.isNode) {
    return "NodeJS";
  } else {
    return "Browser";
  }
}
function getErrorString(e) {
  if (e.stack) {
    return e.stack;
  } else if (e.message) {
    return e.message;
  }
  return `${e}`;
}
function getGlobalThis() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("could not find global");
}
var VERSION, Arg, Platform, SubjectSubscription, ConsoleLogger;
var init_Utils = __esm({
  "node_modules/@microsoft/signalr/dist/esm/Utils.js"() {
    "use strict";
    init_ILogger();
    init_Loggers();
    VERSION = "8.0.7";
    Arg = class {
      static isRequired(val, name) {
        if (val === null || val === void 0) {
          throw new Error(`The '${name}' argument is required.`);
        }
      }
      static isNotEmpty(val, name) {
        if (!val || val.match(/^\s*$/)) {
          throw new Error(`The '${name}' argument should not be empty.`);
        }
      }
      static isIn(val, values, name) {
        if (!(val in values)) {
          throw new Error(`Unknown ${name} value: ${val}.`);
        }
      }
    };
    Platform = class _Platform {
      // react-native has a window but no document so we should check both
      static get isBrowser() {
        return !_Platform.isNode && typeof window === "object" && typeof window.document === "object";
      }
      // WebWorkers don't have a window object so the isBrowser check would fail
      static get isWebWorker() {
        return !_Platform.isNode && typeof self === "object" && "importScripts" in self;
      }
      // react-native has a window but no document
      static get isReactNative() {
        return !_Platform.isNode && typeof window === "object" && typeof window.document === "undefined";
      }
      // Node apps shouldn't have a window object, but WebWorkers don't either
      // so we need to check for both WebWorker and window
      static get isNode() {
        return typeof process !== "undefined" && process.release && process.release.name === "node";
      }
    };
    SubjectSubscription = class {
      constructor(subject, observer) {
        this._subject = subject;
        this._observer = observer;
      }
      dispose() {
        const index = this._subject.observers.indexOf(this._observer);
        if (index > -1) {
          this._subject.observers.splice(index, 1);
        }
        if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
          this._subject.cancelCallback().catch((_) => {
          });
        }
      }
    };
    ConsoleLogger = class {
      constructor(minimumLogLevel) {
        this._minLevel = minimumLogLevel;
        this.out = console;
      }
      log(logLevel, message) {
        if (logLevel >= this._minLevel) {
          const msg = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${LogLevel[logLevel]}: ${message}`;
          switch (logLevel) {
            case LogLevel.Critical:
            case LogLevel.Error:
              this.out.error(msg);
              break;
            case LogLevel.Warning:
              this.out.warn(msg);
              break;
            case LogLevel.Information:
              this.out.info(msg);
              break;
            default:
              this.out.log(msg);
              break;
          }
        }
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js
function deserializeContent(response, responseType) {
  let content;
  switch (responseType) {
    case "arraybuffer":
      content = response.arrayBuffer();
      break;
    case "text":
      content = response.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${responseType} is not supported.`);
    default:
      content = response.text();
      break;
  }
  return content;
}
var FetchHttpClient;
var init_FetchHttpClient = __esm({
  "node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js"() {
    "use strict";
    init_Errors();
    init_HttpClient();
    init_ILogger();
    init_Utils();
    FetchHttpClient = class extends HttpClient {
      constructor(logger) {
        super();
        this._logger = logger;
        if (typeof fetch === "undefined" || Platform.isNode) {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require;
          this._jar = new (requireFunc("tough-cookie")).CookieJar();
          if (typeof fetch === "undefined") {
            this._fetchType = requireFunc("node-fetch");
          } else {
            this._fetchType = fetch;
          }
          this._fetchType = requireFunc("fetch-cookie")(this._fetchType, this._jar);
        } else {
          this._fetchType = fetch.bind(getGlobalThis());
        }
        if (typeof AbortController === "undefined") {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require;
          this._abortControllerType = requireFunc("abort-controller");
        } else {
          this._abortControllerType = AbortController;
        }
      }
      /** @inheritDoc */
      send(request) {
        return __async(this, null, function* () {
          if (request.abortSignal && request.abortSignal.aborted) {
            throw new AbortError();
          }
          if (!request.method) {
            throw new Error("No method defined.");
          }
          if (!request.url) {
            throw new Error("No url defined.");
          }
          const abortController = new this._abortControllerType();
          let error;
          if (request.abortSignal) {
            request.abortSignal.onabort = () => {
              abortController.abort();
              error = new AbortError();
            };
          }
          let timeoutId = null;
          if (request.timeout) {
            const msTimeout = request.timeout;
            timeoutId = setTimeout(() => {
              abortController.abort();
              this._logger.log(LogLevel.Warning, `Timeout from HTTP request.`);
              error = new TimeoutError();
            }, msTimeout);
          }
          if (request.content === "") {
            request.content = void 0;
          }
          if (request.content) {
            request.headers = request.headers || {};
            if (isArrayBuffer(request.content)) {
              request.headers["Content-Type"] = "application/octet-stream";
            } else {
              request.headers["Content-Type"] = "text/plain;charset=UTF-8";
            }
          }
          let response;
          try {
            response = yield this._fetchType(request.url, {
              body: request.content,
              cache: "no-cache",
              credentials: request.withCredentials === true ? "include" : "same-origin",
              headers: __spreadValues({
                "X-Requested-With": "XMLHttpRequest"
              }, request.headers),
              method: request.method,
              mode: "cors",
              redirect: "follow",
              signal: abortController.signal
            });
          } catch (e) {
            if (error) {
              throw error;
            }
            this._logger.log(LogLevel.Warning, `Error from HTTP request. ${e}.`);
            throw e;
          } finally {
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
            if (request.abortSignal) {
              request.abortSignal.onabort = null;
            }
          }
          if (!response.ok) {
            const errorMessage = yield deserializeContent(response, "text");
            throw new HttpError(errorMessage || response.statusText, response.status);
          }
          const content = deserializeContent(response, request.responseType);
          const payload = yield content;
          return new HttpResponse(response.status, response.statusText, payload);
        });
      }
      getCookieString(url) {
        let cookies = "";
        if (Platform.isNode && this._jar) {
          this._jar.getCookies(url, (e, c) => cookies = c.join("; "));
        }
        return cookies;
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js
var XhrHttpClient;
var init_XhrHttpClient = __esm({
  "node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js"() {
    "use strict";
    init_Errors();
    init_HttpClient();
    init_ILogger();
    init_Utils();
    XhrHttpClient = class extends HttpClient {
      constructor(logger) {
        super();
        this._logger = logger;
      }
      /** @inheritDoc */
      send(request) {
        if (request.abortSignal && request.abortSignal.aborted) {
          return Promise.reject(new AbortError());
        }
        if (!request.method) {
          return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
          return Promise.reject(new Error("No url defined."));
        }
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open(request.method, request.url, true);
          xhr.withCredentials = request.withCredentials === void 0 ? true : request.withCredentials;
          xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
          if (request.content === "") {
            request.content = void 0;
          }
          if (request.content) {
            if (isArrayBuffer(request.content)) {
              xhr.setRequestHeader("Content-Type", "application/octet-stream");
            } else {
              xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            }
          }
          const headers = request.headers;
          if (headers) {
            Object.keys(headers).forEach((header) => {
              xhr.setRequestHeader(header, headers[header]);
            });
          }
          if (request.responseType) {
            xhr.responseType = request.responseType;
          }
          if (request.abortSignal) {
            request.abortSignal.onabort = () => {
              xhr.abort();
              reject(new AbortError());
            };
          }
          if (request.timeout) {
            xhr.timeout = request.timeout;
          }
          xhr.onload = () => {
            if (request.abortSignal) {
              request.abortSignal.onabort = null;
            }
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(new HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
            } else {
              reject(new HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
            }
          };
          xhr.onerror = () => {
            this._logger.log(LogLevel.Warning, `Error from HTTP request. ${xhr.status}: ${xhr.statusText}.`);
            reject(new HttpError(xhr.statusText, xhr.status));
          };
          xhr.ontimeout = () => {
            this._logger.log(LogLevel.Warning, `Timeout from HTTP request.`);
            reject(new TimeoutError());
          };
          xhr.send(request.content);
        });
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js
var DefaultHttpClient;
var init_DefaultHttpClient = __esm({
  "node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js"() {
    "use strict";
    init_Errors();
    init_FetchHttpClient();
    init_HttpClient();
    init_Utils();
    init_XhrHttpClient();
    DefaultHttpClient = class extends HttpClient {
      /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
      constructor(logger) {
        super();
        if (typeof fetch !== "undefined" || Platform.isNode) {
          this._httpClient = new FetchHttpClient(logger);
        } else if (typeof XMLHttpRequest !== "undefined") {
          this._httpClient = new XhrHttpClient(logger);
        } else {
          throw new Error("No usable HttpClient found.");
        }
      }
      /** @inheritDoc */
      send(request) {
        if (request.abortSignal && request.abortSignal.aborted) {
          return Promise.reject(new AbortError());
        }
        if (!request.method) {
          return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
          return Promise.reject(new Error("No url defined."));
        }
        return this._httpClient.send(request);
      }
      getCookieString(url) {
        return this._httpClient.getCookieString(url);
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/ITransport.js
var HttpTransportType, TransferFormat;
var init_ITransport = __esm({
  "node_modules/@microsoft/signalr/dist/esm/ITransport.js"() {
    "use strict";
    (function(HttpTransportType2) {
      HttpTransportType2[HttpTransportType2["None"] = 0] = "None";
      HttpTransportType2[HttpTransportType2["WebSockets"] = 1] = "WebSockets";
      HttpTransportType2[HttpTransportType2["ServerSentEvents"] = 2] = "ServerSentEvents";
      HttpTransportType2[HttpTransportType2["LongPolling"] = 4] = "LongPolling";
    })(HttpTransportType || (HttpTransportType = {}));
    (function(TransferFormat2) {
      TransferFormat2[TransferFormat2["Text"] = 1] = "Text";
      TransferFormat2[TransferFormat2["Binary"] = 2] = "Binary";
    })(TransferFormat || (TransferFormat = {}));
  }
});

// node_modules/@microsoft/signalr/dist/esm/AbortController.js
var AbortController2;
var init_AbortController = __esm({
  "node_modules/@microsoft/signalr/dist/esm/AbortController.js"() {
    "use strict";
    AbortController2 = class {
      constructor() {
        this._isAborted = false;
        this.onabort = null;
      }
      abort() {
        if (!this._isAborted) {
          this._isAborted = true;
          if (this.onabort) {
            this.onabort();
          }
        }
      }
      get signal() {
        return this;
      }
      get aborted() {
        return this._isAborted;
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/LongPollingTransport.js
var LongPollingTransport;
var init_LongPollingTransport = __esm({
  "node_modules/@microsoft/signalr/dist/esm/LongPollingTransport.js"() {
    "use strict";
    init_AbortController();
    init_Errors();
    init_ILogger();
    init_ITransport();
    init_Utils();
    LongPollingTransport = class {
      // This is an internal type, not exported from 'index' so this is really just internal.
      get pollAborted() {
        return this._pollAbort.aborted;
      }
      constructor(httpClient, logger, options) {
        this._httpClient = httpClient;
        this._logger = logger;
        this._pollAbort = new AbortController2();
        this._options = options;
        this._running = false;
        this.onreceive = null;
        this.onclose = null;
      }
      connect(url, transferFormat) {
        return __async(this, null, function* () {
          Arg.isRequired(url, "url");
          Arg.isRequired(transferFormat, "transferFormat");
          Arg.isIn(transferFormat, TransferFormat, "transferFormat");
          this._url = url;
          this._logger.log(LogLevel.Trace, "(LongPolling transport) Connecting.");
          if (transferFormat === TransferFormat.Binary && (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
            throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
          }
          const [name, value] = getUserAgentHeader();
          const headers = __spreadValues({ [name]: value }, this._options.headers);
          const pollOptions = {
            abortSignal: this._pollAbort.signal,
            headers,
            timeout: 1e5,
            withCredentials: this._options.withCredentials
          };
          if (transferFormat === TransferFormat.Binary) {
            pollOptions.responseType = "arraybuffer";
          }
          const pollUrl = `${url}&_=${Date.now()}`;
          this._logger.log(LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
          const response = yield this._httpClient.get(pollUrl, pollOptions);
          if (response.statusCode !== 200) {
            this._logger.log(LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
            this._closeError = new HttpError(response.statusText || "", response.statusCode);
            this._running = false;
          } else {
            this._running = true;
          }
          this._receiving = this._poll(this._url, pollOptions);
        });
      }
      _poll(url, pollOptions) {
        return __async(this, null, function* () {
          try {
            while (this._running) {
              try {
                const pollUrl = `${url}&_=${Date.now()}`;
                this._logger.log(LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
                const response = yield this._httpClient.get(pollUrl, pollOptions);
                if (response.statusCode === 204) {
                  this._logger.log(LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
                  this._running = false;
                } else if (response.statusCode !== 200) {
                  this._logger.log(LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
                  this._closeError = new HttpError(response.statusText || "", response.statusCode);
                  this._running = false;
                } else {
                  if (response.content) {
                    this._logger.log(LogLevel.Trace, `(LongPolling transport) data received. ${getDataDetail(response.content, this._options.logMessageContent)}.`);
                    if (this.onreceive) {
                      this.onreceive(response.content);
                    }
                  } else {
                    this._logger.log(LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                  }
                }
              } catch (e) {
                if (!this._running) {
                  this._logger.log(LogLevel.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
                } else {
                  if (e instanceof TimeoutError) {
                    this._logger.log(LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                  } else {
                    this._closeError = e;
                    this._running = false;
                  }
                }
              }
            }
          } finally {
            this._logger.log(LogLevel.Trace, "(LongPolling transport) Polling complete.");
            if (!this.pollAborted) {
              this._raiseOnClose();
            }
          }
        });
      }
      send(data) {
        return __async(this, null, function* () {
          if (!this._running) {
            return Promise.reject(new Error("Cannot send until the transport is connected"));
          }
          return sendMessage(this._logger, "LongPolling", this._httpClient, this._url, data, this._options);
        });
      }
      stop() {
        return __async(this, null, function* () {
          this._logger.log(LogLevel.Trace, "(LongPolling transport) Stopping polling.");
          this._running = false;
          this._pollAbort.abort();
          try {
            yield this._receiving;
            this._logger.log(LogLevel.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
            const headers = {};
            const [name, value] = getUserAgentHeader();
            headers[name] = value;
            const deleteOptions = {
              headers: __spreadValues(__spreadValues({}, headers), this._options.headers),
              timeout: this._options.timeout,
              withCredentials: this._options.withCredentials
            };
            let error;
            try {
              yield this._httpClient.delete(this._url, deleteOptions);
            } catch (err) {
              error = err;
            }
            if (error) {
              if (error instanceof HttpError) {
                if (error.statusCode === 404) {
                  this._logger.log(LogLevel.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.");
                } else {
                  this._logger.log(LogLevel.Trace, `(LongPolling transport) Error sending a DELETE request: ${error}`);
                }
              }
            } else {
              this._logger.log(LogLevel.Trace, "(LongPolling transport) DELETE request accepted.");
            }
          } finally {
            this._logger.log(LogLevel.Trace, "(LongPolling transport) Stop finished.");
            this._raiseOnClose();
          }
        });
      }
      _raiseOnClose() {
        if (this.onclose) {
          let logMessage = "(LongPolling transport) Firing onclose event.";
          if (this._closeError) {
            logMessage += " Error: " + this._closeError;
          }
          this._logger.log(LogLevel.Trace, logMessage);
          this.onclose(this._closeError);
        }
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/ServerSentEventsTransport.js
var ServerSentEventsTransport;
var init_ServerSentEventsTransport = __esm({
  "node_modules/@microsoft/signalr/dist/esm/ServerSentEventsTransport.js"() {
    "use strict";
    init_ILogger();
    init_ITransport();
    init_Utils();
    ServerSentEventsTransport = class {
      constructor(httpClient, accessToken, logger, options) {
        this._httpClient = httpClient;
        this._accessToken = accessToken;
        this._logger = logger;
        this._options = options;
        this.onreceive = null;
        this.onclose = null;
      }
      connect(url, transferFormat) {
        return __async(this, null, function* () {
          Arg.isRequired(url, "url");
          Arg.isRequired(transferFormat, "transferFormat");
          Arg.isIn(transferFormat, TransferFormat, "transferFormat");
          this._logger.log(LogLevel.Trace, "(SSE transport) Connecting.");
          this._url = url;
          if (this._accessToken) {
            url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`;
          }
          return new Promise((resolve, reject) => {
            let opened = false;
            if (transferFormat !== TransferFormat.Text) {
              reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
              return;
            }
            let eventSource;
            if (Platform.isBrowser || Platform.isWebWorker) {
              eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials });
            } else {
              const cookies = this._httpClient.getCookieString(url);
              const headers = {};
              headers.Cookie = cookies;
              const [name, value] = getUserAgentHeader();
              headers[name] = value;
              eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials, headers: __spreadValues(__spreadValues({}, headers), this._options.headers) });
            }
            try {
              eventSource.onmessage = (e) => {
                if (this.onreceive) {
                  try {
                    this._logger.log(LogLevel.Trace, `(SSE transport) data received. ${getDataDetail(e.data, this._options.logMessageContent)}.`);
                    this.onreceive(e.data);
                  } catch (error) {
                    this._close(error);
                    return;
                  }
                }
              };
              eventSource.onerror = (e) => {
                if (opened) {
                  this._close();
                } else {
                  reject(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
                }
              };
              eventSource.onopen = () => {
                this._logger.log(LogLevel.Information, `SSE connected to ${this._url}`);
                this._eventSource = eventSource;
                opened = true;
                resolve();
              };
            } catch (e) {
              reject(e);
              return;
            }
          });
        });
      }
      send(data) {
        return __async(this, null, function* () {
          if (!this._eventSource) {
            return Promise.reject(new Error("Cannot send until the transport is connected"));
          }
          return sendMessage(this._logger, "SSE", this._httpClient, this._url, data, this._options);
        });
      }
      stop() {
        this._close();
        return Promise.resolve();
      }
      _close(e) {
        if (this._eventSource) {
          this._eventSource.close();
          this._eventSource = void 0;
          if (this.onclose) {
            this.onclose(e);
          }
        }
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/WebSocketTransport.js
var WebSocketTransport;
var init_WebSocketTransport = __esm({
  "node_modules/@microsoft/signalr/dist/esm/WebSocketTransport.js"() {
    "use strict";
    init_HeaderNames();
    init_ILogger();
    init_ITransport();
    init_Utils();
    WebSocketTransport = class {
      constructor(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor, headers) {
        this._logger = logger;
        this._accessTokenFactory = accessTokenFactory;
        this._logMessageContent = logMessageContent;
        this._webSocketConstructor = webSocketConstructor;
        this._httpClient = httpClient;
        this.onreceive = null;
        this.onclose = null;
        this._headers = headers;
      }
      connect(url, transferFormat) {
        return __async(this, null, function* () {
          Arg.isRequired(url, "url");
          Arg.isRequired(transferFormat, "transferFormat");
          Arg.isIn(transferFormat, TransferFormat, "transferFormat");
          this._logger.log(LogLevel.Trace, "(WebSockets transport) Connecting.");
          let token;
          if (this._accessTokenFactory) {
            token = yield this._accessTokenFactory();
          }
          return new Promise((resolve, reject) => {
            url = url.replace(/^http/, "ws");
            let webSocket;
            const cookies = this._httpClient.getCookieString(url);
            let opened = false;
            if (Platform.isNode || Platform.isReactNative) {
              const headers = {};
              const [name, value] = getUserAgentHeader();
              headers[name] = value;
              if (token) {
                headers[HeaderNames.Authorization] = `Bearer ${token}`;
              }
              if (cookies) {
                headers[HeaderNames.Cookie] = cookies;
              }
              webSocket = new this._webSocketConstructor(url, void 0, {
                headers: __spreadValues(__spreadValues({}, headers), this._headers)
              });
            } else {
              if (token) {
                url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token)}`;
              }
            }
            if (!webSocket) {
              webSocket = new this._webSocketConstructor(url);
            }
            if (transferFormat === TransferFormat.Binary) {
              webSocket.binaryType = "arraybuffer";
            }
            webSocket.onopen = (_event) => {
              this._logger.log(LogLevel.Information, `WebSocket connected to ${url}.`);
              this._webSocket = webSocket;
              opened = true;
              resolve();
            };
            webSocket.onerror = (event) => {
              let error = null;
              if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                error = event.error;
              } else {
                error = "There was an error with the transport";
              }
              this._logger.log(LogLevel.Information, `(WebSockets transport) ${error}.`);
            };
            webSocket.onmessage = (message) => {
              this._logger.log(LogLevel.Trace, `(WebSockets transport) data received. ${getDataDetail(message.data, this._logMessageContent)}.`);
              if (this.onreceive) {
                try {
                  this.onreceive(message.data);
                } catch (error) {
                  this._close(error);
                  return;
                }
              }
            };
            webSocket.onclose = (event) => {
              if (opened) {
                this._close(event);
              } else {
                let error = null;
                if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                  error = event.error;
                } else {
                  error = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.";
                }
                reject(new Error(error));
              }
            };
          });
        });
      }
      send(data) {
        if (this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN) {
          this._logger.log(LogLevel.Trace, `(WebSockets transport) sending data. ${getDataDetail(data, this._logMessageContent)}.`);
          this._webSocket.send(data);
          return Promise.resolve();
        }
        return Promise.reject("WebSocket is not in the OPEN state");
      }
      stop() {
        if (this._webSocket) {
          this._close(void 0);
        }
        return Promise.resolve();
      }
      _close(event) {
        if (this._webSocket) {
          this._webSocket.onclose = () => {
          };
          this._webSocket.onmessage = () => {
          };
          this._webSocket.onerror = () => {
          };
          this._webSocket.close();
          this._webSocket = void 0;
        }
        this._logger.log(LogLevel.Trace, "(WebSockets transport) socket closed.");
        if (this.onclose) {
          if (this._isCloseEvent(event) && (event.wasClean === false || event.code !== 1e3)) {
            this.onclose(new Error(`WebSocket closed with status code: ${event.code} (${event.reason || "no reason given"}).`));
          } else if (event instanceof Error) {
            this.onclose(event);
          } else {
            this.onclose();
          }
        }
      }
      _isCloseEvent(event) {
        return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/HttpConnection.js
function transportMatches(requestedTransport, actualTransport) {
  return !requestedTransport || (actualTransport & requestedTransport) !== 0;
}
var MAX_REDIRECTS, HttpConnection, TransportSendQueue, PromiseSource;
var init_HttpConnection = __esm({
  "node_modules/@microsoft/signalr/dist/esm/HttpConnection.js"() {
    "use strict";
    init_AccessTokenHttpClient();
    init_DefaultHttpClient();
    init_Errors();
    init_ILogger();
    init_ITransport();
    init_LongPollingTransport();
    init_ServerSentEventsTransport();
    init_Utils();
    init_WebSocketTransport();
    MAX_REDIRECTS = 100;
    HttpConnection = class {
      constructor(url, options = {}) {
        this._stopPromiseResolver = () => {
        };
        this.features = {};
        this._negotiateVersion = 1;
        Arg.isRequired(url, "url");
        this._logger = createLogger(options.logger);
        this.baseUrl = this._resolveUrl(url);
        options = options || {};
        options.logMessageContent = options.logMessageContent === void 0 ? false : options.logMessageContent;
        if (typeof options.withCredentials === "boolean" || options.withCredentials === void 0) {
          options.withCredentials = options.withCredentials === void 0 ? true : options.withCredentials;
        } else {
          throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
        }
        options.timeout = options.timeout === void 0 ? 100 * 1e3 : options.timeout;
        let webSocketModule = null;
        let eventSourceModule = null;
        if (Platform.isNode && typeof __require !== "undefined") {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require;
          webSocketModule = requireFunc("ws");
          eventSourceModule = requireFunc("eventsource");
        }
        if (!Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
          options.WebSocket = WebSocket;
        } else if (Platform.isNode && !options.WebSocket) {
          if (webSocketModule) {
            options.WebSocket = webSocketModule;
          }
        }
        if (!Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
          options.EventSource = EventSource;
        } else if (Platform.isNode && !options.EventSource) {
          if (typeof eventSourceModule !== "undefined") {
            options.EventSource = eventSourceModule;
          }
        }
        this._httpClient = new AccessTokenHttpClient(options.httpClient || new DefaultHttpClient(this._logger), options.accessTokenFactory);
        this._connectionState = "Disconnected";
        this._connectionStarted = false;
        this._options = options;
        this.onreceive = null;
        this.onclose = null;
      }
      start(transferFormat) {
        return __async(this, null, function* () {
          transferFormat = transferFormat || TransferFormat.Binary;
          Arg.isIn(transferFormat, TransferFormat, "transferFormat");
          this._logger.log(LogLevel.Debug, `Starting connection with transfer format '${TransferFormat[transferFormat]}'.`);
          if (this._connectionState !== "Disconnected") {
            return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
          }
          this._connectionState = "Connecting";
          this._startInternalPromise = this._startInternal(transferFormat);
          yield this._startInternalPromise;
          if (this._connectionState === "Disconnecting") {
            const message = "Failed to start the HttpConnection before stop() was called.";
            this._logger.log(LogLevel.Error, message);
            yield this._stopPromise;
            return Promise.reject(new AbortError(message));
          } else if (this._connectionState !== "Connected") {
            const message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
            this._logger.log(LogLevel.Error, message);
            return Promise.reject(new AbortError(message));
          }
          this._connectionStarted = true;
        });
      }
      send(data) {
        if (this._connectionState !== "Connected") {
          return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
        }
        if (!this._sendQueue) {
          this._sendQueue = new TransportSendQueue(this.transport);
        }
        return this._sendQueue.send(data);
      }
      stop(error) {
        return __async(this, null, function* () {
          if (this._connectionState === "Disconnected") {
            this._logger.log(LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnected state.`);
            return Promise.resolve();
          }
          if (this._connectionState === "Disconnecting") {
            this._logger.log(LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
            return this._stopPromise;
          }
          this._connectionState = "Disconnecting";
          this._stopPromise = new Promise((resolve) => {
            this._stopPromiseResolver = resolve;
          });
          yield this._stopInternal(error);
          yield this._stopPromise;
        });
      }
      _stopInternal(error) {
        return __async(this, null, function* () {
          this._stopError = error;
          try {
            yield this._startInternalPromise;
          } catch (e) {
          }
          if (this.transport) {
            try {
              yield this.transport.stop();
            } catch (e) {
              this._logger.log(LogLevel.Error, `HttpConnection.transport.stop() threw error '${e}'.`);
              this._stopConnection();
            }
            this.transport = void 0;
          } else {
            this._logger.log(LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
          }
        });
      }
      _startInternal(transferFormat) {
        return __async(this, null, function* () {
          let url = this.baseUrl;
          this._accessTokenFactory = this._options.accessTokenFactory;
          this._httpClient._accessTokenFactory = this._accessTokenFactory;
          try {
            if (this._options.skipNegotiation) {
              if (this._options.transport === HttpTransportType.WebSockets) {
                this.transport = this._constructTransport(HttpTransportType.WebSockets);
                yield this._startTransport(url, transferFormat);
              } else {
                throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
              }
            } else {
              let negotiateResponse = null;
              let redirects = 0;
              do {
                negotiateResponse = yield this._getNegotiationResponse(url);
                if (this._connectionState === "Disconnecting" || this._connectionState === "Disconnected") {
                  throw new AbortError("The connection was stopped during negotiation.");
                }
                if (negotiateResponse.error) {
                  throw new Error(negotiateResponse.error);
                }
                if (negotiateResponse.ProtocolVersion) {
                  throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                }
                if (negotiateResponse.url) {
                  url = negotiateResponse.url;
                }
                if (negotiateResponse.accessToken) {
                  const accessToken = negotiateResponse.accessToken;
                  this._accessTokenFactory = () => accessToken;
                  this._httpClient._accessToken = accessToken;
                  this._httpClient._accessTokenFactory = void 0;
                }
                redirects++;
              } while (negotiateResponse.url && redirects < MAX_REDIRECTS);
              if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
                throw new Error("Negotiate redirection limit exceeded.");
              }
              yield this._createTransport(url, this._options.transport, negotiateResponse, transferFormat);
            }
            if (this.transport instanceof LongPollingTransport) {
              this.features.inherentKeepAlive = true;
            }
            if (this._connectionState === "Connecting") {
              this._logger.log(LogLevel.Debug, "The HttpConnection connected successfully.");
              this._connectionState = "Connected";
            }
          } catch (e) {
            this._logger.log(LogLevel.Error, "Failed to start the connection: " + e);
            this._connectionState = "Disconnected";
            this.transport = void 0;
            this._stopPromiseResolver();
            return Promise.reject(e);
          }
        });
      }
      _getNegotiationResponse(url) {
        return __async(this, null, function* () {
          const headers = {};
          const [name, value] = getUserAgentHeader();
          headers[name] = value;
          const negotiateUrl = this._resolveNegotiateUrl(url);
          this._logger.log(LogLevel.Debug, `Sending negotiation request: ${negotiateUrl}.`);
          try {
            const response = yield this._httpClient.post(negotiateUrl, {
              content: "",
              headers: __spreadValues(__spreadValues({}, headers), this._options.headers),
              timeout: this._options.timeout,
              withCredentials: this._options.withCredentials
            });
            if (response.statusCode !== 200) {
              return Promise.reject(new Error(`Unexpected status code returned from negotiate '${response.statusCode}'`));
            }
            const negotiateResponse = JSON.parse(response.content);
            if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
              negotiateResponse.connectionToken = negotiateResponse.connectionId;
            }
            if (negotiateResponse.useStatefulReconnect && this._options._useStatefulReconnect !== true) {
              return Promise.reject(new FailedToNegotiateWithServerError("Client didn't negotiate Stateful Reconnect but the server did."));
            }
            return negotiateResponse;
          } catch (e) {
            let errorMessage = "Failed to complete negotiation with the server: " + e;
            if (e instanceof HttpError) {
              if (e.statusCode === 404) {
                errorMessage = errorMessage + " Either this is not a SignalR endpoint or there is a proxy blocking the connection.";
              }
            }
            this._logger.log(LogLevel.Error, errorMessage);
            return Promise.reject(new FailedToNegotiateWithServerError(errorMessage));
          }
        });
      }
      _createConnectUrl(url, connectionToken) {
        if (!connectionToken) {
          return url;
        }
        return url + (url.indexOf("?") === -1 ? "?" : "&") + `id=${connectionToken}`;
      }
      _createTransport(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
        return __async(this, null, function* () {
          let connectUrl = this._createConnectUrl(url, negotiateResponse.connectionToken);
          if (this._isITransport(requestedTransport)) {
            this._logger.log(LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
            this.transport = requestedTransport;
            yield this._startTransport(connectUrl, requestedTransferFormat);
            this.connectionId = negotiateResponse.connectionId;
            return;
          }
          const transportExceptions = [];
          const transports = negotiateResponse.availableTransports || [];
          let negotiate = negotiateResponse;
          for (const endpoint of transports) {
            const transportOrError = this._resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, (negotiate === null || negotiate === void 0 ? void 0 : negotiate.useStatefulReconnect) === true);
            if (transportOrError instanceof Error) {
              transportExceptions.push(`${endpoint.transport} failed:`);
              transportExceptions.push(transportOrError);
            } else if (this._isITransport(transportOrError)) {
              this.transport = transportOrError;
              if (!negotiate) {
                try {
                  negotiate = yield this._getNegotiationResponse(url);
                } catch (ex) {
                  return Promise.reject(ex);
                }
                connectUrl = this._createConnectUrl(url, negotiate.connectionToken);
              }
              try {
                yield this._startTransport(connectUrl, requestedTransferFormat);
                this.connectionId = negotiate.connectionId;
                return;
              } catch (ex) {
                this._logger.log(LogLevel.Error, `Failed to start the transport '${endpoint.transport}': ${ex}`);
                negotiate = void 0;
                transportExceptions.push(new FailedToStartTransportError(`${endpoint.transport} failed: ${ex}`, HttpTransportType[endpoint.transport]));
                if (this._connectionState !== "Connecting") {
                  const message = "Failed to select transport before stop() was called.";
                  this._logger.log(LogLevel.Debug, message);
                  return Promise.reject(new AbortError(message));
                }
              }
            }
          }
          if (transportExceptions.length > 0) {
            return Promise.reject(new AggregateErrors(`Unable to connect to the server with any of the available transports. ${transportExceptions.join(" ")}`, transportExceptions));
          }
          return Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
        });
      }
      _constructTransport(transport) {
        switch (transport) {
          case HttpTransportType.WebSockets:
            if (!this._options.WebSocket) {
              throw new Error("'WebSocket' is not supported in your environment.");
            }
            return new WebSocketTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
          case HttpTransportType.ServerSentEvents:
            if (!this._options.EventSource) {
              throw new Error("'EventSource' is not supported in your environment.");
            }
            return new ServerSentEventsTransport(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
          case HttpTransportType.LongPolling:
            return new LongPollingTransport(this._httpClient, this._logger, this._options);
          default:
            throw new Error(`Unknown transport: ${transport}.`);
        }
      }
      _startTransport(url, transferFormat) {
        this.transport.onreceive = this.onreceive;
        if (this.features.reconnect) {
          this.transport.onclose = (e) => __async(this, null, function* () {
            let callStop = false;
            if (this.features.reconnect) {
              try {
                this.features.disconnected();
                yield this.transport.connect(url, transferFormat);
                yield this.features.resend();
              } catch {
                callStop = true;
              }
            } else {
              this._stopConnection(e);
              return;
            }
            if (callStop) {
              this._stopConnection(e);
            }
          });
        } else {
          this.transport.onclose = (e) => this._stopConnection(e);
        }
        return this.transport.connect(url, transferFormat);
      }
      _resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, useStatefulReconnect) {
        const transport = HttpTransportType[endpoint.transport];
        if (transport === null || transport === void 0) {
          this._logger.log(LogLevel.Debug, `Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
          return new Error(`Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
        } else {
          if (transportMatches(requestedTransport, transport)) {
            const transferFormats = endpoint.transferFormats.map((s) => TransferFormat[s]);
            if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
              if (transport === HttpTransportType.WebSockets && !this._options.WebSocket || transport === HttpTransportType.ServerSentEvents && !this._options.EventSource) {
                this._logger.log(LogLevel.Debug, `Skipping transport '${HttpTransportType[transport]}' because it is not supported in your environment.'`);
                return new UnsupportedTransportError(`'${HttpTransportType[transport]}' is not supported in your environment.`, transport);
              } else {
                this._logger.log(LogLevel.Debug, `Selecting transport '${HttpTransportType[transport]}'.`);
                try {
                  this.features.reconnect = transport === HttpTransportType.WebSockets ? useStatefulReconnect : void 0;
                  return this._constructTransport(transport);
                } catch (ex) {
                  return ex;
                }
              }
            } else {
              this._logger.log(LogLevel.Debug, `Skipping transport '${HttpTransportType[transport]}' because it does not support the requested transfer format '${TransferFormat[requestedTransferFormat]}'.`);
              return new Error(`'${HttpTransportType[transport]}' does not support ${TransferFormat[requestedTransferFormat]}.`);
            }
          } else {
            this._logger.log(LogLevel.Debug, `Skipping transport '${HttpTransportType[transport]}' because it was disabled by the client.`);
            return new DisabledTransportError(`'${HttpTransportType[transport]}' is disabled by the client.`, transport);
          }
        }
      }
      _isITransport(transport) {
        return transport && typeof transport === "object" && "connect" in transport;
      }
      _stopConnection(error) {
        this._logger.log(LogLevel.Debug, `HttpConnection.stopConnection(${error}) called while in state ${this._connectionState}.`);
        this.transport = void 0;
        error = this._stopError || error;
        this._stopError = void 0;
        if (this._connectionState === "Disconnected") {
          this._logger.log(LogLevel.Debug, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is already in the disconnected state.`);
          return;
        }
        if (this._connectionState === "Connecting") {
          this._logger.log(LogLevel.Warning, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is still in the connecting state.`);
          throw new Error(`HttpConnection.stopConnection(${error}) was called while the connection is still in the connecting state.`);
        }
        if (this._connectionState === "Disconnecting") {
          this._stopPromiseResolver();
        }
        if (error) {
          this._logger.log(LogLevel.Error, `Connection disconnected with error '${error}'.`);
        } else {
          this._logger.log(LogLevel.Information, "Connection disconnected.");
        }
        if (this._sendQueue) {
          this._sendQueue.stop().catch((e) => {
            this._logger.log(LogLevel.Error, `TransportSendQueue.stop() threw error '${e}'.`);
          });
          this._sendQueue = void 0;
        }
        this.connectionId = void 0;
        this._connectionState = "Disconnected";
        if (this._connectionStarted) {
          this._connectionStarted = false;
          try {
            if (this.onclose) {
              this.onclose(error);
            }
          } catch (e) {
            this._logger.log(LogLevel.Error, `HttpConnection.onclose(${error}) threw error '${e}'.`);
          }
        }
      }
      _resolveUrl(url) {
        if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
          return url;
        }
        if (!Platform.isBrowser) {
          throw new Error(`Cannot resolve '${url}'.`);
        }
        const aTag = window.document.createElement("a");
        aTag.href = url;
        this._logger.log(LogLevel.Information, `Normalizing '${url}' to '${aTag.href}'.`);
        return aTag.href;
      }
      _resolveNegotiateUrl(url) {
        const negotiateUrl = new URL(url);
        if (negotiateUrl.pathname.endsWith("/")) {
          negotiateUrl.pathname += "negotiate";
        } else {
          negotiateUrl.pathname += "/negotiate";
        }
        const searchParams = new URLSearchParams(negotiateUrl.searchParams);
        if (!searchParams.has("negotiateVersion")) {
          searchParams.append("negotiateVersion", this._negotiateVersion.toString());
        }
        if (searchParams.has("useStatefulReconnect")) {
          if (searchParams.get("useStatefulReconnect") === "true") {
            this._options._useStatefulReconnect = true;
          }
        } else if (this._options._useStatefulReconnect === true) {
          searchParams.append("useStatefulReconnect", "true");
        }
        negotiateUrl.search = searchParams.toString();
        return negotiateUrl.toString();
      }
    };
    TransportSendQueue = class _TransportSendQueue {
      constructor(_transport) {
        this._transport = _transport;
        this._buffer = [];
        this._executing = true;
        this._sendBufferedData = new PromiseSource();
        this._transportResult = new PromiseSource();
        this._sendLoopPromise = this._sendLoop();
      }
      send(data) {
        this._bufferData(data);
        if (!this._transportResult) {
          this._transportResult = new PromiseSource();
        }
        return this._transportResult.promise;
      }
      stop() {
        this._executing = false;
        this._sendBufferedData.resolve();
        return this._sendLoopPromise;
      }
      _bufferData(data) {
        if (this._buffer.length && typeof this._buffer[0] !== typeof data) {
          throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof data}`);
        }
        this._buffer.push(data);
        this._sendBufferedData.resolve();
      }
      _sendLoop() {
        return __async(this, null, function* () {
          while (true) {
            yield this._sendBufferedData.promise;
            if (!this._executing) {
              if (this._transportResult) {
                this._transportResult.reject("Connection stopped.");
              }
              break;
            }
            this._sendBufferedData = new PromiseSource();
            const transportResult = this._transportResult;
            this._transportResult = void 0;
            const data = typeof this._buffer[0] === "string" ? this._buffer.join("") : _TransportSendQueue._concatBuffers(this._buffer);
            this._buffer.length = 0;
            try {
              yield this._transport.send(data);
              transportResult.resolve();
            } catch (error) {
              transportResult.reject(error);
            }
          }
        });
      }
      static _concatBuffers(arrayBuffers) {
        const totalLength = arrayBuffers.map((b) => b.byteLength).reduce((a, b) => a + b);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const item of arrayBuffers) {
          result.set(new Uint8Array(item), offset);
          offset += item.byteLength;
        }
        return result.buffer;
      }
    };
    PromiseSource = class {
      constructor() {
        this.promise = new Promise((resolve, reject) => [this._resolver, this._rejecter] = [resolve, reject]);
      }
      resolve() {
        this._resolver();
      }
      reject(reason) {
        this._rejecter(reason);
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js
var TextMessageFormat;
var init_TextMessageFormat = __esm({
  "node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js"() {
    "use strict";
    TextMessageFormat = class _TextMessageFormat {
      static write(output) {
        return `${output}${_TextMessageFormat.RecordSeparator}`;
      }
      static parse(input) {
        if (input[input.length - 1] !== _TextMessageFormat.RecordSeparator) {
          throw new Error("Message is incomplete.");
        }
        const messages = input.split(_TextMessageFormat.RecordSeparator);
        messages.pop();
        return messages;
      }
    };
    TextMessageFormat.RecordSeparatorCode = 30;
    TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
  }
});

// node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js
var HandshakeProtocol;
var init_HandshakeProtocol = __esm({
  "node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js"() {
    "use strict";
    init_TextMessageFormat();
    init_Utils();
    HandshakeProtocol = class {
      // Handshake request is always JSON
      writeHandshakeRequest(handshakeRequest) {
        return TextMessageFormat.write(JSON.stringify(handshakeRequest));
      }
      parseHandshakeResponse(data) {
        let messageData;
        let remainingData;
        if (isArrayBuffer(data)) {
          const binaryData = new Uint8Array(data);
          const separatorIndex = binaryData.indexOf(TextMessageFormat.RecordSeparatorCode);
          if (separatorIndex === -1) {
            throw new Error("Message is incomplete.");
          }
          const responseLength = separatorIndex + 1;
          messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
          remainingData = binaryData.byteLength > responseLength ? binaryData.slice(responseLength).buffer : null;
        } else {
          const textData = data;
          const separatorIndex = textData.indexOf(TextMessageFormat.RecordSeparator);
          if (separatorIndex === -1) {
            throw new Error("Message is incomplete.");
          }
          const responseLength = separatorIndex + 1;
          messageData = textData.substring(0, responseLength);
          remainingData = textData.length > responseLength ? textData.substring(responseLength) : null;
        }
        const messages = TextMessageFormat.parse(messageData);
        const response = JSON.parse(messages[0]);
        if (response.type) {
          throw new Error("Expected a handshake response from the server.");
        }
        const responseMessage = response;
        return [remainingData, responseMessage];
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js
var MessageType;
var init_IHubProtocol = __esm({
  "node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js"() {
    "use strict";
    (function(MessageType2) {
      MessageType2[MessageType2["Invocation"] = 1] = "Invocation";
      MessageType2[MessageType2["StreamItem"] = 2] = "StreamItem";
      MessageType2[MessageType2["Completion"] = 3] = "Completion";
      MessageType2[MessageType2["StreamInvocation"] = 4] = "StreamInvocation";
      MessageType2[MessageType2["CancelInvocation"] = 5] = "CancelInvocation";
      MessageType2[MessageType2["Ping"] = 6] = "Ping";
      MessageType2[MessageType2["Close"] = 7] = "Close";
      MessageType2[MessageType2["Ack"] = 8] = "Ack";
      MessageType2[MessageType2["Sequence"] = 9] = "Sequence";
    })(MessageType || (MessageType = {}));
  }
});

// node_modules/@microsoft/signalr/dist/esm/Subject.js
var Subject;
var init_Subject = __esm({
  "node_modules/@microsoft/signalr/dist/esm/Subject.js"() {
    "use strict";
    init_Utils();
    Subject = class {
      constructor() {
        this.observers = [];
      }
      next(item) {
        for (const observer of this.observers) {
          observer.next(item);
        }
      }
      error(err) {
        for (const observer of this.observers) {
          if (observer.error) {
            observer.error(err);
          }
        }
      }
      complete() {
        for (const observer of this.observers) {
          if (observer.complete) {
            observer.complete();
          }
        }
      }
      subscribe(observer) {
        this.observers.push(observer);
        return new SubjectSubscription(this, observer);
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/MessageBuffer.js
var MessageBuffer, BufferedItem;
var init_MessageBuffer = __esm({
  "node_modules/@microsoft/signalr/dist/esm/MessageBuffer.js"() {
    "use strict";
    init_IHubProtocol();
    init_Utils();
    MessageBuffer = class {
      constructor(protocol, connection, bufferSize) {
        this._bufferSize = 1e5;
        this._messages = [];
        this._totalMessageCount = 0;
        this._waitForSequenceMessage = false;
        this._nextReceivingSequenceId = 1;
        this._latestReceivedSequenceId = 0;
        this._bufferedByteCount = 0;
        this._reconnectInProgress = false;
        this._protocol = protocol;
        this._connection = connection;
        this._bufferSize = bufferSize;
      }
      _send(message) {
        return __async(this, null, function* () {
          const serializedMessage = this._protocol.writeMessage(message);
          let backpressurePromise = Promise.resolve();
          if (this._isInvocationMessage(message)) {
            this._totalMessageCount++;
            let backpressurePromiseResolver = () => {
            };
            let backpressurePromiseRejector = () => {
            };
            if (isArrayBuffer(serializedMessage)) {
              this._bufferedByteCount += serializedMessage.byteLength;
            } else {
              this._bufferedByteCount += serializedMessage.length;
            }
            if (this._bufferedByteCount >= this._bufferSize) {
              backpressurePromise = new Promise((resolve, reject) => {
                backpressurePromiseResolver = resolve;
                backpressurePromiseRejector = reject;
              });
            }
            this._messages.push(new BufferedItem(serializedMessage, this._totalMessageCount, backpressurePromiseResolver, backpressurePromiseRejector));
          }
          try {
            if (!this._reconnectInProgress) {
              yield this._connection.send(serializedMessage);
            }
          } catch {
            this._disconnected();
          }
          yield backpressurePromise;
        });
      }
      _ack(ackMessage) {
        let newestAckedMessage = -1;
        for (let index = 0; index < this._messages.length; index++) {
          const element = this._messages[index];
          if (element._id <= ackMessage.sequenceId) {
            newestAckedMessage = index;
            if (isArrayBuffer(element._message)) {
              this._bufferedByteCount -= element._message.byteLength;
            } else {
              this._bufferedByteCount -= element._message.length;
            }
            element._resolver();
          } else if (this._bufferedByteCount < this._bufferSize) {
            element._resolver();
          } else {
            break;
          }
        }
        if (newestAckedMessage !== -1) {
          this._messages = this._messages.slice(newestAckedMessage + 1);
        }
      }
      _shouldProcessMessage(message) {
        if (this._waitForSequenceMessage) {
          if (message.type !== MessageType.Sequence) {
            return false;
          } else {
            this._waitForSequenceMessage = false;
            return true;
          }
        }
        if (!this._isInvocationMessage(message)) {
          return true;
        }
        const currentId = this._nextReceivingSequenceId;
        this._nextReceivingSequenceId++;
        if (currentId <= this._latestReceivedSequenceId) {
          if (currentId === this._latestReceivedSequenceId) {
            this._ackTimer();
          }
          return false;
        }
        this._latestReceivedSequenceId = currentId;
        this._ackTimer();
        return true;
      }
      _resetSequence(message) {
        if (message.sequenceId > this._nextReceivingSequenceId) {
          this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
          return;
        }
        this._nextReceivingSequenceId = message.sequenceId;
      }
      _disconnected() {
        this._reconnectInProgress = true;
        this._waitForSequenceMessage = true;
      }
      _resend() {
        return __async(this, null, function* () {
          const sequenceId = this._messages.length !== 0 ? this._messages[0]._id : this._totalMessageCount + 1;
          yield this._connection.send(this._protocol.writeMessage({ type: MessageType.Sequence, sequenceId }));
          const messages = this._messages;
          for (const element of messages) {
            yield this._connection.send(element._message);
          }
          this._reconnectInProgress = false;
        });
      }
      _dispose(error) {
        error !== null && error !== void 0 ? error : error = new Error("Unable to reconnect to server.");
        for (const element of this._messages) {
          element._rejector(error);
        }
      }
      _isInvocationMessage(message) {
        switch (message.type) {
          case MessageType.Invocation:
          case MessageType.StreamItem:
          case MessageType.Completion:
          case MessageType.StreamInvocation:
          case MessageType.CancelInvocation:
            return true;
          case MessageType.Close:
          case MessageType.Sequence:
          case MessageType.Ping:
          case MessageType.Ack:
            return false;
        }
      }
      _ackTimer() {
        if (this._ackTimerHandle === void 0) {
          this._ackTimerHandle = setTimeout(() => __async(this, null, function* () {
            try {
              if (!this._reconnectInProgress) {
                yield this._connection.send(this._protocol.writeMessage({ type: MessageType.Ack, sequenceId: this._latestReceivedSequenceId }));
              }
            } catch {
            }
            clearTimeout(this._ackTimerHandle);
            this._ackTimerHandle = void 0;
          }), 1e3);
        }
      }
    };
    BufferedItem = class {
      constructor(message, id, resolver, rejector) {
        this._message = message;
        this._id = id;
        this._resolver = resolver;
        this._rejector = rejector;
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/HubConnection.js
var DEFAULT_TIMEOUT_IN_MS, DEFAULT_PING_INTERVAL_IN_MS, DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE, HubConnectionState, HubConnection;
var init_HubConnection = __esm({
  "node_modules/@microsoft/signalr/dist/esm/HubConnection.js"() {
    "use strict";
    init_HandshakeProtocol();
    init_Errors();
    init_IHubProtocol();
    init_ILogger();
    init_Subject();
    init_Utils();
    init_MessageBuffer();
    DEFAULT_TIMEOUT_IN_MS = 30 * 1e3;
    DEFAULT_PING_INTERVAL_IN_MS = 15 * 1e3;
    DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE = 1e5;
    (function(HubConnectionState2) {
      HubConnectionState2["Disconnected"] = "Disconnected";
      HubConnectionState2["Connecting"] = "Connecting";
      HubConnectionState2["Connected"] = "Connected";
      HubConnectionState2["Disconnecting"] = "Disconnecting";
      HubConnectionState2["Reconnecting"] = "Reconnecting";
    })(HubConnectionState || (HubConnectionState = {}));
    HubConnection = class _HubConnection {
      /** @internal */
      // Using a public static factory method means we can have a private constructor and an _internal_
      // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
      // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
      // public parameter-less constructor.
      static create(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
        return new _HubConnection(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize);
      }
      constructor(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
        this._nextKeepAlive = 0;
        this._freezeEventListener = () => {
          this._logger.log(LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
        };
        Arg.isRequired(connection, "connection");
        Arg.isRequired(logger, "logger");
        Arg.isRequired(protocol, "protocol");
        this.serverTimeoutInMilliseconds = serverTimeoutInMilliseconds !== null && serverTimeoutInMilliseconds !== void 0 ? serverTimeoutInMilliseconds : DEFAULT_TIMEOUT_IN_MS;
        this.keepAliveIntervalInMilliseconds = keepAliveIntervalInMilliseconds !== null && keepAliveIntervalInMilliseconds !== void 0 ? keepAliveIntervalInMilliseconds : DEFAULT_PING_INTERVAL_IN_MS;
        this._statefulReconnectBufferSize = statefulReconnectBufferSize !== null && statefulReconnectBufferSize !== void 0 ? statefulReconnectBufferSize : DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE;
        this._logger = logger;
        this._protocol = protocol;
        this.connection = connection;
        this._reconnectPolicy = reconnectPolicy;
        this._handshakeProtocol = new HandshakeProtocol();
        this.connection.onreceive = (data) => this._processIncomingData(data);
        this.connection.onclose = (error) => this._connectionClosed(error);
        this._callbacks = {};
        this._methods = {};
        this._closedCallbacks = [];
        this._reconnectingCallbacks = [];
        this._reconnectedCallbacks = [];
        this._invocationId = 0;
        this._receivedHandshakeResponse = false;
        this._connectionState = HubConnectionState.Disconnected;
        this._connectionStarted = false;
        this._cachedPingMessage = this._protocol.writeMessage({ type: MessageType.Ping });
      }
      /** Indicates the state of the {@link HubConnection} to the server. */
      get state() {
        return this._connectionState;
      }
      /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
       *  in the disconnected state or if the negotiation step was skipped.
       */
      get connectionId() {
        return this.connection ? this.connection.connectionId || null : null;
      }
      /** Indicates the url of the {@link HubConnection} to the server. */
      get baseUrl() {
        return this.connection.baseUrl || "";
      }
      /**
       * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
       * Reconnecting states.
       * @param {string} url The url to connect to.
       */
      set baseUrl(url) {
        if (this._connectionState !== HubConnectionState.Disconnected && this._connectionState !== HubConnectionState.Reconnecting) {
          throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
        }
        if (!url) {
          throw new Error("The HubConnection url must be a valid url.");
        }
        this.connection.baseUrl = url;
      }
      /** Starts the connection.
       *
       * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
       */
      start() {
        this._startPromise = this._startWithStateTransitions();
        return this._startPromise;
      }
      _startWithStateTransitions() {
        return __async(this, null, function* () {
          if (this._connectionState !== HubConnectionState.Disconnected) {
            return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
          }
          this._connectionState = HubConnectionState.Connecting;
          this._logger.log(LogLevel.Debug, "Starting HubConnection.");
          try {
            yield this._startInternal();
            if (Platform.isBrowser) {
              window.document.addEventListener("freeze", this._freezeEventListener);
            }
            this._connectionState = HubConnectionState.Connected;
            this._connectionStarted = true;
            this._logger.log(LogLevel.Debug, "HubConnection connected successfully.");
          } catch (e) {
            this._connectionState = HubConnectionState.Disconnected;
            this._logger.log(LogLevel.Debug, `HubConnection failed to start successfully because of error '${e}'.`);
            return Promise.reject(e);
          }
        });
      }
      _startInternal() {
        return __async(this, null, function* () {
          this._stopDuringStartError = void 0;
          this._receivedHandshakeResponse = false;
          const handshakePromise = new Promise((resolve, reject) => {
            this._handshakeResolver = resolve;
            this._handshakeRejecter = reject;
          });
          yield this.connection.start(this._protocol.transferFormat);
          try {
            let version = this._protocol.version;
            if (!this.connection.features.reconnect) {
              version = 1;
            }
            const handshakeRequest = {
              protocol: this._protocol.name,
              version
            };
            this._logger.log(LogLevel.Debug, "Sending handshake request.");
            yield this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(handshakeRequest));
            this._logger.log(LogLevel.Information, `Using HubProtocol '${this._protocol.name}'.`);
            this._cleanupTimeout();
            this._resetTimeoutPeriod();
            this._resetKeepAliveInterval();
            yield handshakePromise;
            if (this._stopDuringStartError) {
              throw this._stopDuringStartError;
            }
            const useStatefulReconnect = this.connection.features.reconnect || false;
            if (useStatefulReconnect) {
              this._messageBuffer = new MessageBuffer(this._protocol, this.connection, this._statefulReconnectBufferSize);
              this.connection.features.disconnected = this._messageBuffer._disconnected.bind(this._messageBuffer);
              this.connection.features.resend = () => {
                if (this._messageBuffer) {
                  return this._messageBuffer._resend();
                }
              };
            }
            if (!this.connection.features.inherentKeepAlive) {
              yield this._sendMessage(this._cachedPingMessage);
            }
          } catch (e) {
            this._logger.log(LogLevel.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`);
            this._cleanupTimeout();
            this._cleanupPingTimer();
            yield this.connection.stop(e);
            throw e;
          }
        });
      }
      /** Stops the connection.
       *
       * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
       */
      stop() {
        return __async(this, null, function* () {
          const startPromise = this._startPromise;
          this.connection.features.reconnect = false;
          this._stopPromise = this._stopInternal();
          yield this._stopPromise;
          try {
            yield startPromise;
          } catch (e) {
          }
        });
      }
      _stopInternal(error) {
        if (this._connectionState === HubConnectionState.Disconnected) {
          this._logger.log(LogLevel.Debug, `Call to HubConnection.stop(${error}) ignored because it is already in the disconnected state.`);
          return Promise.resolve();
        }
        if (this._connectionState === HubConnectionState.Disconnecting) {
          this._logger.log(LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
          return this._stopPromise;
        }
        const state = this._connectionState;
        this._connectionState = HubConnectionState.Disconnecting;
        this._logger.log(LogLevel.Debug, "Stopping HubConnection.");
        if (this._reconnectDelayHandle) {
          this._logger.log(LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
          clearTimeout(this._reconnectDelayHandle);
          this._reconnectDelayHandle = void 0;
          this._completeClose();
          return Promise.resolve();
        }
        if (state === HubConnectionState.Connected) {
          this._sendCloseMessage();
        }
        this._cleanupTimeout();
        this._cleanupPingTimer();
        this._stopDuringStartError = error || new AbortError("The connection was stopped before the hub handshake could complete.");
        return this.connection.stop(error);
      }
      _sendCloseMessage() {
        return __async(this, null, function* () {
          try {
            yield this._sendWithProtocol(this._createCloseMessage());
          } catch {
          }
        });
      }
      /** Invokes a streaming hub method on the server using the specified name and arguments.
       *
       * @typeparam T The type of the items returned by the server.
       * @param {string} methodName The name of the server method to invoke.
       * @param {any[]} args The arguments used to invoke the server method.
       * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
       */
      stream(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const invocationDescriptor = this._createStreamInvocation(methodName, args, streamIds);
        let promiseQueue;
        const subject = new Subject();
        subject.cancelCallback = () => {
          const cancelInvocation = this._createCancelInvocation(invocationDescriptor.invocationId);
          delete this._callbacks[invocationDescriptor.invocationId];
          return promiseQueue.then(() => {
            return this._sendWithProtocol(cancelInvocation);
          });
        };
        this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
          if (error) {
            subject.error(error);
            return;
          } else if (invocationEvent) {
            if (invocationEvent.type === MessageType.Completion) {
              if (invocationEvent.error) {
                subject.error(new Error(invocationEvent.error));
              } else {
                subject.complete();
              }
            } else {
              subject.next(invocationEvent.item);
            }
          }
        };
        promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e) => {
          subject.error(e);
          delete this._callbacks[invocationDescriptor.invocationId];
        });
        this._launchStreams(streams, promiseQueue);
        return subject;
      }
      _sendMessage(message) {
        this._resetKeepAliveInterval();
        return this.connection.send(message);
      }
      /**
       * Sends a js object to the server.
       * @param message The js object to serialize and send.
       */
      _sendWithProtocol(message) {
        if (this._messageBuffer) {
          return this._messageBuffer._send(message);
        } else {
          return this._sendMessage(this._protocol.writeMessage(message));
        }
      }
      /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
       *
       * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
       * be processing the invocation.
       *
       * @param {string} methodName The name of the server method to invoke.
       * @param {any[]} args The arguments used to invoke the server method.
       * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
       */
      send(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const sendPromise = this._sendWithProtocol(this._createInvocation(methodName, args, true, streamIds));
        this._launchStreams(streams, sendPromise);
        return sendPromise;
      }
      /** Invokes a hub method on the server using the specified name and arguments.
       *
       * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
       * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
       * resolving the Promise.
       *
       * @typeparam T The expected return type.
       * @param {string} methodName The name of the server method to invoke.
       * @param {any[]} args The arguments used to invoke the server method.
       * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
       */
      invoke(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const invocationDescriptor = this._createInvocation(methodName, args, false, streamIds);
        const p = new Promise((resolve, reject) => {
          this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
            if (error) {
              reject(error);
              return;
            } else if (invocationEvent) {
              if (invocationEvent.type === MessageType.Completion) {
                if (invocationEvent.error) {
                  reject(new Error(invocationEvent.error));
                } else {
                  resolve(invocationEvent.result);
                }
              } else {
                reject(new Error(`Unexpected message type: ${invocationEvent.type}`));
              }
            }
          };
          const promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e) => {
            reject(e);
            delete this._callbacks[invocationDescriptor.invocationId];
          });
          this._launchStreams(streams, promiseQueue);
        });
        return p;
      }
      on(methodName, newMethod) {
        if (!methodName || !newMethod) {
          return;
        }
        methodName = methodName.toLowerCase();
        if (!this._methods[methodName]) {
          this._methods[methodName] = [];
        }
        if (this._methods[methodName].indexOf(newMethod) !== -1) {
          return;
        }
        this._methods[methodName].push(newMethod);
      }
      off(methodName, method) {
        if (!methodName) {
          return;
        }
        methodName = methodName.toLowerCase();
        const handlers = this._methods[methodName];
        if (!handlers) {
          return;
        }
        if (method) {
          const removeIdx = handlers.indexOf(method);
          if (removeIdx !== -1) {
            handlers.splice(removeIdx, 1);
            if (handlers.length === 0) {
              delete this._methods[methodName];
            }
          }
        } else {
          delete this._methods[methodName];
        }
      }
      /** Registers a handler that will be invoked when the connection is closed.
       *
       * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
       */
      onclose(callback) {
        if (callback) {
          this._closedCallbacks.push(callback);
        }
      }
      /** Registers a handler that will be invoked when the connection starts reconnecting.
       *
       * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
       */
      onreconnecting(callback) {
        if (callback) {
          this._reconnectingCallbacks.push(callback);
        }
      }
      /** Registers a handler that will be invoked when the connection successfully reconnects.
       *
       * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
       */
      onreconnected(callback) {
        if (callback) {
          this._reconnectedCallbacks.push(callback);
        }
      }
      _processIncomingData(data) {
        this._cleanupTimeout();
        if (!this._receivedHandshakeResponse) {
          data = this._processHandshakeResponse(data);
          this._receivedHandshakeResponse = true;
        }
        if (data) {
          const messages = this._protocol.parseMessages(data, this._logger);
          for (const message of messages) {
            if (this._messageBuffer && !this._messageBuffer._shouldProcessMessage(message)) {
              continue;
            }
            switch (message.type) {
              case MessageType.Invocation:
                this._invokeClientMethod(message).catch((e) => {
                  this._logger.log(LogLevel.Error, `Invoke client method threw error: ${getErrorString(e)}`);
                });
                break;
              case MessageType.StreamItem:
              case MessageType.Completion: {
                const callback = this._callbacks[message.invocationId];
                if (callback) {
                  if (message.type === MessageType.Completion) {
                    delete this._callbacks[message.invocationId];
                  }
                  try {
                    callback(message);
                  } catch (e) {
                    this._logger.log(LogLevel.Error, `Stream callback threw error: ${getErrorString(e)}`);
                  }
                }
                break;
              }
              case MessageType.Ping:
                break;
              case MessageType.Close: {
                this._logger.log(LogLevel.Information, "Close message received from server.");
                const error = message.error ? new Error("Server returned an error on close: " + message.error) : void 0;
                if (message.allowReconnect === true) {
                  this.connection.stop(error);
                } else {
                  this._stopPromise = this._stopInternal(error);
                }
                break;
              }
              case MessageType.Ack:
                if (this._messageBuffer) {
                  this._messageBuffer._ack(message);
                }
                break;
              case MessageType.Sequence:
                if (this._messageBuffer) {
                  this._messageBuffer._resetSequence(message);
                }
                break;
              default:
                this._logger.log(LogLevel.Warning, `Invalid message type: ${message.type}.`);
                break;
            }
          }
        }
        this._resetTimeoutPeriod();
      }
      _processHandshakeResponse(data) {
        let responseMessage;
        let remainingData;
        try {
          [remainingData, responseMessage] = this._handshakeProtocol.parseHandshakeResponse(data);
        } catch (e) {
          const message = "Error parsing handshake response: " + e;
          this._logger.log(LogLevel.Error, message);
          const error = new Error(message);
          this._handshakeRejecter(error);
          throw error;
        }
        if (responseMessage.error) {
          const message = "Server returned handshake error: " + responseMessage.error;
          this._logger.log(LogLevel.Error, message);
          const error = new Error(message);
          this._handshakeRejecter(error);
          throw error;
        } else {
          this._logger.log(LogLevel.Debug, "Server handshake complete.");
        }
        this._handshakeResolver();
        return remainingData;
      }
      _resetKeepAliveInterval() {
        if (this.connection.features.inherentKeepAlive) {
          return;
        }
        this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds;
        this._cleanupPingTimer();
      }
      _resetTimeoutPeriod() {
        if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
          this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds);
          if (this._pingServerHandle === void 0) {
            let nextPing = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
            if (nextPing < 0) {
              nextPing = 0;
            }
            this._pingServerHandle = setTimeout(() => __async(this, null, function* () {
              if (this._connectionState === HubConnectionState.Connected) {
                try {
                  yield this._sendMessage(this._cachedPingMessage);
                } catch {
                  this._cleanupPingTimer();
                }
              }
            }), nextPing);
          }
        }
      }
      // eslint-disable-next-line @typescript-eslint/naming-convention
      serverTimeout() {
        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
      }
      _invokeClientMethod(invocationMessage) {
        return __async(this, null, function* () {
          const methodName = invocationMessage.target.toLowerCase();
          const methods = this._methods[methodName];
          if (!methods) {
            this._logger.log(LogLevel.Warning, `No client method with the name '${methodName}' found.`);
            if (invocationMessage.invocationId) {
              this._logger.log(LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
              yield this._sendWithProtocol(this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null));
            }
            return;
          }
          const methodsCopy = methods.slice();
          const expectsResponse = invocationMessage.invocationId ? true : false;
          let res;
          let exception;
          let completionMessage;
          for (const m of methodsCopy) {
            try {
              const prevRes = res;
              res = yield m.apply(this, invocationMessage.arguments);
              if (expectsResponse && res && prevRes) {
                this._logger.log(LogLevel.Error, `Multiple results provided for '${methodName}'. Sending error to server.`);
                completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `Client provided multiple results.`, null);
              }
              exception = void 0;
            } catch (e) {
              exception = e;
              this._logger.log(LogLevel.Error, `A callback for the method '${methodName}' threw error '${e}'.`);
            }
          }
          if (completionMessage) {
            yield this._sendWithProtocol(completionMessage);
          } else if (expectsResponse) {
            if (exception) {
              completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `${exception}`, null);
            } else if (res !== void 0) {
              completionMessage = this._createCompletionMessage(invocationMessage.invocationId, null, res);
            } else {
              this._logger.log(LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
              completionMessage = this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null);
            }
            yield this._sendWithProtocol(completionMessage);
          } else {
            if (res) {
              this._logger.log(LogLevel.Error, `Result given for '${methodName}' method but server is not expecting a result.`);
            }
          }
        });
      }
      _connectionClosed(error) {
        this._logger.log(LogLevel.Debug, `HubConnection.connectionClosed(${error}) called while in state ${this._connectionState}.`);
        this._stopDuringStartError = this._stopDuringStartError || error || new AbortError("The underlying connection was closed before the hub handshake could complete.");
        if (this._handshakeResolver) {
          this._handshakeResolver();
        }
        this._cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
        this._cleanupTimeout();
        this._cleanupPingTimer();
        if (this._connectionState === HubConnectionState.Disconnecting) {
          this._completeClose(error);
        } else if (this._connectionState === HubConnectionState.Connected && this._reconnectPolicy) {
          this._reconnect(error);
        } else if (this._connectionState === HubConnectionState.Connected) {
          this._completeClose(error);
        }
      }
      _completeClose(error) {
        if (this._connectionStarted) {
          this._connectionState = HubConnectionState.Disconnected;
          this._connectionStarted = false;
          if (this._messageBuffer) {
            this._messageBuffer._dispose(error !== null && error !== void 0 ? error : new Error("Connection closed."));
            this._messageBuffer = void 0;
          }
          if (Platform.isBrowser) {
            window.document.removeEventListener("freeze", this._freezeEventListener);
          }
          try {
            this._closedCallbacks.forEach((c) => c.apply(this, [error]));
          } catch (e) {
            this._logger.log(LogLevel.Error, `An onclose callback called with error '${error}' threw error '${e}'.`);
          }
        }
      }
      _reconnect(error) {
        return __async(this, null, function* () {
          const reconnectStartTime = Date.now();
          let previousReconnectAttempts = 0;
          let retryError = error !== void 0 ? error : new Error("Attempting to reconnect due to a unknown error.");
          let nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
          if (nextRetryDelay === null) {
            this._logger.log(LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
            this._completeClose(error);
            return;
          }
          this._connectionState = HubConnectionState.Reconnecting;
          if (error) {
            this._logger.log(LogLevel.Information, `Connection reconnecting because of error '${error}'.`);
          } else {
            this._logger.log(LogLevel.Information, "Connection reconnecting.");
          }
          if (this._reconnectingCallbacks.length !== 0) {
            try {
              this._reconnectingCallbacks.forEach((c) => c.apply(this, [error]));
            } catch (e) {
              this._logger.log(LogLevel.Error, `An onreconnecting callback called with error '${error}' threw error '${e}'.`);
            }
            if (this._connectionState !== HubConnectionState.Reconnecting) {
              this._logger.log(LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
              return;
            }
          }
          while (nextRetryDelay !== null) {
            this._logger.log(LogLevel.Information, `Reconnect attempt number ${previousReconnectAttempts} will start in ${nextRetryDelay} ms.`);
            yield new Promise((resolve) => {
              this._reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
            });
            this._reconnectDelayHandle = void 0;
            if (this._connectionState !== HubConnectionState.Reconnecting) {
              this._logger.log(LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
              return;
            }
            try {
              yield this._startInternal();
              this._connectionState = HubConnectionState.Connected;
              this._logger.log(LogLevel.Information, "HubConnection reconnected successfully.");
              if (this._reconnectedCallbacks.length !== 0) {
                try {
                  this._reconnectedCallbacks.forEach((c) => c.apply(this, [this.connection.connectionId]));
                } catch (e) {
                  this._logger.log(LogLevel.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`);
                }
              }
              return;
            } catch (e) {
              this._logger.log(LogLevel.Information, `Reconnect attempt failed because of error '${e}'.`);
              if (this._connectionState !== HubConnectionState.Reconnecting) {
                this._logger.log(LogLevel.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`);
                if (this._connectionState === HubConnectionState.Disconnecting) {
                  this._completeClose();
                }
                return;
              }
              retryError = e instanceof Error ? e : new Error(e.toString());
              nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
            }
          }
          this._logger.log(LogLevel.Information, `Reconnect retries have been exhausted after ${Date.now() - reconnectStartTime} ms and ${previousReconnectAttempts} failed attempts. Connection disconnecting.`);
          this._completeClose();
        });
      }
      _getNextRetryDelay(previousRetryCount, elapsedMilliseconds, retryReason) {
        try {
          return this._reconnectPolicy.nextRetryDelayInMilliseconds({
            elapsedMilliseconds,
            previousRetryCount,
            retryReason
          });
        } catch (e) {
          this._logger.log(LogLevel.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${previousRetryCount}, ${elapsedMilliseconds}) threw error '${e}'.`);
          return null;
        }
      }
      _cancelCallbacksWithError(error) {
        const callbacks = this._callbacks;
        this._callbacks = {};
        Object.keys(callbacks).forEach((key) => {
          const callback = callbacks[key];
          try {
            callback(null, error);
          } catch (e) {
            this._logger.log(LogLevel.Error, `Stream 'error' callback called with '${error}' threw error: ${getErrorString(e)}`);
          }
        });
      }
      _cleanupPingTimer() {
        if (this._pingServerHandle) {
          clearTimeout(this._pingServerHandle);
          this._pingServerHandle = void 0;
        }
      }
      _cleanupTimeout() {
        if (this._timeoutHandle) {
          clearTimeout(this._timeoutHandle);
        }
      }
      _createInvocation(methodName, args, nonblocking, streamIds) {
        if (nonblocking) {
          if (streamIds.length !== 0) {
            return {
              arguments: args,
              streamIds,
              target: methodName,
              type: MessageType.Invocation
            };
          } else {
            return {
              arguments: args,
              target: methodName,
              type: MessageType.Invocation
            };
          }
        } else {
          const invocationId = this._invocationId;
          this._invocationId++;
          if (streamIds.length !== 0) {
            return {
              arguments: args,
              invocationId: invocationId.toString(),
              streamIds,
              target: methodName,
              type: MessageType.Invocation
            };
          } else {
            return {
              arguments: args,
              invocationId: invocationId.toString(),
              target: methodName,
              type: MessageType.Invocation
            };
          }
        }
      }
      _launchStreams(streams, promiseQueue) {
        if (streams.length === 0) {
          return;
        }
        if (!promiseQueue) {
          promiseQueue = Promise.resolve();
        }
        for (const streamId in streams) {
          streams[streamId].subscribe({
            complete: () => {
              promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId)));
            },
            error: (err) => {
              let message;
              if (err instanceof Error) {
                message = err.message;
              } else if (err && err.toString) {
                message = err.toString();
              } else {
                message = "Unknown error";
              }
              promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId, message)));
            },
            next: (item) => {
              promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createStreamItemMessage(streamId, item)));
            }
          });
        }
      }
      _replaceStreamingParams(args) {
        const streams = [];
        const streamIds = [];
        for (let i = 0; i < args.length; i++) {
          const argument = args[i];
          if (this._isObservable(argument)) {
            const streamId = this._invocationId;
            this._invocationId++;
            streams[streamId] = argument;
            streamIds.push(streamId.toString());
            args.splice(i, 1);
          }
        }
        return [streams, streamIds];
      }
      _isObservable(arg) {
        return arg && arg.subscribe && typeof arg.subscribe === "function";
      }
      _createStreamInvocation(methodName, args, streamIds) {
        const invocationId = this._invocationId;
        this._invocationId++;
        if (streamIds.length !== 0) {
          return {
            arguments: args,
            invocationId: invocationId.toString(),
            streamIds,
            target: methodName,
            type: MessageType.StreamInvocation
          };
        } else {
          return {
            arguments: args,
            invocationId: invocationId.toString(),
            target: methodName,
            type: MessageType.StreamInvocation
          };
        }
      }
      _createCancelInvocation(id) {
        return {
          invocationId: id,
          type: MessageType.CancelInvocation
        };
      }
      _createStreamItemMessage(id, item) {
        return {
          invocationId: id,
          item,
          type: MessageType.StreamItem
        };
      }
      _createCompletionMessage(id, error, result) {
        if (error) {
          return {
            error,
            invocationId: id,
            type: MessageType.Completion
          };
        }
        return {
          invocationId: id,
          result,
          type: MessageType.Completion
        };
      }
      _createCloseMessage() {
        return { type: MessageType.Close };
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js
var JSON_HUB_PROTOCOL_NAME, JsonHubProtocol;
var init_JsonHubProtocol = __esm({
  "node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js"() {
    "use strict";
    init_IHubProtocol();
    init_ILogger();
    init_ITransport();
    init_Loggers();
    init_TextMessageFormat();
    JSON_HUB_PROTOCOL_NAME = "json";
    JsonHubProtocol = class {
      constructor() {
        this.name = JSON_HUB_PROTOCOL_NAME;
        this.version = 2;
        this.transferFormat = TransferFormat.Text;
      }
      /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
       *
       * @param {string} input A string containing the serialized representation.
       * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
       */
      parseMessages(input, logger) {
        if (typeof input !== "string") {
          throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        }
        if (!input) {
          return [];
        }
        if (logger === null) {
          logger = NullLogger.instance;
        }
        const messages = TextMessageFormat.parse(input);
        const hubMessages = [];
        for (const message of messages) {
          const parsedMessage = JSON.parse(message);
          if (typeof parsedMessage.type !== "number") {
            throw new Error("Invalid payload.");
          }
          switch (parsedMessage.type) {
            case MessageType.Invocation:
              this._isInvocationMessage(parsedMessage);
              break;
            case MessageType.StreamItem:
              this._isStreamItemMessage(parsedMessage);
              break;
            case MessageType.Completion:
              this._isCompletionMessage(parsedMessage);
              break;
            case MessageType.Ping:
              break;
            case MessageType.Close:
              break;
            case MessageType.Ack:
              this._isAckMessage(parsedMessage);
              break;
            case MessageType.Sequence:
              this._isSequenceMessage(parsedMessage);
              break;
            default:
              logger.log(LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
              continue;
          }
          hubMessages.push(parsedMessage);
        }
        return hubMessages;
      }
      /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
       *
       * @param {HubMessage} message The message to write.
       * @returns {string} A string containing the serialized representation of the message.
       */
      writeMessage(message) {
        return TextMessageFormat.write(JSON.stringify(message));
      }
      _isInvocationMessage(message) {
        this._assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
        if (message.invocationId !== void 0) {
          this._assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
        }
      }
      _isStreamItemMessage(message) {
        this._assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
        if (message.item === void 0) {
          throw new Error("Invalid payload for StreamItem message.");
        }
      }
      _isCompletionMessage(message) {
        if (message.result && message.error) {
          throw new Error("Invalid payload for Completion message.");
        }
        if (!message.result && message.error) {
          this._assertNotEmptyString(message.error, "Invalid payload for Completion message.");
        }
        this._assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
      }
      _isAckMessage(message) {
        if (typeof message.sequenceId !== "number") {
          throw new Error("Invalid SequenceId for Ack message.");
        }
      }
      _isSequenceMessage(message) {
        if (typeof message.sequenceId !== "number") {
          throw new Error("Invalid SequenceId for Sequence message.");
        }
      }
      _assertNotEmptyString(value, errorMessage) {
        if (typeof value !== "string" || value === "") {
          throw new Error(errorMessage);
        }
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js
function parseLogLevel(name) {
  const mapping = LogLevelNameMapping[name.toLowerCase()];
  if (typeof mapping !== "undefined") {
    return mapping;
  } else {
    throw new Error(`Unknown log level: ${name}`);
  }
}
function isLogger(logger) {
  return logger.log !== void 0;
}
var LogLevelNameMapping, HubConnectionBuilder;
var init_HubConnectionBuilder = __esm({
  "node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js"() {
    "use strict";
    init_DefaultReconnectPolicy();
    init_HttpConnection();
    init_HubConnection();
    init_ILogger();
    init_JsonHubProtocol();
    init_Loggers();
    init_Utils();
    LogLevelNameMapping = {
      trace: LogLevel.Trace,
      debug: LogLevel.Debug,
      info: LogLevel.Information,
      information: LogLevel.Information,
      warn: LogLevel.Warning,
      warning: LogLevel.Warning,
      error: LogLevel.Error,
      critical: LogLevel.Critical,
      none: LogLevel.None
    };
    HubConnectionBuilder = class {
      configureLogging(logging) {
        Arg.isRequired(logging, "logging");
        if (isLogger(logging)) {
          this.logger = logging;
        } else if (typeof logging === "string") {
          const logLevel = parseLogLevel(logging);
          this.logger = new ConsoleLogger(logLevel);
        } else {
          this.logger = new ConsoleLogger(logging);
        }
        return this;
      }
      withUrl(url, transportTypeOrOptions) {
        Arg.isRequired(url, "url");
        Arg.isNotEmpty(url, "url");
        this.url = url;
        if (typeof transportTypeOrOptions === "object") {
          this.httpConnectionOptions = __spreadValues(__spreadValues({}, this.httpConnectionOptions), transportTypeOrOptions);
        } else {
          this.httpConnectionOptions = __spreadProps(__spreadValues({}, this.httpConnectionOptions), {
            transport: transportTypeOrOptions
          });
        }
        return this;
      }
      /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
       *
       * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
       */
      withHubProtocol(protocol) {
        Arg.isRequired(protocol, "protocol");
        this.protocol = protocol;
        return this;
      }
      withAutomaticReconnect(retryDelaysOrReconnectPolicy) {
        if (this.reconnectPolicy) {
          throw new Error("A reconnectPolicy has already been set.");
        }
        if (!retryDelaysOrReconnectPolicy) {
          this.reconnectPolicy = new DefaultReconnectPolicy();
        } else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
          this.reconnectPolicy = new DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
        } else {
          this.reconnectPolicy = retryDelaysOrReconnectPolicy;
        }
        return this;
      }
      /** Configures {@link @microsoft/signalr.HubConnection.serverTimeoutInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
       *
       * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
       */
      withServerTimeout(milliseconds) {
        Arg.isRequired(milliseconds, "milliseconds");
        this._serverTimeoutInMilliseconds = milliseconds;
        return this;
      }
      /** Configures {@link @microsoft/signalr.HubConnection.keepAliveIntervalInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
       *
       * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
       */
      withKeepAliveInterval(milliseconds) {
        Arg.isRequired(milliseconds, "milliseconds");
        this._keepAliveIntervalInMilliseconds = milliseconds;
        return this;
      }
      /** Enables and configures options for the Stateful Reconnect feature.
       *
       * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
       */
      withStatefulReconnect(options) {
        if (this.httpConnectionOptions === void 0) {
          this.httpConnectionOptions = {};
        }
        this.httpConnectionOptions._useStatefulReconnect = true;
        this._statefulReconnectBufferSize = options === null || options === void 0 ? void 0 : options.bufferSize;
        return this;
      }
      /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
       *
       * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
       */
      build() {
        const httpConnectionOptions = this.httpConnectionOptions || {};
        if (httpConnectionOptions.logger === void 0) {
          httpConnectionOptions.logger = this.logger;
        }
        if (!this.url) {
          throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        }
        const connection = new HttpConnection(this.url, httpConnectionOptions);
        return HubConnection.create(connection, this.logger || NullLogger.instance, this.protocol || new JsonHubProtocol(), this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize);
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/esm/index.js
var init_esm2 = __esm({
  "node_modules/@microsoft/signalr/dist/esm/index.js"() {
    "use strict";
    init_HubConnectionBuilder();
    init_ITransport();
  }
});

// src/app/services/notification.service.ts
var NotificationService;
var init_notification_service = __esm({
  "src/app/services/notification.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm2();
    init_esm();
    init_ngxs_store();
    init_current_user_state();
    NotificationService = class NotificationService2 {
      store;
      hubConnection;
      notifications = [];
      alerts = [];
      currentUser = null;
      notificationSubject = new BehaviorSubject([]);
      notification$ = this.notificationSubject.asObservable();
      constructor(store) {
        this.store = store;
        this.store.select(CurrentUserState.getUser).subscribe((data) => {
          this.currentUser = data;
          if (this.currentUser != null)
            this.sendMessage(`${this.currentUser?.name} (${this.currentUser?.email})`, "Connected");
        });
      }
      startConnection() {
        this.hubConnection = new HubConnectionBuilder().withUrl("https://localhost:7120/notification", { withCredentials: true, transport: HttpTransportType.WebSockets }).withAutomaticReconnect().build();
        this.hubConnection.start().then(() => console.log("SignalR connected")).catch((ex) => console.log(ex));
        this.hubConnection.on("RecieveMessage", (user, message) => {
          this.notifications.push({ user, message, teamId: null });
          this.notificationSubject.next(this.notifications);
        });
        this.hubConnection.on("RecieveTeamMessage", (user, message, teamId) => {
          if (teamId == this.currentUser?.teamId) {
            this.notifications.push({ user, message, teamId });
            this.notificationSubject.next(this.notifications);
          }
        });
        this.hubConnection.on("ReceiveAdminMessage", (message) => {
          console.log(message);
          if (this.currentUser?.role == "Admin") {
            this.notifications.push({
              message,
              user: "",
              teamId: null
            });
            this.notificationSubject.next(this.notifications);
          }
        });
      }
      sendMessage(user, message) {
        this.hubConnection.invoke("SendMessage", user, message).then(() => console.log(`Message sent : ${user} - ${message}`)).catch((ex) => console.log(ex));
      }
      sendTeamMessage(user, message, teamId) {
        this.hubConnection.invoke("SendTeamMessage", user, message, teamId).then(() => console.log(`Message sent : Team ${teamId} - ${user} - ${message}`)).catch((ex) => console.log(ex));
      }
      static ctorParameters = () => [
        { type: Store }
      ];
    };
    NotificationService = __decorate([
      Injectable()
    ], NotificationService);
  }
});

export {
  HubConnectionBuilder,
  init_esm2 as init_esm,
  NotificationService,
  init_notification_service
};
//# sourceMappingURL=chunk-2P5YFWT3.js.map
