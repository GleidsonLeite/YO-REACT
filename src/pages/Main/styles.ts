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

export const Presentation = styled.div`
  color: #ffffff;
  max-width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  flex-direction: column;

  h1 {
    font-family: Montserrat, sans-serif;
    font-size: 42px;
  }

  h1 > strong {
    font-weight: bold;
  }

  p {
    text-align: justify;
    margin-top: 20px;
    font-size: 18.75px;
    font-weight: 300;
    line-height: 1.5;
  }

  @media screen and (max-width: 768px) {
    h1 {
      text-align: center;
    }

    p {
      margin-left: 20px;
    }

    margin-top: 60px;
    margin-bottom: 20px;
  }
`;

export const ImagePresentation = styled.div`
  > img {
    max-width: 100%;
    width: 400px;
  }

  @media screen and (max-width: 768px) {
    > img {
      width: 300px;
    }
  }
`;
