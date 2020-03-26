import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessengerService } from './services/messenger.service';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'observables';
  subscription: Subscription;

  constructor(
    private commonService: MessengerService
  ) {
    const message$ = this.commonService.retriveMessage();
    this.subscription = message$.subscribe((msg: Message) => {
      console.log(msg.message);
    });
  }

  clicked() {
    this
      .commonService
      .broadcast({
        message: 'sent from AppComponent',
        number: Math.random()
      });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
