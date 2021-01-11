import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

export const Container = styled.div`
  display: flex;
  justify-content: stretch;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  width: 30rem;
  height: 20rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: flex;
  justify-items: center;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 8rem;
  }
`;

export const LineCanvas = styled(Line)`
  flex: 1;
`;
