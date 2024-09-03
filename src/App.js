import React from 'react'
import Header from './components/Header'
import Corpo from './components/Corpo'
import Dados from './components/Dados'

export default function App() {
  const cnl = 'Canal CFB Cursos'
  const yt = 'youtube.com/watch?v=1LhX2u6_BJE&list=PLx4x_zx8csUh752BVDGZkxYpY9lS40fyC'
  const crs = 'REACT'
  return(
    <>
    <Header/>
    <Corpo/>
    <Dados
      canal={cnl}
      youtube={yt}
      curso={crs}
    />
    </>
  )
}


