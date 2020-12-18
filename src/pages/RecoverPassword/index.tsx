import React, { useCallback, useRef } from 'react';

import { MdLockOutline } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import {
  Container,
  Content,
  FormPasswordRecover,
  PresentationText,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/Toast';
import api from '../../services/api';

interface recoverPasswordFormData {
  password: string;
  confirmPassword: string;
}

interface RouteParams {
  token: string;
}

const RecoverPassword: React.FC = () => {
  const { token } = useParams<RouteParams>();

  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: recoverPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().min(8, 'No mínimo 8 dígitos'),
          confirmPassword: Yup.string()
            .oneOf(
              [Yup.ref('password')],
              'Por favor, digite a mesma senha nos dois campos',
            )
            .required('Por favor, preencha todos os campos corretamente'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.patch(
          `users/recoverPassword/${token}`,
          {
            newPassword: data.password,
          },
          {},
        );
        console.log(response);
        history.push('/signIn');
        addToast({
          type: 'info',
          title: 'Sua senha foi reconfigurada, por favor realize o seu login.',
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
          title: 'Outro erro',
          description: message,
        });
      }
    },
    [addToast, history, token],
  );

  return (
    <>
      <Container>
        <Header />
        <Content>
          <FormPasswordRecover ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar senha</h1>

            <Input
              name="password"
              icon={MdLockOutline}
              placeholder="Sua nova senha"
              type="password"
            />

            <Input
              name="confirmPassword"
              icon={MdLockOutline}
              placeholder="Sua nova senha"
              type="password"
            />

            <Button type="submit">Reconfigurar</Button>
          </FormPasswordRecover>
          <PresentationText>
            <h1>Olá Novamente!</h1>
            <p>
              Não se preocupe com a sua conta, nós estamos cuidando dela para
              você!
            </p>
          </PresentationText>
        </Content>
      </Container>
    </>
  );
};

export default RecoverPassword;
