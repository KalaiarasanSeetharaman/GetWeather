var React = require('react');
var ReactDOM = require('react-dom');

var Nav = require('Nav');


var Main = React.createClass({
	render:function(){
		return(
			<div>
				<Nav/>
				<h2>Main Component</h2>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Main;