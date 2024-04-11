import React from 'react';
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider } 
from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
 
// router
const router = createBrowserRouter(
  createRoutesFromElements(
    // Apply mainlayout(i.e kind of like template) as root route
    <Route path='/' element={<MainLayout />} >
      <Route path='/' element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
