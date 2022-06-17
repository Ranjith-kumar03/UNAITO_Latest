import { TestBed } from '@angular/core/testing';

import { APIKEYInterceptor } from './api-key.interceptor';

describe('APIKEYInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      APIKEYInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: APIKEYInterceptor = TestBed.inject(APIKEYInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
