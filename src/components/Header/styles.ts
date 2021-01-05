import styled, { css } from 'styled-components';

interface BurguerProps {
  isClicked: boolean;
}

interface NavProps {
  isOnTop: boolean;
}

export const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
`;

export const Nav = styled.nav<NavProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-image: linear-gradient(
    to right,
    rgba(32, 40, 119, 1),
    rgba(55, 46, 149, 1),
    rgba(83, 49, 177, 1),
    rgba(114, 48, 205, 1),
    rgba(150, 41, 230, 1)
  ) !important;

  ${(props) =>
    !props.isOnTop &&
    css`
      background-image: linear-gradient(
        to right,
        rgba(32, 40, 119, 0.9),
        rgba(55, 46, 149, 0.9),
        rgba(83, 49, 177, 0.9),
        rgba(114, 48, 205, 0.9),
        rgba(150, 41, 230, 0.9)
      ) !important;
    `}
  font-family: '', sans-serif;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 120px;
  }
`;

export const NavLinks = styled.ul<BurguerProps>`
  display: flex;
  justify-content: space-around;
  width: 50%;

  @media screen and (max-width: 768px) {
    position: fixed;
    right: 0px;
    height: 92vh;
    top: 8vh;

    flex-direction: column;
    align-items: center;
    width: 100%;

    background-image: linear-gradient(
      to right,
      rgba(32, 40, 119, 0.95),
      rgba(55, 46, 149, 0.95),
      rgba(83, 49, 177, 0.95),
      rgba(114, 48, 205, 0.95),
      rgba(150, 41, 230, 0.95)
    ) !important;

    transform: translateX(100%);

    transition: transform 0.4s ease;

    ${(props) =>
      props.isClicked &&
      css`
        transform: translateX(0%);
      `}
  }
`;
