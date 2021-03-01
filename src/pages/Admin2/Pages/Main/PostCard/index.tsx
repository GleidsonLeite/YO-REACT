import React from 'react';
import Card from '../../../Components/Card';
import Data from '../Data';

function PostCard() {
  return (
    <Card
      title="Publicações"
      subtitle="Quantidade de Publicações"
      mainValue="5"
    >
      <Data label="Publicações pendentes" value="1" />
      <Data label="Publicações Ativas" value="1" />
    </Card>
  );
}

export default PostCard;
