import { AxiosRequestConfig } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { MdPerson } from 'react-icons/md';
import { UserData } from '../../../../../hooks/Auth';
import { useToast } from '../../../../../hooks/Toast';
import api from '../../../../../services/api';

import { Container, Content, Photo, NameDiv } from './style';

interface PhotoContentProps {
  user: UserData;
}

const PhotoContent: React.FC<PhotoContentProps> = ({ user }) => {
  const { addToast } = useToast();
  const [photoSource, setPhotoSource] = useState('');
  const [name, setName] = useState('');

  const getPhoto = useCallback(async () => {
    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${localStorage.getItem('@YO:token')}` },
      responseType: 'arraybuffer',
    };

    (async function getUserAvatarFromApi() {
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

  const handleOnChangeUploadPhoto = useCallback(
    async (event) => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
          responseType: 'blob',
        },
      };

      const formData = new FormData();
      formData.append('file', event.target.files?.[0]);

      await api.patch('users/avatar', formData, config);
      await getPhoto();
      addToast({
        title: 'Parabéns',
        description: 'Foto de perfil alterada com sucesso',
        type: 'success',
      });
    },
    [addToast, getPhoto],
  );

  useEffect(() => {
    getPhoto();
  }, [getPhoto]);

  useEffect(() => {
    setName(user.name);
  }, [user.name]);

  return (
    <Container>
      <Content>
        <Photo htmlFor={user.id}>
          {photoSource ? (
            <img src={photoSource} alt="ProfilePhoto" />
          ) : (
            <MdPerson />
          )}
        </Photo>
        <input type="file" id={user.id} onChange={handleOnChangeUploadPhoto} />

        <NameDiv>
          <h3>{name}</h3>
        </NameDiv>
      </Content>
    </Container>
  );
};

export default PhotoContent;
