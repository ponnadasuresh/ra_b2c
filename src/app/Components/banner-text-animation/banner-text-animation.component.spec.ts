import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTextAnimationComponent } from './banner-text-animation.component';

describe('BannerTextAnimationComponent', () => {
  let component: BannerTextAnimationComponent;
  let fixture: ComponentFixture<BannerTextAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerTextAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerTextAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
