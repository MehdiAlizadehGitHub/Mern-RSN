import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to='/' exact activeClassName="active-left-nav">
            <img src="./img/icons/home.png" alt="home"/>
          </NavLink>
          <br/>
          <NavLink to='/trending' exact activeClassName="active-left-nav">
            <img src="./img/icons/rocket.png" alt="home"/>
          </NavLink>
          <br/>
          <NavLink to='/profil' exact activeClassName="active-left-nav">
            <img src="./img/icons/user.png" alt="home"/>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;