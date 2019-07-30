import React from 'react';
import './SignUp.css';
import {Form, FormGroup} from 'reactstrap';
import {Link} from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="regis-app">
      <Form className="regis-form">
        <div className="title">
          <p>TAKALAR</p>
          <p>SEHAT</p>
        </div>
        <div className="form-group-regis">
          <FormGroup className="username">
            <input type="username" placeholder="  Nama Lengkap" />
          </FormGroup>
          <FormGroup className="email">
            <input type="email" placeholder="  Alamat Email" />
          </FormGroup>
          <FormGroup className="password">
            <input type="password" placeholder="  Password" />
          </FormGroup>
        </div>
        <div className="text">
          <div className="regis">
            <Link to="/Dashboard">
              <button className="button-regis">Sign Up</button>
            </Link>
          </div>
          <div className="login">
            <Link to="/SignIn">
              <p>
                Sudah punya akun ? Sign In
              </p>
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
