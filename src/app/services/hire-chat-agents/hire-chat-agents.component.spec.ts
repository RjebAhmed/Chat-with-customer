import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireChatAgentsComponent } from './hire-chat-agents.component';

describe('HireChatAgentsComponent', () => {
  let component: HireChatAgentsComponent;
  let fixture: ComponentFixture<HireChatAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireChatAgentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireChatAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
