import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEdit } from './location-edit';

describe('LocationEdit', () => {
  let component: LocationEdit;
  let fixture: ComponentFixture<LocationEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
