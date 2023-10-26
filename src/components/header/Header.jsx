import React, { useEffect } from "react";
import logo from "../../assets/amazonas.svg";
import "./Header.css";

function Header() {
  const [active, setActive] = React.useState(false);

  useEffect(() => {
    if (active) document.body.classList.add("body-active");
    else document.body.classList.remove("body-active");
  }, [active]);

  function closeMobile() {
    if (window.innerWidth <= 900) setActive(!active);
  }

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
            <li onClick={closeMobile}>
              <a href="#sobre">Sobre</a>
            </li>
            <li onClick={closeMobile}>
              <a href="#produtos">Produtos</a>
            </li>
            <li onClick={closeMobile}>
              <a href="#locais">Locais</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
