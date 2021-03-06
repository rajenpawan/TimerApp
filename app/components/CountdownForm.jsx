var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;
    //in below regular expression * = we can add any number from a -9,
    // ^ = match starting character, $ = match end character
    console.log('input count', $('input').length);

    if(strSeconds.match(/^[0-9]*$/)){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
render: function(){
  return (
    <div>
      <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
        <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
        <button className="button expanded">Start</button>
    </form>
    </div>
  )
}
});

module.exports = CountdownForm;
