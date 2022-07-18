import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlArchivementsComponent } from './nl-archivements.component';

describe('NlArchivementsComponent', () => {
  let component: NlArchivementsComponent;
  let fixture: ComponentFixture<NlArchivementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlArchivementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlArchivementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
