import styles from './jobDetailedContainer.module.css';

const JobDetailedContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default JobDetailedContainer;
