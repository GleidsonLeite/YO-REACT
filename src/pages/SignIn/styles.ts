import { Form } from '@unform/web';
import styled from 'styled-components';

import heroBackground from '../../assets/img/HeroBackground.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  background-image: linear-gradient(
      to right,
      rgba(32, 40, 119, 0.75),
      rgba(55, 46, 149, 0.75),
      rgba(83, 49, 177, 0.75),
      rgba(114, 48, 205, 0.75),
      rgba(150, 41, 230, 0.75)
    ),
    url(${heroBackground});
  background-repeat: no-repeat;
  background-position: 'center';
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const PresentationText = styled.div`
  color: #ffffff;

  h1 {
    font-family: Montserrat;
    font-size: 40px;
    align-items: flex-end;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FormSignIn = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  width: 100%;
  max-width: 400px;
  height: 500px;
  background-color: #fff;

  border-radius: 10px;

  > h1 {
    font-family: Montserrat;
    font-size: 40px;
  }

  p {
    color: #707070;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;
