var React = require('react');

var About= (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Here are some technologies I used to build this site:</p>
      <ul>
        <li>ReactJS</li>
        <li>OpenWeatherMap</li>
      </ul>
    </div>
  );
};

module.exports = About;
