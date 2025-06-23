import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeaderEdit } from './profile-header-edit';

describe('ProfileHeaderEdit', () => {
  let component: ProfileHeaderEdit;
  let fixture: ComponentFixture<ProfileHeaderEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileHeaderEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHeaderEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
