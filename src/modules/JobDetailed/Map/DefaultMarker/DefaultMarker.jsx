import PropTypes from 'prop-types';
import { Marker } from '@react-google-maps/api';

const DefaultMarker = ({ position }) => {
  return <Marker position={position} icon={{ url: './location.svg' }} />;
};

Marker.defaultProps = {
  position: { lat: 0, lng: 0 },
};

Marker.propTypes = {
  position: PropTypes.exact({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
};

export default DefaultMarker;
