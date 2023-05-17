import styled from "styled-components";
import { useState } from "react";
import ansosa from "../../img/undraw_sweet_home_dkhr.svg"


    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        font-family: 'Verdana';
    `;

    const Titulo = styled.h1`
        display: flex;
        justify-content: center;
    `;

    const SearchBar = styled.div`
        display: flex;
        align-items: center;
        width: 300px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
    `;

    const SearchInput = styled.input`
        border: none;
        background-color: #F5F5F5;
        flex: 1;
        margin-left: 8px;
        font-size: 16px;
        &:focus {
        outline: none;
        }
    `;

    const Subtitulo = styled.h3`
        color: #808080;
    `

    const ImagemReact = styled.img`
        width: 400px;
        height: 300px;
    `

    function Pesquisa() {

        const [searchTerm, setSearchTerm] = useState('');
    
        const handleChange = (event) => {
        setSearchTerm(event.target.value);
        };


        return (
        <Container>
            <ImagemReact src={ansosa} alt="" />
            <Titulo>M&L Imobiliária</Titulo>
            <Subtitulo>Encontre a casa dos seus sonhos para comprar ou alugar conosco.</Subtitulo>
            <SearchBar>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <SearchInput
                type="text"
                placeholder="Digite sua pesquisa"
                value={searchTerm}
                onChange={handleChange}
            />
            </SearchBar>
        </Container>
        );
    }
  
    export default Pesquisa;