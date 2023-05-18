import paineladmin from "../img/paineladmin.svg";
import Navbar from "../components/navbar";
import FooterNovo from "../components/footer_NOVO";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  width: 80;
  height: 80vh;
  display: flex;
  justify-content: space-between; /* Alinhamento do conteúdo */
  gap: 32px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column; 
  width: 50vw;
  justify-content: center;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: white;
  color: #9299A8;
  border-radius: 3px;
  border: 1px #9299A8 solid;
  cursor: pointer;

  &:hover {
    background-color: #FAFAFA;
  }
`;

const Title = styled.p`
  max-width: 660px;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #1C252C;
  text-align: center;
  margin-bottom: 0px;
  margin-left: 26px;
`;

function PainelAdmin() {
  const navigate = useNavigate();

  const handleButtonImoveis = () => {
    navigate("/cadastroimovel");
  };


  return (
    <>
      <Navbar />
      <MainContainer>
        <LeftContainer>
          <Title>Painel Administrativo</Title>
            <Img src={paineladmin} alt="" />
        </LeftContainer>
        <RightContainer>
          <ButtonContainer>
            <Button onClick={handleButtonImoveis} style={{ width: '180px' }}>Cadastro de Imóveis</Button>
            <Button  style={{ width: '180px' }}>Cadastro de Clientes</Button>
          </ButtonContainer>
        </RightContainer>
      </MainContainer>
      <FooterNovo />
    </>
  )
}

export default PainelAdmin;
