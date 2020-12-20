import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 400px;
  background-color: #6730e3;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.4);
  }
`;

export const ImageLabel = styled.img`
  display: block;
  width: 100%;
  height: 15rem;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2px;
`;

export const Header = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 1.5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  line-height: 1.7;
  color: #fff;
  margin-bottom: 2.5rem;
`;
