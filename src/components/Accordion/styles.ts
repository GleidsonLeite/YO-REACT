import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  background-color: #6730e3;
  color: white;
  padding: 18px;
  width: 100%;
  max-width: 600px;
  border: none;
  border-radius: 0.4rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: 10px;

  width: 100%;
  max-height: 500px;
  overflow: auto;

  &:nth-child(1) {
    border: 2px solid red;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;
