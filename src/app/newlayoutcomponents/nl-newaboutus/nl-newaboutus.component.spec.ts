import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlNewaboutusComponent } from './nl-newaboutus.component';

describe('NlNewaboutusComponent', () => {
  let component: NlNewaboutusComponent;
  let fixture: ComponentFixture<NlNewaboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlNewaboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlNewaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
