import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpagetwoComponent } from './landingpagetwo.component';

describe('LandingpagetwoComponent', () => {
  let component: LandingpagetwoComponent;
  let fixture: ComponentFixture<LandingpagetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpagetwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpagetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
