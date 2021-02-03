import styled from 'styled-components';

export const PresentationContainer = styled.div`
  width: 75%;
  height: 75%;
  display: grid;
  justify-items: center;
  align-items: center;
  align-content: space-around;
  text-align: center;
  color: #fff;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;
