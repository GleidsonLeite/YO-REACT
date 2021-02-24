import styled, { css } from 'styled-components';

interface ItemProps {
  isActive: boolean;
}

export const Item = styled.li<ItemProps>`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  & svg {
    width: 2rem;
    height: 2rem;

    @media screen and (max-width: 768px) {
      width: 1rem;
      height: 1rem;
    }
  }

  & > div {
    width: 100%;
    padding: 0.5rem;
    color: ${(props) => (props.isActive ? '#FFFFFA' : '#BBBDF6')};
    background-color: ${(props) => (props.isActive ? '#00A9A5' : '#6848cf')};
    transition: all ease-out 0.5s;
    border-radius: 0.5rem;
  }

  &:hover {
    ${({ isActive }) =>
      !isActive &&
      css`
        &::after {
          opacity: 0.75;
        }

        & > a {
          color: #d9d9d9;
        }
      `}
  }
`;
