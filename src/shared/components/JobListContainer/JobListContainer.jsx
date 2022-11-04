import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './jobListContainer.module.css';

const JobListContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

JobListContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(JobListContainer);
