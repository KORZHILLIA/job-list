import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './benefits.module.css';

const Benefits = ({ items }) => {
  const elements = items.map((item, idx) => (
    <li className={styles.item} key={`${item}-${idx}`}>
      {item}
    </li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

Benefits.defaultProps = {
  items: [],
};

Benefits.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default memo(Benefits);
