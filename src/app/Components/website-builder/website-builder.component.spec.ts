import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteBuilderComponent } from './website-builder.component';

describe('WebsiteBuilderComponent', () => {
  let component: WebsiteBuilderComponent;
  let fixture: ComponentFixture<WebsiteBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
