import React, { useEffect } from 'react';
import basket from '../../images/basket.png';
import OrderCSS from './Order.module.css';
import OrderReview from '../OrderReview/OrderReview.jsx';

const Order = ({ totalAmount, showReview, setShowReview }) => {
  useEffect(() => {
    if (showReview) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [showReview]);

  return (
    <>
      {showReview && <OrderReview setOpen={setShowReview} />}

      <div className={OrderCSS.orderContainer}>
        <button
          className={OrderCSS.basketBtn}
          onClick={() => {
            setShowReview(true);
          }}
        >
          <img srcSet={basket} alt="basket" />
        </button>

        <p className={OrderCSS.orderPrice}>{totalAmount}$</p>

        <button className={OrderCSS.orderBtn}>Order Now</button>
      </div>
    </>
  );
};

export default Order;
