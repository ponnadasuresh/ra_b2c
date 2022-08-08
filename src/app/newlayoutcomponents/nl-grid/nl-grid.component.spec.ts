import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlGridComponent } from './nl-grid.component';

describe('NlGridComponent', () => {
  let component: NlGridComponent;
  let fixture: ComponentFixture<NlGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
