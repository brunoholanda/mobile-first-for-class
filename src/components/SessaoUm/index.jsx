import React from 'react'
import styled from 'styled-components'
import check from '../../../public/assets/icons/check-square.webp';
import setas from '../../../public/assets/icons/setas.webp';
import foto from '../../../public/assets/img/foto-01.webp';

const SessaoContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: var(--branco);

    .imagemGrande {
        width: 100%;
        max-width: 370px;
        height: 330px;
    }

    h2 {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        max-width: 290px;
        font-family: var(--fonte-principal);
    }

    .lista {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        width: 100%;
        max-width: 350px;
        margin: 35px 0 35px 35px;

        p {
            display: flex;
            align-items: center;
            font-size: 14px;
            font-family: var(--fonte-secundaria);
            margin: 0;

            img {
                width: 18px;
                height: 18px;
                margin-right: 10px;
            }

            span {
                font-weight: 700;
                color: var(--texto-secundario);
                margin-left: 7px;
            }
        }
    }

    .imagemSeta{ 
        width: 50px;
        height: 45px;
        margin-top: 14px;
        margin-bottom: 50px;
    }

`;

export default function SessaoUm() {
    return (
        <SessaoContainer>
            <img className='imagemGrande' loading='lazy' src={foto} alt="imagem com mosaico de fotos na praia" />
            <h2>Você receberá mais de
                100 presets profissionais
                para editar com 1 clique
            </h2>
            <div className='lista'>
                <p><img loading='lazy' src={check} alt="icone de check" />102 presets para <span>ANDROID</span></p>
                <p><img loading='lazy' src={check} alt="icone de check" />102 presets para <span>IPHONE</span></p>
                <p><img loading='lazy' src={check} alt="icone de check" />102 presets para <span>COMPUTADOR</span></p>
                <p><img loading='lazy' src={check} alt="icone de check" />Tutorial de <span>INSTALAÇÃO</span></p>
                <p><img loading='lazy' src={check} alt="icone de check" />Suporte  via <span>WHATSAPP</span></p>
                <p><img loading='lazy' src={check} alt="icone de check" />Acesso <span>VITALÍCIO + 2 BÔNUS</span></p>
                <p><img loading='lazy' src={check} alt="icone de check" />Área de membros  <span>PREMIUM</span></p>
            </div>
            <h2>
                Veja alguns exemplos de
                fotos com nossos
                Presets
            </h2>

            <img className='imagemSeta' loading='lazy' src={setas} alt="icone de seta" />
        </SessaoContainer>
    )
}
