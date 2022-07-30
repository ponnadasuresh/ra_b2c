import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlNewSubscribeComponent } from './nl-new-subscribe.component';

describe('NlNewSubscribeComponent', () => {
  let component: NlNewSubscribeComponent;
  let fixture: ComponentFixture<NlNewSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlNewSubscribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlNewSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
