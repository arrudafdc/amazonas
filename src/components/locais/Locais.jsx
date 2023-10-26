import loja1 from "../../assets/loja1.png";
import loja2 from "../../assets/loja2.png";
import "./Locais.css";

function Locais() {
  return (
    <section id="locais" className="container">
      <h2 className="locais-title">Locais</h2>
      <div className="locais-container">
        <div>
          <div className="locais-img-container">
            <img src={loja1} alt="" />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.google.com/maps/place/Amazonas+Tecidos/@-9.6636864,-35.7412891,15z/data=!4m2!3m1!1s0x0:0x141430848b8ddfdd?sa=X&ved=2ahUKEwjIj4vt_5OCAxX5qZUCHZR0ABgQ_BJ6BAhFEAA&ved=2ahUKEwjIj4vt_5OCAxX5qZUCHZR0ABgQ_BJ6BAhWEAg"
            >
              <button className="btn-local-1">Ver mapa</button>
            </a>
          </div>
          <div>
            <h3>Centro</h3>
            <p>Av. Moreira Lima, 462</p>
          </div>
        </div>
        <div>
          <div className="locais-img-container">
            <img src={loja2} alt="" />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.google.com/maps/place/Amazonas+Tecidos/@-9.5857801,-35.7631862,15z/data=!4m2!3m1!1s0x0:0x76256d0ef3372764?sa=X&ved=2ahUKEwjqyrTVgJSCAxUTrpUCHfcoAJ8Q_BJ6BAhDEAA&ved=2ahUKEwjqyrTVgJSCAxUTrpUCHfcoAJ8Q_BJ6BAhPEAg"
            >
              <button className="btn-local-2">Ver mapa</button>
            </a>
          </div>
          <div>
            <h3>Tabuleiro</h3>
            <p>Av. Durval de Góes Monteiro, 1116</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locais;
