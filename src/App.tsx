import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/shared/navbar/navbar';
import SpecialitiesPage from './components/specialities-page/specialities';
import AccessesPage from './components/acesses-page/accesses';
import LoginPage from './components/login-page/loginpage';
import WelcomePage from './components/welcome-page/welcome-page';
import MainModuleRedirectPage from './components/welcome-page/main-module-redirect-page/main-module-redirect-page';



function App() {

const[isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

{/* <BrowserRouter>
<Routes>
  <Route path = '/redirectmodule' element = {<MainModuleRedirectPage/>}/>
  <Route path = '/welcomepage' element = {<WelcomePage/>}/>
  <Route path = '/' element = {<LoginPage setIsLoggedIn={setIsLoggedIn}/>}/>
  <Route path = '/specialities' element = {<SpecialitiesPage/>}/>
  <Route path = '/accesses' element = {<AccessesPage/>}/>
</Routes>
</BrowserRouter> */}

const router = createBrowserRouter([
  {
    path: '/redirectmodule',
    element: <MainModuleRedirectPage/>
  },
  {
    path: '/welcomepage',
    element: <WelcomePage/>
  },
  {
    path: '/',
    element: <LoginPage setIsLoggedIn={setIsLoggedIn}/>
  },
  {
    path: '/specialities',
    element: <SpecialitiesPage />
  },
  {
    path: '/accesses',
    element: <AccessesPage />
  },
])

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <div className="container position-relative">
        <RouterProvider router={router}/>
      </div>
    </>
  );
}

export default App;
