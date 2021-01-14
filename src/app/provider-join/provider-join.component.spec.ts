import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderJoinComponent } from './provider-join.component';

describe('ProviderJoinComponent', () => {
  let component: ProviderJoinComponent;
  let fixture: ComponentFixture<ProviderJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
