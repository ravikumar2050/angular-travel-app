import { TestBed } from '@angular/core/testing';

import { PackagesService } from './packagesservice.service';

describe('PackageService', () => {
  let service: PackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
