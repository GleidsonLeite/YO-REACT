import { AxiosRequestConfig } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../../../hooks/Auth';
import api from '../../../../services/api';
import PhotoContent from './PhotoContent';
import ProfileForm from './ProfileForm';

import { Container, Content, ProfileContent, EditForm } from './style';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Content>
        <ProfileContent>
          <PhotoContent user={user} />
        </ProfileContent>
        <EditForm>
          <ProfileForm />
        </EditForm>
      </Content>
    </Container>
  );
};

export default Profile;
