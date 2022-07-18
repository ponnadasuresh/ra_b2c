import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlBuynowscreenComponent } from './nl-buynowscreen.component';

describe('NlBuynowscreenComponent', () => {
  let component: NlBuynowscreenComponent;
  let fixture: ComponentFixture<NlBuynowscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlBuynowscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlBuynowscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
