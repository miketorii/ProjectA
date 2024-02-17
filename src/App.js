import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import axios from 'axios';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Mike 999
        </p>
        <p>
          {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
