import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinventBusinessComponent } from './reinvent-business.component';

describe('ReinventBusinessComponent', () => {
  let component: ReinventBusinessComponent;
  let fixture: ComponentFixture<ReinventBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReinventBusinessComponent]
    });
    fixture = TestBed.createComponent(ReinventBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
