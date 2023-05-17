import React from 'react';
import styled from 'styled-components';
import Navbar from '../navbar';
import FooterNovo from '../footer_NOVO';
import bitcoin from '../../img/bitcoin_imb.svg'
import casas from '../../img/small_twon.svg'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;


const Card = styled.div`
  width: 35%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  font-family: 'Verdana';
`;

const CardHeader = styled.div`
  background-color: white;
  padding: 16px;
  text-align: center;
`;

const TextHeader = styled.div`
  margin: 0;
  font-size: 18px;
  background-color: white;
  border-bottom: 1px solid black;
  color: black;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display:  block;
  font-size: 14px;
  color: black;
  font-weight: bold;
  margin-bottom: 1px;
`;

const Input = styled.input`
  width: 95%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
`;

const Button = styled.input.attrs({ type: 'submit' })`
  padding: 12px 24px;
  margin-left: 13px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: black;
  color: #fff;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    background-color: #ccc;
    color: #333;
  }
`;

const ImagemReactBitcoin = styled.img`
        width: 400px;
        height: 300px;
        margin-right: 60px;       
    `;

const ImagemReactCasas = styled.img`
        width: 400px;
        height: 300px;
        margin-left: 60px;
    `;

const FormCadastro = () => {
  return (
    <>
    <Navbar />
        <Container>
            <ImagemReactBitcoin src={bitcoin} alt=''/>
            <Card>
            <CardHeader>
                <TextHeader>Cadastro</TextHeader>
            </CardHeader>
            <CardBody>
                <form action="#">
                <FormGroup>
                    <Label htmlFor="username">Nome:</Label>
                    <Input required name="username" id="username" type="text" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input required name="email" id="email" type="email" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Telefone:</Label>
                    <Input required name="email" id="email" type="email" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Cidade:</Label>
                    <Input required name="email" id="email" type="email" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Estado:</Label>
                    <Input required name="email" id="email" type="email" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Idade:</Label>
                    <Input required name="email" id="email" type="email" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Sexo:</Label>
                    <Input required name="email" id="email" type="email" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Motivo do contato:</Label>
                    <Input required name="email" id="email" type="email" />
                </FormGroup>
                <Button value="Enviar" />
                </form>
            </CardBody>
            </Card>
            <ImagemReactCasas src={casas} alt=''/>
        </Container>
    <FooterNovo />
    </>
  );
};

export default FormCadastro;
