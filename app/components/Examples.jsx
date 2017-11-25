var React = require('react');
var {Link}  = require('react-router');

var Examples = React.createClass({
		render:function(){
			return (
				<div>
					<h1 className="text-center" id="examples"> Examples </h1>
					<p>Here is few examples below</p>
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