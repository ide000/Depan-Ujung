import React from 'react';
import {ValidationForm, TextInput} from 'react-bootstrap4-form-validation';
import {Link} from 'react-router-dom';
import './SignIn.css';

class SignIn extends React.Component {
  render () {
    return (
      <ValidationForm
        onSubmit={(e, formData, inputs) => {
          e.preventDefault ();
          console.log (e, formData, inputs);
          this.props.history.push ('/Dashboard');
        }}
      >
        <div className="login-app">
          <div className="login-form">
            <div className="title">
              <p id="first">TAKALAR</p>
              <p>SEHAT</p>
            </div>
            <div className="form-group-login">
              <div className="username">
                <TextInput
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Username"
                  successMessage="Looks good!"
                  required
                />
              </div>
              <div className="password">
                <TextInput
                  name="password"
                  id="password"
                  type="pass"
                  placeholder="Password"
                  minLength="4"
                  maxLength="8"
                  errorMessage={{
                    minLength: 'Minimum {minLength} characters is required',
                    pattern: 'Your lastname is not corgi!',
                  }}
                />
              </div>
              <div className="forget-password">
                <p>Lupa kata sandi ?</p>
              </div>
              <div className="login">
                <button className="btn-primary">Log In</button>
              </div>
              <div className="to-regis">
                <Link to="/">
                  <p>
                    Belum memiliki akun ? Sign Up
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ValidationForm>
    );
  }
}

export default SignIn;
