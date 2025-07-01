import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminpostview } from './adminpostview';

describe('Adminpostview', () => {
  let component: Adminpostview;
  let fixture: ComponentFixture<Adminpostview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminpostview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminpostview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
