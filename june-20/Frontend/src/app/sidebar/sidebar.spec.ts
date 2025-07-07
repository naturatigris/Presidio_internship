import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sidebar } from './sidebar';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { NotificationService } from '../service/notification.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('Sidebar Component', () => {
  let component: Sidebar;
  let fixture: ComponentFixture<Sidebar>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar, RouterTestingModule],
      providers: [
        {
          provide: UserService,
          useValue: { user$: of(null) }
        },
        {
          provide: NotificationService,
          useValue: { hasUnread$: of(false) }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => null } },
            params: of({}),
            queryParams: of({})
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Sidebar);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // ✅ Now it's a real router
    fixture.detectChanges();
  });

  it('should create the sidebar component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sidebar visibility', () => {
    component.isSidebarOpen = false;
    component.toggleSidebar();
    expect(component.isSidebarOpen).toBeTrue();
  });

  it('should navigate to /profile', () => {
    const navSpy = spyOn(router, 'navigate');
    component.viewProfile();
    expect(navSpy).toHaveBeenCalledWith(['/profile']);
  });

  it('should navigate to /history', () => {
    const navSpy = spyOn(router, 'navigate');
    component.viewHistory();
    expect(navSpy).toHaveBeenCalledWith(['/history']);
  });

  it('should call logout and navigate to /login', () => {
    const navSpy = spyOn(router, 'navigate');
    spyOn(localStorage, 'removeItem');
    spyOn(localStorage, 'clear');
    spyOn(sessionStorage, 'removeItem');

    component.logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('email');
    expect(localStorage.clear).toHaveBeenCalled();
    expect(navSpy).toHaveBeenCalledWith(['/login']);
  });
});
