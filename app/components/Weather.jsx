var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather= React.createClass({
  getInitialState: function(){
    return  {
      isLoading: false
    };
  },
  handleSearch: function(location){
    var that= this;

    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(error){
      alert(error);
    });

  },
  render: function(){
    var {location, temp, isLoading} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching Weather</h3>;
      } else if (temp && location){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    return (
      <div>
        <h1 className="text-center">Get weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
