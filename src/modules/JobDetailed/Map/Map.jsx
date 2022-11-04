import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Spinner from 'shared/components/Spinner';
import DefaultMarker from './DefaultMarker';
import defaultOptions from './defaultOptions';

const Map = ({ center }) => {
  const GOOGLE_KEY = 'AIzaSyA0Wd9ki4G0dUSCfDMgC2rqSA6WPi6SwQk';
  const containerStyle = {
    width: '100%',
    height: '218px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_KEY,
  });
  // eslint-disable-next-line
  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    map => {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [center]
  );

  const onUnmount = useCallback(() => setMap(null), []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaultOptions}
    >
      <DefaultMarker position={center} />
    </GoogleMap>
  ) : (
    <Spinner />
  );
};

Map.defaultProps = {
  center: { lat: 0, lng: 0 },
};

Map.propTypes = {
  center: PropTypes.exact({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
};

export default Map;
