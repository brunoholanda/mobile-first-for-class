import React from 'react'
import styled from 'styled-components';
import check from '../../../public/assets/icons/check.webp';
import star from '../../../public/assets/icons/star.webp';
import seta from '../../../public/assets/icons/seta.webp';

const SessaoContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--branco);
    text-align: center;

    h2 {
        font-size: 26px;
        font-weight: 700;
        max-width: 370px;
        margin-bottom: 50px;
        font-family: var(--fonte-principal);

        span {
            color: var(--texto-secundario);
            margin-right: 7px;
        }
    }

    .card {
        width: 100%;
        max-width: 370px;
        border-radius: 10px;
        overflow: hidden;

        h3 {
            font-size: 20px;
            font-weight: 600;
            background-color: var(--texto-secundario);
            font-family: var(--fonte-secundaria);
            padding: 18px;
            margin: 0;
        }

        h4 {
            font-size: 48px;
            font-weight: 700;
            background-color: var(--branco);
            color: var(--preto);
            font-family: var(--fonte-secundaria);
            padding: 15px;
            margin: 0;
        }
    }

    .informacoes {
        display: flex;
        justify-content: space-between;
        max-width: 370px;
        width: 100%;
        margin-top: 40px;

        p {
            font-size: 12px;
            font-weight: 400;
            font-family: var(--fonte-secundaria);
            padding: 15px;
            margin: 0;
            display: flex;
            align-items: center;
            gap: 8px;

            img {
                width: 25px;
                height: 25px;
            }
        }
    }

    .campos {
        display: flex;
        align-items: center;
        margin: 20px 0;

        h5 {
            font-size: 15px;
            font-weight: 400;
            font-family: var(--fonte-secundaria);
            border: 2px solid var(--texto-secundario);
            padding: 5px 75px;
            border-radius: 10px;
        }

        img {
            background: var(--texto-secundario);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: absolute;
            left: 370px;
        }
    }
`;

export default function SessaoTres() {
    return (
        <SessaoContainer>
            <h2>
                Imagine como <span> suas próximas
                    fotos ficarão incríveis</span>
                com esses  <span>Presets</span>
                profissionais!
            </h2>

            <div className='card'>
                <h3>Acesso vitalício por apenas</h3>
                <h4>47,00</h4>
            </div>

            <div className='informacoes'>
                <p><img loading='lazy' src={check} alt="icone de check simples" />Compra <strong>Segura</strong> </p>
                <p><img loading='lazy' src={star} alt="icone de estrela" />7 dias de  <strong>Garantia</strong> </p>
            </div>

            <div className='campos'>
                <h5>Preencha os campos abaixo</h5>
                <img loading='lazy' src={seta} alt="icone de seta" />
            </div>
        </SessaoContainer>
    )
}
