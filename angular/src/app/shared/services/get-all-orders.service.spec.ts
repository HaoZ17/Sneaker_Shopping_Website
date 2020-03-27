import { TestBed } from '@angular/core/testing';

import { GetAllOrdersService } from './get-all-orders.service';

describe('GetAllOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllOrdersService = TestBed.get(GetAllOrdersService);
    expect(service).toBeTruthy();
  });
});
