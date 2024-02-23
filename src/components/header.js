import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hval001: 1234,
      hstr001: 'Header123'
    }; 
  }

  w3_open() {
      document.getElementById("mySidebar").style.display = "block";
  }
 
  w3_close() {
      document.getElementById("mySidebar").style.display = "none";
  }
    
  render() {
    return (
      <div>
	  <nav class="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left App-w3-header" id="mySidebar">
	      <Link to="#" onClick={this.w3_close.bind(this)} class="w3-bar-item w3-button">X</Link>
      
	      <Link to="/" onClick={this.w3_close.bind(this)} class="w3-bar-item w3-button">Home</Link>
	      <Link to="/marsphotos" onClick={this.w3_close.bind(this)} class="w3-bar-item w3-button">Photos</Link>
	      <Link to="/marsnews" onClick={this.w3_close.bind(this)} class="w3-bar-item w3-button">News</Link>
      
	  </nav>


	  <div class="w3-bar w3-black w3-wide w3-padding w3-card">
	      <div class="w3-button w3-padding-16 w3-left" onClick={this.w3_open.bind(this)}>☰</div>
	      <Link to="/" class="w3-bar-item w3-button"><b>Mars Project</b></Link>
	      <div class="w3-right w3-hide-small">
		  <Link to="/" class="wd-bar-item w3-button">Home</Link>
		  <Link to="/marsphotos" class="wd-bar-item w3-button">Photos</Link>
		  <Link to="/marsnews" class="wd-bar-item w3-button">News</Link>	  
	      </div>
	  </div>


      </div>
    );
  }

}

export default Header;
