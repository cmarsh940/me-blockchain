import { TestBed, inject } from '@angular/core/testing';

import { SurveyCategoryService } from './survey-category.service';

describe('SurveyCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyCategoryService]
    });
  });

  it('should be created', inject([SurveyCategoryService], (service: SurveyCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
