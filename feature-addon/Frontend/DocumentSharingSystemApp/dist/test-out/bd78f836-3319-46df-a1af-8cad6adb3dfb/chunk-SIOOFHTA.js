import {
  environment,
  init_environment
} from "./chunk-IPUJJMKT.js";
import {
  init_http
} from "./chunk-XAUGNK3T.js";
import {
  HttpClient
} from "./chunk-K6YDNL6G.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6,
  inject
} from "./chunk-6IGNU3MH.js";
import {
  __esm
} from "./chunk-73RR4HMO.js";

// src/app/services/team.service.ts
var TeamService;
var init_team_service = __esm({
  "src/app/services/team.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_environment();
    init_http();
    TeamService = class TeamService2 {
      http = inject(HttpClient);
      getAllTeams(user) {
        return this.http.get(environment.serverUrl + "/teams", {
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        });
      }
      getByFilter(searchQuery, user) {
        return this.http.get(environment.serverUrl + `/teams/filter?searchQuery=${searchQuery}`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        });
      }
      addTeam(name, user) {
        return this.http.post(environment.serverUrl + `/teams?name=${name}`, null, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        });
      }
      updateTeam(id, name, user) {
        return this.http.put(environment.serverUrl + `/teams/${id}?name=${name}`, null, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        });
      }
      deleteTeam(id, user) {
        return this.http.delete(environment.serverUrl + `/teams/${id}`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        });
      }
      restoreTeam(id, user) {
        return this.http.post(environment.serverUrl + `/teams/restore/${id}`, null, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        });
      }
    };
    TeamService = __decorate([
      Injectable()
    ], TeamService);
  }
});

export {
  TeamService,
  init_team_service
};
//# sourceMappingURL=chunk-SIOOFHTA.js.map
