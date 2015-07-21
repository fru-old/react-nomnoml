var React = require('react');
var Nomnoml = require('react-nomnoml');

var App = React.createClass({
	render () {
		return (
			<div>
				<Nomnoml />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
