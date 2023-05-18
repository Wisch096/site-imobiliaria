import styled from 'styled-components';
import Carousel from "../components/carousel";
import Card from "../components/card_imob";
import Navbar from '../components/navbar';
import Searchbar from '../components/searchbar';
import FooterNovo from '../components/footer_NOVO';
import axios from "axios";
import "normalize.css";
import { useState, useEffect } from 'react';

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: #F5F5F5;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  `;


function Home() {

  const [listImoveis, setListImoveis] = useState();
  console.log(listImoveis)

  useEffect(() => {
    axios.get("http://localhost:3002/getCards").then((response) => {
      setListImoveis(response.data);
    });
  }, []);

  return (
    <Container>
        <Navbar />
        <Carousel />
        <Searchbar />
      <ContainerCard>
        { typeof listImoveis !== "undefined" && listImoveis.map((value) => {
          return (
          <Card 
            key={value.id} 
            listCard={listImoveis} 
            setListCard={setListImoveis}
            id={value.id}
            propertyType={value.tipo}
            address={value.endereco}
            dados={value.dados}
            price={value.valor}
            imageUrl={value.imagem}
          />
          );
        })}
        
      </ContainerCard>
      <FooterNovo />
    </Container>


  )
}

export default Home;
