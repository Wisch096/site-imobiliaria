import React from 'react';
import styled from 'styled-components';


const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  padding: 1rem;
  font-size: 25px;
  font-family: 'Verdana';
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
    margin-left: 1rem;
    
    
& > a {
  color: white;
  text-decoration: none;
&:hover {
    text-decoration: underline;
  }
}
& > p {
    font-size: small;
}
`;

const FooterText = styled.p`
  font-size: 1.2rem;
  color: #777;
  text-align: center;
`;

function Footer() {
    return (
        <NavContainer>
            <NavLinks>
        <NavLink>
          <a href="#">Quem somos</a>
          <p>Imobiliaria M & L "A garantia de um futuro melhor"</p>
        </NavLink>
        <NavLink>
          <a href="#">Contato</a>
          <p>(77)998726000</p>
          <FooterText>
        © 2023 Sua Imobiliária. Todos os direitos reservados. Desenvolvido por{' '}
        </FooterText>
        </NavLink>
      </NavLinks>
        </NavContainer>
    );
}

export default Footer;
