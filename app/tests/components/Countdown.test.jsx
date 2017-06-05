var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-Utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('Countdown.jsx Should exist to Test', () => {
    expect('Countdown').toExist();
  });

describe('handleSetCountdown', () => {
  it('should set state to started and countdown', (done) =>{
    var countdown = TestUtils.renderIntoDocument(<Countdown/>);
    countdown.handleSetCountdown(10);
    expect(countdown.state.count).toBe(10);
    expect(countdown.state.countdownStatus).toBe('started');

    setTimeout(() => {
      expect(countdown.state.count).toBe(9);
      done();
    }, 1001)
  });
  });

  it('should set countdown to 0 and time 3001 ms', (done) => {
    var countdown = TestUtils.renderIntoDocument(<Countdown/>);
    countdown.handleSetCountdown(1);

    setTimeout(() => {
      expect(countdown.state.count).toBe(0);
      done();
    }, 3001)
  });
});
