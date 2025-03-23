import { TestBed } from '@angular/core/testing';

import { CharactersImprovedService } from './characters-improved.service';

describe('CharactersImprovedService', () => {
  let service: CharactersImprovedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersImprovedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
