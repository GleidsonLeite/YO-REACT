import styled, { css } from 'styled-components';

interface BurguerProps {
  isClicked: boolean;
}

export const BurguerDiv = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const BurguerLine1 = styled.div<BurguerProps>`
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin: 5px;
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.isClicked &&
    css`
      margin-bottom: 6px;
    `}
`;

export const BurguerLine2 = styled.div<BurguerProps>`
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin: 5px;
`;

export const BurguerLine3 = styled.div<BurguerProps>`
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin: 5px;
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.isClicked &&
    css`
      margin-top: 6px;
    `}
`;
