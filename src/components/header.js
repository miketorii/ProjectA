import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hval001: 1234,
      hstr001: 'Header123'
    }; 
  }

  changevalue() {
    this.setState({hval001: 567});

    var msg = 'Tom Header';
    this.setState({hstr001: msg});
  }

  render() {
    return (
      <div className='App-headerfooter'>
          <h3>hval = {this.state.hval001}, hstr = {this.state.hstr001}
          <button onClick={this.changevalue.bind(this)}>Change</button></h3>
      </div>
    );
  }

}

export default Header;
