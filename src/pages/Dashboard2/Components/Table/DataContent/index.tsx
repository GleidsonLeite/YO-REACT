import React from 'react';
import { Content, Header, Data, SingleData } from './style';

const DataContent: React.FC = () => {
  return (
    <Content>
      <Header>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
      </Header>
      <Data>
        <SingleData>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </SingleData>
        <SingleData>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </SingleData>
        <SingleData>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </SingleData>
      </Data>
    </Content>
  );
};

export default DataContent;
