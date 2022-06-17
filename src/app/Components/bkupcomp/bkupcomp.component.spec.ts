import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkupcompComponent } from './bkupcomp.component';

describe('BkupcompComponent', () => {
  let component: BkupcompComponent;
  let fixture: ComponentFixture<BkupcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BkupcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BkupcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
