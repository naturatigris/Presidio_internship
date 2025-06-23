import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStatusEdit } from './profile-status-edit';

describe('ProfileStatusEdit', () => {
  let component: ProfileStatusEdit;
  let fixture: ComponentFixture<ProfileStatusEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileStatusEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileStatusEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
