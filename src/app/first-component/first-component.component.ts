import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessengerService } from '../services/messenger.service';
import { Message } from '../message';

@Component({
	selector: 'app-first-component',
	templateUrl: './first-component.component.html',
	styleUrls: [
		'./first-component.component.scss'
	]
})
export class FirstComponentComponent {
	message: string = 'unknown';
	subscription: Subscription;

	constructor (private commonService: MessengerService) {
		const message = this.commonService.retriveMessage();
		this.subscription = message.subscribe(/* istanbul ignore next */ (msg) => this.messageReceived(msg));
	}

	public messageReceived (message: Message): any {
		this.message = message.number > 0.5 ? 'alto' : 'basso';
	}

	ngOnDestroy () {
		this.subscription.unsubscribe();
	}
}
