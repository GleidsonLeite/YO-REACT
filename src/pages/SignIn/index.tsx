import React, { useCallback, useRef } from 'react';

import { MdMailOutline, MdLockOutline } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { Container, Content, FormSignIn, PresentationText } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
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

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/unactivated');
        addToast({
          type: 'info',
          title: 'Seja bem vindo(a)!',
        });
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
    [addToast, history, signIn],
  );

  return (
    <>
      <Container>
        <Header />
        <Content>
          <FormSignIn ref={formRef} onSubmit={handleSubmit}>
            <h1>Entrar</h1>
            <p>Tenha livre acesso à nossa Dashboard</p>
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

            <Button type="submit">LogIn</Button>
          </FormSignIn>
          <PresentationText>
            <h1>Olá Novamente!</h1>
            <p>Acompanhe os seus rendimentos através da Dashboard</p>
          </PresentationText>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
