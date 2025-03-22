import React from 'react'
import Banner from '../../components/Banner'
import SessaoUm from '../../components/SessaoUm'
import SessaoDois from '../../components/SessaoDois'
import SessaoTres from '../../components/SessaoTres'

export default function Home() {
  return (
    <>
        <Banner />
        <SessaoUm />
        <SessaoDois />
        <SessaoTres />
    </>
  )
}
