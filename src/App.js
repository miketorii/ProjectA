import React from 'react';
import './App.css';
import { useEffect, useState} from 'react';
import axios from 'axios';

import Header from './components/header';
import Footer from './components/footer';
//import Device from './components/device';

function App() {

  const [data, setResponse] = useState([]);

  useEffect( () => {
//    axios.get('/api/GetDevices')
    axios({
	method: 'get',
	url: '/api/GetDevices',
	headers: {'X-Mike-Sec' : '99999'}
    })
    .then( res => {
      setResponse(res.data);
      console.log(res);
      } )
    .catch( error => {
      const mydata = 'get error ' + error;
      setResponse(mydata); 
      console.log(error);
    } )
  
  }, []);

  return (
    <div className="App">
      <Header />
        <p>Hello Mike 999</p>
        <p>{data}</p>
      <Footer />
    </div>
  );
}

export default App;
