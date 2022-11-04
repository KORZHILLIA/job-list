import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './buttonApply.module.css';

const ButtonApply = ({ text, type }) => {
  return (
    <button className={styles.btn} type={type}>
      {text}
    </button>
  );
};

ButtonApply.defaultProps = {
  type: 'button',
};

ButtonApply.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default memo(ButtonApply);
