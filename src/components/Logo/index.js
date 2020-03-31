import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Logo = props => {
  return (
    <Link to="/">
      <div className="Logo">
        <img src={logo} alt="Granite" />
      </div>
    </Link>
  );
};

export default Logo;
