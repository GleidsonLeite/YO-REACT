import React, { useCallback } from 'react';
import {
  MdCheck,
  MdCheckCircle,
  MdClose,
  MdError,
  MdInfo,
} from 'react-icons/md';

import { PopupMessage, usePopup } from '../../hooks/Popup';

import {
  Container,
  Content,
  Header,
  LogoIcon,
  Description,
  Footer,
} from './styles';

interface PopupProps {
  message: PopupMessage;
}

const icons = {
  info: <MdInfo />,
  error: <MdError />,
  success: <MdCheckCircle />,
};

const Popup: React.FC<PopupProps> = ({ message }) => {
  const { removePopup } = usePopup();

  const handleOnClickConfirmButton = useCallback(() => {
    !!message.onClickConfirmButton && message.onClickConfirmButton();
    removePopup();
  }, [message, removePopup]);

  return (
    <Container>
      {!!message.title && (
        <Content type={message.type}>
          <Header type={message.type}>
            <h1>{message.title}</h1>
            <MdClose onClick={removePopup} />
          </Header>
          <LogoIcon type={message.type}>
            {icons[message.type || 'info']}
          </LogoIcon>
          <Description>{message.description}</Description>
          <hr />
          <Footer
            hasButtons={message.hasConfirmButton}
            onClick={handleOnClickConfirmButton}
          >
            Confirmar
          </Footer>
        </Content>
      )}
    </Container>
  );
};

export default Popup;
