import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import Button from '../../../../../components/Button';
import { useAuth } from '../../../../../hooks/Auth';
import FileInput from '../../../Components/FileInput';
import Input from '../../../Components/Input';
import {
  Container,
  Content,
  Form,
  InputsContainer,
  AddressContainer,
  PhotosContainer,
} from './style';
import { useToast } from '../../../../../hooks/Toast';
import getValidationErrors from '../../../../../utils/getValidationErrors';
import api from '../../../../../services/api';

interface DataForm {
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  phone: string;
  cep: string;
  street: string;
  neighborhood: string;
  number: string;
  complement: string;

  frontSelfie: File;
  backSelfie: File;
}

const ProfileForm: React.FC = () => {
  const { user } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const nameSplitted = user.name.split(' ', 2);
    setFirstName(nameSplitted[0]);
    setLastName(nameSplitted[1]);
    setEmail(user.email);
    setPhone(user.phone);
  }, [user.email, user.name, user.phone]);

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleOnSubmit = useCallback(async (data: DataForm) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        firstName: Yup.string(),
        lastName: Yup.string(),
        cpf: Yup.string(),
        email: Yup.string().email('Digite um e-mail válido'),
        phone: Yup.string(),
        cep: Yup.string(),
        street: Yup.string(),
        nighborhood: Yup.string(),
        number: Yup.string(),
        complement: Yup.string(),

        frontSelfie: Yup.mixed(),
        backSelfie: Yup.mixed(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const formData = new FormData();

      formData.append('cpf', data.cpf);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      // formData.append('identity', data.identity);
      // formData.append('address', ${});
      formData.append('name', `${data.firstName} ${data.lastName}`);

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
        },
      };

      await api.patch('/users/validation', formData, config);
      addToast({
        type: 'success',
        title: 'Validação',
        description:
          'Obrigado por enviar suas informações! A nossa equipe irá analisar os seus dados para ativar a sua conta.',
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);

        // toast.warn('Por favor, preencha os seus dados corretamente');
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Preencha o formulário corretamente',
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
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={() => console.log('hello World')}>
          <InputsContainer>
            <Input
              name="firstName"
              label="Primeiro Nome"
              placeholder="Insira o seu primeiro nome"
              value={firstName}
            />
            <Input
              name="lastName"
              label="Segundo Nome"
              placeholder="Insira o seu segundo nome"
              value={lastName}
            />
            <Input name="cpf" label="CPF" placeholder="Insira o seu CPF" />
            <Input
              name="email"
              label="Email"
              placeholder="Insira o seu email"
              value={email}
            />

            <Input
              name="phone"
              label="Telefone"
              placeholder="Insira o número do seu telefone"
              value={phone}
            />
          </InputsContainer>
          <AddressContainer>
            <Input
              name="cep"
              label="CEP"
              placeholder="Insira o CEP da sua rua"
            />
            <Input
              name="street"
              label="Rua"
              placeholder="Insira o nome da sua rua"
            />
            <Input
              name="neighborhood"
              label="Bairro"
              placeholder="Insira o nome do seu bairro"
            />
            <Input
              name="number"
              label="Numero"
              placeholder="Insira o numero da sua residência"
            />
            <Input
              name="complement"
              label="Complemento"
              placeholder="Insira um complemento"
            />
          </AddressContainer>
          <PhotosContainer>
            <FileInput
              name="frontSelfie"
              label="Selfie com frente da identidade"
            />
            <FileInput
              name="backSelfie"
              label="Selfie com verso da identidade"
            />
            <Button type="submit">Enviar</Button>
          </PhotosContainer>
        </Form>
      </Content>
    </Container>
  );
};

export default ProfileForm;
