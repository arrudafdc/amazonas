import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Locais from "./components/locais/Locais";
import Menu from "./components/menu/Menu";
import Produtos from "./components/produtos/Produtos";
import Sobre from "./components/sobre/Sobre";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Sobre />
      <Produtos />
      <Locais />
      <Footer />
    </>
  );
}

export default App;
