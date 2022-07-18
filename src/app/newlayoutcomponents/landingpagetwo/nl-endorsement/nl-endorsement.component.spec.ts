import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlEndorsementComponent } from './nl-endorsement.component';

describe('NlEndorsementComponent', () => {
  let component: NlEndorsementComponent;
  let fixture: ComponentFixture<NlEndorsementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlEndorsementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlEndorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
