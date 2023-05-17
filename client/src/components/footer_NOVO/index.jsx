import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 2rem;
  font-family: 'Verdana';
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    margin-right: 0;
  }
`;

const ColumnTitle = styled.h4`
  font-size: 16px;
  color: white;
  margin-bottom: 1rem;
`;

const ColumnList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ColumnListItem = styled.li`
  margin-bottom: 0.5rem;
  color: white;
  font-size: 13px;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

function FooterNovo() {
  return (
    <FooterContainer>
      <Column>
        <ColumnTitle>Quem Somos</ColumnTitle>
        <ColumnList>
          <ColumnListItem>Nossa História</ColumnListItem>
          <ColumnListItem>Nossa Equipe</ColumnListItem>
          <ColumnListItem>Clientes Satisfeitos</ColumnListItem>
        </ColumnList>
      </Column>
      <Column>
        <ColumnTitle>Contato</ColumnTitle>
        <ColumnList>
          <ColumnListItem>Endereço: Av. Principal, 123</ColumnListItem>
          <ColumnListItem>Telefone: (11) 1234-5678</ColumnListItem>
          <ColumnListItem>Email: contato@suaimobiliaria.com.br</ColumnListItem>
        </ColumnList>
      </Column>
      <Column>
        <ColumnTitle>Redes Sociais</ColumnTitle>
        <SocialLinksContainer>
          <SocialLink href="https://www.facebook.com">
            <FontAwesomeIcon icon={faSpotify} width={60}/>
          </SocialLink>
          <SocialLink href="https://www.twitter.com">
            <FontAwesomeIcon icon={faFacebook} width={60}/>
          </SocialLink>
          <SocialLink href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} width={60}/>
          </SocialLink>
        </SocialLinksContainer>
      </Column>
    </FooterContainer>
  );
}

export default FooterNovo;
