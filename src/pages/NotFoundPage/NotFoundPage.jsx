import { Link } from 'react-router-dom';
import styles from './notFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.warn}>This page is not found</p>
      <Link className={styles.back} to="/job-list">
        Back to main page
      </Link>
    </div>
  );
};

export default NotFoundPage;
