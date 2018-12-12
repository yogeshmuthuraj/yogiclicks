import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import HomeContent from './home/content'

class Home extends React.Component {
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

Home.propTypes = {
  total_photos: PropTypes.number
};

export default Home;
