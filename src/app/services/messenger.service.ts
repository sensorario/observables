import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Message } from '../message';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  private subject = new Subject<Message>();

  getSubject() {
    return this.subject;
  }

  broadcast(message: Message) {
    this.subject.next(message);
  }

  retriveMessage(): Observable<Message> {
    return this.subject.asObservable();
  }

}
