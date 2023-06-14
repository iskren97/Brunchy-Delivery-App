import React, { useEffect, useState } from 'react';
import OrderReviewCSS from './OrderReview.module.css';
import ItemCSS from '../Item/Item.module.css';
import { useBasket } from '../../context/basketContext';

const OrderReview = ({ totalAmount }) => {
  const { getBasketItems } = useBasket();
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    setBasketItems(getBasketItems());
  }, []);

  return (
    <div className={OrderReviewCSS.container}>
      {basketItems.map((basketItem) => {
        return (
          <div className={OrderReviewCSS.innerContainer}>
            <p>
              {basketItem.name} - {basketItem.quantity}
            </p>

            <p>
              <span className={ItemCSS.dollarSign}>$ </span>
              {(basketItem.price * basketItem.quantity).toFixed(2)}
            </p>
          </div>
        );
      })}

      <hr className={OrderReviewCSS.divider} />

      <div className={OrderReviewCSS.innerContainer}>
        <p>Total</p>

        <p>
          <span className={ItemCSS.dollarSign}>$ </span>
          {totalAmount}
        </p>
      </div>
    </div>
  );
};

export default OrderReview;
