import styled from 'styled-components';
import Carousel from "../components/carousel";
import Card from "../components/card_imob";
import Navbar from '../components/navbar';
import Searchbar from '../components/searchbar';
import FooterNovo from '../components/footer_NOVO';
import "normalize.css";

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
  return (
    <Container>
        <Navbar />
        <Carousel />
        <Searchbar />
      <ContainerCard>
        <Card 
            propertyType="Casa" 
            address="Rua A, 123" 
            numBedrooms={3} 
            numBathrooms={2} 
            area={100} 
            price={1500} 
            imageUrl="teste1.jpg" 
        />
        <Card 
            propertyType="Apartamento" 
            address="Rua B, 234" 
            numBedrooms={3} 
            numBathrooms={2} 
            area={50} 
            price={3400} 
            imageUrl="teste2.jpg" 
        />
        <Card 
            propertyType="Casa" 
            address="Rua C, 345" 
            numBedrooms={4} 
            numBathrooms={3} 
            area={200} 
            price={2699} 
            imageUrl="casa3.jpg" 
        />
        <Card 
            propertyType="Casa" 
            address="Rua D, 456" 
            numBedrooms={2} 
            numBathrooms={3} 
            area={200} 
            price={3199} 
            imageUrl="teste3.jpg" 
        />
        
      </ContainerCard>
      <FooterNovo />
    </Container>


  )
}

export default Home;
