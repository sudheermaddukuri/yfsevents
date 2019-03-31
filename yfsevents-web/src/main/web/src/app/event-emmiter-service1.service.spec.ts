import { TestBed } from '@angular/core/testing';

import { EventEmmiterService1Service } from './event-emmiter-service1.service';

describe('EventEmmiterService1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventEmmiterService1Service = TestBed.get(EventEmmiterService1Service);
    expect(service).toBeTruthy();
  });
});
