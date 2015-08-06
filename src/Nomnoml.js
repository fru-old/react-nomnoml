var React = require('react');
var graph = require('nomnoml');

var Nomnoml = React.createClass({
	componentDidMount () {
		var source = this.props.source || '';
		//source = source.replace(/(\r\n|\r|\n){2,}/g, '\n');
		console.log(source);
		source = source.replace(/(\r|\n)(\t|\s|\r|\n)*/g, '\n');
		console.log(source);
		graph.draw(React.findDOMNode(this), source);
	},
	render () {
		return <canvas></canvas>;
	}
});

export default Nomnoml;
