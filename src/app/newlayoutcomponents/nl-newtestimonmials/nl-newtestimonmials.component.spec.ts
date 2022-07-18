import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlNewtestimonmialsComponent } from './nl-newtestimonmials.component';

describe('NlNewtestimonmialsComponent', () => {
  let component: NlNewtestimonmialsComponent;
  let fixture: ComponentFixture<NlNewtestimonmialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlNewtestimonmialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlNewtestimonmialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
