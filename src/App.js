import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import HeroArea from './components/HeroArea/HeroArea';
import AboutArea from './components/AboutArea/AboutArea';
import BenefitsArea from './components/BenefitsArea/BenefitsArea';
import ServicesArea from './components/ServicesArea/ServicesArea';
import FeedbackArea from './components/FeedbackArea/FeedbackArea';
import ContactArea from './components/ContactArea/ContactArea';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroArea />
      <AboutArea />
      <BenefitsArea />
      <ServicesArea />
      <FeedbackArea />
      <ContactArea />
    </div>
  );
}

export default App;
