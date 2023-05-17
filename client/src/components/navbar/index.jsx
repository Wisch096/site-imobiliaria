import styled from "styled-components";
import { Link, useNavigate  } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 4px;
  font-size: 17px;
  font-family: 'Verdana';
`;

const Logo = styled.h3`
  margin-left: 16px;
  color: white;
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
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginButton = styled.button`
  background-color: white;
  border: 2px;
  font-size: 16px;
  font-family: 'Verdana';
  color: black;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 16px;
`;

function Navbar() {

  const { signed, signup, signout } = useAuth();
  const navigate = useNavigate();
  const [logoutClicked, setLogoutClicked] = useState(false);

  const handleSignout = () => {
    signout();
    setLogoutClicked(true);
  };

   if (logoutClicked) {
    navigate('/');
  }

  return (
    <NavContainer>
      <Logo>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
          M&amp;L
        </Link>
      </Logo>
      <NavLinks>
        <NavLink>
          <Link to="/">Página inicial</Link>
        </NavLink>
        <NavLink>
          <Link to="/blog">Blog</Link>
        </NavLink>
        <NavLink>
          <Link to="/cadastro">Cadastro</Link>
        </NavLink>
        <NavLink>
          <Link to="/politicadeprivacidade">Política de privacidade</Link>
        </NavLink>
        {signed && (
          <NavLink>
            <Link to="/paineladmin">Painel Administrativo</Link>
          </NavLink>
        )}
      </NavLinks>
      <div>
        {signed ? (
          <LoginButton onClick={handleSignout}>Logout</LoginButton>
        ) : (
          <Link to="/login">
            <LoginButton>Login</LoginButton>
          </Link>
        )}
      </div>
    </NavContainer>
  );
}

export default Navbar;
