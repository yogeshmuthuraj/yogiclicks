import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Login Form</h2>

        <form action="/login" method="post">
          <input type="hidden" name="authenticity_token" />
          <div className="imgcontainer">

          </div>

          <div className="container">
            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required />

            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required />

            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

Content.propTypes = {
};

export default Content;
