import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturesSectionComponent } from './home-features-section.component';

describe('HomeFeaturesSectionComponent', () => {
  let component: HomeFeaturesSectionComponent;
  let fixture: ComponentFixture<HomeFeaturesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFeaturesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFeaturesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
