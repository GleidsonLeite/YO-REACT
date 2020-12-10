import styled, { css } from 'styled-components';

interface ContentProps {
  isOn: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 1s ease-in;

  ${(props) => css`
    color: ${props.isOn ? '#0C8346' : '#ff7700'};
    &:hover {
      color: ${props.isOn ? '#ff7700' : '#0C8346'};
    }
  `}
`;
