import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstartedFirstsiteComponent } from './getstarted-firstsite.component';

describe('GetstartedFirstsiteComponent', () => {
  let component: GetstartedFirstsiteComponent;
  let fixture: ComponentFixture<GetstartedFirstsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetstartedFirstsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetstartedFirstsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
