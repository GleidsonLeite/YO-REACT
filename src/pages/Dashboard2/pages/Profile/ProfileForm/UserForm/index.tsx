import { FormHandles } from '@unform/core';
import React, { useCallback, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { useAuth } from '../../../../../../hooks/Auth';
import { useToast } from '../../../../../../hooks/Toast';
import api from '../../../../../../services/api';
import getValidationErrors from '../../../../../../utils/getValidationErrors';
import Button from '../../../../Components/Button';
import Input from '../../../../Components/Input';

import { Container, Form } from './style';

interface UserFormData {
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
}

const UserForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, updateUser } = useAuth();
  const { addToast } = useToast();

  const changeUserInformation = useCallback(
    async (data: UserFormData) => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
        },
      };

      const response = await api.put('/users/', data, config);
      updateUser(response.data);
    },
    [updateUser],
  );

  const handleOnSubmit = useCallback(
    async (data: UserFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          fullName: Yup.string().required('O nome é um campo obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          cpf: Yup.string().required('O CPF é um campo obrigatório'),
          phone: Yup.string().required('O telefone é um campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await changeUserInformation({
          email: data.email,
          cpf: data.cpf,
          phone: data.phone,
          fullName: data.fullName,
        });

        addToast({
          type: 'success',
          title: 'Concluído',
          description: 'Alterações Realizadas com sucesso',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);

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
              'Houve um problema ao tentar conectar com a API. Por favor, tente novamente!',
          });
          return;
        }
        const { message } = error.response.data;
        addToast({
          type: 'error',
          title: 'Erro ao realizar atualização das informações',
          description: message,
        });
      }
    },
    [addToast, changeUserInformation],
  );

  useEffect(() => {
    formRef.current?.setData({
      fullName: user.name,
      cpf: user.cpf,
      email: user.email,
      phone: user.phone,
    });
  }, [user.cpf, user.email, user.name, user.phone]);
  return (
    <Container>
      <Form ref={formRef} onSubmit={handleOnSubmit}>
        <Input
          label="Nome Completo"
          name="fullName"
          placeholder="Insira o seu primeiro nome"
          type="text"
        />
        <Input label="CPF" name="cpf" placeholder="Insira o seu CPF" />
        <Input
          label="Email"
          name="email"
          placeholder="Insira o seu email"
          type="email"
        />
        <Input
          label="Telefone"
          name="phone"
          placeholder="Insira o número do seu telefone"
          type="tel"
        />
        <Button type="submit">Salvar conta</Button>
      </Form>
    </Container>
  );
};

export default UserForm;
