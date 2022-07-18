import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlBoardmembersComponent } from './nl-boardmembers.component';

describe('NlBoardmembersComponent', () => {
  let component: NlBoardmembersComponent;
  let fixture: ComponentFixture<NlBoardmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlBoardmembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlBoardmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
