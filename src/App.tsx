import React, { useEffect, useState } from 'react';
import './App.scss';
import {Route, Routes, useNavigate} from 'react-router-dom';
import NavBar from './components/shared/navbar/navbar';
import SpecialitiesPage from './components/specialities-page/specialities';
import AccessesPage from './components/acesses-page/accesses';
import LoginPage from './components/login-page/loginpage';
import WelcomePage from './components/welcome-page/welcome-page';
import MainModuleRedirectPage from './components/welcome-page/main-module-redirect-page/main-module-redirect-page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  const navigate = useNavigate();
  useEffect(() => {
      const isLoggedIn = localStorage.getItem('accessManagmentAppToken') !== null
      setIsLoggedIn(isLoggedIn);
  }, [])

  return (
    <>
      <img src="./images/medical.jpg" className="bgimgwelcome"></img>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container position-relative">
        <Routes>
              <>
                <Route path='/welcomepage' element={<WelcomePage />}  />
                <Route path='/redirectmodule' element={<MainModuleRedirectPage />} />
                <Route path='/specialities' element={<SpecialitiesPage />} />
                <Route path='/accesses' element={<AccessesPage />} />
              </>
            <Route path='/' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='*' element={<h1 className="center">Page not found or you do not have access</h1>}/>
        </Routes>
      </div>

    </>
  );
}

export default App;
