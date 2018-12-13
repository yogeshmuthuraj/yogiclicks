import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import LoginContent from './login/content';

class Login extends React.Component {
  render () {
    return (
      <div>
        <Header />
          <LoginContent />
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  total_photos: PropTypes.number
};

export default Login;
