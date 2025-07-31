import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders,
  HttpParams,
  HttpRequest,
  init_module_CBsxN_3E
} from "./chunk-7AQLJYMK.js";
import {
  InjectionToken,
  Injector,
  ResourceImpl,
  RuntimeError,
  assertInInjectionContext,
  computed,
  encapsulateResourceError,
  init_core,
  inject,
  linkedSignal,
  signal
} from "./chunk-K454COBC.js";
import {
  __esm
} from "./chunk-73RR4HMO.js";

// node_modules/@angular/common/fesm2022/http.mjs
function makeHttpResourceFn(responseType) {
  return function httpResource2(request, options) {
    if (ngDevMode && !options?.injector) {
      assertInInjectionContext(httpResource2);
    }
    const injector = options?.injector ?? inject(Injector);
    return new HttpResourceImpl(injector, () => normalizeRequest(request, responseType), options?.defaultValue, options?.parse, options?.equal);
  };
}
function normalizeRequest(request, responseType) {
  let unwrappedRequest = typeof request === "function" ? request() : request;
  if (unwrappedRequest === void 0) {
    return void 0;
  } else if (typeof unwrappedRequest === "string") {
    unwrappedRequest = { url: unwrappedRequest };
  }
  const headers = unwrappedRequest.headers instanceof HttpHeaders ? unwrappedRequest.headers : new HttpHeaders(unwrappedRequest.headers);
  const params = unwrappedRequest.params instanceof HttpParams ? unwrappedRequest.params : new HttpParams({ fromObject: unwrappedRequest.params });
  return new HttpRequest(unwrappedRequest.method ?? "GET", unwrappedRequest.url, unwrappedRequest.body ?? null, {
    headers,
    params,
    reportProgress: unwrappedRequest.reportProgress,
    withCredentials: unwrappedRequest.withCredentials,
    responseType,
    context: unwrappedRequest.context,
    transferCache: unwrappedRequest.transferCache
  });
}
var httpResource, HttpResourceImpl, HTTP_TRANSFER_CACHE_ORIGIN_MAP, CACHE_OPTIONS;
var init_http = __esm({
  "node_modules/@angular/common/fesm2022/http.mjs"() {
    "use strict";
    init_module_CBsxN_3E();
    init_core();
    httpResource = (() => {
      const jsonFn = makeHttpResourceFn("json");
      jsonFn.arrayBuffer = makeHttpResourceFn("arraybuffer");
      jsonFn.blob = makeHttpResourceFn("blob");
      jsonFn.text = makeHttpResourceFn("text");
      return jsonFn;
    })();
    HttpResourceImpl = class extends ResourceImpl {
      client;
      _headers = linkedSignal({
        source: this.extRequest,
        computation: () => void 0
      });
      _progress = linkedSignal({
        source: this.extRequest,
        computation: () => void 0
      });
      _statusCode = linkedSignal({
        source: this.extRequest,
        computation: () => void 0
      });
      headers = computed(() => this.status() === "resolved" || this.status() === "error" ? this._headers() : void 0);
      progress = this._progress.asReadonly();
      statusCode = this._statusCode.asReadonly();
      constructor(injector, request, defaultValue, parse, equal) {
        super(request, ({ params: request2, abortSignal }) => {
          let sub;
          const onAbort = () => sub.unsubscribe();
          abortSignal.addEventListener("abort", onAbort);
          const stream = signal({ value: void 0 });
          let resolve;
          const promise = new Promise((r) => resolve = r);
          const send = (value) => {
            stream.set(value);
            resolve?.(stream);
            resolve = void 0;
          };
          sub = this.client.request(request2).subscribe({
            next: (event) => {
              switch (event.type) {
                case HttpEventType.Response:
                  this._headers.set(event.headers);
                  this._statusCode.set(event.status);
                  try {
                    send({ value: parse ? parse(event.body) : event.body });
                  } catch (error) {
                    send({ error: encapsulateResourceError(error) });
                  }
                  break;
                case HttpEventType.DownloadProgress:
                  this._progress.set(event);
                  break;
              }
            },
            error: (error) => {
              if (error instanceof HttpErrorResponse) {
                this._headers.set(error.headers);
                this._statusCode.set(error.status);
              }
              send({ error });
              abortSignal.removeEventListener("abort", onAbort);
            },
            complete: () => {
              if (resolve) {
                send({
                  error: new RuntimeError(991, ngDevMode && "Resource completed before producing a value")
                });
              }
              abortSignal.removeEventListener("abort", onAbort);
            }
          });
          return promise;
        }, defaultValue, equal, injector);
        this.client = injector.get(HttpClient);
      }
    };
    HTTP_TRANSFER_CACHE_ORIGIN_MAP = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_CACHE_ORIGIN_MAP" : "");
    CACHE_OPTIONS = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_STATE_CACHE_OPTIONS" : "");
  }
});

export {
  init_http
};
/*! Bundled license information:

@angular/common/fesm2022/http.mjs:
  (**
   * @license Angular v20.0.4
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-WB4SYOJP.js.map
