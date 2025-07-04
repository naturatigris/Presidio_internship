import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Home } from './home/home';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Import this


describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App,Home,RouterOutlet,Home,RouterModule,HttpClientTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
