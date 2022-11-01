import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllJobs } from 'redux/jobs/jobs-selectors';
import JobDetailedContainer from 'shared/components/JobDetailedContainer';
import styles from './jobDetailedPage.module.css';

const JobDetailedPage = () => {
  const { id } = useParams();
  const jobs = useSelector(getAllJobs);
  const job = useMemo(() => jobs.find(job => job.id === id), [id, jobs]);

  return (
    <JobDetailedContainer>
      <h1 className={styles.header}>Job Details</h1>
    </JobDetailedContainer>
  );
};

export default JobDetailedPage;
