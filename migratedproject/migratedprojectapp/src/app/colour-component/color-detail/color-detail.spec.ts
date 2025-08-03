import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorDetail } from './color-detail';

describe('ColorDetail', () => {
  let component: ColorDetail;
  let fixture: ComponentFixture<ColorDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
