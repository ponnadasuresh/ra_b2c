import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlFootercardsComponent } from './nl-footercards.component';

describe('NlFootercardsComponent', () => {
  let component: NlFootercardsComponent;
  let fixture: ComponentFixture<NlFootercardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlFootercardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlFootercardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
