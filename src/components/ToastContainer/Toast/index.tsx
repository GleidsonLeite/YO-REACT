import React, { useEffect } from 'react';

import { MdCheckCircle, MdClear, MdError, MdInfo } from 'react-icons/md';

import { ToastMessage, useToast } from '../../../hooks/Toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object;
}

const icons = {
  info: <MdInfo size={24} />,
  error: <MdError size={24} />,
  success: <MdCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    // Caso o usuario feche o toast antes do timeout
    // No react, toda vez que um componente para de existir, o use effect retorna uma função
    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <MdClear size={18} />
      </button>
    </Container>
  );
};

export default Toast;
