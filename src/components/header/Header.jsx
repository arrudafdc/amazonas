import React, { useEffect } from "react";
import logo from "../../assets/amazonas.svg";
import "./Header.css";

function Header() {
  const [active, setActive] = React.useState(false);

  useEffect(() => {
    if (active) document.body.classList.add("body-active");
    else document.body.classList.remove("body-active");
  }, [active]);

  return (
    <div>
      <header id="header" className="container">
        <img src={logo} alt="" />
        <nav>
          <button
            className={active ? "nav-btn active" : "nav-btn"}
            onClick={() => setActive(!active)}
          >
            <span className="hamb"></span>
          </button>
          <ul id="nav" className={active ? "nav-active" : ""}>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Produtos</a>
            </li>
            <li>
              <a href="">Locais</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
