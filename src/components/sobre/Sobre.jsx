import "./Sobre.css";
import { BsWhatsapp } from "react-icons/bs";

function Sobre() {
  return (
    <section id="sobre" className="sobre container">
      <h2 className="sobre-title">Produtos para tudo e todos. </h2>
      <div className="sobre-text-container">
        <p className="sobre-text">
          Com uma equipe experiente e prestativa, a Amazonas está comprometida
          em fornecer assistência personalizada aos seus clientes, ajudando-os a
          escolher os materiais ideais para seus projetos específicos.
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5582988872301"
        >
          <button className="btn-contato">
            Entre em contato
            <BsWhatsapp className="zap" />
          </button>
        </a>
      </div>
    </section>
  );
}

export default Sobre;
