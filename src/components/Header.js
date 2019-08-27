import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <a href="/">
      <h1>Game Reviews</h1>
    </a>
    <NavLink to="/pc" activeClassName="is-active" exact={true}>
      PC
    </NavLink>
    <NavLink to="/console" activeClassName="is-active">
      Console
    </NavLink>
    <NavLink to="/vr" activeClassName="is-active">
      VR
    </NavLink>
  </header>
);

export default Header;
