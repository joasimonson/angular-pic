import { TestBed, inject } from '@angular/core/testing';

import { PlatformDetectorService } from './platform-detector.service';

describe('PlatformDetectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatformDetectorService]
    });
  });

  it('should be created', inject([PlatformDetectorService], (service: PlatformDetectorService) => {
    expect(service).toBeTruthy();
  }));
});
