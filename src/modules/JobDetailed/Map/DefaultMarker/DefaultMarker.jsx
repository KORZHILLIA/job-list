import { Marker } from '@react-google-maps/api';

const DefaultMarker = ({ position }) => {
  return <Marker position={position} icon={{ url: './location.svg' }} />;
};

export default DefaultMarker;
