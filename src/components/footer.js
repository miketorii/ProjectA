import React from 'react';

class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fval001: 7777,
      fstr001: 'Mike Footer'
    }; 
  }

  changevalue() {
    this.setState({fval001: 567});

    var msg = 'Tom Footer';
    this.setState({fstr001: msg});
  }

  render() {
    return (
      <div className='App-footer'>
          <h3>fval001 = {this.state.fval001}, fstr001 = {this.state.fstr001}
          <button onClick={this.changevalue.bind(this)}>Change</button></h3>
      </div>
    );
  }

}

export default Footer;
