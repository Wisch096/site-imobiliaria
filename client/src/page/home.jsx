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
  const [listImoveis, setListImoveis] = useState([]);
  const [filteredImoveis, setFilteredImoveis] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/getCards").then((response) => {
      setListImoveis(response.data);
      setFilteredImoveis(response.data);
    });
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredImoveis(listImoveis); // Mostra todos os imóveis se o campo de pesquisa estiver vazio
    } else {
      const filtered = listImoveis.filter((value) => {
        return (
          value.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          value.endereco.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setFilteredImoveis(filtered);
    }
  };

  return (
    <Container>
        <Navbar />
        <Carousel />
        <Searchbar onSearch={handleSearch} />
      <ContainerCard>
        {filteredImoveis.map((value) => {
          return (
            <Card
              key={value.id}
              listCard={filteredImoveis}
              setListCard={setFilteredImoveis}
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
