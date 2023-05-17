import paineladmin from "../img/paineladmin.svg";
import Navbar from "../components/navbar";
import FooterNovo from "../components/footer_NOVO";
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 1080px;
  height: 500px;
  object-fit: contain;
`;

const Button = styled.div`
  margin-bottom: 48px;
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
`;

function PainelAdmin() {
    return (
        <>
            <Navbar />
                <MainContainer>
                    <Title>Painel Administrativo</Title>
                        <ImageContainer>
                            <Img src={paineladmin} alt="" />
                        </ImageContainer>
                </MainContainer>
            <FooterNovo />
        </>
    )
}

export default PainelAdmin;