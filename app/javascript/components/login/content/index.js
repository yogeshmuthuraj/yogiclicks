import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Login Form</h2>

        <htmlForm action="/action_page.php">
          <div className="imgcontainer">

          </div>

          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit">Login</button>
          </div>

          <div className="container">
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </htmlForm>
      </div>
    );
  }
}

Content.propTypes = {
};

export default Content;
