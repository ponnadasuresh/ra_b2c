import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlAboutusComponent } from './nl-aboutus.component';

describe('NlAboutusComponent', () => {
  let component: NlAboutusComponent;
  let fixture: ComponentFixture<NlAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlAboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
