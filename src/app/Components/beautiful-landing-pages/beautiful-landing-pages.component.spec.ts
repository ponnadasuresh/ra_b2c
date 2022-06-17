import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifulLandingPagesComponent } from './beautiful-landing-pages.component';

describe('BeautifulLandingPagesComponent', () => {
  let component: BeautifulLandingPagesComponent;
  let fixture: ComponentFixture<BeautifulLandingPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautifulLandingPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautifulLandingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
