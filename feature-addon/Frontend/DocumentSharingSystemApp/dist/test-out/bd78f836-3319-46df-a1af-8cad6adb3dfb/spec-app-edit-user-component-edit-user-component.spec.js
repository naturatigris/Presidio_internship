import {
  UserAddModel,
  UserUpdateModel,
  init_user_add_model,
  init_user_update_model
} from "./chunk-DI5ZICXR.js";
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
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
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
  ActivatedRoute,
  Router,
  RouterLink,
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
  CommonModule,
  init_common
} from "./chunk-JO3QPFNY.js";
import "./chunk-PXVCLZNF.js";
import {
  Component,
  NO_ERRORS_SCHEMA,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  signal,
  switchMap
} from "./chunk-6IGNU3MH.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-73RR4HMO.js";

// angular:jit:template:src/app/edit-user-component/edit-user-component.html
var edit_user_component_default;
var init_edit_user_component = __esm({
  "angular:jit:template:src/app/edit-user-component/edit-user-component.html"() {
    edit_user_component_default = `<app-navbar></app-navbar>
<div class="main">
    <div class="container">
        <div class="heading">
            <h1>{{action()}} User</h1>
        </div>

        @if(editUser != null){
            <form [formGroup]="formGroup" class="container form">

                <mat-form-field class="input">
                    <mat-label>Name</mat-label>
                    <input 
                        matInput 
                        type="text" 
                        formControlName="name"
                    >
                        <!-- [disabled]="action() == 'Edit' && disabled()" -->
                        @if (fc.name?.hasError('required')) {
                            <mat-error>Name is required</mat-error>
                        }
                        <!-- [(ngModel)]="editUser!.name"  -->
                    </mat-form-field>
                    
                    <mat-form-field class="input">
                        <mat-label>Email</mat-label>
                        <input matInput 
                            type="text" 
                            formControlName="email"
                            >
                            <!-- [disabled]="action() == 'Edit' && disabled()" -->
                        @if (fc.email.hasError('required')) {
                            <mat-error>Email is required</mat-error>
                        }
                        @if (fc.email.hasError('email')) {
                            <mat-error>Invalid Email</mat-error>
                        }
                </mat-form-field>
                    <mat-form-field class="input">
                        <mat-label>Team</mat-label>
                        <mat-select 
                            formControlName="teamId"
                        >
                            @for (t of teams; track $index) {
                                <mat-option [value]="t.id">{{t.name}} ({{t.id}})</mat-option>
                            }
                        </mat-select>
                        @if (fc.teamId.hasError('required')) {
                            <mat-error>Team is required</mat-error>
                        }
                </mat-form-field>
                
                <mat-form-field class="input">
                    <mat-label>{{ action() == 'Edit' ? 'Change Password' : 'Password'}}</mat-label>
                    <input matInput 
                        [placeholder]="action() == 'Edit' ? 'Ignore if you don\\'t want to change password' : 'Password' "
                        [type]="hidePassword()? 'password' : 'text'" 
                        formControlName="password"
                    >
                        <!-- [disabled]="action() == 'Edit' && disabled()" -->
                    <!-- [(ngModel)]="newPassword" -->
                    <button
                        matIconButton
                        matSuffix
                        (click)="passwordView()"
                        [attr.aria-pressed]="hidePassword()"
                    >
                        <mat-icon>{{hidePassword() ? 'visibility_off' : 'visibility'}}</mat-icon>
                    </button>
                    
                    @if(fc.password.hasError('required')){
                        <mat-error>Password is required</mat-error>
                    }
                    @if(fc.password.hasError('passwordCheck')){
                        <mat-error>{{fc.password.errors.passwordCheck}}</mat-error>
                    }
                </mat-form-field>
            
                <mat-form-field class="input">
                    <mat-label>{{ action() == 'Edit' ? 'Confirm Change Password' : 'Confirm Password'}}</mat-label>
                    <input matInput 
                        [placeholder]="action() == 'Edit' ? 'Ignore if you don\\'t want to change password' : 'Confirm Password' "
                        [type]="hideConfirmPassword()? 'password' : 'text'" 
                        formControlName="confirmPassword"
                    >
                    <!-- [disabled]="action() == 'Edit' && disabled()" -->
                    <!-- [(ngModel)]="newConfirmPassword" -->
                    <button
                        matIconButton
                        matSuffix
                        (click)="confirmPasswordView()"
                        [attr.aria-pressed]="hideConfirmPassword()"
                        >
                        <!-- [disabled]="action() == 'Edit' && disabled()" -->
                        <mat-icon>{{hideConfirmPassword() ? 'visibility_off' : 'visibility'}}</mat-icon>
                    </button>

                    @if(fc.confirmPassword.hasError('required')){
                        <mat-error>Confirm Password is required</mat-error>
                    }
                    @if(fc.confirmPassword.hasError('confirmPasswordCheck')&& (fc.confirmPassword.dirty || fc.confirmPassword.touched)){
                        <mat-error>{{ fc.confirmPassword.getError('confirmPasswordCheck') }}</mat-error>
                    }
                   <!-- @if(formGroup.hasError('confirmPasswordCheck')  && (fc.confirmPassword.dirty || fc.confirmPassword.touched)){
                        <mat-error>Error : {{ formGroup.getError('confirmPasswordCheck') }}</mat-error>
                    } -->

                </mat-form-field>


                @if (currentUser?.role == 'Admin' || action() == 'Add') {
                    <mat-form-field class="input">
                        <mat-label>Role</mat-label>
                        <mat-select 
                        formControlName="role"
                        >
                        <!-- [disabled]="action() == 'Edit' && disabled()" -->
                        <!-- [(ngModel)]="newRole"  -->
                        @for (r of roles; track $index) {
                            <mat-option [value]="r">{{r}}</mat-option>
                        }
                    </mat-select>
                    @if(fc.role.hasError('required')){
                        <mat-error>Role is required</mat-error>
                    }
                </mat-form-field>
            }
            <div class="buttons">
                <button 
                    matButton="tonal" 
                    (click)="action() == 'Edit' ? handleUpdate() : handleAdd()"
                    [disabled]="formGroup.invalid"
                > 
                    {{action() == 'Edit' ? 'Update' : 'Add'}}
                </button>
                <button matButton="tonal" routerLink="/users">Back</button>
                <!-- <button matButton="tonal" (click)="test()">Test</button> -->
            </div>
        </form>
    }
    </div>
</div>`;
  }
});

// angular:jit:style:src/app/edit-user-component/edit-user-component.css
var edit_user_component_default2;
var init_edit_user_component2 = __esm({
  "angular:jit:style:src/app/edit-user-component/edit-user-component.css"() {
    edit_user_component_default2 = "/* src/app/edit-user-component/edit-user-component.css */\n.main {\n  width: 100%;\n  height: 92vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 2px solid #dbe3f8;\n  border-radius: 8px;\n  padding: 30px;\n  gap: 20px;\n  box-shadow: 3px 3px 10px #dbe3f8;\n}\n.form {\n  box-shadow: none;\n  border: none;\n}\nh1 {\n  color: #3c67d2;\n}\n.input {\n  width: 500px;\n}\n.buttons {\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n}\n@media screen and (max-width : 768px) {\n  .container {\n    padding: 20px;\n    width: 320px;\n  }\n  .form {\n    width: 300px;\n  }\n  .input {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=edit-user-component.css.map */\n";
  }
});

// src/app/misc/passwordCheck.ts
function passwordCheck() {
  return (control) => {
    if (!control.value || control.value == null) {
      return null;
    }
    const value = control.value;
    let lower = 0, upper = 0, digit = 0;
    if (value?.length < 6) {
      return { passwordCheck: "Min length should be 6" };
    }
    value?.split("").forEach((v) => {
      if (v >= "0" && v <= "9")
        digit++;
      else if (v.toLowerCase() === v)
        lower++;
      else if (v.toUpperCase() === v)
        upper++;
    });
    if (lower == 0 || upper == 0 || digit == 0) {
      return { passwordCheck: "Password should contain atleast 1 uppercase, 1 lowercase and 1 digit" };
    }
    return null;
  };
}
var init_passwordCheck = __esm({
  "src/app/misc/passwordCheck.ts"() {
    "use strict";
  }
});

// src/app/misc/confirmPasswordCheck.ts
function confirmPasswordCheck() {
  return (group) => {
    if (!group.get("password")?.value && !group.get("confirmPassword")?.value) {
      return null;
    }
    const password = group.get("password")?.value;
    const confirmPassword = group.get("confirmPassword")?.value;
    if (group.get("password")?.invalid) {
      group.get("confirmPassword")?.setErrors({ confirmPasswordCheck: "Password is invalid" });
      return { confirmPasswordCheck: "Password is invalid" };
    }
    if (confirmPassword != password) {
      group.get("confirmPassword")?.setErrors({ confirmPasswordCheck: "Confirm Password should be same as password" });
      return { confirmPasswordCheck: "Confirm Password should be same as password" };
    }
    return null;
  };
}
var init_confirmPasswordCheck = __esm({
  "src/app/misc/confirmPasswordCheck.ts"() {
    "use strict";
  }
});

// src/app/edit-user-component/edit-user-component.ts
var EditUserComponent;
var init_edit_user_component3 = __esm({
  "src/app/edit-user-component/edit-user-component.ts"() {
    "use strict";
    init_tslib_es6();
    init_edit_user_component();
    init_edit_user_component2();
    init_core();
    init_user_service();
    init_router();
    init_user_model();
    init_navbar();
    init_form_field();
    init_input();
    init_forms();
    init_icon();
    init_button();
    init_select();
    init_user_update_model();
    init_esm();
    init_snack_bar();
    init_user_add_model();
    init_ngxs_store();
    init_current_user_state();
    init_passwordCheck();
    init_confirmPasswordCheck();
    init_common();
    init_team_service();
    EditUserComponent = class EditUserComponent2 {
      userService;
      teamService;
      route;
      router;
      store;
      currentUser = null;
      editUserId = "";
      editUser = null;
      hidePassword = signal(true);
      hideConfirmPassword = signal(true);
      disabled = signal(true);
      action = signal("");
      newRole = "User";
      teams = [];
      roles = ["Admin", "User"];
      snackBar = new MatSnackBar();
      formGroup = new FormGroup({});
      constructor(userService, teamService, route, router, store) {
        this.userService = userService;
        this.teamService = teamService;
        this.route = route;
        this.router = router;
        this.store = store;
        this.store.select(CurrentUserState.getUser).subscribe({
          next: (data) => {
            this.currentUser = data;
          }
        });
        if (this.currentUser == null) {
          this.userService.getCurrentUserDetails();
          if (this.currentUser == null)
            return;
        }
        this.teamService.getAllTeams(this.currentUser).subscribe({
          next: (res) => {
            this.teams = res.data.$values;
            console.log(this.teams);
          }
        });
        this.editUserId = this.route.snapshot.paramMap.get("id");
        if (this.editUserId == null && this.route.snapshot.url[1].path == "add") {
          console.log(this.route.snapshot.url[1].path == "add");
          this.editUser = new UserModel();
          this.newRole = "User";
          this.action.set("Add");
          this.formGroup = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            role: new FormControl(null, Validators.required),
            teamId: new FormControl(null, Validators.required),
            password: new FormControl(null, [Validators.required, passwordCheck()]),
            confirmPassword: new FormControl(null, Validators.required)
          }, { validators: confirmPasswordCheck() });
        } else if (this.editUserId != null) {
          this.userService.getUserById(this.editUserId).subscribe({
            next: (res) => {
              this.editUser = res.data;
              this.newRole = res.data.role;
              this.action.set("Edit");
              this.formGroup = new FormGroup({
                name: new FormControl({ value: this.editUser?.name, disabled: true }, [Validators.required]),
                email: new FormControl({ value: this.editUser?.email, disabled: true }, [Validators.required, Validators.email]),
                role: new FormControl({ value: this.editUser?.role, disabled: true }, Validators.required),
                teamId: new FormControl({ value: this.editUser?.teamId, disabled: true }, Validators.required),
                password: new FormControl({ value: null, disabled: true }, passwordCheck()),
                confirmPassword: new FormControl({ value: null, disabled: true })
              }, { validators: confirmPasswordCheck() });
            },
            error: (err) => {
              router.navigateByUrl("documents");
              return;
            }
          });
        } else {
          router.navigateByUrl("documents");
          return;
        }
      }
      handleUpdate() {
        if (this.disabled()) {
          this.disabled.set(false);
          this.fc.name.enable();
          this.fc.role.enable();
          this.fc.teamId.enable();
          this.fc.email.enable();
          this.fc.password.enable();
          this.fc.confirmPassword.enable();
          return;
        }
        let updatedUser = new UserUpdateModel(this.fc.name.value, this.fc.email.value, this.fc.teamId.value, null);
        if (!this.fc.password.value || this.fc.password.value != null || this.fc.password.value != "") {
          updatedUser.password = this.fc.password.value;
        }
        if (this.fc.role.value != this.editUser?.role) {
          this.userService.changeUserRoleById(this.editUser.id, this.fc.role.value).pipe(switchMap(() => this.userService.updateUserById(this.editUser.id, updatedUser))).subscribe({
            next: (res) => {
              this.editUser = res.data;
              this.disabled.set(true);
              this.fc.name.disable();
              this.fc.role.disable();
              this.fc.teamId.disable();
              this.fc.email.disable();
              this.fc.password.disable();
              this.fc.confirmPassword.disable();
              if (this.editUser?.id == this.currentUser?.id) {
                this.userService.getCurrentUserDetails().subscribe({
                  next: (user) => {
                    this.currentUser = user;
                    this.router.navigateByUrl("/users");
                  }
                });
              }
              this.snackBar.open("User updated successfully!", void 0, { duration: 3e3 });
            },
            error: (err) => {
              console.error("Error updating user role and data:", err);
            }
          });
        } else {
          this.userService.updateUserById(this.editUser.id, updatedUser).subscribe({
            next: (res) => {
              this.editUser = res.data;
              this.disabled.set(true);
              this.fc.name.disable();
              this.fc.role.disable();
              this.fc.teamId.disable();
              this.fc.email.disable();
              this.fc.password.disable();
              this.fc.confirmPassword.disable();
              this.snackBar.open("User updated successfully!", void 0, { duration: 3e3 });
            },
            error: (err) => {
              console.error("Error updating user : ", err.error.errors.message);
            }
          });
        }
      }
      handleAdd() {
        let newUser = new UserAddModel(this.fc.name.value, this.fc.role.value, this.fc.email.value, this.fc.teamId.value, this.fc.password.value);
        this.userService.addUser(newUser).subscribe({
          next: (res) => {
            this.editUser = res.data;
            this.disabled.set(true);
            this.snackBar.open("User Added successfully!", void 0, { duration: 3e3 });
            this.router.navigateByUrl("/users");
          }
        });
      }
      passwordView() {
        this.hidePassword.set(!this.hidePassword());
      }
      confirmPasswordView() {
        this.hideConfirmPassword.set(!this.hideConfirmPassword());
      }
      get fc() {
        return this.formGroup.controls;
      }
      test() {
        console.log(this.formGroup);
      }
      static ctorParameters = () => [
        { type: UserService },
        { type: TeamService },
        { type: ActivatedRoute },
        { type: Router },
        { type: Store }
      ];
    };
    EditUserComponent = __decorate([
      Component({
        selector: "app-edit-user-component",
        imports: [Navbar, FormsModule, ReactiveFormsModule, CommonModule, RouterLink, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSelectModule],
        template: edit_user_component_default,
        providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: "outline" } }],
        styles: [edit_user_component_default2]
      })
    ], EditUserComponent);
  }
});

// src/app/edit-user-component/edit-user-component.spec.ts
var require_edit_user_component_spec = __commonJS({
  "src/app/edit-user-component/edit-user-component.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_edit_user_component3();
    init_router();
    init_ngxs_store();
    init_team_service();
    init_user_service();
    init_core();
    init_common();
    init_forms();
    init_button();
    init_form_field();
    init_icon();
    init_input();
    init_select();
    init_esm();
    init_team_model();
    init_user_model();
    var FakeNavbar = class FakeNavbar {
    };
    FakeNavbar = __decorate([
      Component({
        selector: "app-navbar",
        standalone: true,
        template: ""
      })
    ], FakeNavbar);
    describe("EditUserComponent", () => {
      let component;
      let fixture;
      let userService;
      let teamService;
      let route;
      let router;
      let store;
      let user = new UserModel("1");
      let teamsList = [new TeamModel(1), new TeamModel(2)];
      beforeEach(() => __async(null, null, function* () {
        userService = jasmine.createSpyObj("UserService", ["getCurrentUserDetails", "getUserById", "updateUserById", "addUser", "logout", "changeUserRoleById"]);
        teamService = jasmine.createSpyObj("TeamService", ["getAllTeams"]);
        router = jasmine.createSpyObj("Router", ["navigateByUrl", "navigate"]);
        route = jasmine.createSpyObj("AcivatedRoute", ["navigate"], { snapshot: {
          url: [null, { path: "Add" }],
          paramMap: {
            get: (id) => {
              return "test";
            }
          }
        } });
        store = jasmine.createSpyObj("Store", ["select"]);
        yield TestBed.configureTestingModule({
          imports: [EditUserComponent, FakeNavbar],
          schemas: [NO_ERRORS_SCHEMA],
          providers: [
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            RouterLink,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatButtonModule,
            MatSelectModule,
            { provide: UserService, useValue: userService },
            { provide: TeamService, useValue: teamService },
            { provide: ActivatedRoute, useValue: route },
            { provide: Router, useValue: router },
            { provide: Store, useValue: store }
          ]
        }).compileComponents();
        TestBed.overrideComponent(EditUserComponent, {
          set: {
            imports: [
              FakeNavbar,
              FormsModule,
              ReactiveFormsModule,
              CommonModule,
              RouterLink,
              MatFormFieldModule,
              MatInputModule,
              MatIconModule,
              MatButtonModule,
              MatSelectModule
            ]
          }
        });
        store.select.and.returnValue(of(user));
        userService.getCurrentUserDetails.and.returnValue(of(user));
        userService.getUserById.and.returnValue(of(user));
        userService.addUser.and.returnValue(of({ data: user }));
        userService.changeUserRoleById.and.returnValue(of({ data: user }));
        teamService.getAllTeams.and.returnValue(of({ data: { $values: teamsList } }));
        fixture = TestBed.createComponent(EditUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should get current user data", () => {
        expect(component.currentUser).toBe(user);
      });
      it("should load teams", () => {
        expect(teamService.getAllTeams).toHaveBeenCalledWith(component.currentUser);
        expect(component.teams).toEqual(teamsList);
      });
      it("should add user", () => {
        component.formGroup = new FormGroup({
          name: new FormControl("Test User"),
          email: new FormControl("test@example.com"),
          role: new FormControl("User"),
          teamId: new FormControl(1),
          password: new FormControl("Password123!"),
          confirmPassword: new FormControl("Password123!")
        });
        component.handleAdd();
        expect(userService.addUser).toHaveBeenCalled();
      });
      it("should update user", () => {
        component.formGroup = new FormGroup({
          name: new FormControl("Test User"),
          email: new FormControl("test@example.com"),
          role: new FormControl("User"),
          teamId: new FormControl(1),
          password: new FormControl("Password123!"),
          confirmPassword: new FormControl("Password123!")
        });
        component.disabled.set(false);
        component.editUser = user;
        component.handleUpdate();
        expect(userService.updateUserById).toHaveBeenCalled();
      });
    });
  }
});
export default require_edit_user_component_spec();
//# sourceMappingURL=spec-app-edit-user-component-edit-user-component.spec.js.map
