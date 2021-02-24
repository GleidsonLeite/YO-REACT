import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 17px;
  border-radius: 10px;

  background-color: #f7f5ff;

  & > h6 {
    color: #7366ff;
    letter-spacing: 0.4px;
    font-size: 18px;
  }

  & > p {
    color: #2c323f;
    text-transform: capitalize;
    font-size: 11px;
  }
`;
