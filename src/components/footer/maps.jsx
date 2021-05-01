import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker' 

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 31.5002561,
      lng: 74.3228894
    },
    zoom: 15
  };
 
  render() {
    return (
      <div style={{ height: '25vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={31.5002561}
            lng={74.3228894}
            name="Unique Trading Soul
            Office# 202/204, 2nd Floor, Garden Tower
            47-Babar Block, New Garden Town, Lahore."
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
