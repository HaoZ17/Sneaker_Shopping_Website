import { TestBed } from '@angular/core/testing';

import { GetViewOrderService } from './get-view-order.service';

describe('GetViewOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetViewOrderService = TestBed.get(GetViewOrderService);
    expect(service).toBeTruthy();
  });
});
