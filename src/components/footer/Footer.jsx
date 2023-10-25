import "./Footer.css";
import logo from "../../assets/amazonas.svg";

function Footer() {
  return (
    <footer className="footer-bg">
      <div className="footer container">
        <img src={logo} alt="" />
        <div className="footer-contato">
          <h3>Contato</h3>
          <ul>
            <li>82 99999-9999</li>
            <li>contato@amazonas.com</li>
            <li>instagram</li>
            <li>facebook</li>
          </ul>
        </div>
        <p>Amazonas © Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
