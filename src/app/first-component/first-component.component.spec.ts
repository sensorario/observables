import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentComponent } from './first-component.component';
import { Message } from '../message';

describe('FirstComponentComponent', () => {
  let component: FirstComponentComponent;
  let fixture: ComponentFixture<FirstComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update message to "alto" whenever random number higher than 0.5', () => {
    const message = { message: 'foo', number: 0.7 };
    component.messageReceived(message)
    expect(component.message).toBe('alto');
  });

  it('should update message to "basso" whenever random number lower than 0.5', () => {
    const message = { message: 'foo', number: 0.3 };
    component.messageReceived(message)
    expect(component.message).toBe('basso');
  });

});
