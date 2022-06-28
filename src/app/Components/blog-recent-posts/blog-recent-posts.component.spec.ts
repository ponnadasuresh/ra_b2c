import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRecentPostsComponent } from './blog-recent-posts.component';

describe('BlogRecentPostsComponent', () => {
  let component: BlogRecentPostsComponent;
  let fixture: ComponentFixture<BlogRecentPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogRecentPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogRecentPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
