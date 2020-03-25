import { Message } from './message';

describe('Message', () => {
  
  it('should create an instance', () => {
    expect(new Message('foo', 42)).toBeTruthy();
  });
  
  it('should return message', () => {
    expect(new Message('foo', 42).getMessage()).toBe('foo');
  });

});
