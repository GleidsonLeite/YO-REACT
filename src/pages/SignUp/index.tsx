import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import Header from '../../components/Header';

import heroBackground from '../../assets/img/hero-bg-1.jpg';
import WaveMask from '../../components/WaveMask';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(8, 'No mínimo 8 dígitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
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
                  <h1 className="text-white">Create Your Account</h1>
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
                      <h5 className="h3">Create account</h5>
                      <p className="text-muted mb-0">
                        Made with love by developers for developers.
                      </p>
                    </div>
                    {/* Login Form */}
                    <Form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="login-signup-form"
                    >
                      <Input
                        name="name"
                        label="Your Name"
                        icon="ti-user"
                        type="text"
                        placeholder="Enter your name"
                        id="name"
                      />

                      <Input
                        name="email"
                        label="Email Address"
                        icon="ti-email"
                        type="text"
                        placeholder="name@yourdomain.com"
                        id="email"
                      />

                      <Input
                        name="password"
                        label="Password"
                        icon="ti-lock"
                        type="password"
                        placeholder="Enter your password"
                        id="password"
                      />

                      <div className="my-4">
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check-terms"
                          />
                          <label
                            htmlFor="check-terms"
                            className="custom-control-label"
                          >
                            I agree to the
                            <a href="terms"> terms and conditions</a>
                          </label>
                        </div>
                      </div>
                      {/* Submit */}
                      <Button
                        type="submit"
                        className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                      >
                        Sign Up
                      </Button>
                    </Form>
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

export default SignUp;
