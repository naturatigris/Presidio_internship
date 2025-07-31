import {
  DocumentModel,
  DocumentSearchModel,
  init_document_model,
  init_document_search_model
} from "./chunk-QOF443HJ.js";
import {
  DocumentDetailsModel,
  DocumentService,
  init_document_details_model,
  init_document_service
} from "./chunk-LNMNIMQX.js";
import {
  UserModel,
  init_user_model
} from "./chunk-AWQT2M7K.js";
import {
  environment,
  init_environment
} from "./chunk-IPUJJMKT.js";
import {
  init_http
} from "./chunk-RXCRIGXT.js";
import {
  HttpClient
} from "./chunk-5TNFNCMZ.js";
import "./chunk-PXVCLZNF.js";
import {
  TestBed,
  init_esm,
  init_testing,
  of
} from "./chunk-A4GR5REI.js";
import "./chunk-73RR4HMO.js";

// src/app/services/document.service.spec.ts
init_http();
init_document_service();
init_testing();
init_user_model();
init_document_model();
init_esm();
init_environment();
init_document_search_model();
init_document_details_model();
describe("DocumentService", () => {
  let service;
  let httpSpy;
  let user = new UserModel("1");
  user.accessToken = "access-token";
  let documents = [new DocumentModel("1"), new DocumentModel("2")];
  beforeEach(() => {
    httpSpy = jasmine.createSpyObj("HttpClient", ["get", "post", "put", "delete"]);
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DocumentService,
        { provide: HttpClient, useValue: httpSpy }
      ]
    });
    service = TestBed.inject(DocumentService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should get all documents", () => {
    let mockRes = { data: { $values: documents } };
    httpSpy.get.and.returnValue(of(mockRes));
    service.getAll(user)?.subscribe((res) => {
      expect(res).toBe(mockRes);
      expect(httpSpy.get).toHaveBeenCalledOnceWith(environment.serverUrl + "/documents", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      });
    });
  });
  it("should get documents by filter", () => {
    let mockRes = { data: { $values: documents } };
    httpSpy.post.and.returnValue(of(mockRes));
    let ds = new DocumentSearchModel();
    service.getByFilter(user, ds)?.subscribe((res) => {
      expect(res).toBe(mockRes);
      expect(httpSpy.post).toHaveBeenCalledOnceWith(environment.serverUrl + "/documents/filter", ds, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      });
    });
  });
  it("should delete document", () => {
    let mockRes = { data: { $values: documents } };
    httpSpy.delete.and.returnValue(of(mockRes));
    service.deleteDocument(user, "1")?.subscribe((res) => {
      expect(res).toBe(mockRes);
      expect(httpSpy.delete).toHaveBeenCalledOnceWith(environment.serverUrl + "/documents/1", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      });
    });
  });
  it("should download document", () => {
    const mockBlob = new Blob(["Test content"], { type: "application/pdf" });
    httpSpy.get.and.returnValue(of(mockBlob));
    service.downloadDocument(user, "1")?.subscribe((res) => {
      expect(res).toEqual(mockBlob);
      expect(httpSpy.get).toHaveBeenCalledOnceWith(environment.serverUrl + "/documents/download/1", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        },
        responseType: "blob"
      });
    });
  });
  it("should upload document", () => {
    let mockRes = { data: { $values: documents } };
    httpSpy.post.and.returnValue(of(mockRes));
    let docDetails = new DocumentDetailsModel();
    let file = new File(["test"], "test.txt", { type: "text/plain" });
    let formData = new FormData();
    formData.append("description", "");
    formData.append("teamId", "");
    formData.append("visibility", "Public");
    formData.append("formFile", file);
    service.uploadDocument(user, docDetails, file)?.subscribe((res) => {
      expect(res).toBe(mockRes);
      expect(httpSpy.post).toHaveBeenCalledOnceWith(environment.serverUrl + "/documents/upload", formData, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      });
    });
  });
  it("should get documents by id", () => {
    let mockRes = { data: documents[0] };
    httpSpy.get.and.returnValue(of(mockRes));
    service.getDocumentById(user, "1")?.subscribe((res) => {
      expect(res).toBe(mockRes);
      expect(httpSpy.get).toHaveBeenCalledOnceWith(environment.serverUrl + "/documents/1", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      });
    });
  });
  it("should update document details", () => {
    let mockRes = { data: { $values: documents } };
    httpSpy.put.and.returnValue(of(mockRes));
    let docDetails = new DocumentDetailsModel();
    service.updateDocumentDetails(user, "1", docDetails)?.subscribe((res) => {
      expect(res).toBe(mockRes);
      expect(httpSpy.put).toHaveBeenCalledOnceWith(environment.serverUrl + "/documents/1", docDetails, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      });
    });
  });
});
//# sourceMappingURL=spec-app-services-document.service.spec.js.map
