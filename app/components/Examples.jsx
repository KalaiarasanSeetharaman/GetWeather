var React = require('react');
var {Link}  = require('react-router');

var Examples = React.createClass({
		render:function(){
			return (
				<div>
					<h1 className="text-center" id="examples"> Examples Component </h1>
					<p>Some Pages</p>
					<ol>
						<li>
							<Link to="/?location=Karur">Karur</Link>
						</li>
						<li>
							<Link to="/?location=Erode">Erode</Link>
						</li>
					</ol>
				</div>
			);
		}

});

module.exports = Examples;