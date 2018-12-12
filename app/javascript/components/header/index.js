import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid header text-center">
          <h1>Testing header</h1>
        </div>
        <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top="100">
          <div className="text-center">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Landscapes</a></li>
              <li><a href="#">Portraits</a></li>
              <li><a href="#">Others</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;
