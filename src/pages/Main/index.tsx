import React from 'react';
import Header from '../../components/Header';
import heroBackground from '../../assets/img/app-hero-bg.jpg';
import WaveMask from '../../components/WaveMask';
import AppProductImage from '../../assets/img/app-product.png';

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <section
          className="hero-section pt-100 background-img"
          style={{
            background: `url(${heroBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundOrigin: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between py-5">
              <div className="col-md-6 col-lg-6">
                <div className="hero-content-left text-white">
                  <h1 className="text-white">
                    <span>Brainstorm </span>
                    for desired perfect Usability
                  </h1>
                  <p className="lead">
                    Our design projects are fresh and simple and will benefit
                    your business greatly. Learn more about our work!
                  </p>
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="hero-animation-img">
                  <img src={AppProductImage} alt="app" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <WaveMask />
        </section>
      </div>
    </>
  );
};

export default Main;
