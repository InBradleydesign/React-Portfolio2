import React, { useState } from 'react';
import './CSS/App.css'
import Header from './componentes/Header';
import MainBanner from './componentes/MainBanner';
import AboutContainer from './componentes/AboutCont'
import WorkContainer from './componentes/WorkContainer'
import ContatoCont from './componentes/ContatoCont'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <MainBanner></MainBanner>
      <AboutContainer></AboutContainer>
      <hr id='divider' />
      <WorkContainer></WorkContainer>
      <ContatoCont></ContatoCont>
    </div>
  )
}

export default App
