import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioEdit } from './bio-edit';

describe('BioEdit', () => {
  let component: BioEdit;
  let fixture: ComponentFixture<BioEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
