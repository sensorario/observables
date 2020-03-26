import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponentComponent } from './second-component.component';
import { Message } from '../message';

describe('SecondComponentComponent', () => {
  let component: SecondComponentComponent;
  let fixture: ComponentFixture<SecondComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update message to "alto" whenever random number higher than 0.5', () => {
    const message = { message: 'foo', number: 0.7 };
    component.doSomething(message)
    expect(component.message).toBe('maggiore');
  });

  it('should update message to "basso" whenever random number lower than 0.5', () => {
    const message = { message: 'foo', number: 0.3 };
    component.doSomething(message)
    expect(component.message).toBe('minore');
  });

});
