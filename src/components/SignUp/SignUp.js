import React from 'react';
import {ValidationForm, TextInput} from 'react-bootstrap4-form-validation';
import './SignUp.css';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {
  render () {
    return (
      <ValidationForm
        onSubmit={(e, formData, inputs) => {
          e.preventDefault ();
          console.log (e, formData, inputs);
          this.props.history.push ('/SignIn');
        }}
      >
        <div className="regis-app">
          <div className="form-regis">
            <div className="title">
              <p id="second">TAKALAR</p>
              <p>SEHAT</p>
            </div>
            <div className="form-group-regis">
              <div className="fullName">
                <TextInput
                  name="fullName"
                  id="fullName"
                  placeholder="Nama Lengkap"
                  required
                />
              </div>
              <div className="email">
                <TextInput
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
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
              <div className="regis">
                <button className="btn-primary">Sign Up</button>
              </div>
              <div className="to-login">
                <Link to="/SignIn">
                  <p>
                    Sudah punya akun ? Sign In
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

export default SignUp;
