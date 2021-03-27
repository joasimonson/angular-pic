import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './requires-authentication.guard';

describe('RequiresAuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
