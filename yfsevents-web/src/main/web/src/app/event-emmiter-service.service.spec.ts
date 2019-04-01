import { TestBed } from '@angular/core/testing';

import { EventEmmiterServiceService } from './event-emmiter-service.service';

describe('EventEmmiterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventEmmiterServiceService = TestBed.get(EventEmmiterServiceService);
    expect(service).toBeTruthy();
  });
});
