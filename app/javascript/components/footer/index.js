import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="page-header">
          <h1>Example Page Header</h1>
        </div>
        <p>This is some text.</p>
        <p>This is another text.</p>
      </div>
    );
  }
}

Footer.propTypes = {
};

export default Footer;
