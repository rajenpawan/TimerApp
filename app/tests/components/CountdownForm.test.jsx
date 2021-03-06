var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });
  it('should call onSetCoundown if valid seconds entered', () => {
    var spy = expect.createSpy(); //here we are creating Spy
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

it("Should Not Have Been Called if invalid seconds entered", () => {
  var spy = expect.createSpy();
  var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
  var $el = $(ReactDOM.findDOMNode(countdownForm));

  countdownForm.refs.seconds.value = 'abcd';
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toNotHaveBeenCalled('abcd');
});
});
