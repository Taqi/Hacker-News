import { TestBed } from '@angular/core/testing';

import { StoryApiService } from './hn-story-api.service';

describe('StoryApiService', () => {
  let service: StoryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
