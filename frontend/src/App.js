import React from 'react';
import Routes from './routes'
import GlobalStyled from './styles/global';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
    <GlobalStyled/>
    <Routes/>
    <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
