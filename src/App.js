import React from 'react';
import './App.css';

import { Link } from "react-router-dom";
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

	<Link to="/">Home</Link>,
	<Link to="/marsphotos">Photos</Link>,
	<Link to="/marsnews">News</Link>							  

	<Footer />
    </div>
  );

}

export default App;
