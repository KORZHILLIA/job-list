import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './jobDetailedContainer.module.css';

const JobDetailedContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

JobDetailedContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(JobDetailedContainer);
