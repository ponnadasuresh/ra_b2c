import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlCollabratedwithComponent } from './nl-collabratedwith.component';

describe('NlCollabratedwithComponent', () => {
  let component: NlCollabratedwithComponent;
  let fixture: ComponentFixture<NlCollabratedwithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlCollabratedwithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlCollabratedwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
