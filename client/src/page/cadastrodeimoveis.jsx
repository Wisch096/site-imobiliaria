import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cadastro from "../img/img_cadastro.png"
import FooterNovo from "../components/footer_NOVO";
import Navbar from "../components/navbar";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  padding: 16px;
  border-radius: 5px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 16px;
  margin-top: 100px;
`;

const RightContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  width: 500px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #1c252c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
`;

const CadastroImovel = () => {

    const [tipo, setTipo] = useState("");
    const [endereco, setEndereco] = useState("");
    const [dados, setDados] = useState("");
    const [valor, setValor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Aqui você pode fazer a chamada para o banco de dados usando o Axios
        // e enviar os dados para serem armazenados.
      
        const data = {
          tipo: tipo,
          endereco: endereco,
          dados: dados,
          valor: valor
        };
      
        axios.post("http://localhost:3002/register", data)
          .then((response) => {
            console.log(response.data);
            // Faça qualquer ação adicional necessária após o envio dos dados
          })
          .catch((error) => {
            console.error(error);
            // Lide com o erro de forma apropriada
          });
      };

  return (
    <>
    <Navbar />
    <Container>
      <LeftContainer>
        <Title>Cadastro de Imóvel</Title>
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Tipo (Apartamento, Casa, etc)"
                value={tipo}
                onChange={(event) => setTipo(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Endereço"
                value={endereco}
                onChange={(event) => setEndereco(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Dados"
                value={dados}
                onChange={(event) => setDados(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Valor"
                value={valor}
                onChange={(event) => setValor(event.target.value)}
            />
            <Input type="file" accept="image/*" />
        </form>
        <Button onClick={handleSubmit} type="submit">Cadastrar</Button>
      </LeftContainer>
      <RightContainer><img src={cadastro} alt="" width={600}/></RightContainer>
    </Container>
    <FooterNovo />
    </>
  );
};

export default CadastroImovel;
