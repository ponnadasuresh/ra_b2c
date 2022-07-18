import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlOurservicesComponent } from './nl-ourservices.component';

describe('NlOurservicesComponent', () => {
  let component: NlOurservicesComponent;
  let fixture: ComponentFixture<NlOurservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlOurservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlOurservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
