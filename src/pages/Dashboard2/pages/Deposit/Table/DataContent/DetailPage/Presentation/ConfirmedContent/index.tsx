import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

const ConfirmedContent: React.FC = () => {
  return (
    <>
      <h1>Depósito Aprovado</h1>
      <h3>Parabéns!!! o seu crédito foi aprovado com sucesso.</h3>
      <MdCheckCircle />
    </>
  );
};

export default ConfirmedContent;
