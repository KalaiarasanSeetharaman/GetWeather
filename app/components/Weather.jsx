var React = require('react');
var WeatherFrom = require('WeatherFrom');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	    getInitialState:function(){
	    	return {
	    		isLoading:false
	    	}
	    },
		handleSearch: function(location){
			//debugger;
			var that = this;
			that.setState({
					isLoading: true
				});
			openWeatherMap.getTemp(location).then(function(temp){
				that.setState({
					location: location,
		    		temp: temp,
		    		isLoading: false
				});

			},function(errorMessage){
				that.setState({
					isLoading: true
				});
				alert(errorMessage);
			})
			
		},
		
		render:function(){
			var {location , temp, isLoading} = this.state;
			function renderMessage(){
				if(isLoading){
					return <h3>Fetching Weather....</h3>;
				}else if(location && temp){
				   return  <WeatherMessage location={location} temp={temp}/>
				}

			}
			return (
				<div>
					<h3> Weather Component </h3>
					<WeatherFrom onSearch={this.handleSearch}/>
					{renderMessage()}
				</div>
			);
		}

});

module.exports = Weather;