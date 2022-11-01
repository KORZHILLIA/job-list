import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const JobListPage = lazy(() => import('./pages/JobListPage'));
const JobDetailedPage = lazy(() => import('./pages/JobDetailedPage'));

const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/job-list" element={<JobListPage />} />
        <Route path="/jobs/:id" element={<JobDetailedPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
