import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../message';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  private subject = new Subject;

  getSubject() {
    return this.subject;
  }

  /* istanbul ignore else  */
  broadcast(message: Message): void {
    return this.subject.next(message);
  }

  retriveMessage(): any {
    return this.subject.asObservable();
  }

}
