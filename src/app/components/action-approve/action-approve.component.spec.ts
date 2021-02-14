import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionApproveComponent } from './action-approve.component';

describe('ActionApproveComponent', () => {
  let component: ActionApproveComponent;
  let fixture: ComponentFixture<ActionApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
