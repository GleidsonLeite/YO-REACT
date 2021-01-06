import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import {
  MdAccountBox,
  MdDashboard,
  MdDialpad,
  MdEmail,
  MdLocationOn,
} from 'react-icons/md';
import { useToast } from '../../hooks/Toast';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import { phoneMask } from '../../components/Mask';
import { useAuth } from '../../hooks/Auth';

import {
  Container,
  Content,
  Icon,
  FormContainer,
  FormPresentation,
  ValidateForm,
} from './styles';
import InputFile from '../../components/InputFile';
import Button from '../../components/Button';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

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

  const [phone, setPhone] = useState('');

  const handleOnChangePhoneInput = useCallback((event) => {
    const { value } = event.target;
    setPhone(phoneMask(value));
  }, []);

  const { addToast } = useToast();

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
    },
    [addToast],
  );

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Icon>
            <MdDashboard />
          </Icon>
          <FormContainer>
            <FormPresentation>
              <h1>{`Olá ${user.name},`}</h1>
              <p>
                Estamos felizes em saber que você se cadastrou em nossa
                plataforma!
              </p>
              <p>
                Agora, falta apenas um passo para que você possa acessar o nosso
                dashboard. Por favor, responda o questionário para que possamos
                completar o seu cadastro.
              </p>
            </FormPresentation>
            <ValidateForm ref={formRef} onSubmit={handleSubmit}>
              <Input name="name" icon={MdAccountBox} defaultValue={user.name} />
              <Input name="email" icon={MdEmail} defaultValue={user.email} />
              <Input
                name="phone"
                icon={MdDialpad}
                type="tel"
                value={phone}
                onChange={handleOnChangePhoneInput}
                maxLength={17}
                placeholder="Telefone"
              />
              <Input
                name="address"
                icon={MdLocationOn}
                placeholder="Endereço"
              />
              <TextArea
                name="resume"
                placeholder="Fale um pouco sobre você :)"
              />
              <InputFile name="identity" />
              <Button type="submit">Enviar</Button>
            </ValidateForm>
          </FormContainer>
        </Content>
      </Container>
    </>
  );
};

export default Unactivated;
