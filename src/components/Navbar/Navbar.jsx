import React from 'react';
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bro">
  <div className="container-fluid">
    <img src="./img/montañalogo.png" alt="" className='logo'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link A" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link A" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link A" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link A" href="#">About</a>
        </li>
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>

            
        </>
    );
}

export default Navbar;
