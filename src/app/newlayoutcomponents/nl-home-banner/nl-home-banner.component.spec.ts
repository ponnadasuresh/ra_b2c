import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlHomeBannerComponent } from './nl-home-banner.component';

describe('NlHomeBannerComponent', () => {
  let component: NlHomeBannerComponent;
  let fixture: ComponentFixture<NlHomeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlHomeBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlHomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
