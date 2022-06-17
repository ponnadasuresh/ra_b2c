import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperFooterCornersComponent } from './super-footer-corners.component';

describe('SuperFooterCornersComponent', () => {
  let component: SuperFooterCornersComponent;
  let fixture: ComponentFixture<SuperFooterCornersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperFooterCornersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperFooterCornersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
