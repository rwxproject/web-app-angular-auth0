import { TestBed } from '@angular/core/testing';

import { HttpAppService } from './http-app.service';

describe('HttpAppService', () => {
  let service: HttpAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
