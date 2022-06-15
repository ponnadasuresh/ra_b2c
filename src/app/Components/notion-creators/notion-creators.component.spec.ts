import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionCreatorsComponent } from './notion-creators.component';

describe('NotionCreatorsComponent', () => {
  let component: NotionCreatorsComponent;
  let fixture: ComponentFixture<NotionCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotionCreatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotionCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
