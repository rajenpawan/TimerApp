var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navi = React.createClass({
  render: function(){
    return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">ReactTime App</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>

          <li>
            <Link to="/countdown" activeClassName="active-link">CountDown</Link>
          </li>
        </ul>
      </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="https://github.com/rajenpawan" target="_blank">Rajendra</a>
            </li>
          </ul>
      </div>
    </div>
    )
  }
});

module.exports = Navi;
