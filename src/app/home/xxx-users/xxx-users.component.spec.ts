import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxxUsersComponent } from './xxx-users.component';

describe('XxxUsersComponent', () => {
  let component: XxxUsersComponent;
  let fixture: ComponentFixture<XxxUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XxxUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XxxUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
