import {
  UserSearchModel,
  init_user_search_model
} from "./chunk-JU2CDFIF.js";
import {
  MatTableModule,
  init_table
} from "./chunk-KQXSS6WY.js";
import {
  MatButtonToggleModule,
  init_button_toggle
} from "./chunk-MY3TTX26.js";
import {
  MatExpansionModule,
  MatProgressSpinnerModule,
  init_expansion,
  init_progress_spinner
} from "./chunk-2N4SQHHP.js";
import {
  Dialog,
  init_dialog as init_dialog2
} from "./chunk-DJMSHD4S.js";
import {
  MatTabsModule,
  init_tabs
} from "./chunk-QBHV7SAI.js";
import {
  MatDialog,
  init_dialog
} from "./chunk-IUYNAQQX.js";
import {
  MatCardModule,
  init_card
} from "./chunk-FMU3CNMU.js";
import {
  TeamModel,
  init_team_model
} from "./chunk-3QDOVPSY.js";
import {
  TeamService,
  init_team_service
} from "./chunk-SIOOFHTA.js";
import {
  init_select
} from "./chunk-DHB277MQ.js";
import {
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-YLD4CDCH.js";
import {
  MatSelectModule
} from "./chunk-AUF5RPMJ.js";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule
} from "./chunk-3YSEX4UT.js";
import {
  FormsModule,
  ReactiveFormsModule,
  init_forms
} from "./chunk-2KLKVMNN.js";
import {
  Navbar,
  init_navbar
} from "./chunk-MSD5UDJM.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-ANCUFR2L.js";
import {
  UserService,
  init_user_service
} from "./chunk-7EC2UC22.js";
import {
  Router,
  init_router
} from "./chunk-3E5A46ZA.js";
import "./chunk-AVCIMTP5.js";
import {
  UserModel,
  init_user_model
} from "./chunk-AWQT2M7K.js";
import {
  CurrentUserState,
  init_current_user_state
} from "./chunk-LBJXXCBG.js";
import {
  Store,
  init_ngxs_store
} from "./chunk-MAH2RGQ2.js";
import {
  MatSnackBar,
  MatSnackBarModule,
  init_snack_bar
} from "./chunk-CTANRZ7U.js";
import "./chunk-IPUJJMKT.js";
import "./chunk-XAUGNK3T.js";
import "./chunk-K6YDNL6G.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-PI2YTXAG.js";
import {
  DatePipe,
  init_common
} from "./chunk-JO3QPFNY.js";
import "./chunk-PXVCLZNF.js";
import {
  BehaviorSubject,
  Component,
  NO_ERRORS_SCHEMA,
  TestBed,
  __decorate,
  catchError,
  debounceTime,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  signal,
  switchMap,
  tap
} from "./chunk-6IGNU3MH.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-73RR4HMO.js";

// angular:jit:template:src/app/users/users.html
var users_default;
var init_users = __esm({
  "angular:jit:template:src/app/users/users.html"() {
    users_default = `<app-navbar></app-navbar>

<div class="main">
    <div class="header">
        <h1>Users</h1>
        @if (currentUser?.role == "Admin"){

            <button matButton="tonal" (click)="handleAdd()"> 
                <mat-icon>person_add</mat-icon>
                Add User 
            </button>
        }
    </div>

    <div class="controls">
        <div class="mat-form-field">
            <mat-form-field class="search-input">
                <mat-label>Search</mat-label>
                <input matInput placeholder="Search" [(ngModel)]="userSearch.searchQuery" (ngModelChange)="onValueChange()">
            </mat-form-field>
        </div>

        <div class="mat-form-field"> 
            <mat-form-field>
                <mat-label>Role</mat-label>
                <mat-select [(ngModel)]="userSearch.role" (ngModelChange)="onValueChange()">
                    @for (role of roleList; track $index) {
                        <mat-option [value]=" role.value">{{role.view}}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
        </div>
        <div class="mat-form-field"> 
            <mat-form-field>
                <mat-label>Team</mat-label>
                <mat-select [(ngModel)]="userSearch.teamId" (ngModelChange)="onValueChange()" [disabled]="teamDisabled()">
                    @for (team of teamByList; track $index) {
                        <mat-option [value]="team.value">{{team.view}}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
        </div>
        <mat-button-toggle-group name="sortOrder" aria-label="Font Style" [(ngModel)]="userSearch.sortOrder" (ngModelChange)="onValueChange()">
            <mat-button-toggle value="ascending">Asc</mat-button-toggle>
            <mat-button-toggle value="descending">Desc</mat-button-toggle>
        </mat-button-toggle-group>
    </div>
        <nav mat-tab-nav-bar [tabPanel]="tabPanel">
        @for (tab of tabs; track tab) {
            <a mat-tab-link
            (click)="setTab(tab)"
            [active]="activeTab() == tab"> {{tab}} </a>
        }
    </nav>
    <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
    @if (allUsers!=null && allUsers.length>0) {
        <mat-accordion class="users">
            @for (u of allUsers ; track $index) {
                <mat-expansion-panel [expanded]="step() === u.id" (opened)="setStep(u.id)" hideToggle [style]="u.isDeleted ? 'background-color:#f17676': ''">
                    <mat-expansion-panel-header [style]="u.isDeleted ? 'background-color:#f17676': ''">
                        <mat-panel-title> {{u.name}} </mat-panel-title>
                        <mat-panel-description>
                            {{u.email}}
                        </mat-panel-description>
                    </mat-expansion-panel-header>
                    <p>Role : <strong>{{u.role}}</strong></p>
                    <p>Team : <strong>{{u.teamId}} {{u.teamName}}</strong></p>
                    <p>Created By <strong>{{u.createdByUserName}} ({{u.createdByUserEmail}})</strong> at {{u.createdAt| date:'medium' }}</p>
                    @if (currentUser?.role == "Admin" ) {
                        <p>Last Updated By <strong>{{u.lastUpdatedByUserName}} ({{u.lastUpdatedByUserEmail}})</strong> at {{u.lastUpdatedAt| date:'medium' }}</p>
                    }
                    @if (currentUser?.role == "Admin" || currentUser?.id == u.id) {
                        <hr>
                        @if(!u.isDeleted){
                            <button matFab extended (click)="handleEdit(u.id)">
                                <mat-icon>edit</mat-icon>
                                Edit
                            </button>
                            <button matFab extended (click)="openDeleteDialog(\`\${u.name} (\${u.email})\`,u.id)">
                                <mat-icon>delete</mat-icon>
                                Delete
                            </button>
                        }
                        @else {
                            <button matFab extended (click)="onRevoke(u.id)">
                                <mat-icon>restore_from_trash</mat-icon>
                                Restore
                            </button>
                        }
                    }
                </mat-expansion-panel>
            }
        </mat-accordion>
    }
    @else {
        <mat-spinner></mat-spinner>
        @if(errorMessage != null){
            {{errorMessage}}
        }
    }`;
  }
});

// angular:jit:style:src/app/users/users.css
var users_default2;
var init_users2 = __esm({
  "angular:jit:style:src/app/users/users.css"() {
    users_default2 = "/* src/app/users/users.css */\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.header {\n  width: 95%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.users {\n  margin: 20px;\n  padding: 20px;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  border: 1px solid #dbe3f8;\n  border-radius: 24px;\n}\n.controls {\n  width: 95%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-bottom: 40px;\n  gap: 20px;\n}\n.search-input {\n  width: 500px;\n  align-self: flex-start;\n}\n.mat-form-field {\n  height: 60px;\n}\nbutton {\n  margin: 10px;\n}\nmat-expansion-panel {\n  width: 100%;\n  border-radius: 6px;\n}\nmat-expansion-panel-header {\n  height: 80px;\n}\n@media (max-width: 768px) {\n  .search-input {\n    width: 350px;\n  }\n  .users {\n    border-radius: 24px;\n  }\n  mat-expansion-panel {\n    border-radius: 4px;\n  }\n}\n/*# sourceMappingURL=users.css.map */\n";
  }
});

// src/app/users/users.ts
var Users;
var init_users3 = __esm({
  "src/app/users/users.ts"() {
    "use strict";
    init_tslib_es6();
    init_users();
    init_users2();
    init_core();
    init_navbar();
    init_user_service();
    init_forms();
    init_progress_spinner();
    init_table();
    init_button();
    init_icon();
    init_common();
    init_expansion();
    init_form_field();
    init_input();
    init_snack_bar();
    init_dialog2();
    init_dialog();
    init_router();
    init_user_search_model();
    init_button_toggle();
    init_esm();
    init_select();
    init_ngxs_store();
    init_current_user_state();
    init_card();
    init_team_service();
    init_tabs();
    Users = class Users2 {
      userService;
      teamService;
      dialog;
      router;
      store;
      step = signal("");
      currentUser = null;
      errorMessage = null;
      allUsers = [];
      displayedColumns = [];
      userSearch = new UserSearchModel("", "ascending", null, null);
      teamByList = [];
      userSearchSubject = new BehaviorSubject(this.userSearch);
      snackBar = new MatSnackBar();
      roleList = [
        { value: null, view: "All" },
        { value: "Admin", view: "Admin" },
        { value: "User", view: "User" }
      ];
      constructor(userService, teamService, dialog, router, store) {
        this.userService = userService;
        this.teamService = teamService;
        this.dialog = dialog;
        this.router = router;
        this.store = store;
        this.store.select(CurrentUserState.getUser).subscribe({
          next: (data) => {
            this.currentUser = data;
          }
        });
        if (this.currentUser == null) {
          userService.getCurrentUserDetails().subscribe({
            next: (data) => {
              this.currentUser = data;
              if (this.currentUser == null) {
                this.errorMessage = "User not Logged in!";
                return;
              }
              this.loadTeams();
              ;
            }
          });
        } else {
          this.loadTeams();
        }
        this.userSearchSubject.next(this.userSearch);
      }
      loadTeams() {
        this.teamService.getAllTeams(this.currentUser).subscribe((res) => {
          this.teamByList = [];
          this.teamByList.push({ value: null, view: "All" });
          res.data.$values.forEach((t) => {
            this.teamByList.push({ value: t.id, view: `${t.name} (${t.id})` });
          });
        });
      }
      teamDisabled = signal(false);
      tabs = ["All", "My Team"];
      activeTab = signal(this.tabs[0]);
      setTab(value) {
        if (this.activeTab() == "My Team") {
          this.userSearch.teamId = null;
          this.teamDisabled.set(false);
        }
        if (value == "My Team") {
          this.userSearch.teamId = this.currentUser?.teamId;
          this.teamDisabled.set(true);
        }
        this.userSearchSubject.next(this.userSearch);
        this.activeTab.set(value);
        console.log(value);
      }
      getAllUsers() {
        this.userService.getAllUsers().subscribe({
          next: (data) => {
            this.allUsers = data.$values;
            console.log(this.allUsers);
          }
        });
      }
      setStep(value) {
        this.step.set(value);
      }
      onDelete(id) {
        this.userService.deleteUserById(id).subscribe({
          next: (data) => {
            console.log(`Deleted ${data.data.name} (${data.data.email})`);
            this.snackBar.open(`Deleted ${data.data.name} (${data.data.email})`, void 0, { duration: 3e3 });
            this.userService.getByFilter(this.userSearch).pipe(catchError((err) => {
              console.error("API error:", err);
              if (err.error.errors) {
                this.errorMessage = err.error.errors.message;
                this.snackBar.open(err.error.errors.message, void 0, { duration: 2e3 });
              }
              return of({ data: { $values: [] } });
            })).subscribe({
              next: (res) => {
                console.log(res);
                this.allUsers = res.data.$values;
                console.log(this.allUsers);
              },
              error: (err) => {
                console.log(err);
              }
            });
          }
        });
      }
      onRevoke(id) {
        this.userService.revokeUserById(id).subscribe({
          next: (data) => {
            console.log(`Restored ${data.data.name} (${data.data.email})`);
            this.snackBar.open(`Restored ${data.data.name} (${data.data.email})`, void 0, { duration: 3e3 });
            this.userSearchSubject.next(this.userSearch);
          }
        });
      }
      openDeleteDialog(message, id) {
        this.dialog.open(Dialog, {
          data: {
            message: `Want to delete ${message}`,
            onAccept: () => {
              this.onDelete(id);
            }
          }
        });
      }
      handleEdit(id) {
        this.router.navigate(["users", "edit", id]);
      }
      handleAdd() {
        this.router.navigate(["users", "add"]);
      }
      onValueChange() {
        this.userSearchSubject.next(this.userSearch);
      }
      ngOnInit() {
        this.userSearchSubject.pipe(debounceTime(500), tap(() => {
          console.log("API Called");
        }), switchMap((query) => this.userService.getByFilter(query).pipe(catchError((err) => {
          console.error("API error:", err);
          if (err.error.errors) {
            this.errorMessage = err.error.errors.message;
            this.snackBar.open(err.error.errors.message, void 0, { duration: 2e3 });
          }
          return of({ data: { $values: [] } });
        })))).subscribe({
          next: (res) => {
            console.log(res);
            this.allUsers = res.data.$values;
            console.log(this.allUsers);
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
      static ctorParameters = () => [
        { type: UserService },
        { type: TeamService },
        { type: MatDialog },
        { type: Router },
        { type: Store }
      ];
    };
    Users = __decorate([
      Component({
        selector: "app-users",
        imports: [
          Navbar,
          FormsModule,
          ReactiveFormsModule,
          MatProgressSpinnerModule,
          MatTableModule,
          MatButtonModule,
          MatIconModule,
          MatExpansionModule,
          MatFormFieldModule,
          MatInputModule,
          MatSnackBarModule,
          MatButtonToggleModule,
          MatSelectModule,
          MatCardModule,
          MatTabsModule,
          DatePipe
        ],
        template: users_default,
        providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: "outline" } }],
        styles: [users_default2]
      })
    ], Users);
  }
});

// src/app/users/users.spec.ts
var require_users_spec = __commonJS({
  "src/app/users/users.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_users3();
    init_core();
    init_common();
    init_forms();
    init_button();
    init_button_toggle();
    init_card();
    init_expansion();
    init_form_field();
    init_icon();
    init_input();
    init_progress_spinner();
    init_select();
    init_snack_bar();
    init_table();
    init_tabs();
    init_user_service();
    init_dialog();
    init_router();
    init_ngxs_store();
    init_team_service();
    init_team_model();
    init_user_model();
    init_esm();
    init_user_search_model();
    var FakeNavbar = class FakeNavbar {
    };
    FakeNavbar = __decorate([
      Component({
        selector: "app-navbar",
        standalone: true,
        template: ""
      })
    ], FakeNavbar);
    describe("Users", () => {
      let component;
      let fixture;
      let userService;
      let teamService;
      let dialog;
      let router;
      let store;
      let user = new UserModel("1");
      let usersList = [new UserModel("1"), new UserModel("2")];
      let teamsList = [new TeamModel(1), new TeamModel(2)];
      beforeEach(() => __async(null, null, function* () {
        let userServiceSpy = jasmine.createSpyObj("UserService", ["getCurrentUserDetails", "getAllUsers", "deleteUserById", "revokeUserById", "getByFilter"]);
        let teamServiceSpy = jasmine.createSpyObj("TeamService", ["getAllTeams", "deleteTeam", "restoreTeam", "updateTeam", "getByFilter", "addTeam"]);
        let dialogSpy = jasmine.createSpyObj("MatDialog", ["open"]);
        let routerSpy = jasmine.createSpyObj("Router", ["navigateByUrl"]);
        let storeSpy = jasmine.createSpyObj("Store", ["select"]);
        yield TestBed.configureTestingModule({
          imports: [Users, FakeNavbar],
          schemas: [NO_ERRORS_SCHEMA],
          providers: [
            { provide: UserService, useValue: userServiceSpy },
            { provide: TeamService, useValue: teamServiceSpy },
            { provide: MatDialog, useValue: dialogSpy },
            { provide: Router, useValue: routerSpy },
            { provide: Store, useValue: storeSpy }
          ]
        }).compileComponents();
        TestBed.overrideComponent(Users, {
          set: {
            imports: [
              FakeNavbar,
              FormsModule,
              ReactiveFormsModule,
              MatProgressSpinnerModule,
              MatTableModule,
              MatButtonModule,
              MatIconModule,
              MatExpansionModule,
              MatFormFieldModule,
              MatInputModule,
              MatSnackBarModule,
              MatButtonToggleModule,
              MatSelectModule,
              MatCardModule,
              MatTabsModule,
              DatePipe
            ]
          }
        });
        userService = TestBed.inject(UserService);
        teamService = TestBed.inject(TeamService);
        dialog = TestBed.inject(MatDialog);
        router = TestBed.inject(Router);
        store = TestBed.inject(Store);
        store.select.and.returnValue(of(user));
        userService.getCurrentUserDetails.and.returnValue(of(user));
        userService.getAllUsers.and.returnValue(of({ data: { $values: usersList } }));
        userService.getByFilter.and.returnValue(of({ data: { $values: usersList } }));
        teamService.getByFilter.and.returnValue(of({ data: { $values: teamsList } }));
        teamService.getAllTeams.and.returnValue(of({ data: { $values: teamsList } }));
        fixture = TestBed.createComponent(Users);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should get current user data", () => {
        expect(component.currentUser).toBe(user);
      });
      it("should get users data", () => __async(null, null, function* () {
        component.userSearchSubject.next(new UserSearchModel(null, null, null, null));
        yield fixture.whenStable();
        fixture.detectChanges();
        expect(component.allUsers.length).toBe(2);
        expect(component.allUsers).toEqual(usersList);
      }));
      it("should delete user", () => __async(null, null, function* () {
        userService.deleteUserById.and.returnValue(of({ data: { id: "1", name: "Test" } }));
        component.onDelete("1");
        expect(userService.deleteUserById).toHaveBeenCalledWith("1");
      }));
      it("should restore user", () => __async(null, null, function* () {
        userService.revokeUserById.and.returnValue(of({ data: { id: "1", name: "Test" } }));
        component.onRevoke("1");
        expect(userService.revokeUserById).toHaveBeenCalledWith("1");
      }));
    });
  }
});
export default require_users_spec();
//# sourceMappingURL=spec-app-users-users.spec.js.map
