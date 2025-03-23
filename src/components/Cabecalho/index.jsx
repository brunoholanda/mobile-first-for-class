import React, { useState } from 'react'
import styled from 'styled-components'

const CabecalhoContainer = styled.header`
    background-color: var(--texto-secundario);
    height: 60px;
    width: 100%;
    max-width: 100vw;
    color: var(--branco);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    position: fixed;
    top: 0;

    .logo {
        margin-left: 20px;
        font-family: var(--fonte-principal);
    }

    .hambuerguer {
        width: 30px;
        height: 21px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 20px;
        cursor: pointer;

        div {
            background-color: var(--branco);
            height: 3px;
            border-radius: 2px;
            transition: all 0.3s ease;
            &:nth-child(1) {
                transform: ${({ menuAberto }) => menuAberto ? 'rotate(45deg) translate(8px, 8px)' : 'none'};
            }

            &:nth-child(2) {
                opacity: ${({ menuAberto }) => menuAberto ? 0 : 1};
            }

            &:nth-child(3) {
                transform: ${({ menuAberto }) => menuAberto ? 'rotate(-45deg) translate(8px, -8px)' : 'none'};
            }
        }
    }
`;

const MenuCelular = styled.nav`
    background-color: var(--texto-secundario);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    transform: translateY(${({menuAberto}) => menuAberto ? 0 : '-100%'});
    position: fixed;
    top: 60px;
    width: 100%;
    opacity: ${({menuAberto}) => menuAberto ? 1 : 0};
    z-index: 999;
    transition: all 0.3s ease;
    padding: 20px 0;

    a {
        font-family: var(--fonte-secundaria);
        text-decoration: none;
        color: var(--branco);
        font-size: 18px;
    }
`;

export default function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <>
        <CabecalhoContainer menuAberto={menuAberto}>
            <div className='logo'>LogoMarca</div>

            <div className='hambuerguer'
                onClick={() => setMenuAberto(!menuAberto)}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </CabecalhoContainer>
        <MenuCelular menuAberto={menuAberto}>
            <a href="">Home</a>
            <a href="">Sobre</a>
            <a href="">Servicos</a>
            <a href="">Contato</a>
        </MenuCelular>
        </>
    )
}
