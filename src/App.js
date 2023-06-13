import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BasketProvider } from './context/basketContext';

const App = () => {
  return (
    <BasketProvider>
      <Header />
      <Main />
    </BasketProvider>
  );
};

export default App;
