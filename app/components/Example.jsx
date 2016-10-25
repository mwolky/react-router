var React = require('react');
var {Link} = require('react-router');
var Example = (props) => {
    return (
      <div>
        <h1 className="text-center">Example</h1>
        <p className="text-center">Here are a few example location to try out</p>
        <ol>
          <li>
            <Link to="/?location=Warsaw">Warsaw</Link>
          </li>
          <li>
            <Link to="/?location=Cracow">Cracow</Link>
          </li>
          <li>
            <Link to="/?location=Wrocław">Wrocław</Link>
          </li>
        </ol>
      </div>
    );
  };

module.exports = Example;
