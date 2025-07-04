import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home,CommonModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Home component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the navbar title', () => {
    const navbar = fixture.debugElement.query(By.css('.logo')).nativeElement;
    expect(navbar.textContent).toContain('The BlogPanel');
  });
});
