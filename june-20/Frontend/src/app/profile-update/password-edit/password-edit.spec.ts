import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordEdit } from './password-edit';

describe('PasswordEdit', () => {
  let component: PasswordEdit;
  let fixture: ComponentFixture<PasswordEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
