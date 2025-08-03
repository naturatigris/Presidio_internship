import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Colour } from './colour';

describe('Colour', () => {
  let component: Colour;
  let fixture: ComponentFixture<Colour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Colour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Colour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
