import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquetPageComponent } from './bouquet-page.component';

describe('BouquetPageComponent', () => {
  let component: BouquetPageComponent;
  let fixture: ComponentFixture<BouquetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouquetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouquetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
