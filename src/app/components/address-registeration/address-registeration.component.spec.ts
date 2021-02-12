import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressRegisterationComponent } from './address-registeration.component';

describe('AddressRegisterationComponent', () => {
  let component: AddressRegisterationComponent;
  let fixture: ComponentFixture<AddressRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressRegisterationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
