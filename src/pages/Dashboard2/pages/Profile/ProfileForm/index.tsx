import React from 'react';

import { Container } from './style';
import AddressForm from './AddressForm';
import UserForm from './UserForm';
import IdentityForm from './IdentityForm';

interface DataForm {
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  cep: string;
  street: string;
  neighborhood: string;
  number: string;
  complement: string;
}

const ProfileForm: React.FC = () => {
  return (
    <Container>
      <UserForm />
      <AddressForm />
      <IdentityForm />
      {/* <Form ref={formRef} onSubmit={handleOnSubmit}>
          <InputsContainer path="userInfo">
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
          </InputsContainer>
          <AddressContainer path="addressInfo">
            <Input
              label="CEP"
              name="cep"
              placeholder="Insira o CEP da sua rua"
              type="number"
            />
            <Input
              label="Rua"
              name="street"
              placeholder="Insira o nome da sua rua"
              type="text"
            />
            <Input
              label="Bairro"
              name="neighborhood"
              placeholder="Insira o nome do seu bairro"
              type="text"
            />
            <Input
              label="Numero da casa"
              name="number"
              placeholder="Insira o numero da sua residência"
              type="number"
            />
            <Input
              label="Complemento"
              name="complement"
              placeholder="Insira um complemento"
              type="text"
            />
          </AddressContainer>
          <PhotosContainer path="">
            <FileInput
              label="Frente do documento de identificação"
              name="identityFront"
            />
            <FileInput
              label="Verso do documento de identificação"
              name="identityBack"
            />
            <FileInput
              label="Selfie com documento de identificação"
              name="identityBack"
            />
          </PhotosContainer>
          <Button type="submit">Alterar</Button>
        </Form> */}
    </Container>
  );
};

export default ProfileForm;
