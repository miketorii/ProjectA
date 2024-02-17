import React from 'react';
import axios from 'axios'
import marslogo from '../resources/mars.png';

class Mars extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      val777: 123,
      str777: 'Mars'
    }; 
  }

  async changevalue()
  {
    try {
      const result = await axios({
	  method: 'get',
	  url: '/api/GetDevices',
	  headers: {'X-Mike-Sec' : '99999'}
      });
	      
      console.log(result)
     
      this.setState({str777: result.data});
      this.setState({val777: 111});
    } catch(err){
      console.log('ERROR!! occurred in Backend.')
      this.setState({val777: 5678});

    }
  }

  render() {
    return (
      <div>
	  <img src={marslogo} />
          <h1>val777 = {this.state.val777}</h1>
          <h1>Name = {this.state.str777}</h1>
          <button onClick={this.changevalue.bind(this)}>Change</button>
      </div>
    );
  }

}

export default Mars;
