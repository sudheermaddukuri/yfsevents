import { TestBed } from '@angular/core/testing';

import { InventorydataService } from './inventorydata.service';

describe('InventorydataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventorydataService = TestBed.get(InventorydataService);
    expect(service).toBeTruthy();
  });
});
