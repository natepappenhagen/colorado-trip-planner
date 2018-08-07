
import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
  render() {

    // let quakeMarkers = this.props.quakesData.map( ( quake, index ) =>
    //   (
    //     <Marker
    //       key={index}
    //       title={quake.properties.place}
    //       name={quake.properties.place}
    //       position={{
    //         lat: quake.geometry.coordinates[1],
    //         lng: quake.geometry.coordinates[0]
    //       }}
    //     />
    //   )
    // )

    return (
      <div className="mapContainer">
	      <Map
	        google={this.props.google}
	        initialCenter={{
		        lat: 39.7392358,
		        lng: -104.990251
	      }}
	      style={{
	      	width: '73%',
	      	 height: '80%'
	      }}

	      zoom={7}
	      
	      onClick={this.onMapClicked}>

      			{}

          

     	 </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBZ085JAQDlqT_OTqn7dp8_yD7LLBHwwJQ')

})(MapContainer)
