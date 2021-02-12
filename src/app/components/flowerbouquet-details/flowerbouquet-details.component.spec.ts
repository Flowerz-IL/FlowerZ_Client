import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerbouquetDetailsComponent } from './flowerbouquet-details.component';

describe('FlowerbouquetDetailsComponent', () => {
  let component: FlowerbouquetDetailsComponent;
  let fixture: ComponentFixture<FlowerbouquetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerbouquetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerbouquetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
