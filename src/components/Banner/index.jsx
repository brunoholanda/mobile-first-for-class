import React from 'react'
import styled from 'styled-components'
import banner from '../../../public/assets/img/banner.webp';

const BannerContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 60px;

    h1 {
        color: var(--branco);
        font-family: var(--fonte-principal);
        font-size: 30px;
        line-height: 32px;

        span {
            color: var(--texto-secundario);
        }
    }

    p {
        color: var(--branco);
        font-family: var(--fonte-secundaria);
        font-size: 11px;
        line-height: 18px;
        max-width: 350px;
    }

    img {
        width: 100%;
        max-width: 380px;
        height: 410px;
        border-radius: 8px;
    }

`;

export default function Banner() {
    return (
        <BannerContainer>
            <h1>Suas fotos com<br />
                <span> edição profissional</span>
                <br /> em apenas 1 clique</h1>
            <p>Tenha acesso a mais de 100 presets prontos que vão deixar
                suas fotos com qualidade de estúdio, usando o Lightroom
                gratuito e sem precisar saber nada de edição de fotos.</p>
            <img src={banner} alt="homem de camisa vermelha" />
        </BannerContainer>
    )
}
