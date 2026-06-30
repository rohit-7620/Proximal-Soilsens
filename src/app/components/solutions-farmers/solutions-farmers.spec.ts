import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsFarmers } from './solutions-farmers';

describe('SolutionsFarmers', () => {
  let component: SolutionsFarmers;
  let fixture: ComponentFixture<SolutionsFarmers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsFarmers],
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionsFarmers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
