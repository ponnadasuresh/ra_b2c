import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlSigninPopComponent } from './nl-signin-pop.component';

describe('NlSigninPopComponent', () => {
  let component: NlSigninPopComponent;
  let fixture: ComponentFixture<NlSigninPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlSigninPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlSigninPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
