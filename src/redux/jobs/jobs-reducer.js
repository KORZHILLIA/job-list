import { createReducer } from '@reduxjs/toolkit';
import { addJobs } from './jobs-actions';

const jobsReducer = createReducer([], {
    [addJobs]: (store, {payload}) => [...store, ...payload],
});

export default jobsReducer;