import { TestBed } from '@angular/core/testing';

import { MessengerService } from './messenger.service';
import { Message } from '../message';
import { Subject } from 'rxjs';

describe('MessengerService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessengerService = TestBed.get(MessengerService);
    expect(service).toBeTruthy();
  });

  // useless
  // it('should send broadcast message', () => {
  //   const service: MessengerService = TestBed.get(MessengerService);
  //   const subject = service.getSubject();
  //   spyOn(subject, 'next').and.returnValue(null);
  //   const msg = new Message('foo', 0.3);
  //   expect(service.broadcast(msg)).toBeNull;
  // });

});
