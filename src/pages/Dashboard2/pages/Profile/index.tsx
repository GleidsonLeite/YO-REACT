import { AxiosRequestConfig } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../../../hooks/Auth';
import api from '../../../../services/api';
import PhotoContent from './PhotoContent';
import ProfileForm from './ProfileForm';

import { Container, Content, ProfileContent, EditForm } from './style';

const Profile: React.FC = () => {
  const { user } = useAuth();

  const [photoSource, setPhotoSource] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${localStorage.getItem('@YO:token')}` },
      responseType: 'arraybuffer',
    };

    (async function getUserInvestmentsFromApi() {
      const response = await api.get(`/users/avatar/${user.id}`, config);
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      setPhotoSource(`data:;base64,${base64}`);
    })();
  }, [user.id]);

  useEffect(() => {
    setName(user.name);
  }, [user.name]);

  return (
    <Container>
      <Content>
        <ProfileContent>
          <PhotoContent name={user.name} photoSource={photoSource} />
        </ProfileContent>
        <EditForm>
          <ProfileForm />
        </EditForm>
      </Content>
    </Container>
  );
};

export default Profile;
