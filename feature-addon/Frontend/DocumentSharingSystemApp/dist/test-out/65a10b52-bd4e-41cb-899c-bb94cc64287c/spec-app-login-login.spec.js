import {
  UserLoginModel,
  init_user_login_model
} from "./chunk-XQ4VI3R2.js";
import {
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-WN64QJPD.js";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule
} from "./chunk-ML2ODG5X.js";
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  init_forms
} from "./chunk-F4S5UMDT.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-EVJKVU6D.js";
import {
  UserService,
  init_user_service
} from "./chunk-AFO2OYNN.js";
import "./chunk-JM6AMNVR.js";
import "./chunk-QMOCZ3CH.js";
import "./chunk-E5A666WI.js";
import "./chunk-IPUJJMKT.js";
import "./chunk-RXCRIGXT.js";
import "./chunk-5TNFNCMZ.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-5C27C2Q6.js";
import "./chunk-4R7PBA5O.js";
import "./chunk-PXVCLZNF.js";
import "./chunk-GW6V5KYJ.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  signal
} from "./chunk-A4GR5REI.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-73RR4HMO.js";

// angular:jit:template:src/app/login/login.html
var login_default;
var init_login = __esm({
  "angular:jit:template:src/app/login/login.html"() {
    login_default = `<div class="main">

    <div class="welcome">
        <h2>Welcome to</h2>
        <h1>Document Sharing System</h1>
    </div>
    <div class="login">

        <h1>Login</h1>
        
        <mat-form-field class="input">
            <mat-label>Email</mat-label>
            <input matInput type="text" [(ngModel)]="userCredentials.email">
        </mat-form-field>
        
        <mat-form-field class="input">
            <mat-label>Password</mat-label>
            <input 
                matInput 
                [type]="hidePassword()? 'password' : 'text'" 
                [(ngModel)]="userCredentials.password"
                [formControl]="fc"
            >
            <button
                matIconButton
                matSuffix
                (click)="passwordView()"
                [attr.aria-pressed]="hidePassword()"
            >
                <mat-icon>{{hidePassword() ? 'visibility_off' : 'visibility'}}</mat-icon>
            </button>

            @if (fc.hasError('server')) {
                <mat-error>{{fc.getError('server')}}</mat-error>
            }
        </mat-form-field>
        
        <button matFab extended (click)="handleLogin()">
            <mat-icon>login</mat-icon>
            Login
        </button>
    </div>
</div>`;
  }
});

// angular:jit:style:src/app/login/login.css
var login_default2;
var init_login2 = __esm({
  "angular:jit:style:src/app/login/login.css"() {
    login_default2 = "/* src/app/login/login.css */\n.main {\n  width: 100%;\n  height: 98vh;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.welcome {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  margin: 20px;\n  border: 2px solid #3c67d2;\n  border-radius: 8px;\n  gap: 30px;\n}\nh1 {\n  color: #3c67d2;\n}\n.input {\n  width: 300px;\n}\n/*# sourceMappingURL=login.css.map */\n";
  }
});

// src/app/login/login.ts
var Login;
var init_login3 = __esm({
  "src/app/login/login.ts"() {
    "use strict";
    init_tslib_es6();
    init_login();
    init_login2();
    init_core();
    init_user_login_model();
    init_user_service();
    init_forms();
    init_input();
    init_button();
    init_form_field();
    init_icon();
    Login = class Login2 {
      userService;
      userCredentials = new UserLoginModel();
      hidePassword = signal(true);
      fc = new FormControl(null);
      constructor(userService) {
        this.userService = userService;
      }
      handleLogin() {
        this.userService.login(this.userCredentials).subscribe({
          next: (data) => {
            if (!data.success) {
              this.fc.setErrors({ server: data.error });
            }
          }
        });
      }
      passwordView() {
        this.hidePassword.set(!this.hidePassword());
      }
      static ctorParameters = () => [
        { type: UserService }
      ];
    };
    Login = __decorate([
      Component({
        selector: "app-login",
        imports: [
          FormsModule,
          ReactiveFormsModule,
          MatFormFieldModule,
          MatInputModule,
          MatButtonModule,
          MatIconModule
        ],
        template: login_default,
        providers: [
          { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: "outline" } }
        ],
        styles: [login_default2]
      })
    ], Login);
  }
});

// src/app/login/login.spec.ts
var require_login_spec = __commonJS({
  "src/app/login/login.spec.ts"(exports) {
    init_testing();
    init_login3();
    init_user_service();
    init_esm();
    init_forms();
    init_form_field();
    init_input();
    init_button();
    init_icon();
    describe("Login", () => {
      let component;
      let fixture;
      let userServiceSpy;
      beforeEach(() => __async(null, null, function* () {
        let spy = jasmine.createSpyObj("UserService", ["login"]);
        yield TestBed.configureTestingModule({
          imports: [Login],
          providers: [
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule,
            { provide: UserService, useValue: spy }
          ]
        }).compileComponents();
        userServiceSpy = TestBed.inject(UserService);
        userServiceSpy.login.and.returnValue(of({ success: true, error: null }));
        fixture = TestBed.createComponent(Login);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should display", () => {
        expect(fixture.nativeElement.textContent).toContain("Welcome");
      });
      it("should call login", () => {
        component.handleLogin();
        expect(userServiceSpy.login).toHaveBeenCalled();
        expect(userServiceSpy.login).toHaveBeenCalledWith(component.userCredentials);
      });
      it("should get server login error", () => {
        userServiceSpy.login.and.returnValue(of({ success: false, error: "Invalid Credentials" }));
        fixture.detectChanges();
        component.handleLogin();
        expect(userServiceSpy.login).toHaveBeenCalled();
        expect(userServiceSpy.login).toHaveBeenCalledWith(component.userCredentials);
        expect(component.fc.errors).toEqual({ server: "Invalid Credentials" });
      });
      it("should display login error", () => {
        userServiceSpy.login.and.returnValue(of({ success: false, error: "Invalid Credentials" }));
        component.fc.markAsTouched();
        component.fc.markAsDirty();
        component.handleLogin();
        fixture.detectChanges();
        expect(fixture.nativeElement.textContent).toContain("Invalid Credentials");
      });
      it("should toggle password visibility", () => {
        const initialView = component.hidePassword();
        component.passwordView();
        expect(component.hidePassword()).toBe(!initialView);
      });
    });
  }
});
export default require_login_spec();
//# sourceMappingURL=spec-app-login-login.spec.js.map
