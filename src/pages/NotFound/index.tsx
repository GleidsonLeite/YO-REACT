import React from 'react';
import { Link } from 'react-router-dom';

import heroBackground from '../../assets/img/app-hero-bg.jpg';

const NotFound: React.FC = () => {
  return (
    <div className="main">
      <section
        className="hero-section ptb-100 background-img full-screen"
        style={{
          background: `url(${heroBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundOrigin: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-9 col-lg-7">
              <div className="error-content text-center text-white">
                <div className="notfound-404">
                  <h1 className="text-white">404</h1>
                </div>
                <h3 className="text-white">Sorry, something went wrong</h3>
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>
                <Link to="/" className="btn app-store-btn">
                  Go To Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default NotFound;
