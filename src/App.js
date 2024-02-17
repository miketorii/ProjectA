import React from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Mars from './components/mars';

function App() {

  return (
    <div className="App">
      <Header />
      <Mars />
      <Footer />
    </div>
  );

}

export default App;
