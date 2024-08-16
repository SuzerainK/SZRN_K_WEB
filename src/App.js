import React from 'react';

import { Header, Works, Skills, About, Footer } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Works />
      <Skills />
      <About />
      <Footer />
    </div>
  )
}

export default App;
