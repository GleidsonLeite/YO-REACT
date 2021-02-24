import React from 'react';
import { MdHourglassFull } from 'react-icons/md';

const UnconfirmedContent: React.FC = () => {
  return (
    <>
      <h1>Em análise...</h1>
      <h3>
        O seu depósito ainda está em análise! Por favor, aguarde enquanto
        realizamos a análise.
      </h3>
      <MdHourglassFull />
    </>
  );
};

export default UnconfirmedContent;
