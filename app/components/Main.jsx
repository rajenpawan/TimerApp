var React = require('react');
var Navi = require('Navi');

var Main = (props) => {
return(
  <div>
    <Navi/>
  <div className="row">
    <div className="column small-centered medium-6 large-4">

  {props.children}
    </div>
  </div>
  </div>
);
  }

module.exports = Main;
