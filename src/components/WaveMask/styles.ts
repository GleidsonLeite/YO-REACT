import styled from 'styled-components';

export const AbsoluteBottomImage = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  > img {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
