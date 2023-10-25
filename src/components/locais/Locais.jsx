import loja1 from "../../assets/loja1.png";
import loja2 from "../../assets/loja2.png";
import "./Locais.css";

function Locais() {
  return (
    <section className="container">
      <h2 className="locais-title">Locais</h2>
      <div className="locais-container">
        <div>
          <div className="locais-img-container">
            <img src={loja1} alt="" />
            <button className="btn-local-1">Ver mapa</button>
          </div>
          <div>
            <h3>Centro</h3>
            <p>Av. Moreira Lima, 462</p>
          </div>
        </div>
        <div>
          <div className="locais-img-container">
            <img src={loja2} alt="" />
            <button className="btn-local-2">Ver mapa</button>
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
