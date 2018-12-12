import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
    return (
      <footer className="container-fluid text-center">
        <hr className="footer"/>
        <p>Copyright © 2018. All rights reserved.</p>
      </footer>
    );
  }
}

Footer.propTypes = {
};

export default Footer;
