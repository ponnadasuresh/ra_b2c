import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlBlogComponent } from './nl-blog.component';

describe('NlBlogComponent', () => {
  let component: NlBlogComponent;
  let fixture: ComponentFixture<NlBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
