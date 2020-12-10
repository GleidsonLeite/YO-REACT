import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface NavListProps {
  isHidden: boolean;
}

export const NavList = styled.li<NavListProps>`
  list-style: none;

  @media screen and (max-width: 768px) {
    opacity: 0;
    transition: opacity 0.5s ease-in;
    ${(props) =>
      props.isHidden &&
      css`
        opacity: 100;
      `}
  }
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 3px;
  font-size: 14px;
`;
