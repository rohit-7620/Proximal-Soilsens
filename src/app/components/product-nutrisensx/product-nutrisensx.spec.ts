import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNutrisensx } from './product-nutrisensx';

describe('ProductNutrisensx', () => {
  let component: ProductNutrisensx;
  let fixture: ComponentFixture<ProductNutrisensx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductNutrisensx],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductNutrisensx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
