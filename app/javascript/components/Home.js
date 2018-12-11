import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import { Button } from 'primereact/button';

class Home extends React.Component {
  render () {
    return (
      <div>
        <Header />
          <Button className="p-button-secondary" label="Ok"/>
          Total photos: {this.props.total_photos}
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  total_photos: PropTypes.string
};

export default Home;
