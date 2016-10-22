var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props)=>{
    return (
      <div>
        <IndexLink to="/" activeClassName="active" activeStyle={{color: 'red'}}>Get weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{color: 'red'}}>About</Link>
        <Link to="/example" activeClassName="active" activeStyle={{color: 'red'}}>Example</Link>
      </div>

    );
  };

module.exports = Nav;
