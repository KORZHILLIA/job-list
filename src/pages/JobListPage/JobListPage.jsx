import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllJobs } from 'shared/api/jobs-api';
import { addJobs } from 'redux/jobs/jobs-actions';
import JobListContainer from 'shared/components/JobListContainer';
import JobsList from 'modules/JobsList';
import Spinner from 'shared/components/Spinner';

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const JobListPage = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const { jobs, loading, error } = state;

  useEffect(() => {
    const getJobs = async () => {
      setState(prevState => ({ ...prevState, loading: true }));
      try {
        const jobs = await fetchAllJobs();
        setState(prevState => ({ ...prevState, jobs, loading: false }));
        dispatch(addJobs(jobs));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    getJobs();
  }, [dispatch]);

  const isJobs = jobs.length > 0;
  return (
    <JobListContainer>
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      {isJobs && <JobsList items={jobs} />}
    </JobListContainer>
  );
};

export default JobListPage;
