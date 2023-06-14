import React from 'react';
import Main from './components/Main/Main';
import { BasketProvider } from './context/basketContext';

const App = () => {
  return (
    <BasketProvider>
      <Main />
    </BasketProvider>
  );
};

export default App;
