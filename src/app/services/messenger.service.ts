import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Message } from '../message';

@Injectable({
	providedIn: 'root'
})
export class MessengerService {
	public subject = new Subject<Message>();

	broadcast (message: Message) {
		this.subject.next(message);
	}

	retriveMessage (): Observable<Message> {
		return this.subject.asObservable();
	}
}
