import styled, { css } from 'styled-components';

interface PopupProps {
  type?: 'success' | 'error' | 'info';
  hasButtons?: boolean;
}

const PopupColorVariations = {
  info: '#16BAC5',
  success: '#0C8346',
  error: '#ff7700',
};

export const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 3;
`;

export const Content = styled.div<PopupProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  border: 2px solid ${(props) => PopupColorVariations[props.type || 'info']};
  overflow: hidden;
  border-radius: 10px;
  background-color: ${(props) => PopupColorVariations[props.type || 'info']};
  padding: 10px;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.4);

  min-width: 400px;
`;

export const Header = styled.div<PopupProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;

  padding: 20px;

  background-color: ${(props) => PopupColorVariations[props.type || 'info']};
  color: white;

  > svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;

export const LogoIcon = styled.div<PopupProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: #fff;
  border-radius: 4px 4px 0 0;
  padding: 20px;

  > svg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid ${(props) => PopupColorVariations[props.type || 'info']};
    color: ${(props) => PopupColorVariations[props.type || 'info']};
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 400px;

  text-align: center;

  background-color: white;
  border-radius: 0 0 4px 4px;
  padding: 10px;
`;

export const Footer = styled.div<PopupProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;

  background-color: white;
  padding: 10px;
  border-radius: 4px;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: ${(props) => PopupColorVariations[props.type || 'info']};
  }

  ${(props) =>
    !props.hasButtons &&
    css`
      display: none;
    `}
`;
