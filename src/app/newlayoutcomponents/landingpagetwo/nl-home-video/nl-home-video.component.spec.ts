import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlHomeVideoComponent } from './nl-home-video.component';

describe('NlHomeVideoComponent', () => {
  let component: NlHomeVideoComponent;
  let fixture: ComponentFixture<NlHomeVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlHomeVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlHomeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
