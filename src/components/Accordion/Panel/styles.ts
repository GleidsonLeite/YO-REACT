import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface ContentProps {
  isHidden: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${shade(0.2, '#6730e3')};

  border-radius: 0.4rem;

  width: 100%;

  margin: 2px;

  transition: all 200ms ease-in;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 0.8rem;
  font-weight: 500;
  color: #f3fcf0;
  font-family: Montserrat;
  letter-spacing: 2px;
  font-size: 10px;

  margin: 16px;
  padding: 0 16px;

  > svg {
    cursor: pointer;
  }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  transition: all 0.2s ease-in;

  ${(props) =>
    props.isHidden &&
    css`
      display: none;
    `}
`;
