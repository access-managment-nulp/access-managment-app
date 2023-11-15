import React from 'react';
import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/shared/navbar/navbar';
import SpecialitiesPage from './components/specialities-page/specialities';
import AccessesPage from './components/acesses-page/accesses';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SpecialitiesPage />
  },
  {
    path: '/accesses',
    element: <AccessesPage />
  },
])

function App() {
  return (
    <>
      <NavBar />
      <div className="container position-relative">
        <RouterProvider router={router}/>
      </div>
    </>
  );
}

export default App;
