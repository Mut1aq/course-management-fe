import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accessTokenGuard } from './access-token.guard';

describe('accessTokenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accessTokenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
