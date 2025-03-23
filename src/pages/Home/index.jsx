import React, { lazy, Suspense } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Loading from '../../components/Loading'

const Banner = lazy(() => import('../../components/Banner'))
const SessaoUm = lazy(() => import('../../components/SessaoUm'))
const SessaoDois = lazy(() => import('../../components/SessaoDois'))
const SessaoTres = lazy(() => import('../../components/SessaoTres'))


export default function Home() {
  return (
    <>
      <Cabecalho />
      <Suspense>
        <Banner />
      </Suspense>

      <Suspense>
        <SessaoUm />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <SessaoDois />
      </Suspense>

      <Suspense>
        <SessaoTres />
      </Suspense>

    </>
  )
}
