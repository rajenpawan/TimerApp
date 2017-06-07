var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });
  it('should start Timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer></Timer>);
    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);
    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });
  it('should pause Timer on Paused status', () =>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
    }, 1001);
  });
  it('should clear count on stopped status ', () => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
    }, 1001);
  });
  it('should start, pause, then stop', () => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
    }, 1001);
  });

});
