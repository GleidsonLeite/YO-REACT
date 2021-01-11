import { rgba } from 'polished';
import styled, { css } from 'styled-components';

interface ItemProps {
  isActive: boolean;
}

export const Item = styled.li<ItemProps>`
  width: 100%;
  position: relative;
  cursor: pointer;

  & > a {
    line-height: 5em;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.4rem;

    color: ${(props) => (props.isActive ? '#fff' : rgba('#FFF', 0.2))};

    transition: all ease-out 0.5s;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #000;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(to right, #5e42a6, #b74e91);
    opacity: ${({ isActive }) => (isActive ? 1 : 0.2)};
    transition: all ease-out 300ms;
  }

  &:hover {
    ${({ isActive }) =>
      !isActive &&
      css`
        &::after {
          opacity: 0.75;
        }

        & > a {
          color: ${rgba('#fff', 0.75)};
        }
      `}
  }
`;
