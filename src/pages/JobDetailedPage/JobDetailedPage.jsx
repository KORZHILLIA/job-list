import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllJobs } from 'redux/jobs/jobs-selectors';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import JobDetailedContainer from 'shared/components/JobDetailedContainer';
import JobDetailed from 'modules/JobDetailed';
import PersonalActivity from 'modules/JobDetailed/PersonalActivity';
import ButtonApply from 'modules/JobDetailed/ButtonApply';
import styles from './jobDetailedPage.module.css';

const JobDetailedPage = () => {
  const { id } = useParams();
  const jobs = useSelector(getAllJobs);
  const job = useMemo(() => jobs.find(job => job.id === id), [id, jobs]);
  const { bigger1920px } = useBreakpoints();

  return (
    <JobDetailedContainer>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Job Details</h1>
        {bigger1920px && <PersonalActivity id={id} />}
      </div>
      {bigger1920px && <ButtonApply text="Apply now" type="button" />}
      <JobDetailed job={job} />
    </JobDetailedContainer>
  );
};

export default JobDetailedPage;
