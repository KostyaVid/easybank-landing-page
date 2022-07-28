import React from 'react';
import './App.scss';
import Articles from './components/Articles/Articles';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
