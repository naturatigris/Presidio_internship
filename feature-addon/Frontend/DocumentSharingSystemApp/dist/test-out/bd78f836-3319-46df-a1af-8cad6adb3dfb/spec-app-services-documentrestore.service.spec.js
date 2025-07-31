import {
  HttpClientTestingModule,
  HttpTestingController
} from "./chunk-KDBMJZUJ.js";
import {
  DocumentRestoreService,
  init_documentrestore_service
} from "./chunk-5JLSSSU6.js";
import {
  UserModel,
  init_user_model
} from "./chunk-AWQT2M7K.js";
import {
  environment,
  init_environment
} from "./chunk-IPUJJMKT.js";
import "./chunk-XAUGNK3T.js";
import "./chunk-K6YDNL6G.js";
import "./chunk-PXVCLZNF.js";
import {
  TestBed,
  init_testing
} from "./chunk-6IGNU3MH.js";
import "./chunk-73RR4HMO.js";

// src/app/services/documentrestore.service.spec.ts
init_testing();
init_documentrestore_service();
init_environment();
init_user_model();
describe("DocumentRestoreService", () => {
  let service;
  let httpMock;
  const mockUser = new UserModel("123");
  mockUser.accessToken = "mock-token";
  const baseUrl = `${environment.serverUrl}/Documentrestore`;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DocumentRestoreService]
    });
    service = TestBed.inject(DocumentRestoreService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should request restore", () => {
    const dto = { documentId: "doc1", userId: "user1", reason: "Need it" };
    service.requestRestore(mockUser, dto).subscribe();
    const req = httpMock.expectOne(`${baseUrl}/request`);
    expect(req.request.method).toBe("POST");
    expect(req.request.headers.get("Authorization")).toBe(`Bearer ${mockUser.accessToken}`);
    expect(req.request.body).toEqual(dto);
  });
  it("should get all requests", () => {
    const mockData = [{ id: "1" }];
    service.getAllRequests(mockUser).subscribe((data) => {
      expect(data).toEqual(mockData);
    });
    const req = httpMock.expectOne(`${baseUrl}/getall`);
    expect(req.request.method).toBe("GET");
    req.flush(mockData);
  });
  it("should approve a request", () => {
    const requestId = "req123";
    const adminId = "admin123";
    service.approveRequest(mockUser, requestId, adminId).subscribe();
    const req = httpMock.expectOne(`${baseUrl}/approve/${requestId}?adminId=${adminId}`);
    expect(req.request.method).toBe("POST");
  });
  it("should reject a request", () => {
    const requestId = "req123";
    const adminId = "admin123";
    service.rejectRequest(mockUser, requestId, adminId).subscribe();
    const req = httpMock.expectOne(`${baseUrl}/reject/${requestId}?adminId=${adminId}`);
    expect(req.request.method).toBe("POST");
  });
  it("should get request by document ID", () => {
    const documentId = "doc123";
    const mockResponse = {
      documentId: "doc123",
      id: "1",
      reviewedByUserId: "user1",
      reason: "backup",
      requestedAt: /* @__PURE__ */ new Date(),
      status: "Pending",
      document: null,
      requestedByUserId: "",
      requestedByUser: null,
      reviewedAt: null,
      reviewedByUser: null,
      originalFileName: "",
      requestedByUserName: "",
      reviewedByUserName: null,
      isAdminRead: false,
      IsUserRead: false
    };
    service.getRequestByDocumentId(documentId, mockUser).subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(`${baseUrl}/bydocument/${documentId}`);
    expect(req.request.method).toBe("GET");
    req.flush(mockResponse);
  });
  it("should get filtered requests", () => {
    const type = "Pending";
    const page = 1;
    const pageSize = 6;
    const mockResponse = {
      data: [],
      totalRecords: 0
    };
    service.getFilteredRequests(type, page, pageSize, mockUser).subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(`${baseUrl}/filtered?page=${page}&pageSize=${pageSize}&type=${type}`);
    expect(req.request.method).toBe("GET");
    req.flush(mockResponse);
  });
});
//# sourceMappingURL=spec-app-services-documentrestore.service.spec.js.map
