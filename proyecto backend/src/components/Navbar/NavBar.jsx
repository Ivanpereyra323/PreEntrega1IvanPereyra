import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Mi Tienda</Link> {}
      </div>
      <div className="navbar-links">
        <Link to="/category/1" className="navbar-link">Categoría 1</Link>
        <Link to="/category/2" className="navbar-link">Categoría 2</Link>
        <Link to="/category/3" className="navbar-link">Categoría 3</Link>
      </div>
      <div className="navbar-cart">
        <Link to="/cart">🛒 Carrito</Link>
      </div>
    </nav>
  );
};

export default Navbar;

