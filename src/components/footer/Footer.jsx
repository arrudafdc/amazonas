import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-bg">
      <div className="footer container">
        <h3>Amazonas Tecidos</h3>
        <div className="footer-contato">
          <h3>Contato</h3>
          <ul>
            <li>82 3326-2370 (centro)</li>
            <li>82 3432-9530 (tabuleiro)</li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/amazonastecidos.mcz/"
              >
                instagram
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/amazonastecidos.mcz/"
              >
                facebook
              </a>
            </li>
          </ul>
        </div>
        <p>Amazonas © Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
