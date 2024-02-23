import React from 'react';
import './App.css';

import { Routes, Route } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';

import Mars from './components/mars';
import MarsPhotos from './components/marsphotos';
import MarsNews from './components/marsnews';

function App() {

  return (
    <div className="App">
	<Header />

	<Routes>
	    <Route exact path="/" element=<Mars /> />
	    <Route path="/marsphotos" element=<MarsPhotos /> />
	    <Route path="/marsnews" element=<MarsNews /> />
	</Routes>

	<Footer />
    </div>

  );

}

export default App;
