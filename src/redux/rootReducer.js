import { combineReducers } from '@reduxjs/toolkit';
import jobsReducer from './jobs/jobs-reducer';

const rootReducer = combineReducers({
  jobs: jobsReducer,
});

export default rootReducer;
