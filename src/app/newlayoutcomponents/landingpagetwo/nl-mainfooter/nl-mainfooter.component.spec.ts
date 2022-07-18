import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlMainfooterComponent } from './nl-mainfooter.component';

describe('NlMainfooterComponent', () => {
  let component: NlMainfooterComponent;
  let fixture: ComponentFixture<NlMainfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlMainfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlMainfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
