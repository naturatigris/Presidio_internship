import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Layout } from './layout';
import { Sidebar } from '../sidebar/sidebar';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Import this


describe('Layout', () => {
  let component: Layout;
  let fixture: ComponentFixture<Layout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar,Layout, RouterTestingModule,HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Layout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the layout component', () => {
    expect(component).toBeTruthy();
  });
});
