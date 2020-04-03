import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import HeroArea from './components/HeroArea/HeroArea';
import AboutArea from './components/AboutArea/AboutArea'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroArea />
      <AboutArea />
    </div>
  );
}

export default App;
