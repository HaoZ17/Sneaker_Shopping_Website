import { TestBed } from '@angular/core/testing';

import { UserInfoDetailsService } from './user-info-details.service';

describe('UserInfoDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserInfoDetailsService = TestBed.get(UserInfoDetailsService);
    expect(service).toBeTruthy();
  });
});
