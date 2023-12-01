import React, { useEffect, useState } from 'react';
import './App.scss';
import {Route, Routes } from 'react-router-dom';
import NavBar from './components/shared/navbar/navbar';
import SpecialitiesPage from './components/specialities-page/specialities';
import AccessesPage from './components/acesses-page/accesses';
import LoginPage from './components/login-page/loginpage';
import WelcomePage from './components/welcome-page/welcome-page';
import MainModuleRedirectPage from './components/welcome-page/main-module-redirect-page/main-module-redirect-page';



function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(sessionStorage.getItem('isAutorized') === 'true');

  useEffect(() => {
    sessionStorage.setItem('isAutorized', isLoggedIn.toString());
  }, [isLoggedIn])

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container position-relative">
        <Routes>
            {isLoggedIn &&
              <>
                <Route path='/welcomepage' element={<WelcomePage />} />
                <Route path='/redirectmodule' element={<MainModuleRedirectPage />} />
                <Route path='/specialities' element={<SpecialitiesPage />} />
                <Route path='/accesses' element={<AccessesPage />} />
              </>
            }
            <Route path='/' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
