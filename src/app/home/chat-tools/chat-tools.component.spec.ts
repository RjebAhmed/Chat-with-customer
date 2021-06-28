import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatToolsComponent } from './chat-tools.component';

describe('ChatToolsComponent', () => {
  let component: ChatToolsComponent;
  let fixture: ComponentFixture<ChatToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
