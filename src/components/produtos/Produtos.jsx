import "./Produtos.css";
import { PiToiletPaperDuotone } from "react-icons/pi";
import { LuCupSoda } from "react-icons/lu";
import { PiCouchBold } from "react-icons/pi";
import { FaCube } from "react-icons/fa";
import { PiRugBold } from "react-icons/pi";
import { LuHammer } from "react-icons/lu";

function Produtos() {
  return (
    <article id="produtos" className="produtos-bg">
      <div className=" produtos container">
        <h2 className="produtos-title">Nossos Produtos</h2>
        <ul>
          <li>
            <PiToiletPaperDuotone className="produto-icon" />
            <h3>Tecidos</h3>
            <p>
              Ampla gama de tecidos, incluindo algodão, seda, linho e muitos
              outros em diversas cores, padrões e texturas.
            </p>
          </li>
          <li>
            <LuCupSoda className="produto-icon" />
            <h3>Plásticos</h3>
            <p>
              Folhas de plástico e materiais plásticos transparentes, ideais
              para projetos de estofamento, revestimento e artesanato.
            </p>
          </li>
          <li>
            <PiCouchBold className="produto-icon" />
            <h3>Couros</h3>
            <p>
              Couros genuínos e sintéticos para projetos de moda e estofamento
              disponíveis para seu projeto.
            </p>
          </li>
          <li>
            <FaCube className="produto-icon" />
            <h3>Espumas</h3>
            <p>
              Espumas de diferentes densidades e tamanhos para estofamento de
              móveis, colchões, travesseiros e projetos de isolamento acústico.
            </p>
          </li>
          <li>
            <PiRugBold className="produto-icon" />
            <h3>Carpetes</h3>
            <p>
              Uma seleção de carpetes de alta qualidade com opções variadas de
              cores e texturas para uso em residências, escritórios e espaços
              comerciais.
            </p>
          </li>
          <li>
            <LuHammer className="produto-icon" />
            <h3>Acessórios</h3>
            <p>
              Uma ampla variedade de acessórios essenciais, como linhas,
              zíperes, botões, agulhas, elásticos, fitas e outros itens para
              costura e artesanato.
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Produtos;
