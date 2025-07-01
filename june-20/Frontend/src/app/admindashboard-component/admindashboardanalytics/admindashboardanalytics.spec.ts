import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admindashboardanalytics } from './admindashboardanalytics';

describe('Admindashboardanalytics', () => {
  let component: Admindashboardanalytics;
  let fixture: ComponentFixture<Admindashboardanalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admindashboardanalytics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admindashboardanalytics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
