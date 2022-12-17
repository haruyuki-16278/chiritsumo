import { TestBed } from '@angular/core/testing';

import { RegisteredOnlyGuard } from './registered-only.guard';

describe('RegisteredOnlyGuard', () => {
  let guard: RegisteredOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegisteredOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
