import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminpostcomponent } from './adminpostcomponent';

describe('Adminpostcomponent', () => {
  let component: Adminpostcomponent;
  let fixture: ComponentFixture<Adminpostcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminpostcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminpostcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
