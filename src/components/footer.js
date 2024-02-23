import React from 'react';

import { Link } from 'react-router-dom';

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
      <div>
	  <footer class="w3-center w3-black w3-padding-64 w3-hover-opacity-off">
	      <Link to="/" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>Back to Home</Link>
	      <div class="w3-xlarge w3-section">
	      <i class="fa fa-facebook-official w3-hover-opacity"></i>
	      <i class="fa fa-instagram w3-hover-opacity"></i>
	      <i class="fa fa-snapchat w3-hover-opacity"></i>
              <i class="fa fa-pinterest-p w3-hover-opacity"></i>
	      <i class="fa fa-twitter w3-hover-opacity"></i>
	      <i class="fa fa-linkedin w3-hover-opacity"></i>
	      </div>
	      <p>Powered by Mike Inc.</p>
	  </footer>
      </div>
    );
  }

}

export default Footer;
