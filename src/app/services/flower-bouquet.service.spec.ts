import { TestBed } from '@angular/core/testing';

import { FlowerBouquetService } from './flower-bouquet.service';

describe('FlowerBouquetService', () => {
  let service: FlowerBouquetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowerBouquetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
