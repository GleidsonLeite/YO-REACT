import styled from 'styled-components';

import { Form as Unform } from '@unform/web';
import { Scope } from '@unform/core';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;

export const Form = styled(Unform)`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;

  align-items: center;
  align-self: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InputsContainer = styled(Scope)``;

export const AddressContainer = styled(Scope)``;

export const PhotosContainer = styled(Scope)``;
