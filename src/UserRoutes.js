import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from 'shared/components/Spinner';

const JobListPage = lazy(() => import('./pages/JobListPage'));
const JobDetailedPage = lazy(() => import('./pages/JobDetailedPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/job-list" element={<JobListPage />} />
        <Route path="/jobs/:id" element={<JobDetailedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
