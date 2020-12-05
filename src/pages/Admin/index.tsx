import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import heroBackground from '../../assets/img/hero-bg-1.jpg';
import userImage from '../../assets/img/team-4.jpg';
import { UserData } from '../../hooks/Auth';
import api from '../../services/api';

interface RoleData {
  id: string;
  name: string;
  permission_value: number;
}

const Admin: React.FC = () => {
  const [clients, setClients] = useState<UserData[]>([]);
  const [roles, setRoles] = useState<RoleData[]>([]);
  const [isRolesLoading, setisRolesLoading] = useState(true);
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('@YO:token')}` },
    };

    api.get('/users/', config).then((response) => {
      const users = response.data;
      setClients(users);
    });
  }, []);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('@YO:token')}` },
    };

    api.get('/roles/', config).then((response) => {
      const rolesArray = response.data;
      setRoles(rolesArray);
      setisRolesLoading(false);
    });
  }, []);
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
                  <h1 className="text-white mb-0">Admin Page</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-member-section ptb-100 gray-light-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-8">
                <div className="section-heading text-center mb-5">
                  <h2>Clientes</h2>
                  <p className="lead">
                    Aqui são listados todos os usuarios da YO
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {clients.map((client) => (
                <div className="col-lg-3 col-sm-6">
                  <div className="single-team-member position-relative">
                    <div className="team-image">
                      <img
                        src={userImage}
                        alt={client.name}
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <Link to={`/user/${client.id}`}>
                      <div className="team-info text-white rounded-circle d-flex flex-column align-items-center justify-content-center">
                        <h5 className="mb-0">{client.name}</h5>
                        <h6>
                          {!isRolesLoading &&
                            roles.filter(
                              (role) => role.id === client.role_id,
                            )[0].name}
                        </h6>
                        <h6>{client.amount}</h6>
                        <h6>{client.activated ? 'Ativado' : 'Desativado'}</h6>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admin;
