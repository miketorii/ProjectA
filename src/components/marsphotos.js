import React from 'react';

import photosand from "../resources/photo0001.jpg";
import photorock from "../resources/photo0002.jpg";
import photogray from "../resources/photo0003.jpg";


class MarsPhotos extends React.Component {

  render() {
    return (
	<div class="App-photos">
	    <div class="w3-content w3-container w3-padding-64" id="marsphotos">
		<div class="w3-row-padding w3-center">
		    <div class="w3-col m3">
			<img src={photosand} onclick="onClick(this)" class="w3-hover-opacity App-w3-img" alt="sand" />
		    </div>

		    <div class="w3-col m3">
			<img src={photorock} onclick="onClick(this)" class="w3-hover-opacity App-w3-img" alt="rock" />
		    </div>

		    <div class="w3-col m3">
			<img src={photogray} onclick="onClick(this)" class="w3-hover-opacity App-w3-img" alt="gray" />
		    </div>
		</div>
	    </div>
	</div>

    );
  }

}

export default MarsPhotos;
