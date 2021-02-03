import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 1fr min-content;
`;

export const Content = styled.div``;

export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 0.5rem;
  padding: 1rem;
`;

interface CircleProps {
  isActive: boolean;
}

export const Circle = styled.div<CircleProps>`
  display: flex;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? '#00bfb2' : '#533f92')};
`;
