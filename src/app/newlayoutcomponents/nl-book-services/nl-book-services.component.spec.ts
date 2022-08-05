import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlBookServicesComponent } from './nl-book-services.component';

describe('NlBookServicesComponent', () => {
  let component: NlBookServicesComponent;
  let fixture: ComponentFixture<NlBookServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlBookServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlBookServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
