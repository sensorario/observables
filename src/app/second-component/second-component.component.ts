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
  message: string;
  subscription: Subscription;

  constructor(
    private commonService: MessengerService
  ) {
  }

  ngOnInit() {
    const message = this.commonService.retriveMessage();
    this.subscription = message.subscribe(msg => this.doSomething(msg));
  }

  public doSomething(message: Message) {
    this.message = message.getNumber() > 0.5
      ? 'maggiore'
      : 'minore';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
