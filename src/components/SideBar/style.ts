import { rgba } from 'polished';
import styled, { css } from 'styled-components';

interface NavStyleProps {
  isHidden: boolean;
}

export const Container = styled.aside<NavStyleProps>`
  position: fixed;
  left: 0;
  width: 25%;
  height: 100vh;
  background: #312450;
  font-size: 0.65em;

  transition: all ease-out 0.5s;

  ${({ isHidden }) =>
    isHidden &&
    css`
      transform: translateX(-90%);
      background-color: ${rgba('#312450', 0)};
    `}

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
`;

export const ProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 10rem;
  border-radius: 50%;

  border: 2px solid #fff;

  & > svg {
    width: 100%;
    height: 100%;

    padding: 15%;

    color: #fff;
  }
`;

export const Nav = styled.nav`
  max-height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 0 15%;
  text-align: right;

  font-weight: bold;
`;

export const ReturnToHome = styled.footer`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: right;

  & > svg {
    color: #fff;
    width: 2rem;
    height: 2rem;
  }
`;
