import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './routes';
import GlobalSyle from './styles/global';

function App() {
  return (
    <>
      <AppProvider>
        <Router> 
          <Routes />       
        </Router>
      </AppProvider>
      
      <GlobalSyle />
      
    </>
  );
}

export default App;
