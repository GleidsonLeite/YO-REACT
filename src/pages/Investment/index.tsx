import React from 'react';
import { Form } from '@unform/web';
import Header from '../../components/Header';

import heroBackground from '../../assets/img/hero-bg-1.jpg';
import WaveMask from '../../components/WaveMask';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Investment: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <section
          className="hero-section ptb-100 background-img full-screen"
          style={{
            background: `url(${heroBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundOrigin: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between pt-5 pt-sm-5 pt-md-5 pt-lg-0">
              <div className="col-md-7 col-lg-6">
                <div className="hero-content-left text-white">
                  <h1 className="text-white">Realize seu investimento</h1>
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
                      <h5 className="h3">Investimento</h5>
                      <p className="text-muted mb-0">
                        Preencha o formulário para realizar o seu investimento
                        de forma rápida e fácil.
                      </p>
                    </div>
                    <Form
                      onSubmit={() => console.log('teste')}
                      className="login-signup-form"
                    >
                      <Input
                        name="value"
                        label="Valor"
                        icon="ti-money"
                        type="number"
                        placeholder="100.00"
                        id="value"
                      />

                      <Input
                        name="deposit_slip"
                        label="Comprovante de depósito"
                        icon="ti-file"
                        type="file"
                        id="deposit_slip"
                      />

                      <Button
                        type="submit"
                        className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                      >
                        Investir
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

export default Investment;
