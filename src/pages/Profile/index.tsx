import React, { useCallback, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Header from '../../components/Header';

import heroBackground from '../../assets/img/hero-bg-1.jpg';
import profilePhoto from '../../assets/img/team-1.jpg';
import { UserData } from '../../hooks/Auth';
import api from '../../services/api';
import Button from '../../components/Button';

interface Investment {
  value: string;
  currency: string;
  confirmed: boolean;
  id: string;
  created_at: string;
  deposit_slip: string;
}

interface RouteParams {
  id: string;
}

const Profile: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [user, setUser] = useState<UserData>({} as UserData);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [role, setRole] = useState('');
  const [userIsactivated, setUserIsactivated] = useState(false);
  const [investments, setInvestments] = useState<Investment[]>([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('@YO:token')}` },
    };

    api.get(`/users/${id}`, config).then((response) => {
      const userFromApi = response.data;
      setUser(userFromApi);
      setIsUserLoading(false);
      setUserIsactivated(user.activated);
    });

    if (!isUserLoading) {
      api.get(`/roles/${user.role_id}`, config).then((response) => {
        const { name } = response.data;
        setRole(name);
      });

      api.get(`/investments/${user.id}`, config).then((response) => {
        setInvestments(response.data);
      });
    }
  }, [id, isUserLoading, user]);

  const handleActivateButton = useCallback(() => {
    console.log(`/users/activate/${id}`);
    if (!isUserLoading) {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
        },
      };
      api
        .patch(`/users/activate/${user.id}`, {}, config)
        .then((response) => {
          const { activated } = response.data;
          setUserIsactivated(activated);
        })
        .catch((error) => {
          console.log(`Axios request failed: ${error}`);
          if (error.response) {
            console.log('erro na resposta');
          } else if (error.request) {
            // do something else
            console.log('erro na requisição');
          } else if (error.message) {
            // do something other than the other two
            console.log('erro na mensagem');
          }
        });
    }
  }, [id, isUserLoading, user.id]);

  return (
    <>
      <Header />
      <div className="main">
        <section
          className="hero-section ptb-100 background-img"
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
                <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                  <h1 className="text-white mb-0">Perfil</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-single-section ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-sm-12 col-lg-5">
                <div className="team-single-img">
                  <img
                    src={profilePhoto}
                    alt="member"
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-6">
                <div className="team-single-text">
                  <div className="team-name mb-4">
                    <h4 className="mb-1">{user.name}</h4>
                    <span>{role}</span>
                  </div>
                  <ul className="team-single-info">
                    <li>
                      <strong>Phone: </strong>
                      <span>(+123) 123-456-789</span>
                    </li>
                    <li>
                      <strong>Email: </strong>
                      <span>{user.email}</span>
                    </li>
                    <li>
                      <strong>Carteira: </strong>
                      <span>{user.amount}</span>
                    </li>
                  </ul>
                  <div className="text-content mt-20">
                    <p>
                      Authoritatively deploy fully researched leadership skills
                      whereas one-to-one best practices. Monotonectally
                      aggregate virtual imperatives and accurate technology.
                      Dynamically streamline progressive sources before user
                      friendly.
                    </p>
                  </div>
                  <ul className="team-social-list list-inline mt-4">
                    <li className="list-inline-item">
                      <a href="socialNetwork" className="color-primary">
                        <span className="ti-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="socialNetwork" className="color-primary">
                        <span className="ti-instagram" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="socialNetwork" className="color-primary">
                        <span className="ti-dribbble" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="socialNetwork" className="color-primary">
                        <span className="ti-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="download-btn mt-4">
                  <Button
                    onClick={handleActivateButton}
                    className={`btn ${
                      userIsactivated ? 'solid-btn' : 'outline-btn'
                    } mr-3`}
                  >
                    {`${userIsactivated ? 'Desativar' : 'Ativar'}`}
                  </Button>
                </div>
                <div className="download-btn mt-4">
                  <Button
                    onClick={handleActivateButton}
                    className={`btn ${
                      userIsactivated ? 'solid-btn' : 'outline-btn'
                    } mr-3`}
                  >
                    {`${userIsactivated ? 'Desativar' : 'Ativar'}`}
                  </Button>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12 col-sm-12 col-12">
                <div className="section-heading">
                  <h5>Investimentos</h5>
                  <div className="section-heading-line-left" />
                </div>
                <ul className="list-unstyled">
                  {investments.map((investment) => (
                    <li className="py-2" key={investment.id}>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="badge badge-primary mr-3">
                            <span
                              className={
                                investment.confirmed ? 'ti-check' : 'ti-reload'
                              }
                            />
                          </div>
                        </div>
                        <div className="align-items-center">
                          <p className="mb-0">
                            {`Investimento com valor de ${investment.value} criado em ${investment.created_at}`}
                          </p>
                          <Button
                            onClick={() => {
                              const config = {
                                headers: {
                                  Authorization: `Bearer ${localStorage.getItem(
                                    '@YO:token',
                                  )}`,
                                  responseType: 'blob',
                                },
                              };
                              api
                                .get(
                                  `/investments/download/${investment.id}`,
                                  config,
                                )
                                .then((response) => {
                                  const url = window.URL.createObjectURL(
                                    new Blob([response.data]),
                                  );
                                  const link = document.createElement('a');
                                  link.href = url;
                                  link.setAttribute(
                                    'download',
                                    `${investment.deposit_slip}`,
                                  );
                                  document.body.appendChild(link);
                                  link.click();
                                });
                            }}
                            className="btn outline-btn"
                          >
                            Comprovante
                          </Button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
