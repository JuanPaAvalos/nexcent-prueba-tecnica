import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitableClientsComponent } from './suitable-clients.component';

describe('SuitableClientsComponent', () => {
  let component: SuitableClientsComponent;
  let fixture: ComponentFixture<SuitableClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuitableClientsComponent]
    });
    fixture = TestBed.createComponent(SuitableClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
