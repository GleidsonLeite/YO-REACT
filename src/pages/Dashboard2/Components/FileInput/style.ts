import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas: 'label' 'value' 'footer';
  align-content: center;

  background-color: #533f92;

  border-radius: 1rem;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  overflow: hidden;
  padding: 0.3rem;
`;

export const Label = styled.div`
  grid-area: label;
  & > p {
    font-size: 0.8rem;
    color: #fff;
  }
`;

export const Icon = styled.label`
  display: grid;

  justify-self: center;
  align-self: center;

  justify-items: center;

  & > svg {
    width: 4rem;
    height: 4rem;
    color: #fff;

    cursor: pointer;
  }
`;

export const Footer = styled.div`
  grid-area: footer;
  display: grid;
  justify-content: center;
  & > p {
    font-size: 0.8rem;
    color: #fff;
  }
`;

export const Input = styled.input`
  display: none;
`;
