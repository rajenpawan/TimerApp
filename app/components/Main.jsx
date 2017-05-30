var React = require('react');
var Navi = require('Navi');

var Main = (props) => {
return(
  <div>
    <Navi/>
  <div>
    <div>

  {props.children}
    </div>
  </div>
  </div>
);
  }

module.exports = Main;
