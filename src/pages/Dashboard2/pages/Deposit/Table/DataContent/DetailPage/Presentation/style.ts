import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &::after {
    content: '';
    background-color: #fff;
    position: absolute;
    width: 5px;
    height: 80%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    &::after {
      content: '';
      background-color: #fff;
      position: absolute;
      width: 80%;
      height: 5px;
    }
  }
`;

export const TextPresentation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  gap: 1rem;
  text-align: center;
`;

export const ControlContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  text-align: center;
  gap: 1rem;
  & > svg {
    width: 4rem;
    height: 4rem;
  }
`;
