import React from 'react';

import { Container, Content, Photo, NameDiv } from './style';

interface PhotoContentProps {
  name: string;
  photoSource?: string;
}

const PhotoContent: React.FC<PhotoContentProps> = ({ name, photoSource }) => {
  return (
    <Container>
      <Content>
        <Photo>
          {!!photoSource && <img src={photoSource} alt="ProfilePhoto" />}
        </Photo>
        <NameDiv>
          <h3>{name}</h3>
        </NameDiv>
      </Content>
    </Container>
  );
};

export default PhotoContent;
