import React from 'react';
import OrderReviewCSS from './OrderReview.module.css';
import ItemCSS from '../Item/Item.module.css';

const OrderReview = ({ totalAmount }) => {
  return (
    <div className={OrderReviewCSS.container}>
      <div className={OrderReviewCSS.innerContainer}>
        <p>Test</p>

        <p>
          <span className={ItemCSS.dollarSign}>$ </span>
          Price
        </p>
      </div>

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
