import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Settings } from './settings';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('Settings Component', () => {
  let component: Settings;
  let fixture: ComponentFixture<Settings>;
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj('UserService', ['DeleteUser'], {
      user$: of({
        name: 'John Doe',
        email: 'john.doe@example.com',
        profileImage: null
      })
    });

    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [Settings],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Settings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Settings component', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger account deletion on second click and navigate', () => {
    component.confirmDelete = true;
    userServiceSpy.DeleteUser.and.returnValue(of({ message: 'Deleted' }));

    component.deleteAccount();

    expect(userServiceSpy.DeleteUser).toHaveBeenCalledWith('john.doe@example.com');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
