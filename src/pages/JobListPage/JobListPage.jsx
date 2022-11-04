import { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllJobs } from 'shared/api/jobs-api';
import { addJobs } from 'redux/jobs/jobs-actions';
import JobListContainer from 'shared/components/JobListContainer';
import JobsList from 'modules/JobsList';
import Pagination from 'modules/Pagination';
import Spinner from 'shared/components/Spinner';
import styles from './jobListPage.module.css';

const initialFetchState = {
  jobs: [],
  loading: false,
  error: null,
};

const initialPaginationState = {
  portionSize: 2,
  currentPortion: 0,
  totalPortions: 0,
};

const JobListPage = () => {
  const [state, setState] = useState(initialFetchState);
  const [pagination, setPagination] = useState(initialPaginationState);
  const { jobs, loading, error } = state;
  const { portionSize, currentPortion, totalPortions } = pagination;
  const dispatch = useDispatch();

  useEffect(() => {
    const getJobs = async () => {
      setState(prevState => ({ ...prevState, loading: true }));
      try {
        const jobs = await fetchAllJobs();
        setState(prevState => ({ ...prevState, jobs, loading: false }));
        dispatch(addJobs(jobs));
        const length = jobs.length;
        const totalPortions = Math.ceil(length / portionSize);
        setPagination(prevState => ({ ...prevState, totalPortions }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    getJobs();
  }, [dispatch, portionSize]);

  const isJobs = jobs.length > 0;
  const currentJobs = useMemo(
    () =>
      jobs.slice(
        currentPortion * portionSize,
        portionSize * (currentPortion + 1)
      ),
    [currentPortion, jobs, portionSize]
  );

  const setCurrentPortion = currentPortion =>
    setPagination(prevState => ({ ...prevState, currentPortion }));

  return (
    <JobListContainer>
      {loading && <Spinner />}
      {error && <p className={styles.error}>{error}</p>}
      {!error && isJobs && <JobsList items={currentJobs} />}
      {!error && isJobs && (
        <Pagination total={totalPortions} onClick={setCurrentPortion} />
      )}
    </JobListContainer>
  );
};

export default JobListPage;
