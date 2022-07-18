import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlProfessionComponent } from './nl-profession.component';

describe('NlProfessionComponent', () => {
  let component: NlProfessionComponent;
  let fixture: ComponentFixture<NlProfessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlProfessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
