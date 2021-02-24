import React, { useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import MainButton from './MainButton';
import List from './List';

import { Container, Content } from './style';

interface DropDownProps {
  title: string;
  icon: React.ComponentType<IconBaseProps>;
  items?: string[];
}

function DropDown({ title, icon: Icon, items }: DropDownProps) {
  const [isContentDropped, setIsContendDropped] = useState<boolean>(false);

  const handleOnDropDownClick = useCallback(() => {
    setIsContendDropped(!isContentDropped);
  }, [isContentDropped]);

  return (
    <Container>
      <Content>
        <MainButton
          onClick={handleOnDropDownClick}
          isContentDropped={isContentDropped}
          title={title}
          icon={Icon}
        />
        {isContentDropped && !!items && <List items={items} />}
      </Content>
    </Container>
  );
}

export default DropDown;
