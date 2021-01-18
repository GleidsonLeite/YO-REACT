import styled from 'styled-components';
import { Form as UnformForm } from '@unform/web';

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

export const Form = styled(UnformForm)`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

export const AddressContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

export const PhotosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 2fr 1fr;
  grid-template-columns: 1fr;
  align-items: stretch;
  gap: 1rem;
`;
