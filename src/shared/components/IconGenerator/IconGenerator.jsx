import { memo } from 'react';
import PropTypes from 'prop-types';
import SVGCreator from '../SVGCreator';

const IconGenerator = ({
  number,
  iconName,
  width,
  height,
  iconStyle,
  listStyle,
}) => {
  const elements = Array(number)
    .fill(iconName)
    .map((iconName, idx) => (
      <li className={iconStyle} key={`${iconName}-${idx}`}>
        <SVGCreator iconName={iconName} width={width} height={height} />
      </li>
    ));

  return <ul className={listStyle}>{elements}</ul>;
};

IconGenerator.defaultProps = {
  number: 2,
};

IconGenerator.propTypes = {
  number: PropTypes.number.isRequired,
  iconName: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  iconStyle: PropTypes.string.isRequired,
  listStyle: PropTypes.string.isRequired,
};

export default memo(IconGenerator);
