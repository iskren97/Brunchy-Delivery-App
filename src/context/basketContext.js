import { createContext, useContext, useState } from 'react';
import data from '../data/data.json';

const BasketContext = createContext({});

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basketAmount, setBasketAmount] = useState(0);
  const [basketItems, setBasketItems] = useState([]);

  const increaseBasketAmount = (price) => {
    setBasketAmount((currAmount) => (currAmount += Number(price)));
  };

  const getBasketTotalAmount = () => basketAmount.toFixed(2);

  const increaseBasketQuantity = (id) => {
    setBasketItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getBasketItems = () => {
    return data.items
      .map((item) => {
        return basketItems.map((basketItem) =>
          item.id === basketItem.id
            ? { ...item, quantity: basketItem.quantity }
            : null
        );
      })
      .flat()
      .filter((item) => item);
  };

  return (
    <BasketContext.Provider
      value={{
        getBasketTotalAmount,
        increaseBasketAmount,
        increaseBasketQuantity,
        getBasketItems,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
