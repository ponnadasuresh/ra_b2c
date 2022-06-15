import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityTemplatesComponent } from './community-templates.component';

describe('CommunityTemplatesComponent', () => {
  let component: CommunityTemplatesComponent;
  let fixture: ComponentFixture<CommunityTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
