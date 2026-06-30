import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTerrastation } from './product-terrastation';

describe('ProductTerrastation', () => {
  let component: ProductTerrastation;
  let fixture: ComponentFixture<ProductTerrastation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTerrastation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTerrastation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
