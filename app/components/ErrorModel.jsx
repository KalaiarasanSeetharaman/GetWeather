var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModel = React.createClass({

  getDefaultProps:function(){
  		return{
  			title: 'Error'
  		};
  },
  propTypes: {
  		title: React.PropTypes.string,
  		message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
  	var {title, message} = this.props;
  	var mockUpmodel = (
		<div className="reveal tiny text-center" id="error-modal" data-reveal="">
		  <h4>{title}</h4>
		  <p className="lead">{message}</p>
		  <p>
		  	<button className="button hollow" data-close="">
		  		Okay
		  	</button>
		  </p>
		</div>
  	);
  	var $modal = $(ReactDOMServer.renderToString(mockUpmodel));
  	$(ReactDOM.findDOMNode(this)).html($modal);
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
	render: function(){
		return (
			<div>
			</div>
		);
	}
});

module.exports = ErrorModel;