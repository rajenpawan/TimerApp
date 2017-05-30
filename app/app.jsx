var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Clock = require('Clock');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();


//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
<Router history={hashHistory}>
<Route path="/" component={Main}>//now Main Component will incharge to render
  <Route path="timer" component={Timer}/>
  <Route path="countdown" component={Countdown}/>
  <IndexRoute component = {Clock}/>

</Route>
</Router>,
  document.getElementById('app')
);
