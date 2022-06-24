import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPriceSummaryComponent } from './cart-price-summary.component';

describe('CartPriceSummaryComponent', () => {
  let component: CartPriceSummaryComponent;
  let fixture: ComponentFixture<CartPriceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPriceSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPriceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
