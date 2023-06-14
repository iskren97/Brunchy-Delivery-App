import { createContext, useContext, useState } from 'react';

const BasketContext = createContext({});

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basketAmount, setBasketAmount] = useState(0);

  const increaseBasketAmount = (price) => {
    setBasketAmount((currAmount) => (currAmount += Number(price)));
  };

  const getBasketTotalAmount = () => basketAmount.toFixed(2);

  return (
    <BasketContext.Provider
      value={{ getBasketTotalAmount, increaseBasketAmount }}
    >
      {children}
    </BasketContext.Provider>
  );
};
