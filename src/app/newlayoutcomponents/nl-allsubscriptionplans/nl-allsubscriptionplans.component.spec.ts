import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlAllsubscriptionplansComponent } from './nl-allsubscriptionplans.component';

describe('NlAllsubscriptionplansComponent', () => {
  let component: NlAllsubscriptionplansComponent;
  let fixture: ComponentFixture<NlAllsubscriptionplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlAllsubscriptionplansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlAllsubscriptionplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
