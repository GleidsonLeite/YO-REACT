import React from 'react';
import { MdHome } from 'react-icons/md';
import DropDown from '../DropDown';
import Section from './Section';
import { Container, Content, HeaderContainer, BodyContainer } from './style';

function SideBar() {
  return (
    <Container>
      <Content>
        <HeaderContainer>
          <h1>YO</h1>
        </HeaderContainer>
        <BodyContainer>
          <Section title="Dashboard" />
          <DropDown
            title="Gerenciamento de Usuários"
            icon={MdHome}
            items={['Contas de Clientes', 'Suporte', 'Emails']}
          />
          <DropDown title="Configuração do sistema" icon={MdHome} />
          <DropDown
            title="Sistema de Depósito"
            icon={MdHome}
            items={[
              'Método de Pagamento',
              'Transferência Bancária e Registros',
              'Registro de Depósito',
            ]}
          />
          <DropDown
            title="Sistema de Depósito"
            icon={MdHome}
            items={[
              'Método de Pagamento',
              'Transferência Bancária e Registros',
              'Registro de Depósito',
            ]}
          />
          <DropDown
            title="Sistema de Saque"
            icon={MdHome}
            items={['Método de Saque', 'Registro de Saque']}
          />
          <DropDown
            title="Seção de Noticias"
            icon={MdHome}
            items={['Nova Postagem', 'Artigos', 'Categorias']}
          />
          <DropDown
            title="Controle de Site"
            icon={MdHome}
            items={[
              'Página Inicial',
              'Logo & Favicon',
              'Análise de Plataforma',
              'Membros do Time',
              'Serviços',
              'Páginas da Web',
            ]}
          />
        </BodyContainer>
      </Content>
    </Container>
  );
}

export default SideBar;
