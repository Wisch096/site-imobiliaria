import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/home";
import Cadastro from "../page/cadastro";
import SigIn from "../page/Sigin";
import Blog from "../page/blog";
import Signup from "../page/Sigup";
import PoliticaDePrivacidade from "../page/politicadeprivacidade";
import PainelAdmin from "../page/paineladmin";
import CadastroImovel from "../page/cadastrodeimoveis";

const Private = ({ Item }) => {
  const signed = true;

  return signed > 0 ? <Item /> : <SigIn />
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<SigIn />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/politicadeprivacidade" element={<PoliticaDePrivacidade />} />
        <Route path="/paineladmin" element={<Private Item={PainelAdmin}/>} />
        <Route path="/cadastroimovel" element={<Private Item={CadastroImovel}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

