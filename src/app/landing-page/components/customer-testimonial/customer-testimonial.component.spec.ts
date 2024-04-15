import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTestimonialComponent } from './customer-testimonial.component';

describe('CustomerTestimonialComponent', () => {
  let component: CustomerTestimonialComponent;
  let fixture: ComponentFixture<CustomerTestimonialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerTestimonialComponent]
    });
    fixture = TestBed.createComponent(CustomerTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
