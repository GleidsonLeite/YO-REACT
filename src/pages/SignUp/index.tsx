import React, { useCallback, useRef } from 'react';

import { MdPersonOutline, MdMailOutline, MdLockOutline } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import { Container, Content, FormSignUp, PresentationText } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
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

      await api.post('users', data);
      toast.success(
        `Olá ${data.name}, acabamos de criar sua conta no nosso sistema. Realize o login para ter acesso ao nosso dashboard`,
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);

        return;
      }
      if (!!error.isAxiosError && !error.response) {
        toast.error('Houve um problema ao tentar conectar com a API.');
        return;
      }
      const { message } = error.response.data;
      toast.error(message);
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <PresentationText>
            <h1>Seja Bem Vindo(a)!</h1>
            <p>
              Faça o seu cadastro e comece a fazer o seu dinheiro trabalhar para
              você.
            </p>
          </PresentationText>
          <FormSignUp ref={formRef} onSubmit={handleSubmit}>
            <h1>Criar Conta</h1>
            <p>Tenha livre acesso à nossa Dashboard</p>
            <Input name="name" icon={MdPersonOutline} placeholder="Seu nome" />

            <Input
              name="email"
              icon={MdMailOutline}
              placeholder="email@exemple.com"
            />

            <Input
              name="password"
              icon={MdLockOutline}
              placeholder="Sua senha"
              type="password"
            />

            <Button type="submit">Cadastrar</Button>
          </FormSignUp>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
