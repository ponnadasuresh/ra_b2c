import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlNewBannerComponent } from './nl-new-banner.component';

describe('NlNewBannerComponent', () => {
  let component: NlNewBannerComponent;
  let fixture: ComponentFixture<NlNewBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlNewBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlNewBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
