import React, { useCallback, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Unactivated/Input';
import { phoneMask } from '../../components/Mask';
import { useAuth } from '../../hooks/Auth';
import api from '../../services/api';
import InputFile from '../../components/InputFile';

interface DataForm {
  name: string;
  email: string;
  phone: string;
  identity: File;
  resume: string;
  address: string;
}

const Unactivated: React.FC = () => {
  const { user } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState('');
  const [identityFile, setIdentityFile] = useState('');
  const [resume, setResume] = useState('');
  // const [address, setAddress] = useState('');

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(
    // eslint-disable-next-line @typescript-eslint/ban-types
    async (data: DataForm) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          phone: Yup.string().required(),
          address: Yup.string().required(),
          identity: Yup.mixed().required('A file is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formData = new FormData();

        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('identity', data.identity);
        formData.append('resume', data.resume);
        formData.append('address', data.address);
        formData.append('name', data.name);

        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
          },
        };

        const resposta = await api.patch('/users/validation', formData, config);
        console.log(resposta);
        // const file = new FormData();
        // file.append();
      } catch (error) {
        console.log(error);
      }
    },
    [identityFile, resume],
  );

  const handleOnChangePhoneInput = useCallback((event) => {
    const { value } = event.target;
    setPhone(phoneMask(value));
  }, []);

  // const handleFileChange = useCallback((event) => {
  //   setIdentityFile(event.target.files[0]);
  // }, []);

  const handleResumeChange = useCallback((event) => {
    const { value } = event.target;
    setResume(value);
  }, []);

  return (
    <section id="contact" className="contact-us ptb-100 gray-light-bg">
      <div className="container">
        <div className="row">
          <div className="col-12 pb-3 message-box d-none">
            <div className="alert alert-danger" />
          </div>
          <div className="col-md-5">
            <div className="section-heading">
              <h3>Só mais um passo...</h3>
            </div>
            <p>
              Antes de começar a investir e ver o seu dinheiro render,
              precisamos obter um comprovante dos seus documentos para garantir
              sua segurança.
            </p>
            <div className="footer-address">
              <h6>
                <strong>Está com dúvidas?</strong>
              </h6>
              <p>
                Se estiver com dificuldades para utilizar nossa plataforma, não
                se preocupe! Nossa equipe de suporte está totalmente disponível
                para te atender.
              </p>
              <ul>
                <li>Phone: +61 2 8376 6284</li>
                <li>
                  <span>Email: </span>
                  hello@yourdomain.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              action=""
              className="contact-us-form"
              id="contactForm"
            >
              <h5>Deixe nos conhecer mais sobre você</h5>
              <div className="row">
                <div className="col-sm-6 col-12">
                  <Input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Insira o seu nome"
                    value={name}
                  />
                </div>
                <div className="col-sm-6 col-12">
                  <Input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Insira o seu email"
                    value={email}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-12">
                  <Input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Insira o seu telefone"
                    onChange={handleOnChangePhoneInput}
                    value={phone}
                    maxLength={17}
                  />
                </div>
                <div className="col-sm-6 col-12">
                  <Input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Insira seu endereço"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="resume"
                      id="resume"
                      cols={25}
                      rows={7}
                      placeholder="Fale sobre você"
                      onChange={handleResumeChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <label htmlFor="identity" className="pb1">
                    Por favor, insira um documento com foto que comprove a sua
                    identificação
                  </label>
                  <div className="form-group">
                    <InputFile id="identity" name="identity" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mt-3">
                  <Button className="btn solid-btn disabled" type="submit">
                    Enviar
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unactivated;
