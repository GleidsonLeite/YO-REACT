import React, { useCallback, useRef } from 'react';

import { MdPersonOutline, MdMailOutline, MdLockOutline } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/Toast';

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

  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
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

        await api.post('/users/', data);
        addToast({
          type: 'success',
          title: `Seja bem vindo(a), ${data.name}`,
          description:
            'Acabamos de criar sua conta! Por favor, realize seu login',
        });
        history.push('/signIn');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);

          // toast.warn('Por favor, preencha os seus dados corretamente');
          addToast({
            type: 'error',
            title: 'Erro',
            description: 'Por favor, preencha os seus dados corretamente',
          });
          return;
        }
        if (!!error.isAxiosError && !error.response) {
          addToast({
            type: 'error',
            title: 'Erro no cadastro',
            description:
              'Houve um problema ao tentar conectar com a API, por favor preencha os seus dados novamente',
          });
          return;
        }
        const { message } = error.response.data;
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: message,
        });
      }
    },
    [addToast, history],
  );

  return (
    <>
      <Header />
      <Container>
        <Content>
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
          <PresentationText>
            <h1>Seja Bem Vindo(a)!</h1>
            <p>
              Faça o seu cadastro e comece a fazer o seu dinheiro trabalhar para
              você.
            </p>
          </PresentationText>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
