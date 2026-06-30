import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsCooperatives } from './solutions-cooperatives';

describe('SolutionsCooperatives', () => {
  let component: SolutionsCooperatives;
  let fixture: ComponentFixture<SolutionsCooperatives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsCooperatives],
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionsCooperatives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
