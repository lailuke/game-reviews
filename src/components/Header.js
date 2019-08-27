import React from "react";

const Header = () => (
  <header>
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" href="/">
          <h1>Game Reviews</h1>
        </a>
      </li>
    </ul>
    <nav className="nav nav-pills nav-justified">
      <a className="nav-item nav-link" href="/pc">
        PC
      </a>
      <a className="nav-item nav-link" href="/console">
        Console
      </a>
      <a className="nav-item nav-link" href="/vr">
        VR
      </a>
    </nav>
  </header>
);

export default Header;
