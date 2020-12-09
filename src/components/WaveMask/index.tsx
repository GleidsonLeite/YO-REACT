import React from 'react';

import { AbsoluteBottomImage } from './styles';

import waveImg from '../../assets/img/hero-bg-shape-1.svg';

const WaveMask: React.FC = () => (
  <AbsoluteBottomImage>
    <img src={waveImg} alt="wave shape" />
  </AbsoluteBottomImage>
);

export default WaveMask;
