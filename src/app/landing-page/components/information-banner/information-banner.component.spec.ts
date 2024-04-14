import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationBannerComponent } from './information-banner.component';

describe('InformationBannerComponent', () => {
  let component: InformationBannerComponent;
  let fixture: ComponentFixture<InformationBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationBannerComponent]
    });
    fixture = TestBed.createComponent(InformationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
