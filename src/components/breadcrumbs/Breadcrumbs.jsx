import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './breadcrumbs.css'; 

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const localizedNames = {
    home: 'Головна',
    about: 'Про нас',
    shop: 'Магазин',
    contact: 'Контакти',
  };

  return (
    <div className="breadcrumbs-container">
        <div className='conteiner'>
      <Link to="/" className="breadcrumb-link">{localizedNames.home}</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={name} className="breadcrumb-text">{localizedNames[name]}</span>
        ) : (
          <span key={name}>
            <Link to={routeTo} className="breadcrumb-link">{localizedNames[name]}</Link> /{' '}
            <span className="breadcrumb-separator"> / </span>
          </span>
        );
      })}
    </div>
    </div>
  );
};

export default Breadcrumbs;