import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:first-of-type {
    width: 100%;
    position: absolute;

    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export const Footer = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 1rem;
  justify-self: center;
  align-self: center;

  position: absolute;
  bottom: 0;
`;

interface ToggleProps {
  isActive: boolean;
}

export const Toggle = styled.div<ToggleProps>`
  display: flex;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? '#00bfb2' : '#533f92')};
  transition: all ease 1;
`;
