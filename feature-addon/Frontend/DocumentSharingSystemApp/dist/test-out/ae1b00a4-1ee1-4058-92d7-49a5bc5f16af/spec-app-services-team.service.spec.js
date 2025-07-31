import {
  TeamModel,
  init_team_model
} from "./chunk-SBLPT2BK.js";
import {
  TeamService,
  init_team_service
} from "./chunk-BSPOIQV2.js";
import {
  UserModel,
  init_user_model
} from "./chunk-SVFGXIGK.js";
import {
  environment,
  init_environment
} from "./chunk-CL4W7QDJ.js";
import {
  init_http
} from "./chunk-GGXJ5NN7.js";
import {
  HttpClient
} from "./chunk-KYRJKNJ3.js";
import "./chunk-53DDW4RY.js";
import {
  TestBed,
  init_esm,
  init_testing,
  of
} from "./chunk-DV5BYKE4.js";
import "./chunk-3HY6NCXN.js";

// src/app/services/team.service.spec.ts
init_http();
init_testing();
init_user_model();
init_esm();
init_environment();
init_team_service();
init_team_model();
describe("TeamService", () => {
  let service;
  let httpSpy;
  let user = new UserModel("1");
  user.accessToken = "access-token";
  let teams = [new TeamModel(1), new TeamModel(2)];
  beforeEach(() => {
    httpSpy = jasmine.createSpyObj("HttpClient", ["get", "post", "put", "delete"]);
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        TeamService,
        { provide: HttpClient, useValue: httpSpy }
      ]
    });
    service = TestBed.inject(TeamService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should get all teams", () => {
    let mockRes = { data: { $values: teams } };
    httpSpy.get.and.returnValue(of(mockRes));
    service.getAllTeams(user)?.subscribe((res) => {
      expect(res).toBe(mockRes);
      expect(httpSpy.get).toHaveBeenCalledOnceWith(environment.serverUrl + "/teams", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      });
    });
  });
  it("should get teams by filter", () => {
    let mockRes = { data: { $values: teams } };
    httpSpy.get.and.returnValue(of(mockRes));
    service.getByFilter("search", user)?.subscribe((res) => {
      expect(res).toBe(mockRes);
      expect(httpSpy.get).toHaveBeenCalledOnceWith(environment.serverUrl + "/teams/filter?searchQuery=search", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      });
    });
  });
  it("should delete team", () => {
    let mockRes = { data: teams[0] };
    httpSpy.delete.and.returnValue(of(mockRes));
    service.deleteTeam(1, user)?.subscribe((res) => {
      expect(res).toBe(mockRes);
      expect(httpSpy.delete).toHaveBeenCalledOnceWith(environment.serverUrl + "/teams/1", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      });
    });
  });
  it("should add team", () => {
    let mockRes = { data: teams[0] };
    httpSpy.post.and.returnValue(of(mockRes));
    service.addTeam("newTeam", user)?.subscribe((res) => {
      expect(res).toBe(mockRes);
      expect(httpSpy.post).toHaveBeenCalledOnceWith(environment.serverUrl + "/teams?name=newTeam", null, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      });
    });
  });
  it("should restore team", () => {
    let mockRes = { data: teams[0] };
    httpSpy.post.and.returnValue(of(mockRes));
    service.restoreTeam(1, user)?.subscribe((res) => {
      expect(res).toBe(mockRes);
      expect(httpSpy.post).toHaveBeenCalledOnceWith(environment.serverUrl + "/teams/restore/1", null, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      });
    });
  });
  it("should update team", () => {
    let mockRes = { data: teams[0] };
    httpSpy.put.and.returnValue(of(mockRes));
    service.updateTeam(1, "name", user)?.subscribe((res) => {
      expect(res).toBe(mockRes);
      expect(httpSpy.put).toHaveBeenCalledOnceWith(environment.serverUrl + "/teams/1?name=name", null, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      });
    });
  });
});
//# sourceMappingURL=spec-app-services-team.service.spec.js.map
