import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessengerService } from '../services/messenger.service';
import { Message } from '../message';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent {
  message: string = "unknown";
  message$ = this.commonService.retriveMessage();

  subscription: Subscription;

  constructor(
    private commonService: MessengerService
  ) {
    this.subscription = this.message$.subscribe(msg => this.messageReceived(msg));
  }

  public messageReceived(message: Message) {
    this.message = message.number > 0.5
      ? 'maggiore'
      : 'minore';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
