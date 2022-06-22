import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarePartnerComponent } from './care-partner.component';

describe('CarePartnerComponent', () => {
  let component: CarePartnerComponent;
  let fixture: ComponentFixture<CarePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarePartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
