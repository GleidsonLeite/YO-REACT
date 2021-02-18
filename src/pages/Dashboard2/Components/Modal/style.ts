import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: grid;
  justify-items: center;
  align-items: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
  background: rgba(102, 86, 160, 0.8);
  backdrop-filter: blur(1rem);
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const CloseDiv = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  border: 0;
  color: inherit;
  cursor: pointer;
  & > svg {
    color: #00bfb2;
    width: 2rem;
    height: 2rem;
  }
`;
