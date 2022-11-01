import styles from './jobListContainer.module.css';

const JobListContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default JobListContainer;
