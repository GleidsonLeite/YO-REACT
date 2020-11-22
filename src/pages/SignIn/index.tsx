import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import heroBackground from '../../assets/img/hero-bg-1.jpg';

import Header from '../../components/Header';
import WaveMask from '../../components/WaveMask';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/AuthContext';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, signIn } = useAuth();

  console.log(user);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(8, 'No mínimo 8 dígitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      signIn({
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.log(error);

      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <>
      <Header />
      {/* Body content wrap start */}
      <div className="main">
        {/* Hero Section start */}
        <section
          className="hero-section ptb-100 background-img full-screen"
          style={{
            background: heroBackground,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundOrigin: 'center',
            backgroundSize: 'center/cover',
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between pt-5 pt-sm-5 pt-md-5 pt-lg-0">
              <div className="col-md-7 col-lg-6">
                <div className="hero-content-left text-white">
                  <h1 className="text-white">Wellcome Back!</h1>
                  <p className="lead">
                    Keep your face always toward the sunshine - and shadows will
                    fall behind you.
                  </p>
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="card login-signup-card shadow-lg mb-0">
                  <div className="card-body px-md-5 py-5">
                    <div className="mb-5">
                      <h5 className="h3">Login</h5>
                      <p className="text-muted mb-0">
                        Sign in to your account to continue.
                      </p>
                    </div>
                    {/* Login Form */}
                    <Form
                      onSubmit={handleSubmit}
                      ref={formRef}
                      className="login-signup-form"
                    >
                      <Input
                        name="email"
                        label="Email Address"
                        icon="ti-email"
                        type="text"
                        placeholder="name@yourdomain.com"
                        id="email"
                      />
                      {/* Password */}
                      <Input
                        name="password"
                        label="Password"
                        icon="ti-lock"
                        type="password"
                        placeholder="Enter your password"
                        id="password"
                      />
                      {/* Submit */}
                      <Button
                        type="submit"
                        className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                      >
                        Sign In
                      </Button>
                    </Form>
                  </div>
                  <div className="card-footer bg-transparent border-box px-md-5">
                    <small>Not registered? </small>
                    <a href="SignUp" className="small">
                      Create Account
                    </a>
                  </div>
                  <div className="card-footer bg-transparent border-box px-md-5">
                    <small>Do you forgeted your password? </small>
                    <a href="SignUp" className="small">
                      Recover Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WaveMask />
        </section>
      </div>
    </>
  );
};

export default SignIn;
