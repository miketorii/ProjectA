import React from 'react';

import photorock from "../resources/photo0002.jpg";

class MarsNews extends React.Component {

  render() {
    return (
	<div class='App-News App-clearfix'>

	    <div class="w3-col m6 w3-center w3-padding-large">
	    <p><b><i class="fa fa-user w3-margin-right"></i>Rocks</b></p>

	    <img src={photorock} class="w3-round w3-image w3-hover-opacity-off" alt="rock" width="400" height="300" />
	    </div>

	    <div class="w3-col m6 w3-hide-small w3-padding-large">
		
	    <p>Mars is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron(III) oxide dust, giving it the nickname "the Red Planet".Mars is among the brightest objects in Earth's sky and its high-contrast albedo features have make it a common subject for telescope viewing. It is classified as a terrestrial planet and is the second smallest of the Solar System's planets with a diameter of 6,779 km (4,212 mi). In terms of orbital motion, a Martian solar day (sol) is equal to 24.5 hours and a Martian solar year is equal to 1.88 Earth years (687 Earth days). Mars has two natural satellites that are small and irregular in shape: Phobos and Deimos.</p>
	    
	    </div>

	</div>
    );
  }

}

export default MarsNews;
