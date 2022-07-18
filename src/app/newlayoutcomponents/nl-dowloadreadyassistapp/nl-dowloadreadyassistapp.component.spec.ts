import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlDowloadreadyassistappComponent } from './nl-dowloadreadyassistapp.component';

describe('NlDowloadreadyassistappComponent', () => {
  let component: NlDowloadreadyassistappComponent;
  let fixture: ComponentFixture<NlDowloadreadyassistappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlDowloadreadyassistappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlDowloadreadyassistappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
