import React from "react";
import "./style.css"
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="">item1</a>
            </li>
            <li>
              <a href="">item2</a>
            </li>
            <li>
              <a href="">item3</a>
            </li>
            <li>
              <a href="">item4</a>
            </li>
            <li>
              <a href="">item5</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
