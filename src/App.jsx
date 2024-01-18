import React from 'react'
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers'
import { Navbar,Brand,CTA, Article, Feature } from './components'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className='App'>
     <div className="gradient_bg">
        <Navbar />
        <Header />
     </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App