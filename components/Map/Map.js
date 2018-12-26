import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';
import { GOOGLE_API_KEY, OFFICE_COORDINATES } from '../../config';
import classes from './Map.scss';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        className={classes.map}
        google={this.props.google}
        zoom={15}
        initialCenter={{
          lat: OFFICE_COORDINATES.lat,
          lng: OFFICE_COORDINATES.lng
        }}>
        <Marker
          title={"VG Blog's Office."}
          name='Office'
          position={{
            lat: OFFICE_COORDINATES.lat,
            lng: OFFICE_COORDINATES.lng
          }}
        />
      </Map>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(MapContainer);