import "./Menu.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Main() {
  const [text] = useTypewriter({
    words: [
      " tecidos",
      " plásticos",
      " couros",
      " espumas",
      " carpetes",
      " acessórios",
    ],
    loop: {},
  });

  return (
    <main id="main">
      <div className="main-text-container">
        <h1>
          Loja especializada em
          <div className="cursor-container">
            <span>{text}</span>
            <Cursor />
          </div>
        </h1>
      </div>
    </main>
  );
}

export default Main;
