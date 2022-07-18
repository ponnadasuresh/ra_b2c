import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeinformationComponent } from './subscribeinformation.component';

describe('SubscribeinformationComponent', () => {
  let component: SubscribeinformationComponent;
  let fixture: ComponentFixture<SubscribeinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
