import React from 'react';
import { MdPhotoCamera } from 'react-icons/md';

import { Container } from './styles';

export default function ImageInput() {
  return (
    <Container>
      <label htmlFor="file">
        <div>
          <MdPhotoCamera size={54} color="rgba(255, 255, 255, 0.3)" />
          <strong>Selecionar imagem</strong>
        </div>

        <input type="file" id="file" accept="image/*" />
      </label>
    </Container>
  );
}
