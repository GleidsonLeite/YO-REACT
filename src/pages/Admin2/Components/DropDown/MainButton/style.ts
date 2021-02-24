import styled, { css } from 'styled-components';

interface ContainerProps {
  isContentDropped: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  min-height: 48px;

  display: grid;
  justify-items: center;
  align-items: center;

  grid-auto-flow: column;
  grid-template-columns: 1fr 3fr 1fr;

  transition: all 0.2s ease;

  background-image: ${(props) =>
    props.isContentDropped
      ? 'linear-gradient(90deg, #7366ff 0%, #a26cf8 100%)'
      : '#fff'};
  border-radius: 10px;
  color: ${({ isContentDropped }) => (isContentDropped ? '#fff' : '#2c323f')};

  cursor: pointer;

  &:hover {
    ${(props) =>
      !props.isContentDropped &&
      css`
        color: #7366ff;
      `}
  }

  & > h1 {
    justify-self: start;
    font-size: 14px;
  }
  & > svg {
    height: 1rem;
    width: 1rem;
  }
`;
