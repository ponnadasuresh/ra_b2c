import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteZerofrictionComponent } from './website-zerofriction.component';

describe('WebsiteZerofrictionComponent', () => {
  let component: WebsiteZerofrictionComponent;
  let fixture: ComponentFixture<WebsiteZerofrictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteZerofrictionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteZerofrictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
