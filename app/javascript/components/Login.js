import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import HomeContent from './home/content';

class Login extends React.Component {
  render () {
    return (
      <div>
        <Header />
          <HomeContent />
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  total_photos: PropTypes.number
};

export default Login;
