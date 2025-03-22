import React from 'react'
import styled from 'styled-components'
import praia from '../../../public/assets/img/foto-02.webp';
import casamento from '../../../public/assets/img/foto-03.webp';
import montanha from '../../../public/assets/img/foto-04.webp';

const SessaoContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 280px;
        height: 280px;
        margin-bottom: 15px;
    }
`;

export default function SessaoDois() {
  return (
    <SessaoContainer>
        <img src={praia} alt="foto de homem descendo para a praia" />
        <img src={casamento} alt="foto de casamento" />
        <img src={montanha} alt="foto de montanha" />
    </SessaoContainer>
  )
}
