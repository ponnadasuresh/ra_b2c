import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlServicepartnersComponent } from './nl-servicepartners.component';

describe('NlServicepartnersComponent', () => {
  let component: NlServicepartnersComponent;
  let fixture: ComponentFixture<NlServicepartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlServicepartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlServicepartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
