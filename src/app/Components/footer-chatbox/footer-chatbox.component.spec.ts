import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterChatboxComponent } from './footer-chatbox.component';

describe('FooterChatboxComponent', () => {
  let component: FooterChatboxComponent;
  let fixture: ComponentFixture<FooterChatboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterChatboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
