import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPopularNewsComponent } from './recent-popular-news.component';

describe('RecentPopularNewsComponent', () => {
  let component: RecentPopularNewsComponent;
  let fixture: ComponentFixture<RecentPopularNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentPopularNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentPopularNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
