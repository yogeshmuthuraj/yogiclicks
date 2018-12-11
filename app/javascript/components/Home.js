import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        Total photos: {this.props.total_photos}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  total_photos: PropTypes.string
};
export default Home;
