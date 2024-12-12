import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Mi Tienda</a>
        <div className="d-flex">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;