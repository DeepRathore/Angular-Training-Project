import { TestBed } from '@angular/core/testing';

import { FetchProductsApiService } from './fetch-products-api.service';

describe('FetchProductsApiService', () => {
  let service: FetchProductsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchProductsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
