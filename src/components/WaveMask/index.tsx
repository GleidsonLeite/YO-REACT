import React from 'react';

import waveImg from '../../assets/img/hero-bg-shape-1.svg';

const WaveMask: React.FC = () => (
  <div className="bottom-img-absolute">
    <img src={waveImg} alt="wave shape" className="img-fluid" />
  </div>
);

export default WaveMask;
