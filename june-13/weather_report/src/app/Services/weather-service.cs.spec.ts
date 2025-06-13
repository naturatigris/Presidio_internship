import { TestBed } from '@angular/core/testing';

import { WeatherServiceCs } from './weather-service.cs';

describe('WeatherServiceCs', () => {
  let service: WeatherServiceCs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherServiceCs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
