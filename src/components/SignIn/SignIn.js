import React from 'react';
import './SignIn.css';
import {Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import validate from '../Form/FormValidation';
import useForm from '../Form/UseForm';

const SignIn = () => {
  const {values, errors, handleChange, handleSubmit} = useForm (
    login,
    validate
  );
  function login () {
    console.log ('No errors, submit callback called!');
  }

  return (
    <div className="login-app">
      <Form className="login-form">
        <div className="title">
          <p className="p1">TAKALAR</p>
          <p className="p2">SEHAT</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="form-group-login">

          <div className="username">
            <div className="control">
              <input
                autoComplete="off"
                className={`input ${errors.email && 'is-danger'}`}
                type="email"
                name="email"
                placeholder="Alamat Email"
                onChange={handleChange}
                value={values.email || ''}
                required
              />
            </div>
            {errors.email && <p className="help is-danger">{errors.email}</p>}
          </div>

          <div className="password">
            <div className="control">
              <input
                className={`input ${errors.password && 'is-danger'}`}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password || ''}
                required
              />
            </div>
            {errors.password &&
              <p className="help is-danger">{errors.password}</p>}
          </div>

          <div className="text">
            <div className="lupa-sandi">
              <p>Lupa kata sandi ?</p>
            </div>
            <div className="login">
              {/* <Link to="/Dashboard"> */}
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Login
              </button>
              {/* </Link> */}
            </div>
            <div className="regis">
              <Link to="/">
                <p>
                  Belum memiliki akun ? Sign Up
                </p>
              </Link>
            </div>

          </div>
        </form>

      </Form>
    </div>
  );
};

export default SignIn;
